import React from "react";
import styled from "styled-components";

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
  const logo =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--tARdF4Og--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/139970/364b4ef9-bc61-4e48-9758-8d2af0862ee8.png";
  return (
    <Wrapper>
      <Title>my first snowpack+react app</Title>
      <ImageWrapper>
        <img src={logo} />
      </ImageWrapper>
      <Greeting>hello ❄️Snowpack❄️</Greeting>
    </Wrapper>
  );
};

export default App;
