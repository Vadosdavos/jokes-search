import Jokes from "./components/jokes";
import SearchBar from "./components/search-bar";

const App = () => (
  <>
    <header className="container pt-10 md:pt-[128px]">
      <SearchBar />
    </header>
    <Jokes />
  </>
);

export default App;
