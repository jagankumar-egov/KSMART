import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { PrivateRoute, BreadCrumb } from "@egovernments/digit-ui-react-components";
import { useTranslation } from "react-i18next";
import DeathCrFlow from "./DeathCrFlow";
import { DeathRegistration } from "./DeathRegistraion";

const DeathFlowApp = ({ parentUrl }) => {
  const { path } = useRouteMatch();
  console.log(parentUrl);
  // let { data: newConfig, isLoading } = Digit.Hooks.tl.useMDMS.getFormConfig(stateId, {});
  // newConfig = newConfigCR;
  return (
    <React.Fragment>
      <Switch>
        <Route path={`${path}`} exact>
        <DeathCrFlow path={path} />
        </Route>
        <PrivateRoute  parentRoute={path} path={`${path}/death-registration`} component={() => <DeathRegistration parentUrl={path} />} />
   
        {/* <PrivateRoute parentRoute={path} path={`${path}/cr-flow`} component={() => <CrFlow parentUrl={path} />} /> */}
        {/* <PrivateRoute parentRoute={path} path={`${path}/death-registration`} component={() => <DeathRegistration parentUrl={path} />} /> */}
      </Switch>
    </React.Fragment>
  );
};

export default DeathFlowApp;
