import React, { useState } from 'react';

/**
 * Linear Types Visualization Components
 *
 * Diagrams for visualizing affine/linear type systems, ownership,
 * and the categorical structure behind Rust's type system.
 */

// Colors optimized for white background
const colors = {
  wire: '#4f46e5',       // indigo-600
  wireSecondary: '#7c3aed', // violet-600
  consumed: '#dc2626',   // red-600
  valid: '#16a34a',      // green-600
  borrowed: '#2563eb',   // blue-600
  mutBorrowed: '#ea580c', // orange-600
  node: '#1e1b4b',       // indigo-950
  nodeFill: '#e0e7ff',   // indigo-100
  text: '#0f172a',       // slate-900
  textMuted: '#64748b',  // slate-500
};

interface DiagramProps {
  width?: number;
  height?: number;
  title?: string;
  children: React.ReactNode;
}

const Diagram: React.FC<DiagramProps> = ({
  width = 400,
  height = 250,
  title,
  children,
}) => {
  const padding = 16;
  const paddedWidth = width + padding * 2;
  const paddedHeight = height + padding * 2;

  return (
    <figure style={{ margin: '2rem 0' }}>
      <svg
        viewBox={`${-padding} ${-padding} ${paddedWidth} ${paddedHeight}`}
        width="100%"
        height="auto"
        style={{
          maxWidth: `${paddedWidth}px`,
          margin: '0 auto',
          display: 'block',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
        }}
      >
        <rect
          x={-padding}
          y={-padding}
          width={paddedWidth}
          height={paddedHeight}
          fill="#ffffff"
          rx={8}
        />
        {children}
      </svg>
      {title && (
        <figcaption
          className="text-slate-600 dark:text-slate-400"
          style={{
            textAlign: 'center',
            fontSize: '0.875rem',
            marginTop: '0.5rem',
            fontStyle: 'italic'
          }}
        >
          {title}
        </figcaption>
      )}
    </figure>
  );
};

/**
 * Diagonal Morphism Diagram
 * Shows Δ: A → A × A (the copying operation)
 */
export const DiagonalDiagram: React.FC = () => (
  <Diagram width={350} height={200} title="Diagonal morphism Δ: A → A × A (free copying in JS)">
    {/* Input node A */}
    <circle cx={80} cy={100} r={30} fill={colors.nodeFill} stroke={colors.node} strokeWidth={2} />
    <text x={80} y={105} fill={colors.text} fontSize="18" fontWeight="600" textAnchor="middle">A</text>

    {/* Splitting arrow */}
    <path
      d="M 110 100 C 160 100 160 50 210 50"
      fill="none"
      stroke={colors.wire}
      strokeWidth={2.5}
      markerEnd="url(#arrow-diagonal)"
    />
    <path
      d="M 110 100 C 160 100 160 150 210 150"
      fill="none"
      stroke={colors.wire}
      strokeWidth={2.5}
      markerEnd="url(#arrow-diagonal)"
    />

    {/* Δ label */}
    <text x={160} y={95} fill={colors.text} fontSize="16" fontWeight="600">Δ</text>

    {/* Output product A × A */}
    <rect x={210} y={30} width={120} height={140} rx={8} fill="#f1f5f9" stroke={colors.node} strokeWidth={2} strokeDasharray="4,2" />
    <text x={270} y={25} fill={colors.textMuted} fontSize="12" textAnchor="middle">A × A</text>

    {/* Two copies of A */}
    <circle cx={270} cy={70} r={25} fill={colors.nodeFill} stroke={colors.valid} strokeWidth={2} />
    <text x={270} y={75} fill={colors.text} fontSize="16" fontWeight="600" textAnchor="middle">A</text>

    <circle cx={270} cy={130} r={25} fill={colors.nodeFill} stroke={colors.valid} strokeWidth={2} />
    <text x={270} y={135} fill={colors.text} fontSize="16" fontWeight="600" textAnchor="middle">A</text>

    {/* Arrow marker */}
    <defs>
      <marker id="arrow-diagonal" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
        <path d="M0,0 L10,4 L0,8 Z" fill={colors.wire} />
      </marker>
    </defs>
  </Diagram>
);

