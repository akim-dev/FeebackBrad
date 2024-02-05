import propsType from "prop-types";

function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: propsType.string,
  name: propsType.string,
};

Header.defaultProps = {
  title: "Feedback UI",
  name: "Akim",
};

export default Header;
