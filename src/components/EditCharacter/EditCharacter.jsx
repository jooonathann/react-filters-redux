import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const EditCharacter = ({ characters, editCharacter, characterToUpdate }) => {
  const [characterInfoToEdit, setCharacterInfoToEdit] = useState({});
  const { id } = useParams();
  const idParams = id;
  const navigate = useNavigate();
  console.log(characters)
  const ShowCharacterInfo = async () => {
    const indexChar = characters.findIndex(ele => ele.id === parseInt(idParams))
    console.log(indexChar)

    console.log(characters[indexChar])
    setCharacterInfoToEdit(characters[indexChar])
    return characters[indexChar]
  };

  useEffect(() => {
    ShowCharacterInfo();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value
      ? e.target.elements.name.value
      : characterInfoToEdit.name;
    const lastname = e.target.elements.lastname.value
      ? e.target.elements.lastname.value
      : characterInfoToEdit.lastname;
    const age = e.target.elements.age.value
      ? e.target.elements.age.value
      : characterInfoToEdit.age;
    const favoritecolor = e.target.elements.favoritecolor.value
      ? e.target.elements.favoritecolor.value
      : characterInfoToEdit.favoritecolor;
    const country = e.target.elements.country.value
      ? e.target.elements.country.value
      : characterInfoToEdit.country;
    const hobbie = e.target.elements.hobbie.value
      ? e.target.elements.hobbie.value
      : characterInfoToEdit.hobbie;
    const image = characterInfoToEdit.image;

    const body = {
      id: parseInt(idParams),
      name: name,
      lastname: lastname,
      age: parseInt(age),
      favoritecolor: favoritecolor,
      country: country,
      hobbie: hobbie,
      image: image,
    };
    // console.log('body  ', body)
    editCharacter(body);
    navigate(-1);
  };
  return (
    <div className="updateCharacter">
      <h2 className="updateH2">Empty fields will remain the same</h2>

      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="updateName">
          <input
            className="editField"
            type="text"
            name="name"
            placeholder={characterInfoToEdit.name}
            id="name"
          />
        </div>

        <div className="updateOtherInfo">
          <input
            className="editField"
            type="text"
            name="lastname"
            placeholder={characterInfoToEdit.lastname}
            id="lastname"
          />
          <br />

          <input
            className="editField"
            type="text"
            name="age"
            placeholder={characterInfoToEdit.age}
            id="age"
          />
          <br />

          <input
            className="editField"
            type="text"
            name="favoritecolor"
            placeholder={characterInfoToEdit.favoritecolor}
            id="favoritecolor"
          />
          <br />

          <input
            className="editField"
            type="text"
            name="country"
            placeholder={characterInfoToEdit.country}
            id="country"
          />
          <br />

          <input
            className="editField"
            type="text"
            name="hobbie"
            placeholder={characterInfoToEdit.hobbie}
            id="hobbie"
          />
          <br />
          <input className="submitButton" type="submit" value="Update info" />

          <img className="imgUpdate" src={characterInfoToEdit.image} />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    editCharacter: (payload) => dispatch( {type: "characters/editCharacter", payload} ),
    characterToUpdate: (payload) => dispatch( {type: "characters/characterShow", payload} ),
    

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCharacter);
