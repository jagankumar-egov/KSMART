import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { PrivateRoute, BreadCrumb } from "@egovernments/digit-ui-react-components";
import { useTranslation } from "react-i18next";
import { ReactComponent as BankIcon } from "../Img/BankIcon.svg";
import { ReactComponent as FileProtected } from "../Img/FileProtected.svg";
import CrFlow from "./CrFlow";
import DeathCrFlow from "./DeathCrFlow";
import SelectStructureType from "../../../pageComponents/SelectStructureType";
import { newConfig as newConfigCR } from "../../../config/config";
import { DeathRegistration } from "./DeathRegistraion";

const CrFlowApp = ({ parentUrl }) => {
  const { path } = useRouteMatch();
  console.log(parentUrl);
  // let { data: newConfig, isLoading } = Digit.Hooks.tl.useMDMS.getFormConfig(stateId, {});
  // newConfig = newConfigCR;
  return (
    <React.Fragment>
      <Switch>
        <Route path={`${path}`} exact>
          <CrFlow path={path} />
        </Route>
        <PrivateRoute  parentRoute={path} path={`${path}/structure-type`} component={() => <SelectStructureType parentUrl={path} />} />
        <Route path={`${path}`} exact>
          <DeathCrFlow path={path} />
        </Route>
        {/* <PrivateRoute parentRoute={path} path={`${path}/cr-flow`} component={() => <CrFlow parentUrl={path} />} /> */}
        <PrivateRoute parentRoute={path} path={`${path}/death-cr`} component={() => <DeathCrFlow parentUrl={path} />} />
        <PrivateRoute parentRoute={path} path={`${path}/death-registration`} component={() => <DeathRegistration parentUrl={path} />} />
      </Switch>
    </React.Fragment>
  );
};

export default CrFlowApp;
