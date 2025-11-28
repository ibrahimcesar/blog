import React from 'react';

/**
 * String Diagram Components for Category Theory
 *
 * String diagrams are a graphical language for representing morphisms in monoidal categories.
 * They read top-to-bottom (or left-to-right), with:
 * - Wires (lines) representing objects/types
 * - Boxes/nodes representing morphisms/natural transformations
 * - Composition is vertical stacking
 * - Tensor product is horizontal juxtaposition
 *
 * References:
 * - "Category Theory Using String Diagrams" by Dan Marsden (arXiv:1401.7220)
 * - "An Introduction to String Diagrams for Computer Scientists" (Cambridge)
 */

// Colors that work on both light and dark backgrounds
const colors = {
  wire: '#6366f1',       // indigo-500
  wireSecondary: '#8b5cf6', // violet-500
  wireTertiary: '#ec4899',  // pink-500
  node: '#312e81',       // indigo-900
  nodeFill: '#eef2ff',   // indigo-50
  text: '#1e1b4b',       // indigo-950
  regionA: '#dbeafe',    // blue-100
  regionB: '#fce7f3',    // pink-100
  regionC: '#d1fae5',    // green-100
};

interface StringDiagramProps {
  width?: number;
  height?: number;
  title?: string;
  children: React.ReactNode;
}

const StringDiagram: React.FC<StringDiagramProps> = ({
  width = 300,
  height = 200,
  title,
  children,
}) => {
  return (
    <figure style={{ margin: '2rem 0' }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height="auto"
        style={{
          maxWidth: `${width}px`,
          margin: '0 auto',
          display: 'block',
          background: 'transparent'
        }}
      >
        {children}
      </svg>
      {title && (
        <figcaption style={{
          textAlign: 'center',
          fontSize: '0.875rem',
          color: '#6b7280',
          marginTop: '0.5rem',
          fontStyle: 'italic'
        }}>
          {title}
        </figcaption>
      )}
    </figure>
  );
};

// Wire component - represents an object/type flowing through
const Wire: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  label?: string;
  labelPosition?: 'start' | 'middle' | 'end';
  dashed?: boolean;
}> = ({ x1, y1, x2, y2, color = colors.wire, label, labelPosition = 'middle', dashed }) => {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  let labelX = midX;
  let labelY = midY;

  if (labelPosition === 'start') {
    labelX = x1;
    labelY = y1 - 10;
  } else if (labelPosition === 'end') {
    labelX = x2;
    labelY = y2 + 15;
  }

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={2.5}
        strokeDasharray={dashed ? '5,3' : undefined}
      />
      {label && (
        <text
          x={labelX + 12}
          y={labelY}
          fill={colors.text}
          fontSize="13"
          fontFamily="serif"
          fontStyle="italic"
        >
          {label}
        </text>
      )}
    </g>
  );
};

// Node component - represents a morphism/natural transformation
const Node: React.FC<{
  x: number;
  y: number;
  label: string;
  shape?: 'box' | 'dot' | 'triangle';
  size?: number;
}> = ({ x, y, label, shape = 'box', size = 24 }) => {
  if (shape === 'dot') {
    return (
      <g>
        <circle
          cx={x}
          cy={y}
          r={size / 3}
          fill={colors.node}
        />
        <text
          x={x + size / 2 + 5}
          y={y + 5}
          fill={colors.text}
          fontSize="14"
          fontFamily="serif"
          fontStyle="italic"
        >
          {label}
        </text>
      </g>
    );
  }

  if (shape === 'triangle') {
    const h = size;
    const w = size * 0.8;
    return (
      <g>
        <polygon
          points={`${x},${y - h/2} ${x - w/2},${y + h/2} ${x + w/2},${y + h/2}`}
          fill={colors.nodeFill}
          stroke={colors.node}
          strokeWidth={2}
        />
        <text
          x={x}
          y={y + 5}
          fill={colors.text}
          fontSize="12"
          fontFamily="serif"
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    );
  }

  // Default: box
  return (
    <g>
      <rect
        x={x - size}
        y={y - size / 2}
        width={size * 2}
        height={size}
        rx={4}
        fill={colors.nodeFill}
        stroke={colors.node}
        strokeWidth={2}
      />
      <text
        x={x}
        y={y + 5}
        fill={colors.text}
        fontSize="14"
        fontFamily="serif"
        fontWeight="500"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
};

// Colored region for functor domains
const Region: React.FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  label?: string;
}> = ({ x, y, width, height, color, label }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={color}
      opacity={0.4}
    />
    {label && (
      <text
        x={x + width / 2}
        y={y + 18}
        fill={colors.text}
        fontSize="12"
        fontFamily="sans-serif"
        fontWeight="600"
        textAnchor="middle"
      >
        {label}
      </text>
    )}
  </g>
);

