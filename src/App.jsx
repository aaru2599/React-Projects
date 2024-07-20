import React from "react";
import "./App.css";

import UserPagination from "./Component/Pagination/UserPagination";
import Todo from "./Component/Todo/Todo";
import TodoTask from "./Component/Todo/TodoTask";
import UsersTable from "./Component/Pagination/UsersTable";
import InfiniteScrollComponent from "./Component/Pagination/InfiniteScroll";
import LoadMoreComponent from "./Component/Pagination/InfiniteScroll";
import ModalMain from "./Component/Modal/ModalMain";
import Counter from "./Component/CounterWithCustomHooks/Counter";
import ProductSearch from "./Component/Products/ProductSearch";
import DraggableList from "./Component/DragAndDrop/Dragable";
import InputMain from "./Component/OtpInputFields/InputMain";

function App() {
  return (
    <div>
      <InputMain />
    </div>
  );
}

export default App;
