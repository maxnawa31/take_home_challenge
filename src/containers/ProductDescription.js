import React from 'react';
import { connect } from 'react-redux';
import calculatePrice, { newSubTotal } from '../store/selectors';
import {
  ProductDescriptionContainer,
  TextContainer,
  StyledImageTag,
  StyledPTag,
  LineThroughPTag,
  DescriptionText
} from '../components/styled-components';

const ProductDescription = props => {
  let { subTotal, description, url, newSubTotal } = props;
  return (
    <ProductDescriptionContainer>
      <StyledImageTag src={`${url}`} alt="" />
      <TextContainer>
        <TextContainer>
          <DescriptionText>{description}</DescriptionText>
          {subTotal !== newSubTotal ? (
            <div>
              <StyledPTag>${newSubTotal}</StyledPTag>
              <LineThroughPTag>{subTotal}</LineThroughPTag>
            </div>
          ) : (
            <StyledPTag>${subTotal}</StyledPTag>
          )}
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
