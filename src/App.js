import { useState, useEffect } from "react";
import "./App.css";
import ListCategories from "./components/ListCategories";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import axios from "axios";
import Menus from "./components/Menus";

function App() {
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState("Makanan");

  useEffect(() => {
    async function getMenu() {
      try {
        const response = await axios(
          "https://my-json-server.typicode.com/AhmadRafly23/fake-foodresto-api/products?category.nama=" +
            categories
        );
        setMenu(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMenu();
  }, [categories]);

  function ChangeCategories(value) {
    setCategories(value);
  }

  return (
    <>
      <Navbar />
      <div
        className="px-5 pb-5"
        style={{ backgroundColor: "#f0f2f5", height: "100vh" }}
      >
        <div className="row pt-2 px-3">
          <ListCategories
            ChangeCategories={ChangeCategories}
            categories={categories}
          />
          <div className="col mt-3">
            <h1 className="title-size">Product List</h1>
            <hr />
            <div className="row">
              {menu.map((item) => {
                return <Menus key={item.id} item={item} />;
              })}
            </div>
          </div>
          <Results />
        </div>
      </div>
    </>
  );
}

export default App;
