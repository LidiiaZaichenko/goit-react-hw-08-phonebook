import { useSelector } from 'react-redux';
import { Avatar, Button } from 'antd';
import { Wrap } from './Usermenu.styled';
import { logOut } from 'Redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons';
import { selectEmail } from '../../Redux/selectors';

export const UserMenu = () => {
  const { email } = useSelector(selectEmail);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Avatar>{email.slice(0, 1).toUpperCase()}</Avatar>
      <p>{email}</p>
      <Button type="primary" onClick={() => dispatch(logOut())}>
        <LogoutOutlined /> Log out
      </Button>{' '}
    </Wrap>
  );
};
