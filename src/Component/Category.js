import React from "react";

const Category = ({ filter, category }) => {
  return (
    <div className="buttons">
      {
          category.map((cat, i)=>{
              return <button type="button" className="btn-port" key={i} onClick={()=>filter(cat)} >{cat}</button>
          })
      }
    </div>
  );
};

export default Category;
