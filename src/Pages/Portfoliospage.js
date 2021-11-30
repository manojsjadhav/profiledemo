import React, { useState } from "react";
import Category from "../Component/Category";
import Menuitems from "../Component/Menuitems";
import Tittle from "../Component/Tittle";
import Portfolios from "../Component/portfolios";

const allCategory = [
  "All",
  ...new Set(Portfolios.map((item) => item.category)),
];
console.log(allCategory);
const Portfoliospage = () => {
  const [category, setCategory] = useState(allCategory);
  const [menuItems, setMenuItems] = useState(Portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(Portfolios);
      return;
    }
    const filterredData = Portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filterredData);
  };
  return (
    <div className="portfoliospage">
      <div className="Title">
        <Tittle title={"portfolios"} span={"portfolios"} />
      </div>
      <div className="portfolios-data">
        <Category filter={filter} category={category} />
        <Menuitems menuItems={menuItems} />
      </div>
    </div>
  );
};

export default Portfoliospage;
