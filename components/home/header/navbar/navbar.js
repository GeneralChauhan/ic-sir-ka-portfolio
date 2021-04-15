import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItem}>
        <g-emoji
          class="g-emoji"
          alias="wave"
          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"
        >
          💻
        </g-emoji>
        <span> </span>
        Work
      </div>
      <div className={styles.navItem}>
        <g-emoji
          class="g-emoji"
          alias="wave"
          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"
        >
          🚀
        </g-emoji>
        <span> </span>Projects
      </div>
      <div className={styles.navItem}>
        <g-emoji
          class="g-emoji"
          alias="wave"
          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"
        >
          📝
        </g-emoji>
        <span> </span>Blog
      </div>
      <div className={styles.navItem}>
        <g-emoji
          class="g-emoji"
          alias="wave"
          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"
        >
          🦸
        </g-emoji>
        <span> </span>Me
      </div>
    </div>
  );
}

export default Navbar;
