import styled from 'styled-components';

export const Main = styled.main`
  padding: 55px 16px;
`;

export const Header = styled.header`
  min-height: 35vh;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.black};
  background: ${(props) => props.theme.color.liniar1};
  background: ${(props) => props.theme.color.liniar2};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  padding: 100px 16px 50px 16px;

  img {
    max-width: 250px;
    object-fit: cover;
  }

  h1 {
    font-size: clamp(35px, 5vw, 70px);
    letter-spacing: 1px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
