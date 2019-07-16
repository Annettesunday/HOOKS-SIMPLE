import React from "react";
import axios from "axios";

class ResourceList extends React.Component {
  state = {
    resources: []
  };
  async componentDidMount() {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resources: response.data });
  }
  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
