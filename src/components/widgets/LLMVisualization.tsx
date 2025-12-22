import React, { useState, useEffect } from 'react';

/**
 * Interactive LLM Visualization Components
 *
 * Visualizes the complete journey of text through a Large Language Model:
 * - Tokenization
 * - One-hot encoding
 * - Embeddings
 * - Attention mechanism
 * - MLP layers
 * - Output probability distribution
 * - Temperature and sampling
 */

const colors = {
  primary: '#4f46e5',      // indigo-600
  secondary: '#7c3aed',    // violet-600
  accent: '#db2777',       // pink-600
  success: '#10b981',      // emerald-500
  warning: '#f59e0b',      // amber-500
  text: '#0f172a',         // slate-900
  textLight: '#64748b',    // slate-500
  bg: '#ffffff',
  bgLight: '#f8fafc',      // slate-50
  bgAccent: '#e0e7ff',     // indigo-100
  border: '#e2e8f0',       // slate-200
};

// ============================================================
// Tokenization Visualization
// ============================================================

export const TokenizationDemo: React.FC = () => {
  const [inputText, setInputText] = useState('Olá, mundo!');
  const [step, setStep] = useState(0);

  const tokens = [
    { text: 'Ol', id: 1847 },
    { text: 'á', id: 225 },
    { text: ',', id: 11 },
    { text: ' mund', id: 23456 },
    { text: 'o', id: 78 },
    { text: '!', id: 0 },
  ];

  const tokenColors = ['#4f46e5', '#7c3aed', '#db2777', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div style={{
      backgroundColor: colors.bg,
      borderRadius: '12px',
      padding: '24px',
      border: `1px solid ${colors.border}`,
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h4 style={{ margin: '0 0 16px 0', color: colors.text, fontSize: '18px' }}>
        🔤 Tokenização
      </h4>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: colors.textLight, fontSize: '14px' }}>
          Texto de entrada:
        </label>
        <div style={{
          padding: '16px',
          backgroundColor: colors.bgLight,
          borderRadius: '8px',
          fontSize: '24px',
          fontFamily: 'monospace',
          letterSpacing: '1px'
        }}>
          {inputText}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span style={{ color: colors.textLight, fontSize: '14px' }}>Tokens:</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {tokens.map((token, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              animation: `fadeIn 0.3s ease ${i * 0.1}s both`
            }}>
              <div style={{
                padding: '12px 16px',
                backgroundColor: tokenColors[i % tokenColors.length],
                color: 'white',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '18px',
                fontWeight: '600',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                "{token.text}"
              </div>
              <span style={{
                marginTop: '4px',
                fontSize: '12px',
                color: colors.textLight,
                fontFamily: 'monospace'
              }}>
                ID: {token.id}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: '16px',
        backgroundColor: colors.bgAccent,
        borderRadius: '8px',
        fontSize: '14px',
        color: colors.text,
        lineHeight: '1.6'
      }}>
        <strong>💡 O que acontece:</strong> O texto é dividido em pedaços chamados <em>tokens</em>.
        Cada token recebe um ID numérico único do vocabulário do modelo (geralmente 50.000-200.000 tokens).
        Note que "Olá" foi dividido em "Ol" + "á" - isso é comum em tokenizadores!
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

// ============================================================
// One-Hot Encoding Visualization
// ============================================================

export const OneHotEncodingDemo: React.FC = () => {
  const [selectedToken, setSelectedToken] = useState(0);
  const vocabSize = 8;
  const tokens = ['Ol', 'á', ',', ' mund', 'o', '!'];
  const tokenIds = [2, 5, 1, 7, 4, 0];

  return (
    <div style={{
      backgroundColor: colors.bg,
      borderRadius: '12px',
      padding: '24px',
      border: `1px solid ${colors.border}`,
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h4 style={{ margin: '0 0 16px 0', color: colors.text, fontSize: '18px' }}>
        🎯 Codificação One-Hot
      </h4>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: colors.textLight, fontSize: '14px' }}>
          Selecione um token:
        </label>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {tokens.map((token, i) => (
            <button
              key={i}
              onClick={() => setSelectedToken(i)}
              style={{
                padding: '8px 16px',
                backgroundColor: selectedToken === i ? colors.primary : colors.bgLight,
                color: selectedToken === i ? 'white' : colors.text,
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: 'monospace',
                fontSize: '14px',
                transition: 'all 0.2s ease'
              }}
            >
              "{token}"
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ color: colors.textLight, fontSize: '14px', marginBottom: '12px' }}>
          Vetor one-hot (vocabulário simplificado de {vocabSize} tokens):
        </div>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '20px', marginRight: '8px' }}>[</span>
          {Array.from({ length: vocabSize }).map((_, i) => (
            <div
              key={i}
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: i === tokenIds[selectedToken] ? colors.primary : colors.bgLight,
                color: i === tokenIds[selectedToken] ? 'white' : colors.textLight,
                borderRadius: '6px',
                fontFamily: 'monospace',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                transform: i === tokenIds[selectedToken] ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              {i === tokenIds[selectedToken] ? '1' : '0'}
            </div>
          ))}
          <span style={{ fontFamily: 'monospace', fontSize: '20px', marginLeft: '8px' }}>]</span>
        </div>
        <div style={{ display: 'flex', gap: '4px', marginTop: '4px', marginLeft: '28px' }}>
          {Array.from({ length: vocabSize }).map((_, i) => (
            <div key={i} style={{
              width: '40px',
              textAlign: 'center',
              fontSize: '10px',
              color: colors.textLight
            }}>
              {i}
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: '16px',
        backgroundColor: colors.bgAccent,
        borderRadius: '8px',
        fontSize: '14px',
        color: colors.text,
        lineHeight: '1.6'
      }}>
        <strong>💡 O que acontece:</strong> Cada token é representado como um vetor onde apenas UMA posição
        está "ligada" (valor 1) e todas as outras estão "desligadas" (valor 0).
        O token "{tokens[selectedToken]}" tem ID {tokenIds[selectedToken]}, então a posição {tokenIds[selectedToken]} está ativa.
      </div>
    </div>
  );
};

// ============================================================
// Embedding Visualization
// ============================================================

export const EmbeddingDemo: React.FC = () => {
  const [animating, setAnimating] = useState(false);

  const embeddingValues = [
    [0.23, -0.45, 0.78, 0.12],
    [-0.56, 0.34, 0.01, -0.89],
    [0.67, 0.11, -0.33, 0.45],
  ];

  const tokens = ['Ol', 'á', ','];

  return (
    <div style={{
      backgroundColor: colors.bg,
      borderRadius: '12px',
      padding: '24px',
      border: `1px solid ${colors.border}`,
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h4 style={{ margin: '0 0 16px 0', color: colors.text, fontSize: '18px' }}>
        🌐 Matriz de Embeddings
      </h4>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        overflowX: 'auto',
        padding: '10px 0'
      }}>
        {/* One-hot vectors */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: colors.textLight, marginBottom: '8px' }}>
            Vetores One-Hot
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {tokens.map((token, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{
                  fontSize: '11px',
                  color: colors.textLight,
                  width: '30px',
                  fontFamily: 'monospace'
                }}>
                  {token}
                </span>
                {[0, 0, 0, 0, 0, 0].map((_, j) => (
                  <div key={j} style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: j === i ? colors.primary : colors.bgLight,
                    borderRadius: '2px',
                    fontSize: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: j === i ? 'white' : colors.textLight
                  }}>
                    {j === i ? '1' : '0'}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Multiplication sign */}
        <div style={{ fontSize: '24px', color: colors.textLight }}>×</div>

        {/* Embedding matrix */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: colors.textLight, marginBottom: '8px' }}>
            Matriz de Embedding (aprendida)
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2px',
            padding: '8px',
            backgroundColor: colors.bgLight,
            borderRadius: '8px'
          }}>
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} style={{
                width: '32px',
                height: '20px',
                backgroundColor: colors.bgAccent,
                borderRadius: '2px',
                fontSize: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.textLight
              }}>
                {(Math.random() * 2 - 1).toFixed(1)}
              </div>
            ))}
          </div>
        </div>

        {/* Equals sign */}
        <div style={{ fontSize: '24px', color: colors.textLight }}>=</div>

        {/* Embedding vectors */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: colors.textLight, marginBottom: '8px' }}>
            Vetores de Embedding
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {embeddingValues.map((values, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{
                  fontSize: '11px',
                  color: colors.textLight,
                  width: '30px',
                  fontFamily: 'monospace'
                }}>
                  {tokens[i]}
                </span>
                {values.map((v, j) => (
                  <div key={j} style={{
                    width: '40px',
                    height: '20px',
                    backgroundColor: v > 0 ? `rgba(79, 70, 229, ${Math.abs(v)})` : `rgba(219, 39, 119, ${Math.abs(v)})`,
                    borderRadius: '3px',
                    fontSize: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'monospace'
                  }}>
                    {v.toFixed(2)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '16px',
        backgroundColor: colors.bgAccent,
        borderRadius: '8px',
        fontSize: '14px',
        color: colors.text,
        lineHeight: '1.6'
      }}>
        <strong>💡 O que acontece:</strong> Os vetores one-hot (esparsos) são multiplicados pela
        matriz de embedding para produzir vetores densos de números reais. Esses vetores
        capturam o <em>significado semântico</em> de cada token - palavras similares terão
        vetores similares!
      </div>
    </div>
  );
};

// ============================================================
// Attention Mechanism Visualization
// ============================================================

export const AttentionDemo: React.FC = () => {
  const [hoveredToken, setHoveredToken] = useState<number | null>(null);

  const tokens = ['O', 'gato', 'sentou', 'no', 'tapete'];

  // Attention weights (simplified)
  const attentionWeights = [
    [1.0, 0.0, 0.0, 0.0, 0.0],
    [0.3, 0.7, 0.0, 0.0, 0.0],
    [0.1, 0.6, 0.3, 0.0, 0.0],
    [0.05, 0.1, 0.15, 0.7, 0.0],
    [0.1, 0.4, 0.2, 0.1, 0.2],
  ];

  return (
    <div style={{
      backgroundColor: colors.bg,
      borderRadius: '12px',
      padding: '24px',
      border: `1px solid ${colors.border}`,
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h4 style={{ margin: '0 0 16px 0', color: colors.text, fontSize: '18px' }}>
        👁️ Mecanismo de Atenção (Self-Attention)
      </h4>

      <p style={{ color: colors.textLight, fontSize: '14px', marginBottom: '20px' }}>
        Passe o mouse sobre um token para ver a quais tokens anteriores ele "presta atenção":
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {tokens.map((token, i) => {
          const isHovered = hoveredToken === i;
          const attentionFromHovered = hoveredToken !== null ? attentionWeights[hoveredToken][i] : 0;

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredToken(i)}
              onMouseLeave={() => setHoveredToken(null)}
              style={{
                padding: '12px 20px',
                backgroundColor: isHovered
                  ? colors.primary
                  : hoveredToken !== null && i <= hoveredToken
                    ? `rgba(79, 70, 229, ${attentionFromHovered})`
                    : colors.bgLight,
                color: isHovered || (hoveredToken !== null && attentionFromHovered > 0.3)
                  ? 'white'
                  : colors.text,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'monospace',
                fontSize: '16px',
                fontWeight: '500',
                position: 'relative'
              }}
            >
              {token}
              {hoveredToken !== null && i < hoveredToken && (
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '11px',
                  color: colors.primary,
                  fontWeight: '600'
                }}>
                  {(attentionFromHovered * 100).toFixed(0)}%
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Attention matrix visualization */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '14px', color: colors.textLight, marginBottom: '12px' }}>
          Matriz de Atenção:
        </div>
        <div style={{ display: 'inline-block' }}>
          <div style={{ display: 'flex', marginBottom: '4px', marginLeft: '50px' }}>
            {tokens.map((t, i) => (
              <div key={i} style={{
                width: '40px',
                fontSize: '10px',
                color: colors.textLight,
                textAlign: 'center',
                overflow: 'hidden'
              }}>
                {t.slice(0, 4)}
              </div>
            ))}
          </div>
          {attentionWeights.map((row, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '50px',
                fontSize: '10px',
                color: colors.textLight,
                textAlign: 'right',
                paddingRight: '8px'
              }}>
                {tokens[i]}
              </div>
              {row.map((weight, j) => (
                <div
                  key={j}
                  style={{
                    width: '40px',
                    height: '30px',
                    backgroundColor: j <= i
                      ? `rgba(79, 70, 229, ${weight})`
                      : colors.bgLight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    color: weight > 0.5 ? 'white' : colors.textLight,
                    border: `1px solid ${colors.border}`
                  }}
                >
                  {j <= i ? weight.toFixed(1) : '-'}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: '16px',
        backgroundColor: colors.bgAccent,
        borderRadius: '8px',
        fontSize: '14px',
        color: colors.text,
        lineHeight: '1.6'
      }}>
        <strong>💡 O que acontece:</strong> A atenção permite que cada token "olhe" para tokens
        anteriores e decida quais são relevantes. Note que "tapete" presta muita atenção em "gato"
        (0.4) - o modelo está aprendendo que gatos frequentemente se relacionam com tapetes!
        <br /><br />
        <strong>⚠️ Máscara causal:</strong> Os tokens só podem ver tokens anteriores (os "-" na matriz),
        não tokens futuros. Isso permite geração autorregressiva.
      </div>
    </div>
  );
};

// ============================================================
// MLP Block Visualization
// ============================================================

export const MLPDemo: React.FC = () => {
  const [activeNeuron, setActiveNeuron] = useState<number | null>(null);

  return (
    <div style={{
      backgroundColor: colors.bg,
      borderRadius: '12px',
      padding: '24px',
      border: `1px solid ${colors.border}`,
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h4 style={{ margin: '0 0 16px 0', color: colors.text, fontSize: '18px' }}>
        🧠 Bloco MLP (Multi-Layer Perceptron)
      </h4>

      <svg viewBox="0 0 400 200" style={{ width: '100%', maxWidth: '500px', display: 'block', margin: '0 auto' }}>
        {/* Input layer */}
        <text x="50" y="20" fill={colors.textLight} fontSize="12" textAnchor="middle">Entrada</text>
        {[0, 1, 2, 3].map((i) => (
          <circle
            key={`in-${i}`}
            cx="50"
            cy={50 + i * 40}
            r="15"
            fill={colors.bgAccent}
            stroke={colors.primary}
            strokeWidth="2"
          />
        ))}

        {/* Hidden layer (expanded) */}
        <text x="200" y="20" fill={colors.textLight} fontSize="12" textAnchor="middle">Camada Oculta (4x maior)</text>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <g key={`hidden-${i}`}>
            <circle
              cx="200"
              cy={25 + i * 22}
              r="12"
              fill={activeNeuron === i ? colors.primary : colors.bgLight}
              stroke={colors.secondary}
              strokeWidth="2"
              style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
              onMouseEnter={() => setActiveNeuron(i)}
              onMouseLeave={() => setActiveNeuron(null)}
            />
            {/* Connections from input */}
            {[0, 1, 2, 3].map((j) => (
              <line
                key={`conn-in-${j}`}
                x1="65"
                y1={50 + j * 40}
                x2="188"
                y2={25 + i * 22}
                stroke={colors.border}
                strokeWidth="0.5"
                opacity="0.5"
              />
            ))}
          </g>
        ))}

        {/* Output layer */}
        <text x="350" y="20" fill={colors.textLight} fontSize="12" textAnchor="middle">Saída</text>
        {[0, 1, 2, 3].map((i) => (
          <g key={`out-${i}`}>
            <circle
              cx="350"
              cy={50 + i * 40}
              r="15"
              fill={colors.bgAccent}
              stroke={colors.primary}
              strokeWidth="2"
            />
            {/* Connections from hidden */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((j) => (
              <line
                key={`conn-out-${j}`}
                x1="212"
                y1={25 + j * 22}
                x2="335"
                y2={50 + i * 40}
                stroke={colors.border}
                strokeWidth="0.5"
                opacity="0.5"
              />
            ))}
          </g>
        ))}

        {/* ReLU/GELU label */}
        <text x="200" y="195" fill={colors.accent} fontSize="11" textAnchor="middle" fontWeight="600">
          Ativação: GELU(x)
        </text>
      </svg>

      <div style={{
        marginTop: '16px',
        padding: '16px',
        backgroundColor: colors.bgAccent,
        borderRadius: '8px',
        fontSize: '14px',
        color: colors.text,
        lineHeight: '1.6'
      }}>
        <strong>💡 O que acontece:</strong> O MLP primeiro <em>expande</em> a representação
        (tipicamente 4x), aplica uma função de ativação não-linear (GELU), e depois
        <em>comprime</em> de volta. Isso permite ao modelo aprender padrões complexos
        e não-lineares. Cada neurônio pode "especializar-se" em detectar padrões específicos!
      </div>
    </div>
  );
};

// ============================================================
// Probability Distribution & Temperature
// ============================================================

export const TemperatureDemo: React.FC = () => {
  const [temperature, setTemperature] = useState(1.0);

  const baseLogits = [2.5, 2.3, 1.8, 0.5, 0.3, 0.1, -0.5, -1.0];
  const tokens = ['Paris', 'Londres', 'Roma', 'Berlim', 'Madrid', 'Lisboa', 'Viena', 'Praga'];

  // Apply softmax with temperature
  const scaledLogits = baseLogits.map(l => l / temperature);
  const maxLogit = Math.max(...scaledLogits);
  const expLogits = scaledLogits.map(l => Math.exp(l - maxLogit));
  const sumExp = expLogits.reduce((a, b) => a + b, 0);
  const probs = expLogits.map(e => e / sumExp);

  return (
    <div style={{
      backgroundColor: colors.bg,
      borderRadius: '12px',
      padding: '24px',
      border: `1px solid ${colors.border}`,
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h4 style={{ margin: '0 0 16px 0', color: colors.text, fontSize: '18px' }}>
        🎲 Temperatura e Amostragem
      </h4>

      <p style={{ color: colors.textLight, fontSize: '14px', marginBottom: '16px' }}>
        Prompt: "A capital da França é ___"
      </p>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ color: colors.textLight, fontSize: '14px' }}>Temperatura:</span>
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            style={{ flex: 1, maxWidth: '200px' }}
          />
          <span style={{
            fontFamily: 'monospace',
            fontSize: '16px',
            fontWeight: '600',
            color: temperature < 0.5 ? colors.primary : temperature > 1.5 ? colors.accent : colors.text,
            minWidth: '40px'
          }}>
            {temperature.toFixed(1)}
          </span>
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        {tokens.map((token, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <span style={{
              width: '60px',
              fontFamily: 'monospace',
              fontSize: '14px',
              color: colors.text
            }}>
              {token}
            </span>
            <div style={{
              flex: 1,
              height: '24px',
              backgroundColor: colors.bgLight,
              borderRadius: '4px',
              overflow: 'hidden',
              maxWidth: '300px'
            }}>
              <div style={{
                width: `${probs[i] * 100}%`,
                height: '100%',
                backgroundColor: i === 0 ? colors.success : colors.primary,
                transition: 'width 0.3s ease',
                borderRadius: '4px'
              }} />
            </div>
            <span style={{
              fontFamily: 'monospace',
              fontSize: '12px',
              color: colors.textLight,
              minWidth: '50px'
            }}>
              {(probs[i] * 100).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>

      <div style={{
        padding: '16px',
        backgroundColor: temperature < 0.5
          ? 'rgba(16, 185, 129, 0.1)'
          : temperature > 1.5
            ? 'rgba(219, 39, 119, 0.1)'
            : colors.bgAccent,
        borderRadius: '8px',
        fontSize: '14px',
        color: colors.text,
        lineHeight: '1.6',
        border: `1px solid ${temperature < 0.5 ? colors.success : temperature > 1.5 ? colors.accent : 'transparent'}`
      }}>
        <strong>
          {temperature < 0.5
            ? '❄️ Temperatura Baixa:'
            : temperature > 1.5
              ? '🔥 Temperatura Alta:'
              : '⚖️ Temperatura Média:'}
        </strong>
        {' '}
        {temperature < 0.5
          ? 'O modelo é muito determinístico, quase sempre escolhendo a opção mais provável. Bom para respostas factuais.'
          : temperature > 1.5
            ? 'A distribuição é mais "achatada", tornando tokens menos prováveis mais competitivos. Mais criativo, mas pode ser imprevisível!'
            : 'Um equilíbrio entre determinismo e criatividade.'}
      </div>
    </div>
  );
};

// ============================================================
// Hallucination Explanation
// ============================================================

export const HallucinationDemo: React.FC = () => {
  const [showReal, setShowReal] = useState(true);

  const realContext = [
    { token: 'Albert', prob: 0.95 },
    { token: 'Einstein', prob: 0.92 },
    { token: 'nasceu', prob: 0.88 },
    { token: 'em', prob: 0.91 },
    { token: '1879', prob: 0.73 },
  ];

  const hallucinatedContext = [
    { token: 'O', prob: 0.85 },
    { token: 'primeiro', prob: 0.78 },
    { token: 'presidente', prob: 0.65 },
    { token: 'de', prob: 0.89 },
    { token: 'Gondwana', prob: 0.42 },
    { token: 'foi', prob: 0.71 },
    { token: 'João', prob: 0.31 },
    { token: 'Silva', prob: 0.28 },
  ];

  const context = showReal ? realContext : hallucinatedContext;

  return (
    <div style={{
      backgroundColor: colors.bg,
      borderRadius: '12px',
      padding: '24px',
      border: `1px solid ${colors.border}`,
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h4 style={{ margin: '0 0 16px 0', color: colors.text, fontSize: '18px' }}>
        👻 Alucinação: Por Que LLMs "Inventam" Coisas
      </h4>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        <button
          onClick={() => setShowReal(true)}
          style={{
            padding: '8px 16px',
            backgroundColor: showReal ? colors.success : colors.bgLight,
            color: showReal ? 'white' : colors.text,
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ✓ Fato Real
        </button>
        <button
          onClick={() => setShowReal(false)}
          style={{
            padding: '8px 16px',
            backgroundColor: !showReal ? colors.accent : colors.bgLight,
            color: !showReal ? 'white' : colors.text,
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ✗ Alucinação
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          padding: '16px',
          backgroundColor: colors.bgLight,
          borderRadius: '8px'
        }}>
          {context.map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                padding: '8px 12px',
                backgroundColor: item.prob > 0.7
                  ? `rgba(16, 185, 129, ${item.prob})`
                  : item.prob > 0.4
                    ? `rgba(245, 158, 11, ${item.prob + 0.3})`
                    : `rgba(239, 68, 68, ${item.prob + 0.4})`,
                color: 'white',
                borderRadius: '6px',
                fontFamily: 'monospace',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                {item.token}
              </div>
              <div style={{
                fontSize: '10px',
                color: colors.textLight,
                marginTop: '4px'
              }}>
                {(item.prob * 100).toFixed(0)}%
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: '16px',
        backgroundColor: showReal ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
        borderRadius: '8px',
        fontSize: '14px',
        color: colors.text,
        lineHeight: '1.6',
        border: `1px solid ${showReal ? colors.success : '#ef4444'}`
      }}>
        {showReal ? (
          <>
            <strong>✓ Por que isso funciona:</strong> O modelo viu milhões de textos sobre Einstein
            durante o treinamento. Existe um padrão estatístico forte: "Albert Einstein nasceu em 1879"
            aparece consistentemente nos dados. Cada token tem alta probabilidade dado o contexto.
          </>
        ) : (
          <>
            <strong>✗ Por que isso é uma alucinação:</strong> "Gondwana" é um supercontinente pré-histórico,
            não um país. O modelo nunca viu "presidente de Gondwana" nos dados de treinamento.
            Mas os padrões linguísticos "O primeiro presidente de [X] foi [Nome]" são comuns!
            <br /><br />
            O modelo <em>continua gerando</em> mesmo quando não tem informação real, porque foi
            treinado para <strong>sempre produzir o próximo token mais provável</strong> - não para
            dizer "eu não sei".
          </>
        )}
      </div>
    </div>
  );
};

// ============================================================
// Non-Determinism Explanation
// ============================================================

export const NonDeterminismDemo: React.FC = () => {
  const [runs, setRuns] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const possibleOutputs = [
    'Paris, a cidade luz.',
    'Paris é a resposta.',
    'Paris, obviamente!',
    'Paris, capital francesa.',
    'Paris, sem dúvida.',
  ];

  const runGeneration = () => {
    setIsRunning(true);
    const newOutput = possibleOutputs[Math.floor(Math.random() * possibleOutputs.length)];
    setTimeout(() => {
      setRuns(prev => [newOutput, ...prev].slice(0, 5));
      setIsRunning(false);
    }, 500);
  };

  return (
    <div style={{
      backgroundColor: colors.bg,
      borderRadius: '12px',
      padding: '24px',
      border: `1px solid ${colors.border}`,
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h4 style={{ margin: '0 0 16px 0', color: colors.text, fontSize: '18px' }}>
        🎰 Por Que LLMs Não São Determinísticos
      </h4>

      <p style={{ color: colors.textLight, fontSize: '14px', marginBottom: '16px' }}>
        Mesmo prompt: "Qual é a capital da França? Responda brevemente."
      </p>

      <button
        onClick={runGeneration}
        disabled={isRunning}
        style={{
          padding: '12px 24px',
          backgroundColor: isRunning ? colors.bgLight : colors.primary,
          color: isRunning ? colors.textLight : 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: isRunning ? 'not-allowed' : 'pointer',
          fontSize: '14px',
          fontWeight: '600',
          marginBottom: '20px'
        }}
      >
        {isRunning ? '⏳ Gerando...' : '▶️ Executar Modelo'}
      </button>

      {runs.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '14px', color: colors.textLight, marginBottom: '8px' }}>
            Respostas geradas (mesmo prompt):
          </div>
          {runs.map((run, i) => (
            <div key={i} style={{
              padding: '12px 16px',
              backgroundColor: i === 0 ? colors.bgAccent : colors.bgLight,
              borderRadius: '6px',
              marginBottom: '8px',
              fontFamily: 'monospace',
              fontSize: '14px',
              color: colors.text,
              border: i === 0 ? `2px solid ${colors.primary}` : 'none'
            }}>
              {i === 0 && <span style={{ color: colors.primary, marginRight: '8px' }}>→</span>}
              {run}
            </div>
          ))}
        </div>
      )}

      <div style={{
        padding: '16px',
        backgroundColor: colors.bgAccent,
        borderRadius: '8px',
        fontSize: '14px',
        color: colors.text,
        lineHeight: '1.6'
      }}>
        <strong>🎲 Por que isso acontece?</strong>
        <br /><br />
        <strong>1. Amostragem probabilística:</strong> O modelo calcula probabilidades para
        cada token possível, mas <em>sorteia</em> o próximo token baseado nessas probabilidades
        (não escolhe sempre o mais provável).
        <br /><br />
        <strong>2. Efeito cascata:</strong> Uma pequena diferença no primeiro token propagado
        muda todo o contexto para os tokens seguintes.
        <br /><br />
        <strong>3. Paralelismo de GPU:</strong> Operações de ponto flutuante em GPUs podem
        ter pequenas variações devido à ordem de execução paralela.
        <br /><br />
        <em>Nota: Com temperatura=0 e seed fixa, o modelo pode ser determinístico,
        mas perde criatividade.</em>
      </div>
    </div>
  );
};

// ============================================================
// Grokking Visualization
// ============================================================

export const GrokkingDemo: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stages = [
    { step: 0, train: 0, test: 0, phase: 'Início', desc: 'Modelo inicializado com pesos aleatórios' },
    { step: 100, train: 85, test: 15, phase: 'Memorizando', desc: 'Modelo começa a memorizar exemplos de treino' },
    { step: 200, train: 100, test: 18, phase: 'Memorizado', desc: 'Treino perfeito! Mas teste ainda péssimo...' },
    { step: 500, train: 100, test: 20, phase: 'Platô', desc: 'Parece que nada está acontecendo...' },
    { step: 1000, train: 100, test: 22, phase: 'Platô', desc: 'Estruturas internas começando a se formar' },
    { step: 2000, train: 100, test: 25, phase: 'Platô', desc: 'Padrões de seno/cosseno emergindo' },
    { step: 5000, train: 100, test: 35, phase: 'Transição', desc: 'Algo está mudando!' },
    { step: 7000, train: 100, test: 95, phase: 'Grokking!', desc: 'BOOM! Generalização súbita!' },
    { step: 10000, train: 100, test: 100, phase: 'Completo', desc: 'Modelo aprendeu o algoritmo real' },
  ];

  useEffect(() => {
    if (isPlaying && step < stages.length - 1) {
      const timer = setTimeout(() => setStep(s => s + 1), 1000);
      return () => clearTimeout(timer);
    } else if (step >= stages.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, step]);

  const current = stages[step];

  return (
    <div style={{
      backgroundColor: colors.bg,
      borderRadius: '12px',
      padding: '24px',
      border: `1px solid ${colors.border}`,
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h4 style={{ margin: '0 0 16px 0', color: colors.text, fontSize: '18px' }}>
        🧩 Grokking: Quando Modelos "Entendem" de Verdade
      </h4>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        <button
          onClick={() => { setStep(0); setIsPlaying(true); }}
          style={{
            padding: '8px 16px',
            backgroundColor: colors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ▶️ Reproduzir
        </button>
        <button
          onClick={() => setIsPlaying(false)}
          style={{
            padding: '8px 16px',
            backgroundColor: colors.bgLight,
            color: colors.text,
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ⏸️ Pausar
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="range"
          min="0"
          max={stages.length - 1}
          value={step}
          onChange={(e) => { setStep(parseInt(e.target.value)); setIsPlaying(false); }}
          style={{ width: '100%' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: colors.textLight }}>
          <span>Step 0</span>
          <span>Step {current.step}</span>
          <span>Step 10000</span>
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '20px',
        flexWrap: 'wrap'
      }}>
        {/* Training accuracy */}
        <div style={{ flex: 1, minWidth: '150px' }}>
          <div style={{ fontSize: '12px', color: colors.textLight, marginBottom: '8px' }}>
            Acurácia Treino
          </div>
          <div style={{
            height: '120px',
            backgroundColor: colors.bgLight,
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: `${current.train}%`,
              backgroundColor: colors.success,
              transition: 'height 0.5s ease'
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '24px',
              fontWeight: '700',
              color: current.train > 50 ? 'white' : colors.text
            }}>
              {current.train}%
            </div>
          </div>
        </div>

        {/* Test accuracy */}
        <div style={{ flex: 1, minWidth: '150px' }}>
          <div style={{ fontSize: '12px', color: colors.textLight, marginBottom: '8px' }}>
            Acurácia Teste
          </div>
          <div style={{
            height: '120px',
            backgroundColor: colors.bgLight,
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: `${current.test}%`,
              backgroundColor: current.test > 80 ? colors.primary : colors.warning,
              transition: 'height 0.5s ease'
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '24px',
              fontWeight: '700',
              color: current.test > 50 ? 'white' : colors.text
            }}>
              {current.test}%
            </div>
          </div>
        </div>
      </div>

      <div style={{
        padding: '16px',
        backgroundColor: current.phase === 'Grokking!'
          ? 'rgba(79, 70, 229, 0.15)'
          : colors.bgAccent,
        borderRadius: '8px',
        fontSize: '14px',
        color: colors.text,
        lineHeight: '1.6',
        border: current.phase === 'Grokking!' ? `2px solid ${colors.primary}` : 'none'
      }}>
        <strong style={{ fontSize: '16px' }}>
          {current.phase === 'Grokking!' ? '🎉 ' : ''}{current.phase}
        </strong>
        <br />
        {current.desc}
        {current.phase === 'Grokking!' && (
          <>
            <br /><br />
            <strong>O modelo parou de memorizar e aprendeu o algoritmo real!</strong>
            Internamente, desenvolveu representações usando senos e cossenos
            para resolver aritmética modular.
          </>
        )}
      </div>
    </div>
  );
};

// ============================================================
// Complete Pipeline Visualization
// ============================================================

export const FullPipelineDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: 'Entrada', icon: '📝', color: colors.primary },
    { name: 'Tokenização', icon: '🔤', color: colors.secondary },
    { name: 'Embedding', icon: '🌐', color: colors.accent },
    { name: 'Atenção', icon: '👁️', color: colors.success },
    { name: 'MLP', icon: '🧠', color: colors.warning },
    { name: 'Softmax', icon: '📊', color: colors.primary },
    { name: 'Amostragem', icon: '🎲', color: colors.accent },
    { name: 'Saída', icon: '✨', color: colors.success },
  ];

  return (
    <div style={{
      backgroundColor: colors.bg,
      borderRadius: '12px',
      padding: '24px',
      border: `1px solid ${colors.border}`,
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h4 style={{ margin: '0 0 16px 0', color: colors.text, fontSize: '18px' }}>
        🔄 Pipeline Completo: Da Entrada à Saída
      </h4>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflowX: 'auto',
        padding: '20px 0',
        gap: '8px'
      }}>
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div
              onClick={() => setActiveStep(i)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                opacity: i <= activeStep ? 1 : 0.4,
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: i === activeStep ? step.color : colors.bgLight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                border: `3px solid ${step.color}`,
                transition: 'all 0.3s ease'
              }}>
                {step.icon}
              </div>
              <span style={{
                marginTop: '8px',
                fontSize: '11px',
                color: i === activeStep ? step.color : colors.textLight,
                fontWeight: i === activeStep ? '600' : '400',
                textAlign: 'center',
                maxWidth: '60px'
              }}>
                {step.name}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                width: '30px',
                height: '3px',
                backgroundColor: i < activeStep ? steps[i + 1].color : colors.border,
                transition: 'all 0.3s ease'
              }} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
        <button
          onClick={() => setActiveStep(s => Math.max(0, s - 1))}
          disabled={activeStep === 0}
          style={{
            padding: '8px 16px',
            backgroundColor: activeStep === 0 ? colors.bgLight : colors.primary,
            color: activeStep === 0 ? colors.textLight : 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
            fontSize: '14px'
          }}
        >
          ← Anterior
        </button>
        <button
          onClick={() => setActiveStep(s => Math.min(steps.length - 1, s + 1))}
          disabled={activeStep === steps.length - 1}
          style={{
            padding: '8px 16px',
            backgroundColor: activeStep === steps.length - 1 ? colors.bgLight : colors.primary,
            color: activeStep === steps.length - 1 ? colors.textLight : 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
            fontSize: '14px'
          }}
        >
          Próximo →
        </button>
      </div>
    </div>
  );
};

export default {
  TokenizationDemo,
  OneHotEncodingDemo,
  EmbeddingDemo,
  AttentionDemo,
  MLPDemo,
  TemperatureDemo,
  HallucinationDemo,
  NonDeterminismDemo,
  GrokkingDemo,
  FullPipelineDemo,
};
