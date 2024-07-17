import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const RecipesFind = () => {
  const [products, setProducts] = useState([]);
  const [keys, setKeys] = useState([]);
  // const [activeItem, setActiveItem] = useState(null);

  const apiCall = async (url) => {
    const response = await axios.get(url);
    setProducts(response.data.recipes);
  };

  useEffect(() => {
    apiCall("https://dummyjson.com/recipes");
  }, []);

  const memoResult = useMemo(() => {
    // console.log("filter memo");
    // return products.filter((item) =>
    //   item.ingredients.includes("Salt and pepper to taste")
    // );
    return products.filter(
      (item) => item.prepTimeMinutes > 20 && item.servings > 5
    );
  }, [products]);

  useEffect(() => {
    if (products.length > 0) {
      const productKeys = Object.keys(products[0]);
      setKeys(productKeys);
    }
  }, [products]);

  return (
    <div>
      {memoResult.map((item) => (
        <div key={item.id}>
          <div className="flex items-center gap-2 font-bold">
            <img
              loading="lazy"
              src={item.image}
              className="w-[50px] rounded-full"
              alt=""
            />
            <span
              className="cursor-pointer"
              // onClick={() => handleChange(item.id)}
            >
              {item.name}
            </span>
          </div>
          {
            <div>
              {item.instructions.map((instruction, index) => (
                <div key={index}>
                  {index + 1}.{instruction}
                </div>
              ))}
            </div>
          }
        </div>
      ))}
      {keys.map((key, index) => (
        <div key={index}>{key}</div>
      ))}
    </div>
  );
};

export default RecipesFind;
