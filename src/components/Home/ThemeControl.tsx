import { toggleModeType } from '../../libs/types';

function ThemeControl() {
  const themeList = [
    {
      themeName: 'theme-light-green',
      themeColor: '#006600',
    },
    {
      themeName: 'theme-dark-blue',
      themeColor: '#00008B',
    },
  ];

  function changeTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  function ToggleMode({ themeName, themeColor }: toggleModeType) {
    return (
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <div
              className="nav-link"
              style={{ backgroundColor: themeColor }}
              onClick={() => {
                changeTheme(themeName);
              }}
            />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
      {themeList.map((item) => (
        <ToggleMode themeName={item.themeName} themeColor={item.themeColor} />
      ))}
    </>
  );
}

export default ThemeControl;
