import React, { useState } from "react";

const CategoryCompo = ({ category }) => {
  console.log("category", category);
  const catKey = Object.keys(category);
  const [catName, setCatName] = useState(null);
  const handleChange = (cat) => {
    setCatName((prev) => (prev === cat ? null : cat));
  };
  return (
    <div>
      {catKey.map((cat, index) => {
        return (
          <div
            key={index}
            className={`cursor-pointer duration-700 border-t-2 ${cat === catName ? "bg-blue-300" : "bg-pink-400"}`}
            onClick={() => handleChange(cat)}
          >
            <div className="flex gap-4 items-center">
              <div className="font-bold">{cat}</div>
              {cat === catName && <div>*</div>}
            </div>
            {cat === catName &&
              category[cat].map((item, i) => (
                <div key={i}>
                  <div>{item.title}</div>
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
};

const Category = React.memo(CategoryCompo);
export default Category;
