import Joke from "./components/joke";
import SearchBar from "./components/search-bar";

const testdata = [{
  categories: [],
  created_at: "2020-01-05 13:42:18.823766",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "HBnbseBFQEaBf2ZMpWdCHQ",
  updated_at: "2020-01-05 13:42:18.823766",
  url: "https://api.chucknorris.io/jokes/HBnbseBFQEaBf2ZMpWdCHQ",
  value: "Chuck Norris' gaydar is so finely tuned he can tell if you have EVER stared at another man's ass and will brutally kill you accordingly.",
},
{
  categories: [],
  created_at: "2020-01-05 13:42:19.104863",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "6org40n5qlexn6sp0edmiw",
  updated_at: "2020-01-05 13:42:19.104863",
  url: "https://api.chucknorris.io/jokes/6org40n5qlexn6sp0edmiw",
  value: "One time, Chuck Norris accidentally stubbed his toe. It destroyed the entire state of Ohio.",
},
{
  categories: [],
  created_at: "2020-01-05 13:42:19.104863",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "6orgas40n5qlexn6sp0edmiw",
  updated_at: "2020-01-05 13:42:19.104863",
  url: "https://api.chucknorris.io/jokes/6org40n5qlexn6sp0edmiw",
  value: "One time, Chuck Norris accidentally stubbed his toe. It destroyed the entire state of Ohio.",
},
{
  categories: [],
  created_at: "2020-01-05 13:42:19.104863",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "6org40dddddn5qlexn6sp0edmiw",
  updated_at: "2020-01-05 13:42:19.104863",
  url: "https://api.chucknorris.io/jokes/6org40n5qlexn6sp0edmiw",
  value: "One time, Chuck Norris accidentally stubbed his toe. It destroyed the entire state of Ohio.",
},
{
  categories: [],
  created_at: "2020-01-05 13:42:19.104863",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "6qweorg40n5qlexn6sp0edmiw",
  updated_at: "2020-01-05 13:42:19.104863",
  url: "https://api.chucknorris.io/jokes/6org40n5qlexn6sp0edmiw",
  value: "One time, Chuck Norris accidentally stubbed his toe. It destroyed the entire state of Ohio.",
},
{
  categories: [],
  created_at: "2020-01-05 13:42:19.104863",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "6org40n5qlexn6sp0asdedmiw",
  updated_at: "2020-01-05 13:42:19.104863",
  url: "https://api.chucknorris.io/jokes/6org40n5qlexn6sp0edmiw",
  value: "One time, Chuck Norris accidentally stubbed his toe. It destroyed the entire state of Ohio.",
}];

const App = () => (
  <>
    <header className="container pt-10 md:pt-[128px]">
      <SearchBar itemsTotal={1} />
    </header>
    <main className="container px-4 md:px-0 grid grid-cols-6 gap-5">
      {testdata.map(({
        created_at, id, url, value,
      }) => <Joke key={id} id={id} created={created_at} url={url} text={value} />)}
    </main>
  </>
);

export default App;
