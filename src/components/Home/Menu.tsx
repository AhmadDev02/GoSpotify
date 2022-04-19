import { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Navbar } from 'react-bootstrap';
import { setActiveMenu, selectActiveMenu } from '../../redux/activeMenuSlice';
import { menuType } from '../../libs/types';

function Menu({ view, setView }: menuType) {
  const dispatch = useDispatch();
  const activeMenu = useSelector(selectActiveMenu);

  function lest(menu: string, e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    dispatch(setActiveMenu(menu));
    setView(menu);
  }

  const menuList = [
    {
      name: 'home',
      text: 'Home',
      icon: 'fa-home',
    },
    {
      name: 'playlists',
      text: 'Playlists',
      icon: 'fa-headphones-alt',
    },
  ];

  menuList.forEach((item) => {
    if (item.name === view) dispatch(setActiveMenu(view));
  });

  return (
    <>
      {/* <Navbar className="navbar navbar-default">
        <div className="container-fluid">
          {menuList.map((item) => (
            <ul className="nav navbar-nav">
              <li
                key={item.name}
                className={`${activeMenu === item.name ? 'menu-list-active ' : ''} menu-list`}
              >
                <a
                  onClick={(e) => { goTo(item.name, e); }}
                  href={`${item.name}`}
                >
                  Page 1
                </a>
              </li>
            </ul>
          ))}
        </div>
      </Navbar> */}
      <div className="menu">
        {menuList.map((item) => (
          <div
            key={item.name}
            className={`${activeMenu === item.name ? 'menu-list-active ' : ''} menu-list`}
          >
            <a
              onClick={(e) => { lest(item.name, e); }}
              href={`${item.name}`}
            >
              <i className={`fa ${item.icon}`} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
