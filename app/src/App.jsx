import { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";

import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn,setSelectedBtn]=useState('all')

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterType = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn('all')
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  return (
    <>
      <NavigationBar
        search={searchFood}
        filter={filterType}
        selectedBtn={selectedBtn}
      />
      <SecondHalf>
        <SearchResult data={filteredData} />
      </SecondHalf>
    </>
  );
}

export default App;

const SecondHalf = styled.div`
  background-image: url("bgImage.jpg");
  background-size: cover;
  min-height: 74vh;
  max-height: 100%;
  padding: 10px 0px;
`;
