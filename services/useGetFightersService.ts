import { useEffect, useState } from "react";
import Fighter from "../types/figher";
import { Service } from "../types/Service";

const useGetFightersService = () => {
  const [result, setResult] = useState<Service<Fighter[]>>({
    status: "loading",
  });

  useEffect(() => {
    fetch("./data/fighters.json")
      .then((response) => response.json())
      .then((response) => setResult({ status: "loaded", payload: response }))
      .catch((error) => setResult({ status: error, error }));
  }, []);

  return result;
};

export default useGetFightersService;
