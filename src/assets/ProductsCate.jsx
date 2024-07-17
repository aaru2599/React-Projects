import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const ProductsCate = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    callApi("https://fakestoreapi.com/products");
  }, []);
  const callApi = async (url) => {
    try {
      setLoading(true);
      const responce = await axios.get(url);
      setLoading(false);
      setProducts(responce.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemoveItem = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };
  console.log("products", products);
  const categories = useMemo(() => {
    return products.reduce((acc, item) => {
      const key = item.category;
      acc[key] ? acc[key].push(item) : (acc[key] = []);

      return acc;
    }, {});
  }, [products]);

  const categoryKey = Object.keys(categories);
  console.log("categoryKey", categoryKey);
  const handleClick = (cat) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.category === cat ? { ...item, flag: !item.flag } : item
      )
    );
  };
  return (
    <div>
      {loading
        ? "Loading..."
        : categoryKey.map((cat, index) => {
            return (
              <div key={index}>
                <div
                  onClick={() => handleClick(cat)}
                  className="cursor-pointer font-bold"
                >
                  {cat}
                </div>
                {categories[cat].map((categoryItem) => {
                  return (
                    <div key={categoryItem.id}>
                      {" "}
                      {categoryItem.flag ? (
                        <div>
                          <div>{categoryItem.title}</div>
                          <button
                            onClick={() => handleRemoveItem(categoryItem.id)}
                          >
                            Remove
                          </button>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            );
          })}
    </div>
  );
};

export default ProductsCate;