// ============================================================
// Pre-built String Diagrams
// ============================================================

/**
 * Composition String Diagram
 * Shows f: A → B and g: B → C composing to g∘f: A → C
 */
export const CompositionDiagram: React.FC = () => (
  <StringDiagram width={280} height={200} title="Composition: g ∘ f">
    {/* Input wire A */}
    <Wire x1={140} y1={20} x2={140} y2={60} label="A" labelPosition="start" />

    {/* First morphism f */}
    <Node x={140} y={75} label="f" />

    {/* Wire B between morphisms */}
    <Wire x1={140} y1={90} x2={140} y2={120} label="B" />

    {/* Second morphism g */}
    <Node x={140} y={135} label="g" />

    {/* Output wire C */}
    <Wire x1={140} y1={150} x2={140} y2={185} label="C" labelPosition="end" />
  </StringDiagram>
);

/**
 * Functor String Diagram
 * Shows F mapping between categories (colored regions)
 */
export const FunctorDiagram: React.FC = () => (
  <StringDiagram width={320} height={220} title="Functor F: C → D preserves structure">
    {/* Category regions */}
    <Region x={0} y={0} width={160} height={220} color={colors.regionA} label="Category C" />
    <Region x={160} y={0} width={160} height={220} color={colors.regionB} label="Category D" />

    {/* Left side: morphism f in C */}
    <Wire x1={80} y1={40} x2={80} y2={80} label="A" labelPosition="start" />
    <Node x={80} y={110} label="f" />
    <Wire x1={80} y1={140} x2={80} y2={190} label="B" labelPosition="end" />

    {/* Right side: F(f) in D */}
    <Wire x1={240} y1={40} x2={240} y2={80} color={colors.wireSecondary} label="F(A)" labelPosition="start" />
    <Node x={240} y={110} label="F(f)" />
    <Wire x1={240} y1={140} x2={240} y2={190} color={colors.wireSecondary} label="F(B)" labelPosition="end" />

    {/* Functor boundary line */}
    <line x1={160} y1={0} x2={160} y2={220} stroke={colors.node} strokeWidth={3} strokeDasharray="8,4" />
    <text x={160} y={115} fill={colors.text} fontSize="16" fontWeight="bold" textAnchor="middle">F</text>
  </StringDiagram>
);

/**
 * Natural Transformation String Diagram
 * Shows α: F ⇒ G as a node between functor wires
 */
export const NaturalTransformationDiagram: React.FC = () => (
  <StringDiagram width={200} height={220} title="Natural transformation α: F ⇒ G">
    {/* F wire coming in */}
    <Wire x1={100} y1={20} x2={100} y2={80} color={colors.wire} label="F(A)" labelPosition="start" />

    {/* Natural transformation node */}
    <Node x={100} y={110} label="αₐ" shape="dot" size={30} />

    {/* G wire going out */}
    <Wire x1={100} y1={140} x2={100} y2={200} color={colors.wireSecondary} label="G(A)" labelPosition="end" />
  </StringDiagram>
);

/**
 * Monad String Diagram
 * Shows unit η and multiplication μ
 */
