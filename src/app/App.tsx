import 'app/styles/index.scss';
import {Link} from "react-router-dom";
import {useTheme} from "shared/contexts/ThemeContext/useTheme";
import {classNames} from "shared/libs/classNames/classNames";
import {AppRouter} from "app/router"



const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <AppRouter />
    </div>
  );
};

export default App;
