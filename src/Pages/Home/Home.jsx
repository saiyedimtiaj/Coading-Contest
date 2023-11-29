import Banner from "../../Component/Home/Banner/Banner";
import BestCreator from "../../Component/Home/BestCreator/BestCreator";
import ContestWinner from "../../Component/Home/ContestWinner/ContestWinner";
import Popular from "../../Component/Home/Popular/Popular";

const Home = () => {
  return (
    <>
      <Banner />
      <Popular/>
      <ContestWinner/>
      <BestCreator/>
    </>
  );
};

export default Home;
