import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();
  const status = 200;

  const onClick = () => {
    console.log("clicked");
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <h1>Post {params.id}</h1>
      <p>Name : {params.name}</p>
    </div>
  );
}

export default Post;
