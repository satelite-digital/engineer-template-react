import { useHistory } from 'react-router-dom'

const Users = () => {
  const history = useHistory();
  const items = [0, 1, 2, 3, 4, 5, 6];
  const headers = ['name', 'email'];
  const onUserClick = (user)=>history.push(`/user/${user}`);
  return (
      <
      />
      <
      />
      
  );
};

export default Users;
