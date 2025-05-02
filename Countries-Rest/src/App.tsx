import Countries from "./components/Countries/Countries";
import CountryPage from "./components/CountryPage/CountryPage";
import Header from "./components/Header/Header";
import { useCustomContext } from "./hooks/useContext";
import "./index.css";

const App = () => {
  const { country } = useCustomContext();
  return (
    <>
      <Header />
      {!country.name && <Countries />}
      {country.name && <CountryPage />}
    </>
  );
};

export default App;