/**
 * No Diagonal Diagram
 * Shows that in affine/linear categories, no general diagonal exists
 */
export const NoDiagonalDiagram: React.FC = () => (
  <Diagram width={350} height={200} title="In Rust: no implicit Δ for non-Copy types">
    {/* Input node A (String) */}
    <circle cx={80} cy={100} r={30} fill={colors.nodeFill} stroke={colors.node} strokeWidth={2} />
    <text x={80} y={95} fill={colors.text} fontSize="14" fontWeight="600" textAnchor="middle">String</text>
    <text x={80} y={115} fill={colors.textMuted} fontSize="11" textAnchor="middle">"hello"</text>

    {/* Attempted splitting - crossed out */}
    <path
      d="M 110 100 C 160 100 160 50 210 50"
      fill="none"
      stroke={colors.consumed}
      strokeWidth={2}
      strokeDasharray="5,3"
      opacity={0.5}
    />
    <path
      d="M 110 100 C 160 100 160 150 210 150"
      fill="none"
      stroke={colors.consumed}
      strokeWidth={2}
      strokeDasharray="5,3"
      opacity={0.5}
    />

    {/* Big X over the operation */}
    <text x={160} y={110} fill={colors.consumed} fontSize="40" fontWeight="bold" textAnchor="middle">✗</text>

    {/* Question marks for output */}
    <circle cx={270} cy={70} r={25} fill="#fef2f2" stroke={colors.consumed} strokeWidth={2} strokeDasharray="4,2" />
    <text x={270} y={75} fill={colors.consumed} fontSize="20" fontWeight="600" textAnchor="middle">?</text>

    <circle cx={270} cy={130} r={25} fill="#fef2f2" stroke={colors.consumed} strokeWidth={2} strokeDasharray="4,2" />
    <text x={270} y={135} fill={colors.consumed} fontSize="20" fontWeight="600" textAnchor="middle">?</text>

    {/* Error message */}
    <text x={270} y={180} fill={colors.consumed} fontSize="11" textAnchor="middle" fontFamily="monospace">
      error: use of moved value
    </text>
  </Diagram>
);

/**
 * Move Semantics Diagram
 * Shows value consumption/transfer
 */
export const MoveDiagram: React.FC = () => (
  <Diagram width={400} height={180} title="Move: ownership transfer consumes the source">
    {/* Source */}
    <rect x={20} y={50} width={100} height={80} rx={8} fill={colors.nodeFill} stroke={colors.node} strokeWidth={2} />
    <text x={70} y={75} fill={colors.text} fontSize="14" fontWeight="600" textAnchor="middle">s: String</text>
    <text x={70} y={95} fill={colors.textMuted} fontSize="12" textAnchor="middle">"hello"</text>
    <text x={70} y={115} fill={colors.valid} fontSize="11" textAnchor="middle">✓ valid</text>

    {/* Arrow */}
    <path d="M 130 90 L 180 90" fill="none" stroke={colors.node} strokeWidth={2.5} markerEnd="url(#arrow-move)" />
    <text x={155} y={80} fill={colors.text} fontSize="12" fontWeight="500" textAnchor="middle">let t = s;</text>

    {/* After move - source consumed */}
    <rect x={190} y={50} width={90} height={80} rx={8} fill="#fef2f2" stroke={colors.consumed} strokeWidth={2} strokeDasharray="4,2" />
    <text x={235} y={75} fill={colors.consumed} fontSize="14" fontWeight="600" textAnchor="middle">s</text>
    <text x={235} y={95} fill={colors.consumed} fontSize="11" textAnchor="middle">moved</text>
    <text x={235} y={115} fill={colors.consumed} fontSize="11" textAnchor="middle">✗ invalid</text>

    {/* After move - destination valid */}
    <rect x={290} y={50} width={100} height={80} rx={8} fill="#f0fdf4" stroke={colors.valid} strokeWidth={2} />
    <text x={340} y={75} fill={colors.text} fontSize="14" fontWeight="600" textAnchor="middle">t: String</text>
    <text x={340} y={95} fill={colors.textMuted} fontSize="12" textAnchor="middle">"hello"</text>
    <text x={340} y={115} fill={colors.valid} fontSize="11" textAnchor="middle">✓ valid</text>

    <defs>
      <marker id="arrow-move" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
        <path d="M0,0 L10,4 L0,8 Z" fill={colors.node} />
      </marker>
    </defs>
  </Diagram>
);

