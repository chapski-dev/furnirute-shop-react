import './NavItem.scss'


function generateDropdownList (list) {
  if (!list.length) return false;
  return (
      <ul className="nav-item-dropdown">
        {list.map((dropdown) => (
            <li>
              <a href="#" className="nav-item-dropdown-link">{dropdown}</a>
            </li>
        ))}
      </ul>
  )
}

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-item-link">
        {props.title}
      </a>
        {generateDropdownList(props.list)}
    </li>
  )
}

NavItem.defaultProps = {
  title: '',
  list: []
}

export default NavItem;