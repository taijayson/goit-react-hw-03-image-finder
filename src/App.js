import React, { Component } from "react";
import { fetchApi } from "./utils/pixabayApi";
// import pixabayApi from "./utils/pixabayApi";

import Loading from "./components/Loader/Loader";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

import styles from "./App.module.css";

class App extends Component {
  state = {
    isLoading: false,
    hits: [],
    currentPage: 1,
    queryImg: "",
    error: null,
    largeImageURL: "",
    showModal: false,
  };

  onChangeValue = (search) => {
    this.setState({
      hits: [],
      queryImg: search,
      currentPage: 1,
      error: null,
    });
  };

  fetchApp = () => {
    const { currentPage, queryImg } = this.state;
    const options = { currentPage, queryImg };
    this.setState({ isLoading: true });
    //pixabayApi.
    fetchApi(options)
      .then((hits) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((err) => this.setState({ err }))
      .finally(() => {
        this.setState({ isLoading: false });
        if (this.state.hits.length > 12) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.queryImg !== this.state.queryImg) {
      this.fetchApp(this.state.queryImg);
    }
  }

  openModal = (app) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: app,
    }));
  };

  render() {
    const { hits, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div className={styles.appWrap}>
        <Searchbar onSubmit={this.onChangeValue} />

        <ImageGallery imgArr={hits} onClick={this.openModal} />

        {hits.length > 0 && <Button onClick={this.fetchApp} />}

        {isLoading && <Loading />}

        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.openModal} />
        )}
      </div>
    );
  }
}

export default App;
