import Navigation from "../Navigation/nav";
import { Component } from "react";
function Test() {

   class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { pageError: true };
    }
  }
  
  return (
    <ErrorBoundary>
      <section className="container">
        <section className="navigation">
          <Navigation />
        </section>
      </section>
    </ErrorBoundary>
  );
}

export default Test;