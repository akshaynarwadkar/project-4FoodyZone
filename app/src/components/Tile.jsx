import styled from "styled-components";
import { BASE_URL } from "../App";

const Tile = ({ heading, content, price, img, type }) => {
  return (
    <TileComponent>
      <TopTile>
        <div>
          <img src={BASE_URL + img}></img>
        </div>
        <div className="textContent">
          <div>
            <h1>{heading}</h1>
          </div>
          <div>
            <p>{content}</p>
          </div>
          <BottomTile>
            <Button>${price.toFixed(2)}</Button>
          </BottomTile>
        </div>
      </TopTile>
    </TileComponent>
  );
};
export default Tile;

const TileComponent = styled.div`
  display: flex;

  width: 340px;
  max-height: 157px;
  border-radius: 19.447px;
  border: 0.659px solid #98f9ff;
  background: url(<path-to-image>),
    lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);
  padding: 2px 10px;
`;

const TopTile = styled.div`
  display: flex;
  max-height: 150px;
  .textContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px 3px;
    gap: 20px;
  }

  h1 {
    color: white;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p {
    color: white;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const BottomTile = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 5px;
  background: #ff4343;
  padding: 6px 12px;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: orange;
    transition: 0.3s background ease-in;
  }
`;
