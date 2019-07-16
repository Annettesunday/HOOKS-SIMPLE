import React from "react";
import useResources from "./useResources";



const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  const renderList = () => {
    return (
      <ul>
        {resources.map(resource => {
          return <li key={resource.id}>{resource.title}</li>;
        })}
      </ul>
    );
  };

  return <div>{renderList()}</div>;
};

export default ResourceList;
