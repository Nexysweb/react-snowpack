import React from "./_snowpack/pkg/react.js";
import styled from "./_snowpack/pkg/styled-components.js";
const Wrapper = styled.section`
  padding: 4em;
  background: #ededed;
`;
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #ea1ed4;
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Greeting = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const App = () => {
  const logo = "https://avatars.githubusercontent.com/u/3129983?s=60&v=4";
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Title, null, "my first snowpack+react app"), /* @__PURE__ */ React.createElement(ImageWrapper, null, /* @__PURE__ */ React.createElement("img", {
    src: logo
  })), /* @__PURE__ */ React.createElement(Greeting, null, "hello ❄️Snowpack❄️"));
};
export default App;
