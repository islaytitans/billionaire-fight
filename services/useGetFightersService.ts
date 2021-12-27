import { useEffect, useState } from "react";
import Fighter from "../types/Fighter";
import { Service } from "../types/Service";

const useGetFightersService = () => {
  const [result, setResult] = useState<Service<Fighter[]>>({
    status: "loading",
  });

  useEffect(() => {
    fetch("./api/fighters")
      .then((response) => response.json())
      .then((response) => setResult({ status: "loaded", payload: response.fighters }))
      .catch((error) => setResult({ status: error, error }));
  }, []);

  return result;
};

export default useGetFightersService;
