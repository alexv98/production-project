import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {HomePageLazy} from "./pages/HomePage/HomePage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>theme</button>
      <Link to={'/'}>MainPage</Link>
      <Link to={'/about'}>AboutPage</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<HomePageLazy />} />
          <Route path={'/about'} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;