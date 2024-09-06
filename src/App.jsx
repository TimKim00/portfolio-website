import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Styles
import GlobalStyles from "./styles/GlobalStyles";
import ThemeProvider from "./contexts/ThemeContext";

// Pages
import Root from "./Root";

import AboutPage from "./pages/AboutPage";
import AllPostPage from "./pages/AllPostPage";
import Post from "./components/Post";
import AllTagsPage from "./pages/AllTagsPage";
import TagPage from "./components/TagPage";
import ErrorPage from "./pages/ErrorPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import ProjectPage from "./components/ProjectPage";
import Homepage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/post",
        element: <AllPostPage />,
        children: [
          {
            path: ":slug",
            element: <Post />,
          },
        ],
      },
      {
        path: "/tags",
        element: <AllTagsPage />,
        children: [
          {
            path: ":tag",
            element: <TagPage />,
          },
        ],
      },
      {
        projects: "/projects",
        element: <AllProjectsPage />,
        children: [
          {
            path: ":project",
            element: <ProjectPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
],
{basename: import.meta.env.BASE_URL});

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <RouterProvider router={router} basename={import.meta.env.BASE_URL} />
      </ThemeProvider>
    </>
  );
}

export default App;
