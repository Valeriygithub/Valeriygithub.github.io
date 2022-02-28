import React, { useState, useEffect } from "react";
import axios from "axios";
import LocalStorageRepository from "../../localStorage";

const MyGetPost = () => {
  const baseURL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [recept, setRecept] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setRecept(response.data);
    });
  }, []);

  if (!recept) return null;

  async function fetchPosts() {
    const response = await axios.get(baseURL);
    setRecept(response.data);
    setBtnDisabled(false);
  }

  function addRec() {
    let repo = new LocalStorageRepository();
    let array = JSON.stringify(recept);
    let parse = JSON.parse(array);
    let object = Object.values(parse);
    object.map((el) => {
      return el.map((elem) => {
        return repo.addRecept(elem);
      });
    });
    setBtnDisabled(true);
  }

  return (
    <div>
      {recept.meals.map((el) => {
        return (
          <div className="boxCardReceptRandom" key={el.strMeal}>
            {el.strMealThumb != null ? (
              <img className="imageRecept"  src={el.strMealThumb} alt="img" />
            ) : (
              <img
                className="imageRecept"
                src="/images/no_img.jpg"
                alt="img"
              />
            )}
            <h2 className="nameFud">{el.strMeal}</h2>
            <div className="scroll">
              <p className="descriptionRecept">{el.strInstructions}</p>
            </div>
            <div className="btn-box">
              <button onClick={fetchPosts} className="btnSkip">
                Skip
              </button>
              {btnDisabled === false ? (
                <button onClick={addRec} className="btnLike">
                  Like
                </button>
              ) : (
                <button disabled className="btnLike-active">
                  Like
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyGetPost;
