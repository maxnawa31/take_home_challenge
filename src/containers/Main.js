import React, { Component } from 'react';
import DATA from '../Data';
import { loadData } from '../store/actions';
import { connect } from 'react-redux';
import ToggleComponent from './ToggleComponent';

class Main extends Component {
  componentDidMount() {
    this.props.loadData(DATA);
  }
  render() {
    if (this.props.data) {
      let { subTotal, taxesAndFees, description } = this.props.data;
      let { url } = this.props.data.image;
      return (
        <div>
          <div>{subTotal}</div>
          <div>{taxesAndFees}</div>
          <div>{description}</div>

          <div>
            <ToggleComponent name="See Item Details" />
            <ToggleComponent name="Apply Promo Code" />
          </div>
        </div>
      );
    }
    return <div>Loading.....</div>;
  }
}

const mapStateToProps = function(state) {
  return {
    data: state
  };
};
export default connect(
  mapStateToProps,
  { loadData }
)(Main);
