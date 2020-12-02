import { FETCH_USERS } from "../actions/types";

export default function userReducer(state = {}, { type, payload }) {
  switch (type) {
    case FETCH_USERS:
      return payload;
    default:
      return state;
  }
}
