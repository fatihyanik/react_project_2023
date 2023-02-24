import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  useEffect(() => {
    const fetchSpecificApiData = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const recipeData = await response.json();
      setRecipe(recipeData);
    };
    fetchSpecificApiData();
  }, [params.name]);
  return (
    <DetailWrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {recipe.extendedIngredients !== undefined &&
              recipe.extendedIngredients.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.original}</li>;
              })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};
const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: #00204a;
    color: #fff;
    border-color: #00204a;
  }
  img {
    max-width: 40rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
