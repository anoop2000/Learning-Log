
Lazy Loading means:
👉 Load a component only when it is needed, not when the app loads.

This reduces bundle size and improves page load performance — especially in large applications.

🔷 How React.lazy() Works (Theory)

Normally when your app loads, all components get bundled together.
But if a component is behind a route — ex: /about page — you don’t need to load it now.

React.lazy() lets React split code into chunks.

Example:

const About = React.lazy(() => import('./About'));


⚡ This imports the component only at the moment it is rendered.