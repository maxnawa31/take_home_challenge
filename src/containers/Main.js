import React, { Component } from 'react';
import DATA from '../Data';
import { loadData, togglePickup } from '../store/actions';
import { connect } from 'react-redux';
import ToggleComponent from './ToggleComponent';
import ApplyPromo from './ApplyPromo';
import ProductDescription from './ProductDescription';
import calculatePrice from '../store/selectors';
import {
  MainContainer,
  TopPortion,
  MiddlePortion,
  BottomPortion
} from '../components/styled-components';
import styled from 'styled-components';
import '../Tooltip.css';

const EstimatedTotal = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

class Main extends Component {
  componentDidMount() {
    this.props.loadData(DATA);
  }

  handleClick = e => {
    e.preventDefault();
    this.props.togglePickup();
  };
  render() {
    if (this.props.data) {
      let { estTotal } = this.props;
      let { subTotal, taxesAndFees } = this.props.data;
      return (
        <MainContainer>
          <TopPortion>
            <div>Subtotal: ${subTotal}</div>
            <a className="tooltip" onClick={this.handleClick} href="">
              <p>
                Pickup Savings: <span> -3.85</span>
              </p>
              <span className="tooltiptext">
                Picking up your order in the store helps cut costs and we pass
                the savings to you.
              </span>
            </a>

            <div>Est. Taxes and Fees: {taxesAndFees}</div>
          </TopPortion>

          <MiddlePortion>
            <ToggleComponent
              ToBeToggled={ProductDescription}
              title="See Item Details"
              hideTitle="Hide Iteam Details"
            >
              <EstimatedTotal>Est Total: {estTotal}</EstimatedTotal>
            </ToggleComponent>
          </MiddlePortion>

          <BottomPortion>
            <ToggleComponent
              ToBeToggled={ApplyPromo}
              title="Apply Promo Code"
              hideTitle="Hide Promo Code"
            />
          </BottomPortion>
        </MainContainer>
      );
    }
    return <div>Loading.....</div>;
  }
}

const mapStateToProps = function(state) {
  if (state) {
    return {
      data: state,
      estTotal: calculatePrice(state)
    };
  } else {
    return {};
  }
};
export default connect(
  mapStateToProps,
  { loadData, togglePickup }
)(Main);
