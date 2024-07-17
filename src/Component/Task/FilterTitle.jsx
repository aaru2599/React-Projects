import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
const alfa = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
const FilterTitle = () => {
  const [products, setProducts] = useState([]);
  const [selectedalfas, setSelectedAlfas] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log(alfa);
  useEffect(() => {
    apiCall("https://fakestoreapi.com/products");
  }, []);
  const apiCall = async (url) => {
    try {
      const responce = await axios.get(url);

      setProducts(responce.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCheckBoxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedAlfas([...selectedalfas, value]);
    } else {
      setSelectedAlfas(
        selectedalfas.filter((selectedAlfa) => selectedAlfa !== value)
      );
    }
  };

  const result = useMemo(() => {
    if (selectedalfas.length === 0) return products;
    const result = products.filter((product) => {
      return selectedalfas.some((selectedAlfa) =>
        product.title.toLowerCase().startsWith(selectedAlfa)
      );
    });
    console.log("result", result);
    return result.sort((a, b) => a.title.localeCompare(b.title));
  }, [selectedalfas, products]);

  console.log("result", selectedalfas);

  return (
    <div>
      <div className="flex gap-4" name="" id="">
        {alfa.map((item, index) => {
          return (
            <div key={index}>
              {item}
              <input
                type="checkbox"
                onChange={handleCheckBoxChange}
                value={item}
                checked={selectedalfas.includes(item)}
              />
            </div>
          );
        })}
      </div>
      {loading ? (
        <div> Loading</div>
      ) : result.length > 0 ? (
        <div className="flex flex-col gap-3">
          {result.map((item) => (
            <div key={item.id} className="flex gap-2">
              <img
                src={item.image}
                className="w-[25px] h-[25px] rounded-full"
                alt=""
              />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>No products</div>
      )}
    </div>
  );
};
export default FilterTitle;
