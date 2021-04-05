import React, { Component } from "react";
import "./navBar.css";

import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-link" to="/catalog">
              Catalog
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>

            
          <div className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-info my-2 my-sm-0" to="/cart">
              <i aria-hidden="true"  ></i>
              View Cart
              <span className="badge badge-primary cart-badge">
              {this.props.cart.length}
              </span>
            </Link>
          </div>

          
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state
  };
};

//to read pass a function that maps the state to props

export default connect(mapStateToProps ,null) (NavBar);

//imrc
//cc
