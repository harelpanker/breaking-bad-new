import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Container } from '../styles/style';
import Loading from '../components/Loading';

const CharPage = ({ match }) => {
  const {
    params: { charId },
  } = match;
  const [char, setChar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChar = async () => {
      const charObject = await axios.get(
        `https://breakingbadapi.com/api/characters/${charId}`
      );
      setChar(charObject.data[0]);
      setIsLoading(false);
    };
    fetchChar();
  }, [charId]);

  return (
    <>
      {!isLoading ? (
        <>
          <Wrapper>
            <SmallContainer>
              <Article>
                <img src={char.img} alt={char.name} loading='lazy' />
                <div className='content'>
                  <header className='titles'>
                    <h1>{char.name}</h1>
                    <h3>"{char.nickname}"</h3>
                  </header>
                  <main>
                    <div className='status'>Status: {char.status}</div>
                    <ul>
                      {char.occupation.map((occ) => (
                        <li key={occ}>{occ}</li>
                      ))}
                    </ul>
                    <Link to='/'>Back Home</Link>
                  </main>
                </div>
              </Article>
            </SmallContainer>
          </Wrapper>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

const Wrapper = styled.div`
  padding: 70px 16px;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
`;

const SmallContainer = styled(Container)`
  max-width: 990px;
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 2em;
  color: ${(props) => props.theme.color.black};

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .content {
    .titles {
      margin-bottom: 20px;
    }

    h1 {
      font-size: clamp(35px, 5vw, 60px);
      line-height: 1;
      margin-bottom: 7px;
    }

    ul {
      margin: 15px 0 25px 0;
      display: flex;
      flex-wrap: wrap;

      li {
        padding: 7px 15px;
        background-color: ${(props) => props.theme.color.black};
        color: ${(props) => props.theme.color.grey};
        border-radius: 25px;
        font-size: 12px;
        margin: 5px;
      }
    }

    a {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export default CharPage;
