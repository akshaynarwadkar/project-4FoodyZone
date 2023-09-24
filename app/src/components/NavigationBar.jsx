import styled from "styled-components";

const NavigationBar = ({ search, filter, selectedBtn }) => {
  const foodType = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  return (
    <Nav>
      <Container>
        <TopNav>
          <div>
            <img src="FoodyZone.svg" alt="logo"></img>
          </div>
          <div>
            <input
              onChange={search}
              type="text"
              placeholder="Search Food..."
            ></input>
          </div>
        </TopNav>
        <BottomNav>
          {foodType.map((food) => {
            return (
              <Button
                isSelected={food.type === selectedBtn}
                onClick={() => filter(food.type)}
              >
                {food.name}
              </Button>
            );
          })}
        </BottomNav>
      </Container>
    </Nav>
  );
};
export default NavigationBar;

const Button = styled.button`
  color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 5px;
  background: ${({ isSelected }) => (isSelected ? "orange" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "none")};
  padding: 6px 12px;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: orange;
    transition: 0.3s background ease-in;
  }
`;

const Nav = styled.nav`
  background: rgba(13, 13, 13, 0.76);
  height: 26vh;
  @media (0<width<600px) {
    display: flex;
    flex-direction: column;
    height: 30vh;
  }
`;

const TopNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    display: flex;
    padding: 11px 157px 10px 15px;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #ff0909;
    background: transparent;
  }
  input::placeholder {
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (0<width<600px) {
    flex-direction: column;
    gap: 10px;
    height: 60px;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 30px 120px 20px 120px;
  flex-direction: column;
  gap: 54px;
`;

const BottomNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
