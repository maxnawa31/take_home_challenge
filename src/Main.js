import React, { Component } from 'react';
import DATA from './Data';
import { loadData } from './store/actions';
import { connect } from 'react-redux';

class Main extends Component {
  componentDidMount() {
    this.props.loadData(DATA);
  }
  render() {
    if(this.props.data) {
      let { subTotal, taxesAndFees, description } = this.props.data;
      let { url } = this.props.data.image;
      return (
        <div>
        <div>{subTotal}</div>
        <div>{taxesAndFees}</div>
        <div>{description}</div>
        </div>
    )
}
    return(
      <div>Loading.....</div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    data: state
  }
}
export default connect(mapStateToProps, {loadData})(Main);