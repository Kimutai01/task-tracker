import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const onClick = () => {
    onAdd();
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "close" : "Add"}
        onClick={onClick}
      />
    </header>
  );
};
Header.defaultProps = {
  title: "Task tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//   color: "blue",
//   backgroundColor: "black",
// };
export default Header;
