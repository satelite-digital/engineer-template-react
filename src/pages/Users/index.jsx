import { useHistory } from 'react-router-dom'
import Table from "../../components/Table";

const Users = () => {
  const history = useHistory();
  const items = [0, 1, 2, 3, 4, 5, 6];
  const headers = ['name', 'email'];
  const onUserClick = (user)=>history.push(`/user/${user}`);
  return (
      <Table
        rows={items}
        headers={headers}
        onRowClick={onUserClick}
      />
      
  );
};

export default Users;
