import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import cn from './Navigation.module.scss';
const { PUBLIC_URL } = process.env;

export const NavigationWithRouter = () => {
  return (
    <div className={cn.navigation}>
      <Link to="/installation">
        <img className={cn.logo} src={`${PUBLIC_URL}/kinetic.svg`} type="image/svg+xml" alt="kinesis" />
      </Link>
      <div className={cn.flex} />
      <p className={cn.version}>Alpha {process.env.REACT_APP_VERSION}</p>
    </div>
  );
};

export const Navigation = withRouter(NavigationWithRouter);
