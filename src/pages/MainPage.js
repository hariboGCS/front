import React from "react";
import MainHeader from "../components/Main/MainHeader";
import MainSide from "../components/Main/MainSide/MainSide";
import Routes from "../Routes";
import './MainPage.scss'

const MainPage = () => {
  return (
    <div>
      <MainHeader />
      <div style={{ display: "flex" }}>
        <MainSide />
        <div className={"RoutePage"}>
          <Routes />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
