import React from "react";
import "./App.css";
import Child from "./Component/OffCanvas/Child";
import ApiCall from "./Component/APICall/ApiCall";
import Api from "./Component/APICall/Api";
import Parent from "./Component/UseMemo/Parent";
import CallbackParant from "./Component/UseCallBack/CallbackParant";
import Timer from "./Component/Timer/Timer";
import Sale from "./Component/Timer/Sale";
import Nuvolo from "./Component/Task/Nuvolo";
import RecipesFind from "./Component/APICall/Task/RecipesFind";
import ProductsCate from "./assets/ProductsCate";
import FilterTitle from "./Component/Task/FilterTitle";
import FormIntegration from "./Component/Task/FormIntegration";
import UserProfile from "./Component/Task/UserProfile";
import PhoneBook from "./Component/PhoneBook/PhoneBook";


function App() {
  return (
    <div
    >
      <PhoneBook />
    </div>
  );
}

export default App;
