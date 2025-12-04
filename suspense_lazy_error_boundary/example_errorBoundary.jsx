
import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by boundary:", error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
