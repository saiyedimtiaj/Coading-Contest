import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar/Sidebar";


const DashboardLayout = () => {
    return (
        <div className="flex gap-5 container mx-auto">
            <div className="min-h-screen">
                <Sidebar/>
            </div>
            <div className="flex-1 px-3 mt-4">
                <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;