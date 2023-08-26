import moment from "moment";
import { useAppSelector } from "../../store/hooks";
import Loader from "./loader";

const Jokes = () => {
  const { jokes, loading, error } = useAppSelector((state) => state.jokes);
  return (
    <main className={`container px-4 pb-5 md:px-0 grid grid-cols-6 gap-5 ${loading ? "mt-10 md:mt-5" : ""}`}>
      {loading && <Loader />}
      {!loading && error && <div className="col-span-6 text-red-600 text-center italic">{error}</div>}
      {!loading && !!jokes.length && jokes.map(({
        created_at, id, url, value,
      }) => (
        <a key={id} className="first-row flex flex-col gap-2 min-h-[150px] justify-between shadow-xl col-span-6 md:col-span-3 lg:col-span-2 p-[30px] pb-[25px]" href={url} target="_blank" rel="noreferrer">
          <p className="text-sm">
            {value}
          </p>
          <div className="flex justify-between font-montserrat text-[#767676] text-xs md:text-sm">
            <span className="text-ellipsis overflow-hidden">{id}</span>
            <span>{moment(created_at).format("DD.MM.YYYY")}</span>
          </div>
        </a>
      ))}
    </main>

  );
};

export default Jokes;