/**
 * Clone vs Copy Diagram
 * Shows explicit cloning vs implicit copying
 */
export const CloneCopyDiagram: React.FC = () => (
  <Diagram width={450} height={280} title="Copy (implicit) vs Clone (explicit)">
    {/* Copy section */}
    <text x={110} y={20} fill={colors.text} fontSize="14" fontWeight="700" textAnchor="middle">Copy trait (i32)</text>

    <rect x={30} y={35} width={70} height={50} rx={6} fill="#f0fdf4" stroke={colors.valid} strokeWidth={2} />
    <text x={65} y={55} fill={colors.text} fontSize="12" fontWeight="600" textAnchor="middle">x: i32</text>
    <text x={65} y={72} fill={colors.textMuted} fontSize="11" textAnchor="middle">42</text>

    <text x={135} y={60} fill={colors.textMuted} fontSize="11" textAnchor="middle">let y = x;</text>

    <rect x={170} y={35} width={70} height={50} rx={6} fill="#f0fdf4" stroke={colors.valid} strokeWidth={2} />
    <text x={205} y={55} fill={colors.text} fontSize="12" fontWeight="600" textAnchor="middle">x: i32</text>
    <text x={205} y={72} fill={colors.valid} fontSize="10" textAnchor="middle">still valid</text>

    <rect x={250} y={35} width={70} height={50} rx={6} fill="#f0fdf4" stroke={colors.valid} strokeWidth={2} />
    <text x={285} y={55} fill={colors.text} fontSize="12" fontWeight="600" textAnchor="middle">y: i32</text>
    <text x={285} y={72} fill={colors.textMuted} fontSize="11" textAnchor="middle">42</text>

    {/* Implicit δ annotation */}
    <text x={380} y={60} fill={colors.wire} fontSize="12" fontStyle="italic">implicit δ</text>

    {/* Divider */}
    <line x1={20} y1={110} x2={430} y2={110} stroke="#e2e8f0" strokeWidth={1} />

    {/* Clone section */}
    <text x={110} y={135} fill={colors.text} fontSize="14" fontWeight="700" textAnchor="middle">Clone trait (String)</text>

    <rect x={30} y={150} width={70} height={50} rx={6} fill="#f0fdf4" stroke={colors.valid} strokeWidth={2} />
    <text x={65} y={168} fill={colors.text} fontSize="11" fontWeight="600" textAnchor="middle">s: String</text>
    <text x={65} y={185} fill={colors.textMuted} fontSize="10" textAnchor="middle">"hello"</text>

    <text x={140} y={175} fill={colors.textMuted} fontSize="10" textAnchor="middle">s.clone()</text>
    <text x={140} y={190} fill={colors.wire} fontSize="10" fontWeight="600" textAnchor="middle">explicit δ</text>

    <rect x={180} y={150} width={70} height={50} rx={6} fill="#f0fdf4" stroke={colors.valid} strokeWidth={2} />
    <text x={215} y={168} fill={colors.text} fontSize="11" fontWeight="600" textAnchor="middle">s: String</text>
    <text x={215} y={185} fill={colors.valid} fontSize="10" textAnchor="middle">still valid</text>

    <rect x={260} y={150} width={70} height={50} rx={6} fill="#f0fdf4" stroke={colors.valid} strokeWidth={2} />
    <text x={295} y={168} fill={colors.text} fontSize="11" fontWeight="600" textAnchor="middle">t: String</text>
    <text x={295} y={185} fill={colors.textMuted} fontSize="10" textAnchor="middle">"hello"</text>

    {/* Cost annotation */}
    <text x={380} y={175} fill={colors.mutBorrowed} fontSize="11" fontStyle="italic">has cost!</text>

    {/* Divider */}
    <line x1={20} y1={220} x2={430} y2={220} stroke="#e2e8f0" strokeWidth={1} />

    {/* No Clone section */}
    <text x={110} y={245} fill={colors.text} fontSize="14" fontWeight="700" textAnchor="middle">Without Clone</text>

    <rect x={30} y={255} width={70} height={50} rx={6} fill="#fef2f2" stroke={colors.consumed} strokeWidth={2} strokeDasharray="4,2" />
    <text x={65} y={273} fill={colors.consumed} fontSize="11" fontWeight="600" textAnchor="middle">s</text>
    <text x={65} y={290} fill={colors.consumed} fontSize="10" textAnchor="middle">moved</text>

    <text x={135} y={280} fill={colors.textMuted} fontSize="11" textAnchor="middle">let t = s;</text>

    <rect x={170} y={255} width={70} height={50} rx={6} fill="#f0fdf4" stroke={colors.valid} strokeWidth={2} />
    <text x={205} y={273} fill={colors.text} fontSize="11" fontWeight="600" textAnchor="middle">t: String</text>
    <text x={205} y={290} fill={colors.textMuted} fontSize="10" textAnchor="middle">"hello"</text>

    <text x={300} y={280} fill={colors.consumed} fontSize="11" fontStyle="italic">no copy possible</text>
  </Diagram>
);

