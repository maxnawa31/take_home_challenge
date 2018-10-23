import React, { Component } from 'react';
import DATA from '../Data';
import { loadData, togglePickup } from '../store/actions';
import { connect } from 'react-redux';
import ToggleComponent from '../components/ToggleComponent';
import ApplyPromo from './ApplyPromo';
import ProductDescription from './ProductDescription';
import calculatePrice from '../store/selectors';
import {
  MainContainer,
  TopPortion,
  MiddlePortion,
  BottomPortion,
  EstimatedTotal
} from '../components/styled-components';
import { Tooltip, TooltipText } from '../components/Tooltip';
import '../Tooltip.css';

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
            <div>
              Subtotal: <span style={{ fontWeight: 'bold' }}>${subTotal}</span>
            </div>
            <Tooltip handleClick={this.handleClick}>
              <p>
                Pickup Savings:{' '}
                <span style={{ fontWeight: 'bold' }}> -3.85</span>
              </p>
              <TooltipText
                description={
                  'Picking up your order in the store helps cut costs and we pass the savings to you.'
                }
              />
            </Tooltip>
            <div>
              Est. Taxes and Fees:{' '}
              <span style={{ fontWeight: 'bold' }}>{taxesAndFees}</span>
            </div>
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
