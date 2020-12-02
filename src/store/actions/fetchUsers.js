import { FETCH_USERS } from "./types";

const fetchUsers = (dispatch) => {
  fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_USERS, payload: res.data }));
};

export default fetchUsers;
