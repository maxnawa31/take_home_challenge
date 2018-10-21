import React, { Component } from 'react';
import { connect } from 'react-redux';

const ProductDescription = props => {
  let { subTotal, description, url } = props;
  return (
    <div>
      <img src={`${url}`} alt=""/>
      <div>
        {subTotal}
        {description}
      </div>
    </div>
  )
};
const mapStateToProps = state => {
  let { subTotal, description } = state;
  let { url } = state.image
  return {
    subTotal,
    description,
    url
  };
};
export default connect(
  mapStateToProps,
  null
)(ProductDescription);
