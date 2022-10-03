import React from "react";
import {
  useParams,
  Navigate,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const Post = () => {
  const status = 200;
  const params = useParams();
  const navigate = useNavigate();

  const onClick = () => {
    console.log("use case: send req to server, OK");
    navigate("/about");
  };

  if (status === 404) return <Navigate to='/notfound' />;

  return (
    <div>
      {/* <p>params {params.id}</p>
      <p>params {params.name}</p> */}
      {/* if we update something from the server, sometimes we want to redirect the page */}
      {/* we use navigate */}
      <button onClick={onClick}>just</button>
      {/* nested routes */}
      <Routes>
        <Route path='/show' element={<h1>Hello</h1>} />
      </Routes>
    </div>
  );
};

export default Post;