export const MonadDiagram: React.FC = () => (
  <StringDiagram width={320} height={250} title="Monad M: unit η and join μ">
    {/* Left: unit η */}
    <text x={80} y={25} fill={colors.text} fontSize="12" fontWeight="600" textAnchor="middle">unit (η)</text>
    <Wire x1={80} y1={35} x2={80} y2={70} label="A" labelPosition="start" />
    <Node x={80} y={100} label="η" shape="dot" size={30} />
    <Wire x1={80} y1={130} x2={80} y2={220} color={colors.wireSecondary} label="M(A)" labelPosition="end" />

    {/* Right: join μ */}
    <text x={240} y={25} fill={colors.text} fontSize="12" fontWeight="600" textAnchor="middle">join (μ)</text>
    {/* Two M wires coming in and merging */}
    <Wire x1={220} y1={35} x2={220} y2={80} color={colors.wireSecondary} />
    <Wire x1={260} y1={35} x2={260} y2={80} color={colors.wireSecondary} />
    <text x={195} y={55} fill={colors.text} fontSize="11" fontFamily="serif" fontStyle="italic">M</text>
    <text x={275} y={55} fill={colors.text} fontSize="11" fontFamily="serif" fontStyle="italic">M</text>

    {/* Merge node */}
    <path
      d="M 220 80 Q 220 120 240 120 Q 260 120 260 80"
      fill="none"
      stroke={colors.wireSecondary}
      strokeWidth={2.5}
    />
    <Node x={240} y={130} label="μ" shape="dot" size={30} />

    {/* Single M wire out */}
    <Wire x1={240} y1={160} x2={240} y2={220} color={colors.wireSecondary} label="M(A)" labelPosition="end" />
  </StringDiagram>
);

/**
 * Adjunction String Diagram
 * Shows F ⊣ G with unit and counit
 */
export const AdjunctionDiagram: React.FC = () => (
  <StringDiagram width={360} height={240} title="Adjunction F ⊣ G: unit η and counit ε">
    {/* Category regions */}
    <Region x={0} y={0} width={180} height={240} color={colors.regionA} label="C" />
    <Region x={180} y={0} width={180} height={240} color={colors.regionB} label="D" />

    {/* Left: unit η - creates a cup */}
    <text x={90} y={50} fill={colors.text} fontSize="11" fontWeight="600" textAnchor="middle">unit η</text>
    <Node x={90} y={80} label="η" shape="dot" size={24} />
    {/* Cup shape */}
    <path
      d="M 60 80 Q 60 150 90 150 Q 120 150 120 80"
      fill="none"
      stroke={colors.wire}
      strokeWidth={2.5}
    />
    <Wire x1={60} y1={80} x2={60} y2={200} label="G" labelPosition="end" />
    <Wire x1={120} y1={80} x2={120} y2={200} color={colors.wireSecondary} label="F" labelPosition="end" />

    {/* Right: counit ε - creates a cap */}
    <text x={270} y={50} fill={colors.text} fontSize="11" fontWeight="600" textAnchor="middle">counit ε</text>
    <Wire x1={240} y1={60} x2={240} y2={140} color={colors.wireSecondary} label="F" labelPosition="start" />
    <Wire x1={300} y1={60} x2={300} y2={140} label="G" labelPosition="start" />
    {/* Cap shape */}
    <path
      d="M 240 140 Q 240 200 270 200 Q 300 200 300 140"
      fill="none"
      stroke={colors.wire}
      strokeWidth={2.5}
    />
    <Node x={270} y={170} label="ε" shape="dot" size={24} />

    {/* Functor boundary */}
    <line x1={180} y1={0} x2={180} y2={240} stroke={colors.node} strokeWidth={2} strokeDasharray="6,3" />
  </StringDiagram>
);

/**
 * Triangle Identity String Diagram
 * Shows the zig-zag identity
 */
