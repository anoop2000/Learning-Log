
This document outlines best practices for writing clean, maintainable JSX and applying consistent styling in React applications. Following these standards helps ensure readability, scalability, and overall code quality.

🧩 1. JSX Best Practices
✔ Use Meaningful, Semantic HTML

Prefer semantic elements to improve accessibility, SEO, and clarity.

Example:

<section>
  <h2>Services</h2>
  <p>We provide quality work.</p>
</section>

Avoid unnecessary <div> elements when a semantic tag is more appropriate.

✔ Keep JSX Clean & Well-Indented

❌ Bad:

<div><h1>Hello</h1><p>Welcome</p></div>

✔ Good:

<div>
  <h1>Hello</h1>
  <p>Welcome</p>
</div>

Proper indentation enhances readability and reduces structural mistakes.

✔ Use React Fragments When You Don’t Need Extra DOM Nodes

Example:

<>
  <Navbar />
  <Hero />
</>

Fragments help keep the DOM lightweight and avoid unnecessary wrappers.

✔ Break Large JSX Blocks Into Smaller Components

Avoid placing hundreds of lines of JSX in a single file.

Better Approach:

Services.jsx

Gallery.jsx

Testimonials.jsx

This promotes reusability, modularity, and easier maintenance.

🎨 2. Styling Best Practices
✔ Avoid Inline Styles (Unless Dynamic)

❌ Bad:

<div style={{ backgroundColor: "blue" }}></div>

✔ Good:

.container {
  background-color: blue;
}
<div className="container"></div>

Using CSS classes, SCSS, Tailwind, or styled-components encourages cleaner separation of concerns.

✔ Use Meaningful Class Names

✔ Good:

<div className="services-grid"></div>

❌ Bad:

<div className="div1"></div>

Descriptive names improve understanding and maintainability.

✔ Utilize Bootstrap Utility Classes When Appropriate

Example:

<div className="text-center py-5 px-3"></div>

This reduces custom CSS and speeds up development.

🎨 3. Conditional Styling in JSX

Apply styles dynamically using expressions:

<div className={isActive ? "card active" : "card"}></div>

This supports reactive UI states and behavior-driven styling.

🧼 4. Formatting JSX Props

For clarity, place multi-line props on separate lines:

✔ Clean:

<Component
  title="Service"
  onClick={handleClick}
  isActive={true}
/>

This improves readability and makes diffs cleaner in version control.