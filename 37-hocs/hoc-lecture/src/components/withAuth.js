import React, { Component } from "react";

function withAuth(WrappedComponent, buttonText) {
  return class extends Component {
    state = {
      loggedIn: false
    };

    render() {
      return this.state.loggedIn ? (
        <WrappedComponent />
      ) : (
        <h2>
          Not logged in!{" "}
          <button onClick={() => this.setState({ loggedIn: true })}>
            {buttonText}
          </button>
        </h2>
      );
    }
  };
}

export default withAuth;
