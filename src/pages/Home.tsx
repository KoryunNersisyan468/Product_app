import LazyImage from "../components/LazyImage";
import HomeStructure from "../components/HomeStructure";

const Home = () => {
  return (
    <div className="h-[100vh] -z-10 w-full overflow-hidden top-0 absolute">
      <LazyImage
        alt="Home Bg"
        height=""
        src={`${import.meta.env.BASE_URL}/store-home-bg.jpg`}
        width="100%"
        className="home-bg-img"
        placeholderSrc={`${import.meta.env.BASE_URL}/store-home-bg-small.jpg`}
      />
      <HomeStructure />
    </div>
  );
};

export default Home;
