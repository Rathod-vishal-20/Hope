
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
function Nav(){
    return(
        <div className="  mx-auto flex  gap-[7rem]  bg-[#151218] text-white h-[70px] w-[full]  justify-evenly ">
          <div className="mt-3 text-3xl flex">
            <img src="../../repo/CleverBook_transparent.png" alt="" height={250}  width={250} className=" object-cover" />
     
          </div>
          <div className="flex mt-6 ">
            <ul className="flex  gap-3 justify-center   ">
              <li>
                <NavLink to="/" id="vishnu">Home</NavLink>
              </li>
            {/* <li className=" hover hover:text-blue-400" href="/product">Product</li> */}
            <li className="text-white "> 
              {/* <NavLink to="/product">Product</NavLink> */}
              <Profile/>
            </li>
            <li className=" hover hover:text-blue-400">Pricing</li>
            <li className=" hover hover:text-blue-400">Industry</li>
            <li className=" hover hover:text-blue-400"> Custories Stories</li>
            <li className=" hover hover:text-blue-400">
              <NavLink to="/about" >About</NavLink>
            </li>
            <li className=" hover hover:text-blue-700">Blog</li>
            </ul>
          </div> 
          <div className=" flex gap-3 justify-center">
            <button className=" text-slate-300 hover hover:text-[#551A8b] text-[16px]">
            <NavLink to="/login" >Login</NavLink>
                </button>
                  
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-[100px]  h-[40px] mt-4  mb-2 text-[15px] ">
                    Talk To Us
                    </button>
                    </div>
        </div>
    )
}

export default Nav