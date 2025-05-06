import Countries from "./components/Countries/Countries";
import CountryPage from "./components/CountryPage/CountryPage";
import Header from "./components/Header/Header";
import { useCustomContext } from "./hooks/useContext";
import "./index.css";

const App = () => {
  const { state } = useCustomContext();

  const { error, country } = state;
  return (
    <>
      <Header />
      {error && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Error al consultar la información
        </p>
      )}
      {!error && !country.name && <Countries />}
      {!error && country.name && <CountryPage />}
    </>
  );
};

export default App;
