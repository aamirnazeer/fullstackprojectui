import { useSelector } from "react-redux";


const Body = () => {
	const user = useSelector((state) => state.user.value)
  const themeColor = useSelector((state) => state.theme.value)
  return (
    <div style={{color: themeColor}}>
      <h2>This is the body of the app</h2>
			<p>Name: {user.name}</p>
			<p>Age: {user.age}</p>
			<p>Email: {user.email}</p>
    </div>
  );
};

export default Body;