/**
 * Borrow Diagram
 * Shows shared vs exclusive borrows
 */
export const BorrowDiagram: React.FC = () => (
  <Diagram width={450} height={220} title="Borrowing: &T (shared) vs &mut T (exclusive)">
    {/* Shared borrows section */}
    <text x={110} y={20} fill={colors.text} fontSize="14" fontWeight="700" textAnchor="middle">&T — Multiple readers OK</text>

    {/* Owner */}
    <rect x={30} y={40} width={80} height={60} rx={6} fill="#f0fdf4" stroke={colors.valid} strokeWidth={2} />
    <text x={70} y={60} fill={colors.text} fontSize="12" fontWeight="600" textAnchor="middle">s: String</text>
    <text x={70} y={78} fill={colors.textMuted} fontSize="11" textAnchor="middle">"hello"</text>

    {/* Borrow arrows */}
    <path d="M 110 55 L 150 40" fill="none" stroke={colors.borrowed} strokeWidth={2} markerEnd="url(#arrow-borrow)" />
    <path d="M 110 70 L 150 85" fill="none" stroke={colors.borrowed} strokeWidth={2} markerEnd="url(#arrow-borrow)" />

    {/* Shared borrows */}
    <rect x={155} y={25} width={60} height={35} rx={4} fill="#eff6ff" stroke={colors.borrowed} strokeWidth={1.5} />
    <text x={185} y={47} fill={colors.borrowed} fontSize="11" fontWeight="600" textAnchor="middle">r1: &s</text>

    <rect x={155} y={70} width={60} height={35} rx={4} fill="#eff6ff" stroke={colors.borrowed} strokeWidth={1.5} />
    <text x={185} y={92} fill={colors.borrowed} fontSize="11" fontWeight="600" textAnchor="middle">r2: &s</text>

    <text x={250} y={55} fill={colors.valid} fontSize="24">✓</text>
    <text x={280} y={60} fill={colors.textMuted} fontSize="11">Both valid!</text>

    {/* Divider */}
    <line x1={20} y1={120} x2={430} y2={120} stroke="#e2e8f0" strokeWidth={1} />

    {/* Exclusive borrow section */}
    <text x={110} y={140} fill={colors.text} fontSize="14" fontWeight="700" textAnchor="middle">&mut T — Only one writer</text>

    {/* Owner */}
    <rect x={30} y={155} width={80} height={60} rx={6} fill="#fefce8" stroke={colors.mutBorrowed} strokeWidth={2} />
    <text x={70} y={175} fill={colors.text} fontSize="12" fontWeight="600" textAnchor="middle">s: String</text>
    <text x={70} y={193} fill={colors.textMuted} fontSize="11" textAnchor="middle">"hello"</text>

    {/* Mutable borrow */}
    <path d="M 110 185 L 150 185" fill="none" stroke={colors.mutBorrowed} strokeWidth={2} markerEnd="url(#arrow-mutborrow)" />

    <rect x={155} y={165} width={80} height={40} rx={4} fill="#fff7ed" stroke={colors.mutBorrowed} strokeWidth={2} />
    <text x={195} y={190} fill={colors.mutBorrowed} fontSize="11" fontWeight="600" textAnchor="middle">m: &mut s</text>

    {/* Second mutable borrow - blocked */}
    <rect x={250} y={165} width={80} height={40} rx={4} fill="#fef2f2" stroke={colors.consumed} strokeWidth={1.5} strokeDasharray="4,2" />
    <text x={290} y={185} fill={colors.consumed} fontSize="11" textAnchor="middle">&mut s</text>
    <text x={290} y={200} fill={colors.consumed} fontSize="20">✗</text>

    <text x={370} y={185} fill={colors.consumed} fontSize="10" fontStyle="italic">cannot borrow</text>
    <text x={370} y={198} fill={colors.consumed} fontSize="10" fontStyle="italic">twice as mut</text>

    <defs>
      <marker id="arrow-borrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill={colors.borrowed} />
      </marker>
      <marker id="arrow-mutborrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill={colors.mutBorrowed} />
      </marker>
    </defs>
  </Diagram>
);

