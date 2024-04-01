import React from "react";
import "./searchProduct.css";
import Card from "react-bootstrap/Card";
import Axios from "axios";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function SearchProduct() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = `82e453da`;
  const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };
  return (
    <div className="search-con">
      <h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1>
      <form className="search-searchForm" onSubmit={onSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="enter ingredient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="search-submit" type="submit" value="Search" />
      </form>

      <div className="parent">
        <div className="children">
          {recipes.map((item) => (
            <Card key={Math.random()} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.recipe.image} />
              <Card.Body>
                <Card.Title>{item.recipe.label}</Card.Title>
                <Card.Text>{item.recipe.mealType}</Card.Text>
                <Card.Text>{item.recipe.cuisineType}</Card.Text>
                <Nav.Link>
                  <Button variant="primary">
                    Have :{Math.floor(item.recipe.calories)} calories
                  </Button>
                </Nav.Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
