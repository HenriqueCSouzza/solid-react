import UserProps from './user'
type GlobalContextProps = {
  user: UserProps | undefined
  setUser: React.Dispatch<React.SetStateAction<UserProps | undefined>>
  users: UserProps[] | []
  loading: boolean
  openUser: boolean
  setOpenUser: React.Dispatch<React.SetStateAction<boolean>>
}

export default GlobalContextProps
