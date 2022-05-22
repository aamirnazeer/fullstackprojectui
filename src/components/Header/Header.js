import { useDispatch } from "react-redux";
import { login, logout } from "../../features/user";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello, this the first Fullstack project</h1>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "aamir",
              age: 31,
              email: "aamirnazeerbhat@gmail.com",
            })
          );
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Header;
