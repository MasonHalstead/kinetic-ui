import React from 'react';
import { Navigation } from 'components/navigation/Navigation';
import { Menu } from 'components/menu/Menu';
import PropTypes from 'prop-types';
import cn from './Layout.module.scss';

export const PublicLayout = ({ children, ...rest }) => {
  return (
    <div className={cn.public}>
      <Navigation />
      <div className={cn.content}>
        <Menu history={rest.history} />
        <div className={cn.page}>{children}</div>
      </div>
    </div>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.node,
};
