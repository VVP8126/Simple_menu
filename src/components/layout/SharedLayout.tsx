import React from 'react';
import Menu from '../menu';
import { menuContent } from '../../assets/menuContent';
import { Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';

const SharedLayout: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>LOGO</h2>
      </header>
      <Menu items={menuContent}></Menu>
      <Outlet />
    </>
  );
};

export default SharedLayout;
