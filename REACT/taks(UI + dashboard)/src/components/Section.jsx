import React from "react";
import SideBar from "./SideBar";
import RightSide from "./RightSide";

const Section = ({ productList }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <SideBar />
      <div className="col-span-3">
        <RightSide productList={productList} />
      </div>
    </div>
  );
};

export default Section;
