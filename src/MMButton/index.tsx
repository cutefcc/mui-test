import React from 'react';
import styles from './index.less';

function MMButton(props: any) {
  //主要控制参数
  const type = props.type; //string 主类型
  const size = props.size; //string 子类型：大小
  const iconUrl = props.iconUrl; //string 子类型：图标
  const disabled = props.disabled; //boolean 子类型：禁用
  const children = props.children; //string 按钮文案
  const loading = props.loading; //string 按钮文案

  const getIconUrl = () => {
    switch (type) {
      case 'primary':
        return 'https://i9.taou.com/maimai/p/29898/5957_6_34rQd4oeteE0IQ';
      case 'second':
        return 'https://i9.taou.com/maimai/p/29898/5603_6_81rQ0NFxzuWSrV1m';
      case 'third':
        return 'https://i9.taou.com/maimai/p/29899/2380_6_61mQcs5BIprm5BpC';
      case 'noBackground':
        return 'https://i9.taou.com/maimai/p/29899/2380_6_61mQcs5BIprm5BpC';
      case 'textButton':
        return 'https://i9.taou.com/maimai/p/29899/2379_6_51qdvpjSJQzaGybU';

      case 'primaryAlert':
        return 'https://i9.taou.com/maimai/p/29898/5957_6_34rQd4oeteE0IQ';
      case 'thirdAlert':
        return 'https://i9.taou.com/maimai/p/29899/2492_6_81jgV55KhaeSxSdw';
      case 'noBackgroundAlert':
        return 'https://i9.taou.com/maimai/p/29899/2492_6_81jgV55KhaeSxSdw';
      default:
        return 'https://i9.taou.com/maimai/p/29898/5957_6_34rQd4oeteE0IQ';
    }
  };

  const renderLoading = () => {
    if (!loading) {
      return null;
    }
    return <img className={`${styles.loadingIcon} `} src={getIconUrl()} />;
  };

  // 新的按钮规范
  return (
    <div
      {...props}
      className={
        `${styles.btnGloabl} ` + //按钮全局样式
        `${type ? styles[type] : styles.primary} ` + //主类型
        `${size ? styles[size] : styles.large} ` + //子类型：大小
        `${disabled ? styles.disabled : ''} ` + //子类型：禁用
        `${!children && iconUrl ? styles.iconOnly : ''} ` + //子类型：图标按钮
        `${loading ? styles.loading : ''} ` + //子类型：加载
        `${props.className || ''}` //自定义透传类名
      }
    >
      {iconUrl ? <img src={iconUrl} /> : null}
      {children}
      {renderLoading()}
    </div>
  );
}

export default MMButton;
