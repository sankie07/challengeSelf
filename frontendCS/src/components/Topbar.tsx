        export const Topbar=()=>{
                return <div className="max-w-screen-lg w-full bg-black min-h-56 align-center m-0 pt-4">
                            <div className="flex">
                                <img src="/logo_challengeSelf.jpg" className="max-w-56 align-center p-5"  />
                                <div className="text-6xl text-slate-500 "> ChallengeSelf </div>
                            </div>

                        
                            <Navbar />
                        </div>
                
        }
        const topbarItems=[{
            title:"About",
            route:"/About"
        },{
            title:"Activity",
            route:"/Activity"
        },{
            title:"Problems",
            route:"/Problems"
        },
        {
            title:"Leaderboard",
            route:"/Leaderboard"
        },{
            title:"Login",
            route:"/Login"
        }]
        function Navbar(){
            return <div className="flex">
                {topbarItems.map(item=> <NavbarItem route={item.route} title={item.title} />)}
            </div>
        }
        function NavbarItem({title,route}:{
            title:string;
            route:string;
        }){
            return <div className="mx-10 text-slate-500 text-lg cursor-pointer hover:text-white text-base">
                {title}
            </div>
        }