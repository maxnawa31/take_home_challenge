import React, { Component } from 'react';

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
    let { title, ToBeToggled, hideTitle, children } = this.props;
    let { active } = this.state;

    if (!active) {
      return (
        <div>
          {children}
          <div>
            <a onClick={this.handleClick} href="">
              {title} +
            </a>
          </div>
        </div>
      );
    }
    return (
      <div>
        {children}
        <div>
          <a onClick={this.handleClick} href="">
            {hideTitle} -
          </a>
          <ToBeToggled />
        </div>
      </div>
    );
  }
}
