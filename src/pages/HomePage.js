import { useState, useEffect } from 'react';
import axios from 'axios';

import List from '../components/List';
import Search from '../components/Search';
import Loading from '../components/Loading';

import { Header, Main, Container } from '../styles/style';
import logo from '../images/breaking-bad-logo.png';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dataObject = await axios.get(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );
      setData(dataObject.data);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  const newQuery = (newQuery) => setQuery(newQuery);

  return (
    <>
      {!isLoading ? (
        <>
          <Header>
            <img src={logo} alt='Breaking bad logo' />
            <h1>Breaking Bad</h1>
            <Search newQuery={newQuery} />
          </Header>
          <Main>
            <Container>
              <List data={data} />
            </Container>
          </Main>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default HomePage;
