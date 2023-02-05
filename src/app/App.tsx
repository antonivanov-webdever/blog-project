import 'app/styles/index.scss';
import {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {useTheme} from "shared/contexts/ThemeContext/useTheme";
import {classNames} from "shared/libs/classNames/classNames";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
