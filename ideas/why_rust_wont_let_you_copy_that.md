# Blog Post Plan: Why Rust Won't Let You Copy That

## Metadata

```yaml
title: "Why Rust Won't Let You Copy That: Affine Types Through a Categorical Lens"
subtitle: "What JavaScript hides, Rust reveals — and category theory explains why"
series: "Category Theory for JS/TS Developers"
estimatedReadTime: "15-20 min"
difficulty: "intermediate"
prerequisites:
  - Familiarity with map/Option/Result
  - Basic Rust syntax (not expertise)
  - Conceptual comfort with "types as things, functions as arrows"
tags:
  - category-theory
  - rust
  - type-systems
  - linear-logic
  - functional-programming
draft: true
```

---

## Strategic Goals

1. **Bridge the JS→Rust gap** using categorical vocabulary readers already have
2. **Demystify Rust's "restrictions"** as mathematical structure, not arbitrary rules
3. **Introduce substructural logic** without requiring formal logic background
4. **Create reusable visual components** for the broader CT series

---

## Content Structure

### Part 0: The Hook (300 words)

**Purpose**: Create immediate recognition in JS developers, then productive confusion

**Content**:

```javascript
// The bug everyone has written
const config = { timeout: 5000 };
const copy = config;
copy.timeout = 10000;
// Oops, config.timeout is also 10000
```

```rust
// The wall every Rust beginner hits
let s = String::from("hello");
let t = s;
println!("{}", s); // ERROR: value borrowed after move
```

**Key line**: "These aren't arbitrary language quirks. They're two different answers to the same categorical question: *does your category have diagonals?*"

**Transition**: Promise that by the end, readers will see Rust's type system as a precise mathematical structure.

---

### Part 1: The Category You Already Know (500 words)

**Purpose**: Establish baseline — readers already think categorically, they just don't know it

**Concepts to cover**:

| Concept | JS/TS Reality | Categorical Name |
|---------|---------------|------------------|
| Types | `string`, `number`, `User` | Objects |
| Functions | `(x: A) => B` | Morphisms |
| Composition | `f(g(x))` | ∘ |
| Identity | `x => x` | id |
| Tuples/Objects | `[A, B]`, `{a: A, b: B}` | Products |
| Union types | `A \| B` | Coproducts |

**The crucial operation**: Introduce the diagonal morphism

```
Δ: A → A × A
Δ(x) = (x, x)
```

In JS, this is implicit and free:

```javascript
const x = obj;
const y = obj;  // Δ in action — free copying
```

**Visualization**: `viz-diagonal-morphism`
- Show an object A with an arrow splitting into A × A
- Animate `const x = obj; const y = obj;` as the diagonal

**Key insight**: This is a *cartesian* category. The diagonal exists for every object, automatically.

---

### Part 2: What If Copying Cost Something? (600 words)

**Purpose**: Motivate linear/affine logic through physical intuition before formalism

