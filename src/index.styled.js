import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-body);
  color: var(--text-color);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;
}

code {
  font-family: 'Montserrat', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
