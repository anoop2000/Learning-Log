
Error Boundaries 

React components sometimes crash because of:
❌ bugs in JSX
❌ failed API responses
❌ undefined variables
❌ lazy-loaded component errors
❌ third-party library crashes

React will stop rendering the entire component tree if an error happens.

🚨 ERROR BOUNDARY = A special component that catches errors and shows fallback UI instead of crashing the entire app.


🔥 Error Boundary Rules

✔ Only class components can be error boundaries
✔ They catch errors below them in the component tree
✔ They don’t catch:

Event handler errors

Asynchronous errors

Server-side rendering errors.




🛑 Where Error Boundaries Help

✔ Lazy-loaded component fails
✔ Component has a rendering bug
✔ Network errors causing component crash
✔ Third-party library malfunction
✔ JSON parsing error
✔ Accessing undefined properties


🧠 Best Practices
Lazy Loading

✔ Split routes using React.lazy
✔ Always wrap lazy components inside Suspense
✔ Use loading skeletons for better UX
✔ Don’t overuse lazy loading (too many chunks = slow)

Error Boundaries

✔ Place Error Boundary high in the component tree
✔ Use multiple small error boundaries for different sections
✔ Log errors to a monitoring tool (Sentry, LogRocket)

🌟 Real-world Example (Amazon-style)

Lazy loading is used for:

Product Details Page

Heavy carousels

Reviews section

Image zoom component

Error boundaries are used to:

Prevent UI crashes due to network failures