**Physical resources that can't be copied**:
- Money (spending $10 means you don't have it anymore)
- Energy (conservation laws)
- File handles, network connections, mutex locks
- Database transactions

**Introduce linear logic** (Girard, 1987):
- Propositions represent *resources*, not just truth values
- "A implies B" becomes "consuming A produces B"
- Tensor product ⊗ vs cartesian product ×

**The key distinction**:

| Category Type | Diagonal? | Product | Meaning |
|---------------|-----------|---------|---------|
| Cartesian | Δ: A → A × A exists for all A | × | Free copying |
| Monoidal | No general diagonal | ⊗ | Copying requires explicit structure |

**Structural rules of logic**:

```
Weakening:    Γ, A ⊢ B  →  Γ ⊢ B      (can ignore resources)
Contraction:  Γ, A, A ⊢ B  →  Γ, A ⊢ B  (can copy resources)
Exchange:     Γ, A, B ⊢ C  →  Γ, B, A ⊢ C  (order doesn't matter)
```

- **Linear logic**: drops weakening AND contraction (use exactly once)
- **Affine logic**: drops only contraction (use at most once) — **this is Rust**

**Visualization**: `viz-structural-rules`
- Interactive toggle: "Which rules does this language have?"
- JS: all three ✓
- Rust: weakening ✓, exchange ✓, contraction ✗

---

### Part 3: Rust Lives in the Monoidal World (700 words)

**Purpose**: Map Rust concepts directly to categorical structure

**Move semantics as resource consumption**:

```rust
fn consume(s: String) -> usize { 
    s.len() 
}  // s is consumed — the morphism "uses up" its domain

let greeting = String::from("hello");
let length = consume(greeting);
// greeting is gone — not in scope, not usable
```

**The Copy trait as comonoid structure**:

A comonoid in a monoidal category has:
- Comultiplication: δ: A → A ⊗ A (copying)
- Counit: ε: A → I (discarding)

```rust
// Types that implement Copy have comonoid structure
let x: i32 = 42;
let y = x;  // δ in action
let z = x;  // can use x again — diagonal exists for i32
```

**Clone as explicit copying**:

```rust
let s = String::from("hello");
let t = s.clone();  // Explicit δ — you're asking for the copy
let u = s;          // s is still valid after clone
```

**The mapping table**:

| Rust Concept | Categorical Structure | Intuition |
|--------------|----------------------|-----------|
| Move | Morphism consuming domain | Resource transfer |
| `Copy` trait | Comonoid (δ exists) | Free copying |
| `Clone` trait | Explicit δ morphism | Copying has cost |
| `Drop` | Terminal morphism A → () | Resource cleanup |
| Ownership | Linear/affine resource | Exactly one owner |

**Visualization**: `viz-rust-resource-flow`
- Animate a `String` value moving through a program
- Show consumption vs. cloning vs. Copy types
- Color-code: red = consumed, green = still valid, blue = copied

---

### Part 4: Borrowing as Controlled Observation (600 words)

**Purpose**: The deepest insight — borrowing has comonadic structure

**The problem borrowing solves**:

```rust
fn calculate_length(s: String) -> usize {
    s.len()
}  // Oops, we consumed the string just to look at it

fn calculate_length(s: &String) -> usize {
    s.len()
}  // Better — we just borrowed it
```

**Borrowing as observation without consumption**:

A borrow `&T` gives you access to T without using it up. This resembles comonadic structure:

```
extract: W A → A        (you can observe the value)
duplicate: W A → W (W A) (you can create more observations)
```

For `&T`:
- You can read the value (extract)
- You can create sub-borrows with narrower lifetimes (duplicate-ish)

**The `&T` vs `&mut T` split**:

| Borrow Type | Linear Logic | Meaning |
|-------------|--------------|---------|
| `&T` | Exponential !A | Freely copyable, many readers |
| `&mut T` | Linear A | Exactly one, exclusive access |

```rust
let s = String::from("hello");

// Multiple shared borrows — !A can be copied
let r1 = &s;
let r2 = &s;
println!("{} {}", r1, r2);  // Fine

// Exclusive borrow — linear, no sharing
let m = &mut s;
// let m2 = &mut s;  // ERROR: cannot borrow as mutable twice
```

**Lifetimes as indexing**:

The lifetime `'a` in `&'a T` is an *index* — it tracks how long the observation is valid. This is an indexed comonad.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
// The output lifetime is bounded by both input lifetimes
```

**Visualization**: `viz-borrow-lifetimes`
- Timeline showing owned value as a solid bar
- Borrows as translucent overlays with start/end points
- Show how multiple `&T` can overlap, but `&mut T` excludes others
- Interactive: drag borrow endpoints to see when errors occur

---

### Part 5: Functors, But Make It Explicit (500 words)

**Purpose**: Return to familiar ground, show how Rust makes functor structure explicit

**Option as a functor (familiar)**:

```rust
let x: Option<i32> = Some(5);
let y: Option<i32> = x.map(|n| n + 1);  // Some(6)
```

This is the same functor JS developers know from `Array.map`, `Promise.then`, etc.

**But Rust forces a choice**:

```rust
let opt = Some(String::from("hello"));

// Option 1: .map() takes ownership of inner value
let len = opt.map(|s| s.len());
// opt is now consumed!

// Option 2: .as_ref().map() borrows inner value
let opt = Some(String::from("hello"));
let len = opt.as_ref().map(|s| s.len());
// opt is still valid
```

**What's happening categorically**:

- `.map(f)` applies f in the "consuming" category (affine)
- `.as_ref().map(f)` lifts to the exponential (!A) first, then maps

```
map:        F(A) → F(B)           given A → B
as_ref+map: F(A) → F(&A) → F(B)   given &A → B
```

**The same pattern everywhere**:

```rust
// Vec
vec.iter().map(...)      // borrows elements
vec.into_iter().map(...) // consumes elements

// Result
result.as_ref().map(...)  // borrow Ok value
result.map(...)           // consume Ok value
```

**Visualization**: `viz-functor-paths`
- Functor diagram with two paths from F(A) to F(B)
- Path 1 (red): direct map, consumes
- Path 2 (blue): as_ref → map, observes
- Show the inner value's state at each step

---

### Part 6: The Payoff (400 words)

**Purpose**: Synthesize — why this mathematical perspective matters practically

**Rust's restrictions are mathematical coherence**:

The category doesn't have morphisms that would let you:
- Use a value after moving it (no general diagonal)
- Have two mutable references (linear resources are exclusive)
- Return a reference to a local value (lifetimes must be valid)

**Bugs become type errors**:

```rust
// Data race: two threads mutating same data
// In JS: runtime bug, sometimes
// In Rust: won't compile — can't send &mut T to two threads

// Use-after-free: accessing freed memory
// In JS: not possible (GC), but similar issues with stale references
// In Rust: won't compile — lifetime prevents it
```

**Concurrency for free**:

`Send` and `Sync` are categorical properties:
- `Send`: can transfer ownership across thread boundary
- `Sync`: can share references across thread boundary

The borrow checker ensures these properties are preserved through composition.

**The philosophical close**:

JavaScript gives you a cartesian closed category and hopes you don't break the implicit invariants. Rust gives you a symmetric monoidal closed category where the invariants *are* the structure.

The "restrictions" aren't restrictions — they're the shape of a safer universe.

---

## Technical Notes: Visualizations

### General Architecture

All visualizations should be React components using:
- **Mafs** for mathematical diagrams (coordinate-based)
- **Custom SVG** for categorical diagrams (node-link based)
- **Framer Motion** for animations

Create a shared component library: `src/components/ct-visualizations/`

### Visualization Specifications

#### `viz-diagonal-morphism`

**Purpose**: Show the diagonal Δ: A → A × A

**Elements**:
- Single node A on the left
- Product node A × A on the right (rendered as two stacked nodes)
- Arrow from A splitting into two arrows to each component

**Interactions**:
- Hover on A: highlight the "source" value
- Click "Copy": animate the split, show both destinations receiving the value

**Code hint**:
```tsx
// Use SVG path for the splitting arrow
<path d="M 50,100 C 100,100 100,50 150,50" /> // top branch
<path d="M 50,100 C 100,100 100,150 150,150" /> // bottom branch
```

#### `viz-structural-rules`

**Purpose**: Interactive comparison of structural rules across languages

**Elements**:
- Three toggle switches: Weakening, Contraction, Exchange
- Language presets: JS, Rust, Haskell, Linear Haskell

**Interactions**:
- Toggle switches to see which languages match
- Select a language to auto-set the toggles
- Show example code snippet that works/fails based on rules

**State**:
```tsx
interface StructuralRules {
  weakening: boolean;    // can ignore
  contraction: boolean;  // can copy
  exchange: boolean;     // order doesn't matter
}
```

#### `viz-rust-resource-flow`

**Purpose**: Animate resource consumption in Rust code

**Elements**:
- Code panel (left): Rust code with highlighted current line
- Resource panel (right): visual representation of values
- Timeline (bottom): step through execution

**States for values**:
- `valid`: green, solid
- `moved`: red, faded out with "moved" label
- `borrowed`: blue outline, original still green
- `mut-borrowed`: orange outline, original grayed

**Interactions**:
- Step forward/backward through execution
- Hover on variable to see its state
- "Play" button for automatic animation

**Example scenario**:
```rust
let s = String::from("hello");  // s: valid
let t = s;                       // s: moved, t: valid
let len = t.len();               // t: borrowed temporarily
println!("{}", t);               // t: still valid
```

#### `viz-borrow-lifetimes`

**Purpose**: Show lifetimes as temporal regions

**Elements**:
- Horizontal timeline (x-axis = execution time)
- Owned values as solid bars
- Borrows as translucent overlays on their source
- Scope boundaries as vertical dashed lines

**Interactions**:
- Drag borrow start/end to see when conflicts arise
- Toggle between valid/invalid states
- Show error message when rules are violated

**Rules to enforce visually**:
- Multiple `&T` can overlap
- `&mut T` cannot overlap with any other borrow
- All borrows must end before owner goes out of scope

#### `viz-functor-paths`

**Purpose**: Show the two paths through a functor with ownership choices

**Elements**:
- Commutative-ish diagram:
  ```
  F(A) ----map(f)----> F(B)
    |                    ^
    | as_ref             | map(g)
    v                    |
  F(&A) ----------------+
  ```
- Inner value visualization in each box

**Interactions**:
- Click a path to animate the transformation
- Show inner value state (consumed vs. preserved)
- Toggle between Option, Vec, Result examples

---

## Technical Notes: Code Examples

### Embedded Rust Playground

Use iframe to Rust Playground for runnable examples:

```html
<iframe 
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=YOUR_ENCODED_CODE"
  width="100%"
  height="400"
  frameborder="0"
/>
```

Encode code with `encodeURIComponent()`.

### Side-by-Side JS/Rust Comparisons

Create a component for synchronized code comparison:

```tsx
interface CodeComparisonProps {
  js: string;
  rust: string;
  highlightLines?: { js: number[]; rust: number[] };
}
```

---

## Technical Notes: Dependencies

### For Astro/React

```bash
npm install mafs framer-motion @codesandbox/sandpack-react
```

### For Rust Playground Embeds

No dependencies — use iframe to official playground.

### For Syntax Highlighting

```bash
npm install shiki
```

Configure for both JavaScript and Rust grammars.

---

## Writing Checklist

### Before Starting Each Section

- [ ] Re-read the section goal
- [ ] List the 2-3 key concepts that must land
- [ ] Identify which visualization supports this section
- [ ] Check if any prerequisites from earlier sections need reinforcement

### For Each Code Example

- [ ] Test in actual environment (JS in Node, Rust in playground)
- [ ] Ensure example is minimal — remove anything not essential
- [ ] Add comments only where categorical concept connects to code
- [ ] Create failing version for contrast where relevant

### For Each Visualization

- [ ] Sketch on paper first
- [ ] Identify all interactive states
- [ ] Write accessibility description
- [ ] Test with keyboard navigation

### Before Publishing

- [ ] Read aloud for flow
- [ ] Check all Rust examples compile (or fail as intended)
- [ ] Verify visualization interactions work on mobile
- [ ] Add "Further Reading" links
- [ ] Cross-link to other posts in CT series

---

## Further Reading Links

To include at the end:

- Girard, "Linear Logic" (1987) — the original paper
- Wadler, "Linear types can change the world!" — accessible intro
- Baez & Stay, "Physics, Topology, Logic and Computation: A Rosetta Stone" — CT across domains
- The Rust Book, Chapter 4 — official ownership explanation
- "Linear Haskell" paper — another language's approach

---

## Estimated Timeline

| Phase | Time | Output |
|-------|------|--------|
| Outline refinement | 1 day | Final section structure |
| Visualization prototypes | 3-4 days | Working React components |
| First draft | 3-4 days | Complete prose |
| Code example testing | 1 day | Verified examples |
| Visualization integration | 2 days | Embedded interactives |
| Revision | 2 days | Polished draft |
| Final review | 1 day | Published post |

**Total**: ~2 weeks

---

## Notes for Future Posts

This post sets up concepts for:

1. **Monads in Rust**: `Result` and `Option` as monads, `?` operator as bind
2. **Session Types**: π-calculus, linear types for protocols (connects to your io_uring work)
3. **Concurrency as Structure**: `Send`/`Sync` as functorial properties
4. **Dependent Types**: From Rust's lifetime system toward full dependent types

Consider creating a "CT Concepts" glossary component that appears across the series with consistent definitions.
