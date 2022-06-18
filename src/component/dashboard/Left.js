// NAVIGATIONS & CONTROL
import React, { useState } from "react";
import "./dashboard.scss";
// import { GiMusicalScore } from "react-icons/gi";
import {
    RiHome5Fill,
    RiCompassDiscoverFill,
    RiRadio2Fill,
    RiFolderOpenFill,
    RiFolderMusicFill,
    RiAddFill,
    RiUserSmileFill,
} from "react-icons/ri";
import { SiApplepodcasts } from "react-icons/si";
const Left = () => {
    const [SearchValue, setSearchValue] = useState("");
    // handle Search

    const handleSearch = (e) => { e.preventDefault() }
    // 
    return (
        <div className="left h-full md:min-h-screen">
            <header className="flex flex-row items-center py-2 mt-8 text-white text-2xl font-normal justify-center">
                Adejarree
            </header>

            {/* SEARCHHHHHHHHH */}
            <div className="mt-8 m-auto flex justify-center ">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex align-center px-4 text-center py-2 rounded-lg justify-center bg-gray-500 outline-none text-gray-100 placeholder:text-gray-500 focus:ring-2"
                        value={SearchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </form>
            </div>
            {/* MENUUU */}
            <div className="flex md:flex-col flex-row items-start justify-center">
                <div className="menu text-gray-500 m-8 ml-10">
                    <h3 className="mb-4">MENU</h3>
                    <ul className="">
                        <li className="flex flex-row items-center text-gray-300 mb-2">
                            {" "}
                            <RiHome5Fill className="text-white mr-2" /> Home
                        </li>
                        <li className="flex flex-row items-center mb-2">
                            {" "}
                            <RiCompassDiscoverFill className="mr-2" /> Discover
                        </li>
                        <li className="flex flex-row items-center mb-2">
                            {" "}
                            <RiRadio2Fill className="mr-2" /> Radio
                        </li>
                        <li className="flex flex-row items-center mb-2">
                            {" "}
                            <SiApplepodcasts className="mr-2" />
                            Podcast
                        </li>
                    </ul>
                </div>

                {/* LIBRARY */}

                <div className="menu text-gray-500 m-8 ml-10">
                    <h3 className="mb-4">LIBRARY</h3>
                    <ul className="">
                        <li className="flex flex-row items-center text-gray-300 mb-2">
                            {" "}
                            <RiFolderOpenFill className="text-white mr-2" /> Album
                        </li>
                        <li className="flex flex-row items-center mb-2">
                            {" "}
                            <RiFolderMusicFill className="mr-2" /> Song
                        </li>
                        <li className="flex flex-row items-center mb-2">
                            {" "}
                            <RiUserSmileFill className="mr-2" />
                            Artists
                        </li>
                    </ul>
                </div>

                {/* Playlist */}
                <div className="menu text-gray-500 m-8 ml-10">
                    <h3 className="mb-4">LIBRARY</h3>
                    <ul className="flex flex-row items-center justify-between">
                        <li className="flex flex-row items-center text-gray-300 mb-2">
                            {" "}
                            <RiFolderOpenFill className="text-white mr-2" /> Emptyy
                        </li>
                        <RiAddFill className="text-white" />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Left;
