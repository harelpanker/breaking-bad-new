import styled from 'styled-components';
import Char from './Char';

const List = ({ data }) => {
  return (
    <Grid>
      {data.map((char) => (
        <Char key={char.char_id} char={char} />
      ))}
    </Grid>
  );
};

const Grid = styled.ul`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;

  @media only screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default List;
