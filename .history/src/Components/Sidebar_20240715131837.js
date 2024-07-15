import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

function Sidebar() {
  const [page, setPage] = useState(1);
  const [channels, setChannels] = useState([]);
  const fetchChannels = async () => {
    try {
      const res = await axios.get(
        `https://devapi.beyondchats.com/api/get_all_chats?page=${page}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      //   console.log(res);
      setChannels(res.data.data);
      console.log(channels);
    } catch (error) {
      console.log(error);
    }
  };

  function formatString(str) {
    str = str.trim();
    const words = str.split(/\s+/);
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    } else if (words.length === 2) {
      return (
        words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase()
      );
    } else {
      return (
        words[0].charAt(0).toUpperCase() +
        words[words.length - 1].charAt(0).toUpperCase()
      );
    }
  }

  useEffect(() => {
    fetchChannels();
  }, []);

  const ref = useRef();
  return (
    <div className="w-full md:max-w-[26rem] bg-[#202020] border-r border-[#181818] h-screen">
      <div className="flex items-center justify-start px-4 h-14 w-full">
        <div className="px-2 text-stone-300">
          <MenuIcon />
        </div>

        <div className="flex items-center justify-start border text-stone-500 w-full px-3 mx-2 border-stone-700 rounded-full p-2 bg-[#181818]">
          <div className="w-auto">
            <SearchIcon />
          </div>
          <form className="w-full text-white font-semibold">
            <input
              className=" w-full bg-inherit pl-2 focus:outline-none"
              placeholder="Search"
            />
            <div className="w-full bg-inherit pl-2"></div>
          </form>
        </div>
      </div>
      <div className=" overflow-y-auto"></div>
    </div>
  );
}

export default Sidebar;
