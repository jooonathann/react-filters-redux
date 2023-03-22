import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../css/index.css";

export const Card = ({ characterOrFilter, deleteharacters }) => {
  const handleDelete = (e) => {
    const personId = parseInt(e.target.id);
    deleteharacters(personId);
  };
  useEffect(() => {}, [characterOrFilter]);

  let list = characterOrFilter.map((item) => (
    <div
      className="cardContainer"
      key={String(item.id + item.name + item.country)}
    >
      <span className="spanButton">
        <button onClick={(e) => handleDelete(e)} id={item.id} className="xBtn">
          X
        </button>
      </span>
      <Link className="cardContent" to={`character/${item.id}`}>
        <h2 className="cardTitle">
          {item.name} <br />
          {item.lastname}
        </h2>
        <p className="cardNationality">{item.country}</p>
        <img className="imgProfile" alt={item.name} src={item.image} />
      </Link>
    </div>
  ));

  return <div className="listContainer">{list}</div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteharacters: (payload) => dispatch( {type: "characters/characterDeleted", payload} ),

    // deleteFromhobbieDispatch: (payload) =>
    // dispatch({ type: "categories/deleteFromhobbie", payload }),
  };
};

export default connect(null, mapDispatchToProps)(Card);
