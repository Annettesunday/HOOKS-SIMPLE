import { useEffect, useState } from "react";
import axios from "axios";
const useResources = resource => {
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

  return resources;
};

export default useResources;
