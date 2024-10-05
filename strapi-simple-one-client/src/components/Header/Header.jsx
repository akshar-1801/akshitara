import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch, TbMenu2 } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const { cartCount, showCart, setShowCart } = useContext(Context);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li onClick={() => navigate("/consulting")}>Consulting</li>
                        <li onClick={() => navigate("/blogs")}>Blogs</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        AKSHITARA.
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        <LuUser />
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <IoBagOutline />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                        <TbMenu2 className="menu-icon" onClick={handleMenuClick} />
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
            <div className={`dropdown-menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li onClick={() => { navigate("/"); setMenuOpen(false); }}>Home</li>
                    <li onClick={() => { navigate("/about"); setMenuOpen(false); }}>About</li>
                    <li onClick={() => { navigate("/consulting"); setMenuOpen(false); }}>Consulting</li>
                    <li onClick={() => { navigate("/blogs"); setMenuOpen(false); }}>Blogs</li>
                </ul>
            </div>
        </>
    );
};

export default Header;
