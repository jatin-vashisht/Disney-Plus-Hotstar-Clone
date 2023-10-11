import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/images%2Fcta-logo-one.svg?alt=media&token=ab6362cd-80e8-4858-957d-6977a16d3ffd&_gl=1*ad0649*_ga*MTU1MjIwODMyOC4xNjk2Nzc4OTI4*_ga_CW55HF8NVT*MTY5Njg3NjIyMS45LjEuMTY5Njg3NjU1OS4xMy4wLjA." alt="CTA Logo 1" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/images%2Fcta-logo-two.png?alt=media&token=d9767853-2c86-4371-85f0-ff2616e923b4&_gl=1*yh6xoe*_ga*MTU1MjIwODMyOC4xNjk2Nzc4OTI4*_ga_CW55HF8NVT*MTY5Njg3NjIyMS45LjEuMTY5Njg3NjU3MS4xLjAuMA.." alt="CTA Logo 2" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/images%2Flogin-background.jpg?alt=media&token=1272fac8-f52a-4600-9c5c-8e0bde96814b&_gl=1*kocr0r*_ga*MTU1MjIwODMyOC4xNjk2Nzc4OTI4*_ga_CW55HF8NVT*MTY5Njg3NjIyMS45LjEuMTY5Njg3NjU4NC42MC4wLjA.");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
