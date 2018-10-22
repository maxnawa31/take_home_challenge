import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePromo } from '../store/actions';
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
        <input onChange={this.handleChange} type="text" name="promoCode" />
        <button>Apply</button>
      </form>
    );
  }
}

export default connect(
  null,
  { togglePromo }
)(ApplyPromo);
