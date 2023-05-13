import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
const Header = () => {
    return (
        <div className="h-[100px] flex items-center  px-7  w-[1490px]  border border-[#e0dcdc]">
            <div className="flex-[0.4]">
                <h1 className="text-[#ff385c] pl-9 text-[30px]">bOOknd</h1>
            </div>
            <div className="flex justify-center gap-4 w-full ">
                <Search />
            </div>
        </div>
    );
};

export default Header;
