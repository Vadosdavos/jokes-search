import moment from "moment";

type JokeProps = {
  id: string;
  created: string;
  url: string;
  text: string;

};

const Joke = ({
  id, created, url, text,
}: JokeProps) => {
  console.log("first");
  return (
    <a className="first-row flex flex-col gap-2 min-h-[150px] justify-between shadow-xl col-span-6 md:col-span-3 lg:col-span-2 p-[30px] pb-[25px]" href={url} target="_blank" rel="noreferrer">
      <p className="text-sm">
        {text}
      </p>
      <div className="flex justify-between font-montserrat text-[#767676] text-xs md:text-sm">
        <span className="text-ellipsis overflow-hidden">{id}</span>
        <span>{moment(created).format("DD.MM.YYYY")}</span>
      </div>
    </a>
  );
};

export default Joke;
