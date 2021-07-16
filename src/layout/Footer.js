import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <div>
        Made by{' '}
        <a href='https://panker.io/' target='_blank' rel='noreferrer noopener'>
          panker.io
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  height: 70px;
  color: ${(props) => props.theme.color.grey};
  background-color: ${(props) => props.theme.color.black};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  a {
    text-decoration: underline;
  }
`;

export default Footer;
