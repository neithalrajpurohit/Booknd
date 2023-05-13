import React, { useState } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import Tab1 from "./Tab1";
const Search = () => {
    const [model, setModel] = useState(true);

    return (
        <div className="flex justify-center items-center ">
            <div className="h-[50px] text-[14px]  w-[400px] rounded-[25px] border border-[#ddd] hover:shadow-md ">
                <div className="flex justify-around items-center h-full pl-2 ">
                    <h3
                        className="font-semibold"
                        onClick={() => setModel(true)}>
                        Anywhere
                    </h3>
                    <span className="h-[35px] w-[1px] bg-[#b1a9a9fe] mt-1"></span>
                    <h3 className="font-semibold">Any week</h3>
                    <span className="h-[35px] w-[1px] bg-[#b1a9a9fe] mt-1"></span>
                    <h3 className="text-[#8d8686fe]">Add guests</h3>
                    <div>
                        <IoSearchCircleSharp fontSize={40} color="#ff385c" />
                    </div>
                </div>
                {model && <Tab1 />}
            </div>
        </div>
    );
};

export default Search;
