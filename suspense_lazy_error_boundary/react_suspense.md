
2. React Suspense 

A lazy-loaded component may take time to load → React needs something to show meanwhile.

That “loading placeholder” is handled by <Suspense fallback={...}>

<Suspense fallback={<h2>Loading...</h2>}>
    <About />
</Suspense>


React will show the fallback UI until the component finishes loading.


import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;




//////////////////////////////////////////////////////////////////////////////

🎯 Real-World Use Cases of Lazy Loading
Where lazy-loading helps:

✔ Pages behind routes (About, Contact, Profile, Dashboard)
✔ Heavy components like charts, maps, graphs
✔ Admin dashboards
✔ Image-heavy pages

You should NOT lazy load:

❌ small UI components
❌ components used frequently in the app