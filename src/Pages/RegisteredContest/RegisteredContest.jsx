import useBookings from "../../Hooks/useBookings";



const RegisteredContest = () => {
   const [bookings] = useBookings()
    return (
        <div>
        <h1 className="text-3xl font-semibold text-center my-8">
          My Registation Contest
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-black text-white">
              <tr>
                <th></th>
                <th>Image</th>
                <th>Contest Name</th>
                <th>Payment Id</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              
              {
                bookings.map((booking,index)=><tr key={index}>
                    <th>{index + 1}</th>
                    <th>
                        <img className="h-10" src={booking?.image} alt="" />
                    </th>
                    <th>{booking?.contestName}</th>
                    <th>{booking?.transactionId}</th>
                    <th>${booking?.contestPrize}</th>
                </tr>)
              }
             
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default RegisteredContest;