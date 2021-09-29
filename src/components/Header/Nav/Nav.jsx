import {useEffect, useState} from 'react'
import NavItem from './NavItem'
import './Nav.scss'

const Nav = () => {
    const [navItem, setNavItems] = useState([]);

    useEffect(() => {
        setNavItems([
            {title: 'Products', list: ['Product 1', 'Product 2', 'Product 3', 'Product 4']},
            {title: 'Rooms', list: ['Room 1', 'Room 2']},
            {title: 'Inspirations', list: []},
        ]);
    }, []);
    return (
      <nav className="nav">
        {navItem.map((navItem) => (
          <NavItem
            navItem={navItem}
            title={navItem.title}
            list={navItem.list}
          />
        ))}
      </nav>
    )
}

Nav.defaulProps = {
    data: []
}

export default Nav;