import React, { useState } from "react";
import MainSideItem from "./MainSideItem/MainSideItem";
import {
  MdHome,
  MdNoteAdd,
  MdAssignment,
  MdAssessment,
  MdSettingsApplications,
} from "react-icons/md";
import "./MainSide.scss";

const ItemWrapper = (props) => {
  const { Items, active } = props;
  return Items.map((item, idx) => {
    const { name, title, path } = item;
    return (
      <MainSideItem
        icons={[name]}
        title={title}
        path={path}
        key={`item_key_${idx}`}
        active={idx === active}
      />
    );
  });
};

const MainSide = (props, { defaultActive }) => {
  const [activeIndex, ] = useState(defaultActive || 1);
  const sideItem = [
    { name: <MdHome size="24" color="#666666" />, title: "홈", path: "DashBoard" },
    {
      name: <MdNoteAdd size="24" color="#666666" />,
      title: "등록",
      path: "AddScore",
    },
    {
      name: <MdAssignment size="24" color="#666666" />,
      title: "조회",
      path: "SearchInfo",
    },
    {
      name: <MdAssessment size="24" color="#666666" />,
      title: "순위",
      path: "Ranking",
    },
    {
      name: <MdSettingsApplications size="24" color="#666666" />,
      title: "설정",
      path: "Setting",
    },
  ];

  return (
    <>
      <div className={"container"}>
        <ItemWrapper Items={sideItem} active={activeIndex} />
      </div>
    </>
  );
};

export default MainSide;
