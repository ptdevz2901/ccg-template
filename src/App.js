import logo from './logo.svg';
import './App.css';
import { Header } from './layout/Header';
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Route,
  RouterProvider,
  useRoutes,
  Routes,
} from "react-router-dom";
import { Footer } from './layout/Footer';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Brand } from './pages/Brand/Brand';
import { News } from './pages/News/News';
import { Media } from './pages/Media/Media';
import { Contract } from './pages/Contract/Contract';
import { PATH } from './consts/path';

const routes = [
  {
    path: PATH.HOME,
    element: <Home />,
  },
  {
    path: PATH.ABOUT,
    element: <About />,
  },
  {
    path: PATH.NEWS,
    element: <News />
  },
  {
    path: PATH.BRAND,
    element: <Brand />
  },
  {
    path: PATH.MEDIA,
    element: <Media />
  },
  {
    path: PATH.CONTRACT,
    element: <Contract />
  }
]


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map((route) => {
          console.log(route)
          return <Route key={route.path} path={route.path} element={route.element} />
        })}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
