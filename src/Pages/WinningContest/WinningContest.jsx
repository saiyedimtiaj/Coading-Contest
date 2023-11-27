import useWinner from "../../Hooks/useWinner";

const WinningContest = () => {
  const [winningInfo] = useWinner();
  const total = winningInfo.reduce(
    (total, data) => total + data.winningPrice,
    0
  );
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">
        Your Winning Contest
      </h1>
      <h1 className="text-xl font-semibold text-right mb-2 pr-4">
        You are Winning : ${total}
      </h1>
      <div className="overflow-x-auto">
        <table className="table rounded-none">
          {/* head */}
          <thead className="text-white bg-black">
            <tr>
              <th></th>
              <th>Image</th>
              <th>Contest Name</th>
              <th>Host Name</th>
              <th>Winning Price</th>
            </tr>
          </thead>
          <tbody>
            {winningInfo?.map((data, index) => (
              <tr key={data?._id}>
                <th>{index + 1}</th>
                <th>
                  <img className="w-16" src={data?.contestInage} alt="" />
                </th>
                <th>{data?.contestName}</th>
                <th>{data?.hostBy}</th>
                <th>{data?.winningPrice}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WinningContest;
