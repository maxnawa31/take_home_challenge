import React, { Component } from 'react';
import { connect } from 'react-redux';
import calculatePrice, { newSubTotal } from '../store/selectors';
import styled from 'styled-components';
import {ProductDescriptionContainer, TextContainer, EstimatedTotal, StyledImageTag, StyledPTag, LineThroughPTag } from '../components/styled-components';

const ProductDescription = props => {
  let { subTotal, description, url, newPrice, newSubTotal } = props;
  return (
    <ProductDescriptionContainer>
      <StyledImageTag src={`${url}`} alt="" />
      <TextContainer>
        {subTotal !== newSubTotal ? (
          <div>
            <StyledPTag>${newSubTotal}</StyledPTag>
            <LineThroughPTag>{subTotal}</LineThroughPTag>
          </div>
        ) : (
          <StyledPTag>${subTotal}</StyledPTag>
        )}

        <TextContainer>
          <StyledPTag>{description}</StyledPTag>
        </TextContainer>
      </TextContainer>
    </ProductDescriptionContainer>
  );
};
const mapStateToProps = state => {
  let { subTotal, description } = state;
  let { url } = state.image;
  return {
    subTotal,
    description,
    url,
    newPrice: calculatePrice(state),
    newSubTotal: newSubTotal(state)
  };
};
export default connect(
  mapStateToProps,
  null
)(ProductDescription);
