import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    searchValue: "",
  };

  searchChange = (event) => {
    const value = event.target.value;
    this.setState({
      searchValue: value,
    });
  };

  searchSubmit = (event) => {
    event.preventDefault();
    const { searchValue } = this.state;

    if (searchValue.trim() === "") {
      return alert("Enter correct value");
    }

    this.props.onSubmit(searchValue);

    this.setState({
      searchValue: "",
    });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.searchSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.searchFormButton_label}>Search</span>
          </button>

          <input
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.searchChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
