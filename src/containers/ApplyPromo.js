import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePromo } from '../store/actions';
import {StyledInput, StyledButton, ApplyPromoText} from '../components/styled-components';
class ApplyPromo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promoCode: ''
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { promoCode } = this.state;
    this.props.togglePromo(promoCode);
    this.setState({promoCode: ''})
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} action="">
        <ApplyPromoText>Apply Promo</ApplyPromoText>
        <StyledInput onChange={this.handleChange} type="text" name="promoCode" />
        <StyledButton>Apply</StyledButton>
      </form>
    );
  }
}

export default connect(
  null,
  { togglePromo }
)(ApplyPromo);
