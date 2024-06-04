



function Footer(){
    return(
        <div className=" bg-[#151218] h-screen text-white">
               <div className="flex  justify-evenly ">
               <div className="w-[450px]  ">
                    <h1 >
                        <img src="../../repo/CleverBook_transparent.png" alt=""  className="h-[450px]  w-[450px] " />
                    </h1>
                
                
                    <p>Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>
                    </div>
                    <div className="py-32">
                        <ul>
                            <li>Explore </li>
                            <li>Pricing</li>
                            <li>Product </li>
                            <li> Customer Service</li>
                            <li> career</li>
                        </ul>
                    </div>
                    <div className="py-32">
                        <ul>
                            <li>Learn </li>
                            <li> About </li>
                            <li> Bolg</li>
                        </ul>
                    </div>
                    <div className="py-32">
                        <h2>Contact Us</h2>
                        sales@CleverBook.ai
                        <p className="py-8">
                        Registered Office:
                        1507, Incubex, 11th cross road, <br />
                        19th Main Road,<br /> 
                        Bengaluru, India. 560102
                        </p>
                        <p className="py-16">
                        Corporate Office: <br />
                    291, All Time Space, 4th Floor,<br />
                    15th A Cross, Sector - 6,<br />
                        HSR Layout, Bengaluru,<br />
                        India. 560102
                        </p>
                    </div>
               </div>




               <div className="mb-10 bg-[#151218] " >
                <button className=" transition  duration-300 px-[720px] ">
                    <a href="#vishnu"> 
                   <img src="../../repo/up-arrow.png" alt=""className="h-[45px] w-[45px]  border-r-4     border-r-gray-300 rounded-full    " />
                    </a>
                </button>
               </div>
                


        </div>
    )
}

export default Footer;