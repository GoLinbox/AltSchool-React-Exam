import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { pageError: false };
  }

  static getDerivedStateFromError(error) {
    return { pageError: true };
  }

  render() {
    const { pageError } = this.state;
    if (pageError) {
      // Error Message
      return (
        <div className="error-boundary">
          <img
            className="NotFound-logo"
            src={"/Logo/GoLinbox-1.png"}
            alt="Logo"
          />
          <h2>Sorry, an error occurred</h2>
          <div className="sol">
            <p>Navigate back to</p>
            <a href="/">Home</a>
            <p>Or</p>
            <a href="/contact">Contact us</a>
          </div>
        </div>
      ); 
    }
    // render children by default
    return this.props.children;
  }
}

export default ErrorBoundary;
