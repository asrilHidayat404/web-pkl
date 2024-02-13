import Navigation from "../Components/Navigation"
import "../CSS/index.css"
const SideBar = ({handleLogOut}) => {
    return (
        <>
        <div className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 sidebar">
        <div className="flex items-center justify-center mt-8">
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="w-20 rounded-full overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
            </div>
            <span className="mx-2 text-2xl font-semibold text-white">
              Admin 
            </span>
          </div>
        </div>
        <Navigation handleLogOut={handleLogOut}/>
      </div>
        </>
    )
}

export default SideBar