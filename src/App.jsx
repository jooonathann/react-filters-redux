import "./css/index.css";
import React from "react";
import { connect } from "react-redux";
import ListCards from "./components/ListCards/ListCards";
import "./css/index.css";
import FiltersSection from "./components/FiltersSection/FiltersSection";
import { Route, Routes } from "react-router-dom";
import ShowCharacter from "./components/ShowCharacter/ShowCharacter";
import EditCharacter from "./components/EditCharacter/EditCharacter";
import CreateCharacter from "./components/CreateCharacter/CreateCharacter";
import HeaderContent from "./components/HeaderContent/HeaderContent";
export const App = ({ characters }) => {
  return (
    <div className={`main`}>
      <header>
        <HeaderContent />
      </header>

      <div className="container">
        {characters.length > 0 ? (
          <Routes>
            <Route
              exact
              path="/react-filters-redux/"
              element={
                <>
                  <FiltersSection />
                  <ListCards />
                </>
              }
            />
            <Route
              exact
              path="react-filters-redux/create-new-character"
              element={<CreateCharacter />}
            />
            <Route path="react-filters-redux/character/:id" element={<ShowCharacter />} />
            <Route path="react-filters-redux/character/:id/edit" element={<EditCharacter />} />
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        ) : (
          <h1>No characters to show</h1>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { characters: state.characters };
};


export default connect(mapStateToProps, null)(App);
