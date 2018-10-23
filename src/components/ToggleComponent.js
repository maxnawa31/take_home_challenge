import React, { Component } from 'react';
import { StyledATag } from './styled-components/index';

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
            <StyledATag onClick={this.handleClick} href="">
              {title} +
            </StyledATag>
          </div>
        </div>
      );
    }
    return (
      <div>
        {children}
        <div>
          <StyledATag onClick={this.handleClick} href="">
            {hideTitle} -
          </StyledATag>
          <ToBeToggled />
        </div>
      </div>
    );
  }
}
