import { Component } from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

class Loading extends Component {
  render() {
    return (
      <Loader
        className={styles.loader}
        type="BallTriangle"
        color="#663399"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}

export default Loading;
