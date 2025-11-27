
Error handling ensures your application responds gracefully to failures instead of crashing. Reliable applications proactively manage failures, display friendly messages, and preserve the user experience.

🚨 1. Why Error Handling Matters

Error handling improves:

✔ Application Stability

Prevents unhandled exceptions from breaking the UI.

✔ User Experience

Displays helpful messages instead of blank screens.

✔ Debugging

Helps developers quickly locate and fix issues.

✔ Reliability

Ensures consistent behaviour even in unexpected cases.

***************************************** Error Handling in API Calls ****************

------------All API calls must use try/catch to prevent unhandled promise rejections.

✅ Example
try {
  const data = await getData("/api/test");
  setData(data);
} catch (error) {
  console.error("API Error:", error);
  setError("Failed to load data.");


------------Showing Fallback UI

If something goes wrong, always show a safe fallback instead of crashing.

Example:
{error && <p className="text-danger">{error}</p>}


Or a more polished version:

{error && (
  <div className="alert alert-danger">
    {error}
  </div>
)}



⚠️ Validate Form Inputs Before Submitting

Prevent invalid data from being sent to the backend.

Example Validation:

if (!email.includes("@")) {
  setError("Please enter a valid email.");
  return;
}

Why?

Avoids unnecessary API calls

Improves user experience

Reduces backend load

🧯 Component-Level Error Boundaries (Advanced)

Error boundaries catch render-time errors in child components.

They do not catch errors in async code, event handlers, or server calls.

Example:
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    console.error("Error Boundary:", error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

Usage:
<ErrorBoundary>
  <App />
</ErrorBoundary>
