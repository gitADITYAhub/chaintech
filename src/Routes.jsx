import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "pages/NotFound";
import AssignmentTwo from "pages/AssignmentTwo";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <AssignmentTwo /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
