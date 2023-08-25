import { Info, Navbar, Search, User, Repos } from "../Components";
import { useGlobalContext } from "../Context/Context";

const Home = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <Navbar />
        <Search />
        <div className="element-center mt-48">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-700"></div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Home;
