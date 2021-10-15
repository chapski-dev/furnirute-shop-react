import { Avatar } from "antd";
import "./UserActions.scss"
import { UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const UserActions = () => {
  return (
    <div className="header-user-actions">
      <a href='#' className="user-actions-item user-actions__like">
        <Avatar size="large" icon={<HeartOutlined />} />
      </a>
      <a href='#' className="user-actions-item user-actions__baskt">
        <Avatar size="large" icon={<ShoppingCartOutlined />} />
      </a>
      <a href="#" className="user-actions-item user-actions__img">
        <Avatar size="large" icon={<UserOutlined />} />
      </a>
    </div>
  )
}

export default UserActions;
