import React from 'react';
import '../App';
import '../Tooltip.css';

export const Tooltip = props => {
  let { handleClick, children } = props;
  return (
    <a className="tooltip" onClick={handleClick} href="">
      {children}
    </a>
  );
};

export const TooltipText = props => {
  let { description } = props;
  return <span className="tooltiptext">{description}</span>;
};
