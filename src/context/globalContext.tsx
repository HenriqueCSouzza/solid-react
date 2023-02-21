import { createContext, useMemo, useState, useEffect } from 'react'
import GlobalContextProps from '../types/context'
import UserProps from '../types/user'
import userListing from '../mock/users'

const globalContext = createContext<GlobalContextProps | any>(null)
export default globalContext

export function GlobalContext({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<UserProps>()
  const [users, setUsers] = useState<UserProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [openUser, setOpenUser] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setUsers(userListing)
      setLoading(false)
    }, 3000)
  }, [])

  const valueMemo = useMemo<GlobalContextProps>(
    () => ({
      user,
      setUser,
      users,
      loading,
      openUser,
      setOpenUser,
    }),
    [user, setUser, users, loading, openUser, setOpenUser],
  )

  return (
    <globalContext.Provider value={valueMemo}>
      {children}
    </globalContext.Provider>
  )
}
