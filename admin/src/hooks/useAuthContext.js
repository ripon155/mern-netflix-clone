import { useContext } from "react";
import authContext from "../context/authContext/authContext";

function useAuthContext() {
  return useContext(authContext);
}

export default useAuthContext;
