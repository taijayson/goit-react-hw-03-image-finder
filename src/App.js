import React, { Component } from "react";

import Loading from "./components/Loader/Loader";

import styles from "./App.module.css";

class App extends Component {
  state = {
    isLoading: false,
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className={styles.appWrap}>
        <Loading />
      </div>
    );
  }
}

export default App;
