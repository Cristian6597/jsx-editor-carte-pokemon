import PokemonCard from "./components/PokemonCard";
import Sidebar from "./components/Sidebar";
import { AppContextProvider } from "./context/TypeContext";

function App() {
  return (
    <>
      <AppContextProvider>
        <div className="container flex flex-row w-full">
          <div className="w-1/3">
            <Sidebar />
          </div>
          <div className="w-2/3">
            <PokemonCard />
          </div>
        </div>
      </AppContextProvider>
    </>
  );
}

export default App;