/**
 * Interactive Structural Rules Comparison
 */
export const StructuralRulesComparison: React.FC = () => {
  const [language, setLanguage] = useState<'js' | 'rust' | 'linear'>('js');

  const rules = {
    js: { weakening: true, contraction: true, exchange: true },
    rust: { weakening: true, contraction: false, exchange: true },
    linear: { weakening: false, contraction: false, exchange: true },
  };

  const current = rules[language];

  const descriptions = {
    weakening: 'Can ignore/drop values',
    contraction: 'Can copy/duplicate values',
    exchange: 'Order doesn\'t matter',
  };

  const examples = {
    js: `const x = getValue();
// Can ignore x (weakening) ✓
// Can use x multiple times (contraction) ✓
useX(x);
useX(x); // Works!`,
    rust: `let x = get_string();
// Can drop x (weakening) ✓
// Cannot copy x (no contraction) ✗
use_x(x);
use_x(x); // ERROR: moved`,
    linear: `let x = acquire_resource();
// Must use x exactly once
// Cannot drop (no weakening)
// Cannot copy (no contraction)
consume(x); // Required!`,
  };

  return (
    <div className="my-8 rounded-xl bg-white dark:bg-slate-800 p-6 border border-slate-200 dark:border-slate-700">
      <h4 className="text-lg font-bold text-center mb-4 text-slate-900 dark:text-slate-100">
        Structural Rules Comparison
      </h4>

      {/* Language selector */}
      <div className="flex justify-center gap-2 mb-6">
        {(['js', 'rust', 'linear'] as const).map(lang => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              language === lang
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            {lang === 'js' ? 'JavaScript' : lang === 'rust' ? 'Rust' : 'Linear'}
          </button>
        ))}
      </div>

      {/* Rules grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {(Object.keys(current) as Array<keyof typeof current>).map(rule => (
          <div
            key={rule}
            className={`p-4 rounded-lg border-2 ${
              current[rule]
                ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                : 'bg-red-50 dark:bg-red-900/20 border-red-500'
            }`}
          >
            <div className="text-center">
              <span className="text-2xl">{current[rule] ? '✓' : '✗'}</span>
              <div className="font-semibold capitalize text-slate-900 dark:text-slate-100">{rule}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">{descriptions[rule]}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Code example */}
      <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto text-sm">
        <code className="text-slate-300 font-mono whitespace-pre">{examples[language]}</code>
      </pre>
    </div>
  );
};

/**
 * Resource Flow Animation
 * Interactive visualization of value states through code
 */
