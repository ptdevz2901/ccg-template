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
import { Home } from './pages/Home';
import { Footer } from './layout/Footer';

const routes = [
  {
    path: "/",
    element: <Home />,
  },
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
