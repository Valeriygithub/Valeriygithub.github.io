import React from "react";
import "../../App.css";
import CreateDishList from "../../components/CreatDish/CreateDishList";
import LocalStorageRepository from "../../localStorage";

const Favorites = () => {
  let repo = new LocalStorageRepository();
  let receipts = repo.getAllReceipts();
  return (
    <div className="boxCards">
      {receipts.length !== 0 ? (
        <CreateDishList />
      ) : (
        <h2 style={{ textAlign: "center",  marginTop: '100px' }}>Список рецептов пуст</h2>
      )}
    </div>
  );
};
export { Favorites };
