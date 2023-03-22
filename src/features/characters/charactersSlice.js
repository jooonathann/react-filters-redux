import data from './data'

const initialState = data

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case "characters/charactersAdded": {
      return [...state, action.payload];
    }
    case "characters/characterShow": {
      console.log('ACTION', action.payload)
      const indexToShow = state.findIndex((ele) => ele.id === action.payload);
      return state[indexToShow];
    }
    case "characters/characterDeleted": {
      console.log("action.payload  of characterDeleted", action.payload);
      return state.filter((character) => character.id !== action.payload);
    }
    case "characters/charactersLoaded": {
      return action.payload;
    }
    case "characters/newCharacterCreated": {
      console.log("ACTION PAYLOAD IN CREATED ", action.payload);
      return [...state, action.payload];
    }

    case "characters/editCharacter": {
      // console.log("first   ", action.payload.id);
      const indexToEdit = state.findIndex(
        (ele) => ele.id === parseInt(action.payload.id)
      );
      const newState = [...state];
      newState[indexToEdit] = action.payload;

      return newState;
    }
    default:
      return state;
  }
}

// export async function fetchCharacters(dispatch) {
//   const response = await fetch("https://react-postgres-server.onrender.com/characters");
//   const res = await response.json();
//   dispatch({ type: "characters/charactersLoaded", payload: res });
// }

// export function deleteharacters(personId) {
//   return async function (dispatch) {
//     await fetch(`https://react-postgres-server.onrender.com/characters${personId}`, {
//       method: "DELETE",
//     });
//     return dispatch({ type: "characters/characterDeleted", payload: personId });
//   };
// }

// export function createNewCharacter(body) {
//   console.log("body  of SLICE", body);
//   return async function (dispatch) {
//     console.log("---bodyyyyy----  ", body);

//     await fetch(`https://react-postgres-server.onrender.com/characters`, {
//       method: "POST",
//       mode: "cors",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     }).catch((err) => console.error("error ", err));
//     return dispatch({ type: "characters/newCharacterCreated", payload: body });
//   };
// }

// export function editCharacter(body) {
//   console.log("body  of SLICE", body);
//   return async function (dispatch) {
//     await fetch(`https://react-postgres-server.onrender.com/characters/${body.id}`, {
//       method: "PUT",
//       mode: "cors",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     }).catch((err) => console.error("error", err));
//     return dispatch({ type: "characters/editCharacter", payload: body });
//   };
// }
