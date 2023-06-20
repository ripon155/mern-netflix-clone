import { useContext } from "react";
import listContext from "../context/movie/listContext";

function useListContext() {
  return useContext(listContext);
}

export default useListContext;
