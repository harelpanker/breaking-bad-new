import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import arrow from '../images/icon-point-right.svg';

const Char = ({ char }) => {
  return (
    <Card>
      <Link to={`/character/${char.char_id}`}>
        <LazyLoad height={400}>
          <img className='bg-img' src={char.img} alt={char.name} />
        </LazyLoad>
        <div className='wrapper'>
          <h3>{char.name}</h3>
          <img src={arrow} alt='To the page' width={'20px'} height={'20px'} />
        </div>
        <div className='cover'></div>
      </Link>
    </Card>
  );
};

const Card = styled.li`
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  min-height: 400px;
  color: ${(props) => props.theme.color.white};
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: ${(props) => props.theme.color.black};
    opacity: 0.4;
  }

  h3 {
    font-size: clamp(20px, 3vw, 35px);
    color: ${(props) => props.theme.color.white};
  }

  a {
    padding: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
    width: 100%;

    img {
      width: 40px;
      height: 40px;
      padding: 5px;
      border-radius: 50%;
      background-color: rgba(241, 246, 249, 0.3);
      padding-right: 4px;
    }
  }
`;

export default Char;
