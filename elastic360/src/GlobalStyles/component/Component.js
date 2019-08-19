import React from 'react';
import styles from "./Component.module.scss"

const Component = ({ children }) => (
    <div className={styles.component}>{children}</div>
);

export default Component;