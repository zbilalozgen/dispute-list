import React from 'react';
import {Header, Sidebar, DisputeList} from "../components";

const MainContainer = () => {
  return (
    <>
      <div className="container-fluid main-wrapper">
        <Header/>
        <div className="row">
          <div className="col-sm-3 col-md-2 sidebar-container">
            <Sidebar/>
          </div>
          <div className="col-sm-9 col-md-10" style={{padding: '0px'}}>
            <DisputeList/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;