import LOGO from "../assets/logo.png"
function AppBar() {
    return (
        <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
            <div>
                <img
                    className="width: 156.77px height: 24px gap: 0px opacity: 0px h-10"
                    src={LOGO}
                    alt="logo"
                />
            </div>
        </div>
    );
}

export default AppBar;
