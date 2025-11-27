
⚡ 1. Avoid Unnecessary Re-Renders

React re-renders a child component whenever the parent renders — even if props don't change.

Use React.memo() when a component:

Receives props

Does not need to re-render for every parent update

✅ Example
function Button({ label }) {
  return <button>{label}</button>;
}

export default React.memo(Button);

✔ Benefits

Prevents wasted renders

Improves performance in large UI trees


🧠 2. Use useMemo for Expensive Computations

useMemo caches a value and recalculates it only when dependencies change.

Use it when you have:

Sorting large lists

Heavy calculations

Data transformations

✅ Example
const filteredList = useMemo(() => {
  return list.filter(item => item.visible);
}, [list]);


This improves performance by avoiding repeated heavy calculations on every render.


3. Use useCallback to Prevent Recreating Functions

Functions are recreated on every render → causing child components to re-render unnecessarily.

useCallback returns the same function reference until dependencies change.

✅ Example
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);

✔ Benefits

Prevents unnecessary re-renders

Essential when using React.memo


📦 4. Lazy Load Large Components

Lazy loading splits code into chunks and loads components only when needed.

Reduces:

Initial page load time

Bundle size

✅ Example
const Gallery = React.lazy(() => import("./Gallery"));

Wrap in <Suspense>:
<Suspense fallback={<p>Loading...</p>}>
  <Gallery />
</Suspense>



🖼️ 5. Optimize Images (Very Important)

Images are often the biggest performance bottleneck.

✔ Best Practices

Compress images

Use correct image dimensions

Prefer .webp format

Lazy load non-critical images

Keep images under 500KB whenever possible

Tools (optional):

TinyPNG, Squoosh, ImageOptim