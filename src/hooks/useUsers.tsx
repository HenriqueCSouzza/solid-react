import { useContext } from "react";
import GlobalContextProps from "../types/context";
import globalContext from "../context/globalContext";

export default function useUsers() {
  const { users, user, openUser, setOpenUser, setUser, loading } =
    useContext<GlobalContextProps>(globalContext);

  return {
    users,
    user,
    openUser,
    setOpenUser,
    setUser,
    loading,
  };
}
