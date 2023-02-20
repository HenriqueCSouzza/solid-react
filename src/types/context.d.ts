import UserProps from './user'
type GlobalContextProps = {
  user: UserProps | undefined
  setUser: React.Dispatch<React.SetStateAction<UserProps | undefined>>
  users: UserProps[] | []
}

export default GlobalContextProps
