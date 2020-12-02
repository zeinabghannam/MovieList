import "./App.css";
import updateMoves from "./store/actions/updateMovies";
import { connect } from "react-redux";
import fetchUser from "./store/actions/fetchUsers";

function App(props) {
  return (
    <div className="App">
      <h1>THE MOVIE LIST WEBSITE !</h1>

      <br />

      <span style={{ color: "green" }}>YOUR CURRENT MOVIE IS 💣 </span>
      {props.movies.name}
      <br />
      <button onClick={props.updateMoves}>FETCH MOVIE</button>

      <br />

      <h3>GETTING USER NAMES</h3>
      {props.users.longth === 0 ? (
        <p> NO USERS </p>
      ) : (
        props.users.map((user) => {
          <h4 key={user.id}>
            {user.first_name} - {user.email}
          </h4>;
        })
      )}

      <br />

      <button onClick={props.fetchUser}>Fetch Users</button>
    </div>
  );
}

//map state to props:
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    users: state.users,
  };
};

//map dispatch to props:
const mapDispatchtoProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMoves),
    fetchUser: () => dispatch(fetchUser),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(App);
