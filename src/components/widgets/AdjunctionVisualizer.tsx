import React, { useState, useEffect } from 'react';
interface Point { x: number; y: number }

interface CategoryObject {
  id: string;
  label: string;
  position: Point;
  category: 'C' | 'D';
}

interface Arrow {
  id: string;
  from: string;
  to: string;
  label: string;
  type: 'functor-F' | 'functor-G' | 'unit' | 'counit' | 'composed';
  curve?: number;
}

interface AnimationFrame {
  arrowId: string;
  value: string;
  description: string;
}

interface Demo {
  name: string;
  title: string;
  frames: AnimationFrame[];
  codeExample: string;
  practicalNote: string;
}

const AdjunctionVisualizer: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string>('unit');
  const [frameIndex, setFrameIndex] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCode, setShowCode] = useState(true);

  // Scaled positions for better visibility
  // Category C: x = 50-250, Category D: x = 400-600
  const objects: CategoryObject[] = [
    { id: 'A', label: 'A', position: { x: 150, y: 200 }, category: 'C' },
    { id: 'GFA', label: 'G(F(A))', position: { x: 150, y: 420 }, category: 'C' },
    { id: 'FA', label: 'F(A)', position: { x: 500, y: 200 }, category: 'D' },
    { id: 'FGFA', label: 'F(G(F(A)))', position: { x: 500, y: 420 }, category: 'D' },
    { id: 'B', label: 'B', position: { x: 500, y: 310 }, category: 'D' },
    { id: 'GB', label: 'G(B)', position: { x: 150, y: 310 }, category: 'C' },
    { id: 'FGB', label: 'F(G(B))', position: { x: 450, y: 420 }, category: 'D' },
  ];

  const arrows: Arrow[] = [
    { id: 'F-A', from: 'A', to: 'FA', label: 'F', type: 'functor-F' },
    { id: 'G-FA', from: 'FA', to: 'GFA', label: 'G', type: 'functor-G', curve: -100 },
    { id: 'unit', from: 'A', to: 'GFA', label: 'η (unit)', type: 'unit' },
    { id: 'F-GFA', from: 'GFA', to: 'FGFA', label: 'F', type: 'functor-F' },
    { id: 'counit-FGFA', from: 'FGFA', to: 'FA', label: 'ε', type: 'counit', curve: 70 },
    { id: 'G-B', from: 'B', to: 'GB', label: 'G', type: 'functor-G' },
    { id: 'F-GB', from: 'GB', to: 'FGB', label: 'F', type: 'functor-F' },
    { id: 'counit-B', from: 'FGB', to: 'B', label: 'ε (counit)', type: 'counit' },
  ];

  const demos: Demo[] = [
    {
      name: 'unit',
      title: 'Unit (pure)',
      frames: [
        { arrowId: 'unit', value: '42', description: 'The unit η lifts a value into the monad M = G∘F' }
      ],
      codeExample: `// Unit is "pure" or "return"
const pure = <A>(a: A): Promise<A> =>
  Promise.resolve(a);

// For Array:
const pure = <A>(a: A): A[] => [a];`,
      practicalNote: 'Every Promise.resolve(x) or [x] is the unit—the entry point into the monad.'
    },
    {
      name: 'counit',
      title: 'Counit (extract)',
      frames: [
        { arrowId: 'counit-B', value: 'data', description: 'The counit ε extracts from F(G(B)) back to B' }
      ],
      codeExample: `// Counit "extracts" or "runs"
// For Promise, it's conceptually await
// For Array with monoid, it's reduce`,
      practicalNote: 'The counit is the "elimination" operation—what await does for Promises.'
    },
    {
      name: 'fmap',
      title: 'Functor Map',
      frames: [
        { arrowId: 'F-A', value: '42', description: 'Apply F to lift into category D' },
        { arrowId: 'G-FA', value: 'F(42)', description: 'Apply G to bring back—this is fmap' }
      ],
      codeExample: `// fmap for Promise:
const fmap = <A, B>(
  f: (a: A) => B,
  pa: Promise<A>
): Promise<B> => pa.then(f);

// For Array:
arr.map(f)`,
      practicalNote: 'Array.map, Promise.then (non-Promise return)—all fmap.'
    },
    {
      name: 'flatMap',
      title: 'FlatMap (bind)',
      frames: [
        { arrowId: 'unit', value: '5', description: 'Start with a value, lift with unit' },
        { arrowId: 'F-GFA', value: 'M(5)', description: 'Apply f: A → M(B), getting M(M(B))' },
        { arrowId: 'counit-FGFA', value: 'nested', description: 'Flatten with counit internally' }
      ],
      codeExample: `// flatMap = fmap then join
promise.then(x => fetchMore(x))

// For Array:
[1, 2].flatMap(x => [x, x * 10])
// → [1, 10, 2, 20]`,
      practicalNote: 'Promise.then(), Array.flatMap()—THE monad operation for sequencing.'
    },
    {
      name: 'triangle',
      title: 'Triangle Laws',
      frames: [
        { arrowId: 'unit', value: 'a', description: 'Start at A, apply unit' },
        { arrowId: 'F-GFA', value: 'G(F(a))', description: 'Apply F to get F(G(F(A)))' },
        { arrowId: 'counit-FGFA', value: 'round-trip', description: 'Counit brings us back to F(A)—identity!' }
      ],
      codeExample: `// Triangle identities = Monad Laws
// 1. pure(a).flatMap(f) === f(a)
// 2. m.flatMap(pure) === m
// 3. Associativity of flatMap`,
      practicalNote: 'These laws guarantee safe refactoring—not convention, mathematics.'
    }
  ];

  const currentDemo = demos.find(d => d.name === activeDemo) || demos[0];
  const currentFrame = currentDemo.frames[frameIndex];

  useEffect(() => {
    if (!isPlaying) return;

    const duration = 1500;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setAnimationProgress(progress);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        if (frameIndex < currentDemo.frames.length - 1) {
          setFrameIndex(prev => prev + 1);
          setAnimationProgress(0);
        } else {
          setIsPlaying(false);
        }
      }
    };

    requestAnimationFrame(tick);
  }, [isPlaying, frameIndex, currentDemo.frames.length]);

  useEffect(() => {
    setFrameIndex(0);
    setAnimationProgress(0);
    setIsPlaying(false);
  }, [activeDemo]);

  const getObject = (id: string) => objects.find(o => o.id === id);

  const getArrowPath = (arrow: Arrow): string => {
    const from = getObject(arrow.from);
    const to = getObject(arrow.to);
    if (!from || !to) return '';

    if (arrow.curve) {
      const midX = (from.position.x + to.position.x) / 2 + arrow.curve;
      const midY = (from.position.y + to.position.y) / 2;
      return `M ${from.position.x} ${from.position.y} Q ${midX} ${midY} ${to.position.x} ${to.position.y}`;
    }

    return `M ${from.position.x} ${from.position.y} L ${to.position.x} ${to.position.y}`;
  };

  const getPointOnPath = (arrow: Arrow, t: number): Point => {
    const from = getObject(arrow.from);
    const to = getObject(arrow.to);
    if (!from || !to) return { x: 0, y: 0 };

    if (arrow.curve) {
      const midX = (from.position.x + to.position.x) / 2 + arrow.curve;
      const midY = (from.position.y + to.position.y) / 2;
      const x = (1-t)*(1-t)*from.position.x + 2*(1-t)*t*midX + t*t*to.position.x;
      const y = (1-t)*(1-t)*from.position.y + 2*(1-t)*t*midY + t*t*to.position.y;
      return { x, y };
    }

    return {
      x: from.position.x + (to.position.x - from.position.x) * t,
      y: from.position.y + (to.position.y - from.position.y) * t
    };
  };

  const getArrowColor = (type: Arrow['type'], isActive: boolean) => {
    const colors: Record<Arrow['type'], string> = {
      'functor-F': isActive ? '#818cf8' : '#4f46e5',
      'functor-G': isActive ? '#a78bfa' : '#7c3aed',
      'unit': isActive ? '#34d399' : '#059669',
      'counit': isActive ? '#fbbf24' : '#d97706',
      'composed': isActive ? '#f472b6' : '#db2777'
    };
    return colors[type];
  };

  const playDemo = () => {
    setFrameIndex(0);
    setAnimationProgress(0);
    setIsPlaying(true);
  };

  const relevantArrowIds = currentDemo.frames.map(f => f.arrowId);
  const visibleArrows = arrows.filter(a => relevantArrowIds.includes(a.id));
  const visibleObjectIds = new Set<string>();
  visibleArrows.forEach(a => {
    visibleObjectIds.add(a.from);
    visibleObjectIds.add(a.to);
  });
  const visibleObjects = objects.filter(o => visibleObjectIds.has(o.id));

  return (
    <div className="my-8 rounded-xl bg-slate-800/50 p-6 backdrop-blur border border-slate-700">
      <h3 className="text-2xl font-bold text-center mb-6 text-slate-200">
        Adjunction & Monad Visualizer
      </h3>

      {/* Demo selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {demos.map(demo => (
          <button
            key={demo.name}
            onClick={() => setActiveDemo(demo.name)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeDemo === demo.name
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {demo.title}
          </button>
        ))}
      </div>

      {/* Diagram - Full width on top */}
      <div className="bg-slate-900/50 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-base text-slate-400 font-medium">Category Diagram</span>
          <div className="flex gap-2">
            <button
              onClick={() => setFrameIndex(Math.max(0, frameIndex - 1))}
              disabled={frameIndex === 0}
              className="px-3 py-1.5 rounded bg-slate-700 disabled:opacity-40 hover:bg-slate-600 text-sm font-medium"
            >
              ← Prev
            </button>
            <button
              onClick={playDemo}
              disabled={isPlaying}
              className="px-4 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-sm font-medium"
            >
              ▶ Play
            </button>
            <button
              onClick={() => setFrameIndex(Math.min(currentDemo.frames.length - 1, frameIndex + 1))}
              disabled={frameIndex === currentDemo.frames.length - 1}
              className="px-3 py-1.5 rounded bg-slate-700 disabled:opacity-40 hover:bg-slate-600 text-sm font-medium"
            >
              Next →
            </button>
          </div>
        </div>

        <svg width="100%" viewBox="0 0 650 520" className="bg-slate-900 rounded-lg" style={{ minHeight: '400px' }}>
          {/* Category backgrounds */}
          <rect x="50" y="100" width="200" height="400" rx="16" fill="#1e293b" opacity="0.7" />
          <rect x="400" y="100" width="200" height="400" rx="16" fill="#1e293b" opacity="0.7" />

          <text x="150" y="140" textAnchor="middle" fill="#64748b" fontSize="18" fontWeight="600">
            Category C
          </text>
          <text x="500" y="140" textAnchor="middle" fill="#64748b" fontSize="18" fontWeight="600">
            Category D
          </text>

          {/* Adjunction notation */}
          <text x="325" y="180" textAnchor="middle" fill="#818cf8" fontSize="16">F →</text>
          <text x="325" y="205" textAnchor="middle" fill="#a78bfa" fontSize="16">← G</text>
          <text x="325" y="232" textAnchor="middle" fill="#64748b" fontSize="14">F ⊣ G</text>

          {/* Arrow markers */}
          <defs>
            {(['functor-F', 'functor-G', 'unit', 'counit', 'composed'] as const).map(type => (
              <marker
                key={type}
                id={`arrow-${type}`}
                markerWidth="12"
                markerHeight="10"
                refX="11"
                refY="5"
                orient="auto"
              >
                <path
                  d="M0,0 L12,5 L0,10 Z"
                  fill={getArrowColor(type, false)}
                />
              </marker>
            ))}
          </defs>

          {/* Arrows */}
          {visibleArrows.map(arrow => {
            const isCurrentArrow = currentFrame?.arrowId === arrow.id;
            const isPastArrow = currentDemo.frames
              .slice(0, frameIndex)
              .some(f => f.arrowId === arrow.id);
            const opacity = isCurrentArrow ? 1 : isPastArrow ? 0.7 : 0.3;

            return (
              <g key={arrow.id}>
                <path
                  d={getArrowPath(arrow)}
                  stroke={getArrowColor(arrow.type, isCurrentArrow)}
                  strokeWidth={isCurrentArrow ? 4 : 3}
                  fill="none"
                  opacity={opacity}
                  markerEnd={`url(#arrow-${arrow.type})`}
                  className="transition-all duration-300"
                />
                {(() => {
                  const midPoint = getPointOnPath(arrow, 0.5);
                  const offset = arrow.curve ? arrow.curve / 2.5 : 18;
                  return (
                    <text
                      x={midPoint.x + offset}
                      y={midPoint.y - 10}
                      fill={getArrowColor(arrow.type, isCurrentArrow)}
                      fontSize="14"
                      fontWeight="600"
                      opacity={opacity}
                    >
                      {arrow.label}
                    </text>
                  );
                })()}
              </g>
            );
          })}

          {/* Objects */}
          {visibleObjects.map(obj => {
            const isInvolved = visibleArrows.some(
              a => (a.from === obj.id || a.to === obj.id) &&
                   currentDemo.frames.slice(0, frameIndex + 1).some(f => f.arrowId === a.id)
            );

            return (
              <g key={obj.id}>
                <circle
                  cx={obj.position.x}
                  cy={obj.position.y}
                  r={36}
                  fill={obj.category === 'C' ? '#3b82f6' : '#8b5cf6'}
                  opacity={isInvolved ? 1 : 0.5}
                  className="transition-all duration-300"
                />
                <circle
                  cx={obj.position.x}
                  cy={obj.position.y}
                  r={36}
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  opacity={isInvolved ? 0.8 : 0.3}
                />
                <text
                  x={obj.position.x}
                  y={obj.position.y + 5}
                  textAnchor="middle"
                  fill="white"
                  fontSize={obj.label.length > 6 ? 11 : obj.label.length > 3 ? 14 : 16}
                  fontWeight="700"
                >
                  {obj.label}
                </text>
              </g>
            );
          })}

          {/* Animated particle */}
          {isPlaying && currentFrame && (() => {
            const arrow = arrows.find(a => a.id === currentFrame.arrowId);
            if (!arrow) return null;
            const point = getPointOnPath(arrow, animationProgress);

            return (
              <g>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="18"
                  fill="#fbbf24"
                  stroke="#fff"
                  strokeWidth="2"
                  className="drop-shadow-lg"
                />
                <text
                  x={point.x}
                  y={point.y + 5}
                  textAnchor="middle"
                  fill="#000"
                  fontSize="11"
                  fontWeight="bold"
                >
                  {currentFrame.value}
                </text>
              </g>
            );
          })()}
        </svg>

        {/* Step description */}
        <div className="mt-4 p-4 bg-slate-700/50 rounded-lg">
          <div className="text-sm text-slate-400 mb-2">
            Step {frameIndex + 1} of {currentDemo.frames.length}
          </div>
          <div className="text-base text-slate-200 font-medium">
            {currentFrame?.description}
          </div>
        </div>
      </div>

      {/* Code and info panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Code panel */}
        <div className="bg-slate-900/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-base font-medium text-slate-300">TypeScript</span>
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-sm text-slate-400 hover:text-white"
            >
              {showCode ? 'Hide' : 'Show'}
            </button>
          </div>
          {showCode && (
            <pre className="bg-slate-900 rounded p-4 overflow-x-auto text-sm">
              <code className="text-slate-300 whitespace-pre-wrap font-mono">
                {currentDemo.codeExample}
              </code>
            </pre>
          )}
        </div>

        {/* Info panels */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg p-4 border border-indigo-500/20">
            <div className="text-sm font-medium text-indigo-300 mb-2">Practical Note</div>
            <p className="text-base text-slate-300">
              {currentDemo.practicalNote}
            </p>
          </div>

          {/* Legend */}
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="text-sm font-medium text-slate-400 mb-3">Legend</div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-indigo-500 rounded"></div>
                <span className="text-slate-400">F (left adjoint)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-purple-500 rounded"></div>
                <span className="text-slate-400">G (right adjoint)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-emerald-500 rounded"></div>
                <span className="text-slate-400">η (unit/pure)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-amber-500 rounded"></div>
                <span className="text-slate-400">ε (counit)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjunctionVisualizer;
