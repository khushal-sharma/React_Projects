const Navbar = ()=>{
    return (
        <div className="navBar">
            <div className="logo"><img src="./public/brand_logo.png" alt="Logo" /></div>
            <div className="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">LOCATION</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <button className="btn">Login</button>
        
        </div>

    )
}

export default Navbar;