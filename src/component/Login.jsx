



function Login(){


   
    return(
      
       
        <div className="flex flex-col mx-auto justify-center items-center bg-[#f1E9fc] w-screen   h-screen overflow-x-hidden">
            <div  className="flex">
                <img src="../../repo/mian logo.png" alt="" className="h-[75px] w-[75px] rounded-full" />
                <h1 className="text-6xl">
                    CleverBook</h1>
            </div>
            <form className="flex flex-col gap-10 w-[420px] h-[300px] py-16 border rounded-lg bg-white ">
                <input type="email" placeholder="   Email" className="outline flex ml-5 mr-5 rounded-2xl px-4 ring-2 ring-gray-200 placeholder:gray-500" />
                <input type="password" placeholder="   Password" className="outline ml-5 mr-5 rounded-2xl border-none px-4" />
                <div className="flex justify-evenly py-6  ">
                    <button className="text-blue-700  justify-start -ml-16">
                        Forgot password ?</button>
                
                <div className="">
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 w-[90px] h-[40px] rounded-xl  " >
                        Login
                        </button>   </div>
                </div>
            </form>
          <div className="text-sm text-blue-800  ">
          <h3 className="py-2 hover hover:text-gray-950 ">Dont have an Account ?</h3>
            <p className="flex justify-center hover hover:text-gray-950">or</p>
            <h3 className="flex justify-center hover hover:text-gray-950 py-2"> Login with Spotify</h3>

          </div>

                <div className="py-16 text-blue-900">
                    Privacy Policy | Terms Of Service
                </div>
               

        </div>
    )
}
export default Login