export const ResourceFlowDiagram: React.FC = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { code: 'let s = String::from("hello");', s: 'valid', t: 'none', desc: 's is created and owns the String' },
    { code: 'let t = s;', s: 'moved', t: 'valid', desc: 'Ownership moves from s to t' },
    { code: 'println!("{}", t);', s: 'moved', t: 'borrowed', desc: 't is borrowed for printing' },
    { code: '// t goes out of scope', s: 'moved', t: 'dropped', desc: 't is dropped, memory freed' },
  ];

  const current = steps[step];

  const getStateColor = (state: string) => {
    switch (state) {
      case 'valid': return '#16a34a';
      case 'moved': return '#dc2626';
      case 'borrowed': return '#2563eb';
      case 'dropped': return '#6b7280';
      default: return '#94a3b8';
    }
  };

  const getStateBg = (state: string) => {
    switch (state) {
      case 'valid': return '#f0fdf4';
      case 'moved': return '#fef2f2';
      case 'borrowed': return '#eff6ff';
      case 'dropped': return '#f3f4f6';
      default: return '#f8fafc';
    }
  };

  return (
    <div className="my-8 rounded-xl bg-white dark:bg-slate-800 p-6 border border-slate-200 dark:border-slate-700">
      <h4 className="text-lg font-bold text-center mb-4 text-slate-900 dark:text-slate-100">
        Resource Flow: Value States
      </h4>

      {/* Timeline controls */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-3 py-1.5 rounded bg-slate-200 dark:bg-slate-700 disabled:opacity-40 hover:bg-slate-300 dark:hover:bg-slate-600 text-sm font-medium"
        >
          ← Prev
        </button>
        <span className="text-sm text-slate-600 dark:text-slate-400">
          Step {step + 1} of {steps.length}
        </span>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
          className="px-3 py-1.5 rounded bg-slate-200 dark:bg-slate-700 disabled:opacity-40 hover:bg-slate-300 dark:hover:bg-slate-600 text-sm font-medium"
        >
          Next →
        </button>
      </div>

      {/* Code display */}
      <pre className="bg-slate-900 rounded-lg p-4 mb-4 overflow-x-auto">
        <code className="text-amber-400 font-mono text-sm">{current.code}</code>
      </pre>

      {/* Visual state */}
      <div className="flex justify-center gap-8 mb-4">
        {/* Variable s */}
        <div className="text-center">
          <div
            className="w-24 h-20 rounded-lg border-2 flex flex-col items-center justify-center transition-all"
            style={{
              backgroundColor: getStateBg(current.s),
              borderColor: getStateColor(current.s)
            }}
          >
            <span className="font-mono font-bold text-slate-900">s</span>
            <span className="text-xs mt-1" style={{ color: getStateColor(current.s) }}>
              {current.s}
            </span>
          </div>
        </div>

        {/* Variable t */}
        <div className="text-center">
          <div
            className="w-24 h-20 rounded-lg border-2 flex flex-col items-center justify-center transition-all"
            style={{
              backgroundColor: current.t === 'none' ? '#f8fafc' : getStateBg(current.t),
              borderColor: current.t === 'none' ? '#e2e8f0' : getStateColor(current.t),
              borderStyle: current.t === 'none' ? 'dashed' : 'solid'
            }}
          >
            <span className="font-mono font-bold text-slate-900">t</span>
            <span className="text-xs mt-1" style={{ color: current.t === 'none' ? '#94a3b8' : getStateColor(current.t) }}>
              {current.t === 'none' ? '—' : current.t}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
        {current.desc}
      </p>

      {/* Legend */}
      <div className="flex justify-center gap-4 mt-4 text-xs">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded" style={{ backgroundColor: '#16a34a' }}></span>
          valid
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded" style={{ backgroundColor: '#dc2626' }}></span>
          moved
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded" style={{ backgroundColor: '#2563eb' }}></span>
          borrowed
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded" style={{ backgroundColor: '#6b7280' }}></span>
          dropped
        </span>
      </div>
    </div>
  );
};

export default {
  DiagonalDiagram,
  NoDiagonalDiagram,
  MoveDiagram,
  CloneCopyDiagram,
  BorrowDiagram,
  StructuralRulesComparison,
  ResourceFlowDiagram,
};
