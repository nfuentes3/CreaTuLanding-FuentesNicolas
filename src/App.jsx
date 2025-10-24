import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import MainHero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <MainHero />
      <ItemListContainer name="Nicolas" />
    </>
  );
}

export default App;
