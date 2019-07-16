import React, { useState } from "react";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div className="ui container">
      <button
        onClick={() => setResource("posts")}
        className="ui button primary"
      >
        Posts
      </button>
      <button
        onClick={() => setResource("todos")}
        className="ui button primary"
      >
        Todos
      </button>
      {resource}
    </div>
  );
};

export default App;
