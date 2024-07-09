import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "./pagination.css";
const MainPage = () => {
  const itemPerPage = 10;
  const totalItem = 100;
  const [currentItem, setCurentItem] = useState([]);

  const fetchItems = (page) => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const items = Array.from(
      {
        length: totalItem,
      },
      (_, i) => `item${i + 1}`
    );
    setCurentItem(items.slice(startIndex, endIndex));
  };

  const handlePageChange = (page) => {
    fetchItems(page);
  };

  console.log("currentItem", currentItem);
  return (
    <div className="flex flex-col gap-6">
        <div className="text-[25px] font-bold text-center">Pagination</div>
      <div className="text-center flex flex-col gap-4">
        {currentItem.map((item, index) => {
          return (
            <div key={index} className="">
              {item}
            </div>
          );
        })}
      </div>
     <div className="text-center">
     <Pagination
        itemPerPage={itemPerPage}
        totalItem={totalItem}
        onPageChange={handlePageChange}
      />
     </div>
    </div>
  );
};

export default MainPage;
