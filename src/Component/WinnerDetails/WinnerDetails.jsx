/* eslint-disable react/prop-types */


const WinnerDetails = ({image,name}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold pt-5 mb-2">The Winner is : </h1>
            <div className="flex gap-2 items-center py-5">
                <img className="h-10 w-10 rounded-full" src={image} alt="" />
                <p className="text-lg font-semibold text-gray-700">{name}</p>
            </div>
        </div>
    );
};

export default WinnerDetails;