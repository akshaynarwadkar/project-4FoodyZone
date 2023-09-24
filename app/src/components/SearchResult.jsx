import Tile from "./Tile";
import styled from "styled-components";

const SearchResult = ({ data }) => {
  return (
    <Container>
      {data?.map((item) => {
        return (
          <Tile
            key={item.name}
            heading={item.name}
            content={item.text}
            price={item.price}
            img={item.image}
            type={item.type}
          />
        );
      })}
    </Container>
  );
};
export default SearchResult;

const Container = styled.div`
  max-width: 1200px;
  min-width: 377px;
  padding: 30px 10px 0px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;