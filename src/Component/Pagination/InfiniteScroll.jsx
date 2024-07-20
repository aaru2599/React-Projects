import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const LoadMoreComponent = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 20;

  const fetchItems = useCallback(
    async (page) => {
      setLoading(true);
      const skip = (page - 1) * itemsPerPage;
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`
        );
        setItems((prevItems) => [...prevItems, ...response.data.products]);
        setHasMore(response.data.products.length > 0);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    },
    [itemsPerPage]
  );

  useEffect(() => {
    fetchItems(page);
  }, [page, fetchItems]);

  const loadMoreItems = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const uniqueCategory = Array.from(
    new Set(items.map((item) => item.category))
  );
  console.log("uniqueCategory",uniqueCategory);
  return (
    <div>
      <h1>Load More List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex items-center mb-4">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-20 h-20 mr-4"
            />
            <div>{item.title}</div>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {hasMore && !loading && (
        <button
          onClick={loadMoreItems}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default LoadMoreComponent;
