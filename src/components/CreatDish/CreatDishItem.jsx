import React from "react";

const CreatDishItem = (recept) => {
  return (
    // _____________________
    <div>
      <div className="boxForCard">
        <div className="boxCardRecept">
          {recept.recept.strMealThumb === null ? (
            <img
              className="imageRecept"
              src="/images/no_img.jpg"
              width="100%"
              alt="img"
            />
          ) : (
            <img
              className="imageRecept"
              src={recept.recept.strMealThumb}
              alt="img"
            />
          )}
          <div style={{ paddingBottom:'1px'}}>
            <h2 className="nameFud">{recept.recept.strMeal}</h2>
            <div className="scroll">
              <p className="descriptionRecept">
                {recept.recept.strInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatDishItem;
