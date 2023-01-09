import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Importando Páginas
import Home from "../pages/homepage/index";
import QuemSomos from "../pages/quemsomos/index";
import EnsinoSecundarioICiclo from "../pages/primeirociclo/index";
import EnsinoSecundarioIICiclo from "../pages/segundociclo/index";


//Importando Componentes
import Header from "../components/header/index";
import Footer from "../components/footer/index";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quemsomos" component={QuemSomos} />
          <Route path="/segundociclo" component={EnsinoSecundarioIICiclo} />
          <Route path="/primeirociclo" component={EnsinoSecundarioICiclo} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routes;
