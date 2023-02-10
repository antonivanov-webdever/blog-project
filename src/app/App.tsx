import 'app/styles/index.scss';
import {useTheme} from "shared/contexts/ThemeContext/useTheme";
import {classNames} from "shared/libs/classNames/classNames";
import {AppRouter} from "app/router"
import {Navbar} from "widgets/Navbar";


const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
