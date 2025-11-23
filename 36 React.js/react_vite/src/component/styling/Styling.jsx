import React from "react";
import './styling.css'
import styles from "./mystyle.module.css";
import styled from "styled-components";

const Title = styled.h2`
  color: orange;
  background-color: black;
  padding: 10px;
`;

function Styling() {
  return (
    <div>
      {/* Inline CSS Styling */}
      <h1 style={{ color: "blue" }}>Hello World!</h1>

      {/* External CSS (Regular CSS File) */}
      <h1 id="stylingexternal">Hello World!</h1>

      {/* CSS Modules */}
      <h1 className={styles.stylingtitle}>Hello World!</h1>

      {/* Styled Components (CSS-in-JS) npm install styled-components */}
      <Title>Hello World!</Title>

      {/* bootstrap */}
      <h1 className="display-1">Hello World!</h1>
    </div>
  );
}

export default Styling;
