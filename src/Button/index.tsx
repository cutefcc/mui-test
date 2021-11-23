import React from 'react';
import classnames from 'classnames';
import './index.less';

/**
 * @param {onClick} func 对外暴露的点击事件
 * @param {className} string 自定义类名
 * @param {type} string 按钮类型 primary | warning | info | default | pure
 */
export interface Props {
  onClick?: (e: any) => void;
  className?: string;
  type?: string;
  block?: boolean;
}

const Button: React.FC<Props> = (props) => {
  let { children, onClick, className, type, block } = props;
  return (
    <div
      className={classnames(
        'xui-btn',
        'ripple',
        type,
        block ? 'block' : '',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
