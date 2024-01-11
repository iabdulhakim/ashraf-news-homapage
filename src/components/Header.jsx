function Header() {
    return (
        <div className="header">
            <img className="sitelogo" src="./vite.svg" alt="" />
            <div className="sitenav">
                <a className="sitenav-item" href="">Home</a>
                <a className="sitenav-item" href="">New</a>
                <a className="sitenav-item" href="">Popular</a>
                <a className="sitenav-item" href="">Trending</a>
                <a className="sitenav-item" href="">Categories</a>
            </div>
            <img className="sitemenu" src="./menu.svg" alt="" />
        </div>
    )
}


export default Header;