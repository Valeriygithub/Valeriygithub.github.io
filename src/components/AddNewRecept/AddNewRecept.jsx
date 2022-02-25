import React, { useState } from "react";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import MyTextarea from "../UI/MyTextarea/MyTextarea";
import "./AddNewRecept.css";

// image:strMealThumb // title:strMeal// descript:strInstructions
const AddNewRecept = ({ create }) => {
  const [modal, setModal] = useState(false);
  const [strMeal, setTitle] = useState("");
  const [strInstructions, setDescription] = useState("");
  const [strMealThumb, setStrMealThumb] = useState(null);

  const addNewRecept = (e) => {
    e.preventDefault();
    const newRecept = {
      idMeal: Date.now(),
      strMeal,
      strMealThumb,
      strInstructions,
    };
    (strMeal && strInstructions) !== ""
      ? create(newRecept)
      : console.log("Input is null");
    setTitle("");
    setDescription("");
    setModal(false);
  };

  return (
    <>
      <MyButton
        style={{ width: "192px", marginBottom: "-43px" }}
        onClick={() => setModal(true)}
      >
        Add custom dish
      </MyButton>
      {modal !== null && modal === true ? (
        <div className="modal">
          <div className="modal-body">
            <form>
              <h3 className="addCustomTitle">Add custom dish</h3>
              <MyInput
                value={strMeal}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Dish title"
              ></MyInput>
              <MyTextarea
                value={strInstructions}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Dish description"
              ></MyTextarea>
              <MyTextarea
                hidden
                value={strMealThumb}
                onChange={(e) => setDescription(e.target.value)}
              ></MyTextarea>
              <MyButton onClick={addNewRecept}>
                <strong>Add custom dish</strong>
              </MyButton>
            </form>
          </div>
        </div>
      ) : (
        console.log("modal is false")
      )}
    </>
  );
};
export default AddNewRecept;
