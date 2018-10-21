import React, { Component } from 'react';
import ProductDescription from './ProductDescription';
export default class ToggleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };

  render() {
    let { name } = this.props;
    let { active } = this.state;

    if (!active) {
      return (
        <div>
          <a onClick={this.handleClick} href="">
            {name} +
          </a>
        </div>
      );
    }
    return (
      <div>
        <a onClick={this.handleClick} href="">
          {name} -
        </a>
        <ProductDescription/>
      </div>
    );
  }
}
