import DrawerStyled from "../../components/Drawer/Drawer";
import { useContext } from "react";
import GlobalContextProps from "../../types/context";
import globalContext from "../../context/globalContext";
import UserContent from "./UserContent";
import UserHeader from "./UserHeader";

export default function UserDrawerView({
  open,
  onClose,
  githubId,
}: {
  open: boolean;
  onClose: any;
  githubId: number;
}) {
  const { users } = useContext<GlobalContextProps>(globalContext);
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
