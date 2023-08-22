function Header() {
    return (
        <div className="header-grid">
            <label htmlFor="menu-toggle" className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />

            <nav className="nav-menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {/* Add more menu items as needed */}
                </ul>
            </nav>

            <div className="Welcome">Welcome!</div>
        </div>
    );
}

export default Header;

