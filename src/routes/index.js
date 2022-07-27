import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Loadable from "../components/Loadable";

const HomeView = Loadable(lazy(() => import("../views/HomeView")));
const DocView = Loadable(lazy(() => import("../views/Documentation")));

export default function ThemeRoutes(props) {
  return useRoutes([
    {
      path: "/",
      element: <HomeView open={props.open} setOpen={props.setOpen} />,
    },

    { path: "/documentation", element: <DocView /> },
  ]);
}
