import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalState from "../context/globalState";

import routes from "../helpers/routes";
import LayoutPage from "../layouts/layoutPage";
import HomePage from "../components/home/homePage";
import Peoples from "../components/listallPeople/peopleContainer";

function AppRoutes() {
  return (
    <>
      <GlobalState>
        <Router>
          <Routes>
            <Route path={routes.layout} element={<LayoutPage />}>
              <Route index element={<HomePage />} />
              <Route path={routes.personaje} element={<Peoples />} />
            </Route>
          </Routes>
        </Router>
      </GlobalState>
    </>
  );
}

export default AppRoutes;
