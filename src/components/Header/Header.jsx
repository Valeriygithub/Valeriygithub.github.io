import React from "react";
import { Link, Outlet } from "react-router-dom";
import AddNewRecept from "../AddNewRecept/AddNewRecept";
import LocalStorageRepository from "../../localStorage";
const Header = () => {
  let repo = new LocalStorageRepository();
  const createRecept = (newRecept) => {
    repo.addRecept(newRecept);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="wrapper-nav">
            <nav>
              <ul className="nav-ul">
                <li>
                  <Link to="/">Random dish</Link>
                </li>
                <li>
                  <Link to="/favorites">Favourites</Link>
                </li>
              </ul>
              <div className="btn_addRecept" style={{ background: "#fff" }}>
                <AddNewRecept create={createRecept} />
              </div>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export { Header };
