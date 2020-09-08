import React from "react";
import { Link } from 'react-router-dom'
import "./MainSideItem.scss";

const MainSideItem = (props) => {
  const { icons, title, path } = props;
  return (
    <div>
      <Link to={path}>
        <li className={"listContainer"}>
          {icons}
          <span className={"title"}>{title}</span>
        </li>
      </Link>
    </div>
  );
};

export default MainSideItem;
