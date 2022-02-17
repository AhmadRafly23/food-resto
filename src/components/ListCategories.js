import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="mr-3" />;
  if (nama === "Minuman")
    return <FontAwesomeIcon icon={faCoffee} className="mr-3" />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="mr-3" />;
};

function ListCategories(props) {
  const [category, setCategory] = useState([]);
  const { ChangeCategories, categories } = props;

  useEffect(() => {
    async function getCategory() {
      try {
        const response = await axios(
          "https://my-json-server.typicode.com/AhmadRafly23/fake-foodresto-api/categories"
        );
        setCategory(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getCategory();
  }, []);
  return (
    <>
      <div className="col-md-2 mt-3">
        <h1 className="title-size">Category List</h1>
        <hr />
        <ul className="list-group mt-3">
          {category.map((category) => {
            return (
              <li
                className={`list py-3 px-4 ${
                  categories === category.nama && "categories-aktif"
                }`}
                key={category.id}
                onClick={() => ChangeCategories(category.nama)}
              >
                <Icon nama={category.nama} />
                {category.nama}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ListCategories;
