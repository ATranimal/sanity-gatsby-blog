import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, noArchive }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to="/">home</Link>
          <Link to="/blog/">blog</Link>
        </div>
        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol="hamburger" />
        </button>
        {noArchive ? (
          <></>
        ) : (
          <nav className={cn(styles.nav, showNav && styles.showNav)}>
            <ul>
              <li>
                <Link to="/archive/">Archive</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
