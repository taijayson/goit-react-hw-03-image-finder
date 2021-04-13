import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ type = "button", onClick }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
