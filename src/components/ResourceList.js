import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  //   arrow function is only called when the values are different
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  const renderList = () => {
    return <ul>
      {resources.map(resource => {
        return <li key={resource.id}>{resource.title}</li>;
      })}
    </ul>;
  };

  return (
    <div>
      {renderList()}
    </div>
  );
};

export default ResourceList;
