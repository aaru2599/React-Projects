import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiCall = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    apiCall("https://fakestoreapi.com/products");
  }, []);
  const apiCall = async (url) => {
    try {
      const responce = await axios.get(url);
      setProducts(responce.data);
      setFilterProduct(responce.data);
      const uniqueCategory = [];
      responce.data.forEach((item) => {
        if (!uniqueCategory.includes(item.category)) {
          uniqueCategory.push(item.category);
        }
      });
      setCategory(uniqueCategory);
      console.log("categoryasa", category);
    } catch (err) {
      console.log(err);
    }
  };

  const filterSearch = (category) => {
    setLoading(true);
    setTimeout(() => {
      if (category) {
        setFilterProduct(
          products.filter((product) => product.category === category)
        );
      } else {
        setLoading(true)
        setFilterProduct(products);
        setLoading(false)
      }
      setLoading(false);
    }, 1000);
  };
  // console.log("category", category);
  return (
    <div>
      {category ? (
        <div className="flex gap-3 cursor-pointer">
          <div onClick={() => filterProduct(null)}>All</div>
          {category.map((item, index) => (
            <div
              onClick={() => filterSearch(item)}
              className="capitalize"
              key={index}
            >
              <div>{item}</div>
            </div>
          ))}
        </div>
      ) : (
        "loading"
      )}
      <div className="flex flex-col gap-2">
        {loading
          ? "loading"
          : filterProduct.map((item, index) => (
              <div key={index} className="">
                <div>{item.title}</div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ApiCall;
