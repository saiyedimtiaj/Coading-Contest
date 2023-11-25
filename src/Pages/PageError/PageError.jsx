import { Link } from "react-router-dom";

const PageError = () => {
    return (
        <div className="min-h-screen text-center">
            <img className="max-w-md mx-auto" src="https://i.ibb.co/1nKtG1n/3828537-removebg.png" alt="" />
            <Link to='/'>
            <button className="font-semibold text-white bg-blue-500 px-6 py-2 rounded-md mt-4">Go Back Home</button>
            </Link>
        </div>
    );
};

export default PageError;