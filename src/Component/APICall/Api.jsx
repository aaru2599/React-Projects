import React, { useEffect, useMemo, useState } from "react";
import useApi from "./useAPI";
import Category from "./Category";

const Api = () => {
  const [counter, setCounter] = useState(0);
  const {
    data: products,
    loading,
    error,
  } = useApi("https://fakestoreapi.com/products");

  // console.log({products,loading});

  // const memoCategory = useMemo(() => {
  //   if (products) {
  //     const category = [];
  //     products.forEach((product) => {
  //       if (!category.includes(product.category)) {
  //         category.push(product.category);
  //       }
  //     });

  //     return category;
  //   }
  //   return [];
  // }, [products]);
  console.log("memoCategory", products);
  const category = useMemo(() => {
    if (products) {
      return products.reduce((acc, curr) => {
        const key = curr["category"];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(curr);
        return acc;
      }, {});
    }
  },[products]);
  if (loading) return <div>Loading..</div>;

  return (
    <div>
      sdfsdf
      <button onClick={() => setCounter(counter + 1)}>counter</button>
      <div>{counter}</div>
      <Category category={category} />
    </div>
  );
};

export default Api;
