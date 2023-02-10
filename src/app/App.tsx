import 'app/styles/index.scss';
import {useTheme} from "shared/contexts/ThemeContext/useTheme";
import {classNames} from "shared/libs/classNames/classNames";
import {AppRouter} from "app/router"
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";


const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
