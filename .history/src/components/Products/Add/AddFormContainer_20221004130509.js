import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProductForm from "../Update/ProductForm";
import { createProduct } from "../../../actions/products";

class AddFormContainer extends Component {
  render() {
    const { categories, dispatch } = this.props;

    return (
      <>
        <Link to="/">Home</Link>
        <ProductForm
          onSave={(data) => {
            this.props.createProduct(data);
          }}
          categories={categories}
        />
      </>
    );
  }
}

AddFormContainer.propTypes = {
  categories: PropTypes.array,
  createProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    products: state.products,
  };
};

export default connect(mapStateToProps)(AddFormContainer);
