import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import "./MainHeader.scss";

const MainHeader = () => {
  return (
    <div className={"topBar"}>
      <p className={"logo"}>GCS</p>
      <div className={"bellIcon"}>
        <BsFillBellFill color="#fff"
          style={{ width: "30px", height: "30px"}}
        />
      </div>
    </div>
  );
};

export default MainHeader;
