import './Header.scss';
import Nav from './Nav';
import Search from "./Search";
import UserActions from './UserActions';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content-wrapper">
          <Logo />
          <Nav/>
          <Search />
          <UserActions />
        </div>
      </div>
    </header>
  );
}

export default Header;