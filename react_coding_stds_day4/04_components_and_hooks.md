
React has moved toward functional components and hooks as the modern standard for building UI. Class components are no longer recommended for new projects because functional components are simpler, cleaner, and more efficient.

This document explains:

Why functional components are preferred

How to structure them

All the important Hook rules

Examples using useState and useEffect



Functional components:

✔ Are easier to write
✔ Make your code cleaner and shorter
✔ Use hooks (state, lifecycle, context, ref)
✔ Perform better internally due to React Fiber updates
✔ Avoid the complexity of this, bindings, constructors


🎣 Hook Rules (VERY IMPORTANT)

React has strict rules for using hooks.

✔ Rule 1: Only Call Hooks at the Top Level

❌ Wrong:

if (loggedIn) {
  const [user, setUser] = useState(null); 
}


✔ Correct:

const [user, setUser] = useState(null);
if (loggedIn) {
  console.log(user);
}

✔ Rule 2: Never Call Hooks Inside Loops or Conditions

❌ Wrong:

for (let i = 0; i < 3; i++) {
  const [count, setCount] = useState(0);
}


✔ Correct:

const [count, setCount] = useState(0);

✔ Rule 3: Custom Hooks Must Start With use

For example:

✔ useFetch
✔ useAuth
✔ useLocalStorage

Custom hooks allow business logic to be reused across components.

======= useState – Managing Component State

useState lets you manage local state inside functional components.

======= useEffect – Handling Side Effects

useEffect allows you to run code after the component renders.

Used for:

API calls

Subscriptions

Event listeners

Timers

Updating the document title


------------------Best Practices for Using Hooks------------

✔ Keep state minimal—only store what changes
✔ Do not duplicate state
✔ Combine related data into objects
✔ Use multiple useEffect calls instead of one complicated one
✔ Move repeated logic into custom hooks