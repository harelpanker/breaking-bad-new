import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <Header>
      <h1>{location.pathname} Page Not Found</h1>
      <Link to='/'>Back Home</Link>
    </Header>
  );
};

const Header = styled.header`
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.grey};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 16px;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: clamp(35px, 5vw, 70px);
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  a {
    font-size: 16px;
    font-weight: 600;
  }
`;

export default NotFoundPage;
