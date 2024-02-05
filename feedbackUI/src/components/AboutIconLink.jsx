import { FaQuestion } from "react-icons/fa";
import Card from "./shared/Card";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      <div>
        {/* <Link
          to={{
            pathname: "/about",
            search: "?sort=name",
            hash: "#hello",
          }} */}
        <Link to={"/about"}>
          <FaQuestion size={30} />
        </Link>
      </div>
    </div>
  );
}
export default AboutIconLink;
