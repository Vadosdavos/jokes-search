import ContentLoader from "react-content-loader";

const Loader = () => {
  const loaders = new Array(5).fill("load").map((el, index) => `${el}-${index + 1}`);
  return (
    <>
      {
        loaders.map((el) => (
          <div key={el} className="first-row flex flex-col gap-2 min-h-[150px] justify-between col-span-6 md:col-span-3 lg:col-span-2 [&>svg]:scale-[15] overflow-hidden">
            <ContentLoader
              speed={2}
              width={100}
              height={100}
              viewBox="0 0 100 100"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="0" ry="0" width="100" height="100" />
            </ContentLoader>
          </div>
        ))
      }
    </>
  );
};

export default Loader;
