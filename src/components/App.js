import React from "react";

class App extends React.Component {
  state = {
    resource: "posts"
  };
  render() {
    return (
      <div className="ui container">
        <button
          onClick={() => this.setState({ resource: "posts" })}
          className="ui button primary"
        >
          Posts
        </button>
        <button
          onClick={() => this.setState({ resource: "todos" })}
          className="ui button primary"
        >
          Todos
        </button>
        <br />
        {this.state.resource}
      </div>
    );
  }
}

export default App;
