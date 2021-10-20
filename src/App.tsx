import React, { useEffect } from "react";
import "./App.css";
import PostContainer from "./components/PostContainer";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { IUser } from "./models/IUser";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      {isLoading && <h1>Loading....</h1>}
      {error && <h1 style={{ color: "red" }}>{error}</h1>}
      <div className="users">
        {JSON.parse(JSON.stringify(users, null, 2)).map((user: IUser) => (
          <article className="user" key={user.id}>
            <h2 className="user__name">{user.name}</h2>
            <a className="user__email" href={`mailto:${user.email}`}>
              {user.email}
            </a>
          </article>
        ))}
      </div>

      <h1>Posts</h1>
      <PostContainer />
    </div>
  );
}

export default App;
