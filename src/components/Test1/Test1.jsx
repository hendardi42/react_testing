import React from "react";

import styles from "./Test1.module.css";

const Test = () => {
  return <div className={`${styles["test"]} test`}>Test</div>;
};

export default Test;
