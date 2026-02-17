import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { HomePage } from "./pages/home-page";
import { ProjectsPage } from "./pages/projects-page";
import { AboutPage } from "./pages/about-page";
import { ServicesPage } from "./pages/services-page";
import { ContactPage } from "./pages/contact-page";
import { NotFoundPage } from "./pages/not-found-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "projects", Component: ProjectsPage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
