import * as React from 'react';
import './App.less';
import { Route } from "react-router-dom";

import info from "./pages/Sidebar/info";

import Header from "./pages/Header/index";
import Sidebar from "./pages/Sidebar/index";

class App extends React.Component {
  public render() {
    const prefixCls = 'app';
    return (
      <div className={prefixCls}>
        <Header />
        <div className={`${prefixCls}-body`}>
          <Sidebar />
          {
            info.map((item, key) => {
              return item.url && <Route key={key} exact path={item.url} component={item.template} />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
