import { createContext, useMemo, useState } from 'react'
import GlobalContextProps from '../types/context'
import UserProps from '../types/user'
import userListing from '../mock/users'

const globalContext = createContext<GlobalContextProps | any>(null)
export default globalContext

export function GlobalContext({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<UserProps | undefined>()
  const [users, setUsers] = useState<UserProps[]>(userListing)

  const valueMemo = useMemo<GlobalContextProps>(
    () => ({
      user,
      setUser,
      users,
    }),
    [user, setUser, users],
  )

  return (
    <globalContext.Provider value={valueMemo}>
      {children}
    </globalContext.Provider>
  )
}