export const TriangleIdentityDiagram: React.FC = () => (
  <StringDiagram width={300} height={200} title="Triangle identity: zig-zag = straight line">
    {/* Left: zig-zag that equals identity */}
    <text x={75} y={25} fill={colors.text} fontSize="11" textAnchor="middle">ε_F ∘ F(η)</text>
    <Wire x1={75} y1={40} x2={75} y2={60} color={colors.wireSecondary} />
    {/* Zig down-right */}
    <path
      d="M 75 60 Q 75 100 100 100 Q 125 100 125 140"
      fill="none"
      stroke={colors.wireSecondary}
      strokeWidth={2.5}
    />
    {/* Zag back left */}
    <path
      d="M 125 140 Q 125 160 100 160 Q 75 160 75 180"
      fill="none"
      stroke={colors.wireSecondary}
      strokeWidth={2.5}
    />
    <Node x={100} y={100} label="η" shape="dot" size={20} />
    <Node x={100} y={160} label="ε" shape="dot" size={20} />

    {/* Equals sign */}
    <text x={150} y={110} fill={colors.text} fontSize="20" fontWeight="bold">=</text>

    {/* Right: straight identity */}
    <text x={225} y={25} fill={colors.text} fontSize="11" textAnchor="middle">id_F</text>
    <Wire x1={225} y1={40} x2={225} y2={180} color={colors.wireSecondary} label="F" />
  </StringDiagram>
);

/**
 * Yoneda Lemma String Diagram
 * Shows the Yoneda embedding
 */
export const YonedaDiagram: React.FC = () => (
  <StringDiagram width={340} height={200} title="Yoneda: ∀B. (A → B) → F(B) ≅ F(A)">
    {/* Left side: the universal property */}
    <text x={85} y={25} fill={colors.text} fontSize="11" textAnchor="middle">Yoneda</text>
    <Wire x1={60} y1={40} x2={60} y2={80} label="A" labelPosition="start" />
    <Wire x1={110} y1={40} x2={110} y2={80} label="(→B)" labelPosition="start" />

    {/* Merge into F */}
    <path
      d="M 60 80 Q 60 120 85 120 Q 110 120 110 80"
      fill="none"
      stroke={colors.wire}
      strokeWidth={2.5}
    />
    <Node x={85} y={130} label="run" size={28} />
    <Wire x1={85} y1={145} x2={85} y2={185} color={colors.wireSecondary} label="F(B)" labelPosition="end" />

    {/* Isomorphism */}
    <text x={170} y={100} fill={colors.text} fontSize="24" fontWeight="bold">≅</text>

    {/* Right side: just F(A) */}
    <text x={255} y={25} fill={colors.text} fontSize="11" textAnchor="middle">Element</text>
    <Wire x1={255} y1={40} x2={255} y2={185} color={colors.wireSecondary} label="F(A)" />
  </StringDiagram>
);

/**
 * Coyoneda String Diagram
 * Shows existential packaging
 */
export const CoyonedaDiagram: React.FC = () => (
  <StringDiagram width={320} height={200} title="Coyoneda: ∃X. (F(X), X → A) ≅ F(A)">
    {/* Left: Coyoneda structure */}
    <text x={80} y={25} fill={colors.text} fontSize="11" textAnchor="middle">Coyoneda</text>
    <Wire x1={50} y1={40} x2={50} y2={100} color={colors.wireTertiary} label="F(X)" labelPosition="start" />
    <Wire x1={110} y1={40} x2={110} y2={100} label="X→A" labelPosition="start" />

    {/* Lower with fmap */}
    <rect x={30} y={100} width={100} height={30} rx={4} fill={colors.nodeFill} stroke={colors.node} strokeWidth={2} />
    <text x={80} y={120} fill={colors.text} fontSize="12" fontFamily="serif" textAnchor="middle">fmap f</text>

    <Wire x1={80} y1={130} x2={80} y2={180} color={colors.wireSecondary} label="F(A)" labelPosition="end" />

    {/* Isomorphism */}
    <text x={160} y={100} fill={colors.text} fontSize="24" fontWeight="bold">≅</text>

    {/* Right: just F(A) */}
    <text x={240} y={25} fill={colors.text} fontSize="11" textAnchor="middle">Direct</text>
    <Wire x1={240} y1={40} x2={240} y2={180} color={colors.wireSecondary} label="F(A)" />
  </StringDiagram>
);

// Also export the building blocks for custom diagrams
export { StringDiagram, Wire, Node, Region, colors };
export default StringDiagram;
