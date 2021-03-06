import React from 'react';
import classnames from 'classnames';
import "./index.css";

var Button = function Button(props) {
  var children = props.children,
      onClick = props.onClick,
      className = props.className,
      type = props.type,
      block = props.block;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('xui-btn', 'ripple', type, block ? 'block' : '', className),
    onClick: onClick
  }, children);
};

export default Button;