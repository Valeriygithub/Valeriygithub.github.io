import React from "react";
import CreatDishItem from "./CreatDishItem";
import LocalStorageRepository from "../../localStorage";

const CreateDishList = () => {
  let repo = new LocalStorageRepository();
  let receipts = repo.getAllReceipts();
  return (
    <div className="wrapper-recept">
      {receipts.map((recept) => {
        return <CreatDishItem recept={recept} key={recept.idMeal} />;
      })}
    </div>
  );
};

export default CreateDishList;
