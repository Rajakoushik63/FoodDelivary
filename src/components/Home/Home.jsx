import { useState } from "react";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import Header from "../Header/Header";
import FoodDisplay from "../FoodDisplay/FoodDisplay"; // Ensure correct import
import "./Home.css";
import AppDowload from "../AppDowload/AppDowload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} /> {/* Passing category prop */}
      <AppDowload />
    </div>
  );
};

export default Home;
