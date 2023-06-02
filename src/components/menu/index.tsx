import React from 'react';
import { MenuItem } from '../../types/MenuItem';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [opened, setOpened] = React.useState<boolean>(false);
  const toggleOpened = () => {
    setOpened(!opened);
  };

  return (
    <>
      <button className={styles.menuBtn} onClick={toggleOpened}>
        {!opened ? (
          <>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </>
        ) : (
          <span className={styles.close}>&#215;</span>
        )}
      </button>
      <div className={opened ? `${styles.menu} ${styles.opened}` : `${styles.menu}`}>
        {items.map((item, index) => (
          <Link key={index} to={item.to} onClick={toggleOpened} className={`${styles.menuItem}`}>
            {item.text}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;
