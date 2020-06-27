import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { ContainerTest } from '@containers';
import getSpaConfig from '../config/spa/index';
//

const AppRouter = ({ config }) => {
  // console.log("AppRouter config: ", config);
  //
  const spaConfig = getSpaConfig(config.environment);
  var isStandalone = spaConfig.mode === 'standalone';
  var basepath = '/' + config.appBasepath;

  return (
    <Router basepath={basepath} primary={false} >
      <ContainerTest path="home" default={!isStandalone} standalone={isStandalone} />
    </Router>
  );
};

export default AppRouter;