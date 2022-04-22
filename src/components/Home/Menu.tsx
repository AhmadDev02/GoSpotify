import { MouseEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setActiveMenu } from '../../redux/activeMenuSlice';
import { menuType } from '../../libs/types';
import { setUser, selectUser } from '../../redux/userSlice';
import { selectToken } from '../../redux/tokenSlice';
import { publicUrl } from '../../libs/values';

function Menu({ view, setView }: menuType) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  function lest(menu: string, e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    dispatch(setActiveMenu(menu));
    setView(menu);
  }

  async function getUserInfo() {
    try {
      const url = 'https://api.spotify.com/v1/me';
      await axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((res: any) => {
          dispatch(setUser(res.data));
        });
    } catch (err) {
      console.error(err);
    }
  }

  function LogoutButton() {
    return (
      <div className="btn-logout">
        <a href="/logout">LOGOUT</a>
      </div>
    );
  }

  function UserCard() {
    return (
      <div className="navbar-right">
        <div className="home-page">
          <div className="user-card">
            <div className="image">
              <img
                src={user.images[0].url}
                title={user.display_name}
                alt={user.display_name}
              />
            </div>
            <div className="info">
              <span>
                {user.display_name}
              </span>
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    getUserInfo();
  }, []);

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
    <div className="container-fluid ">
      <div className="navbar-header">
        <a className="navbar-brand" href="https://www.spotify.com/">
          <img
            src={publicUrl + '/img/Spotify_Green.png'}
            alt="Icon"
            style={{ width: 150, height: 50 }}
          />
        </a>
      </div>
      {menuList.map((item) => (
        <div
          key={item.name}
        >
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link"
                onClick={(e) => { lest(item.name, e); }}
                href={`${item.name}`}
              >
                <p>
                  {item.name}
                </p>
              </a>
            </li>
          </ul>
        </div>
      ))}
      <div>
        {user && <UserCard />}
      </div>
    </div>

  );
}

export default Menu;
