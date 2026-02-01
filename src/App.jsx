import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Main from "./Components/Main/Main";
import Error from "./Components/Error/Error";

const router = createHashRouter([
  {
    path: "/startFramework",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> }, // #/startFramework
      { path: "about", element: <About /> }, // #/startFramework/about
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "*", element: <Error /> },
    ],
  },
  { path: "*", element: <Error /> },
]);
function App() {
  // const routes = createHashRouter([
  //   {
  //     path: "/startFramework",
  //     element: <Layout />,
  //     children: [
  //       { index: true, element: <Main /> }, // #/startFramework
  //       { path: "about", element: <About /> }, // #/startFramework/about
  //       { path: "contact", element: <Contact /> },
  //       { path: "portfolio", element: <Portfolio /> },
  //       { path: "*", element: <Error /> },
  //     ],
  //   },
  // ]);

  // const router = createHashRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
