import DrawerStyled from "../../components/Drawer/Drawer";
import UserContent from "./UserContent";
import UserHeader from "./UserHeader";
import useUsers from "../../hooks/useUsers";

export default function UserDrawerView({
  open,
  onClose,
  githubId,
}: {
  open: boolean;
  onClose: any;
  githubId: number;
}) {
  const { users } = useUsers();
  const findUser = users.find((item) => item.id === githubId);

  return (
    <DrawerStyled
      open={open}
      onClose={onClose}
      content={<UserContent content={findUser} />}
      header={<UserHeader name={findUser?.name} />}
    />
  );
}
