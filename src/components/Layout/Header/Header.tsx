import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {Search} from "./Blocks/Search"
import {TopMenu} from "./Menu/TopMenu";
import {TopPhone} from "./Blocks/TopPhone";
import {Logo} from "./Blocks/Logo";
import {Actions} from "./Blocks/Actions";

export function Header() {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            setScroll(scrollCheck);
        });
    });

    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <header className="header-style-1 header-area header-style-1 header-height-2">
                <div className="header-top header-top-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <TopMenu/>
                            <TopPhone/>
                        </div>
                    </div>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <Logo/>
                            <div className="header-right">
                                <Search/>
                                <Actions/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        scroll
                            ? "header-bottom header-bottom-bg-color sticky-bar stick"
                            : "header-bottom header-bottom-bg-color sticky-bar"
                    }
                >
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <Link to="/">
                                    <a>
                                        <img
                                            src="/assets/imgs/theme/logo.svg"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <a
                                        className="categories-button-active"
                                        onClick={handleToggle}
                                    >
                                        <span className="fi-rs-apps"></span>
                                        <span className="et">Browse</span> All
                                        Categories
                                        <i className="fi-rs-angle-down"></i>
                                    </a>

                                    <div
                                        className={
                                            isToggled
                                                ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open"
                                                : "categories-dropdown-wrap categories-dropdown-active-large font-heading"
                                        }
                                    >
                                        <div className="d-flex categori-dropdown-inner">
                                            {/*<CategoryProduct2/>
                                            <CategoryProduct3/>*/}
                                        </div>
                                        <div
                                            className="more_slide_open"
                                            style={{display: "none"}}
                                        >
                                            <div className="d-flex categori-dropdown-inner">
                                                <ul>
                                                    <li>
                                                        <Link to="/products"><a>
                                                            {" "}
                                                            <img
                                                                src="/assets/imgs/theme/icons/icon-1.svg"
                                                                alt=""
                                                            />
                                                            Milks and Dairies
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products"><a>
                                                            {" "}
                                                            <img
                                                                src="/assets/imgs/theme/icons/icon-2.svg"
                                                                alt=""
                                                            />
                                                            Clothing & beauty
                                                        </a></Link>
                                                    </li>
                                                </ul>
                                                <ul className="end">
                                                    <li>
                                                        <Link to="/products"><a>
                                                            {" "}
                                                            <img
                                                                src="/assets/imgs/theme/icons/icon-3.svg"
                                                                alt=""
                                                            />
                                                            Wines & Drinks
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products"><a>
                                                            {" "}
                                                            <img
                                                                src="/assets/imgs/theme/icons/icon-4.svg"
                                                                alt=""
                                                            />
                                                            Fresh Seafood
                                                        </a></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="more_categories">
                                            <span className="icon"></span>{" "}
                                            <span className="heading-sm-1">
                                                Show more...
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                                    <nav>
                                        <ul>
                                            <li className="hot-deals">
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-hot.svg"
                                                    alt="hot deals"
                                                />
                                                <Link to="/products"><a>
                                                    Hot Deals
                                                </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <a className="active">
                                                        Home
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/">
                                                            <a>Home 1</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/index-2">
                                                            <a>Home 2</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/index-3">
                                                            <a>Home 3</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/index-4">
                                                            <a>Home 4</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/page-about">
                                                    <a>About</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/shop-grid-right">
                                                    <a>
                                                        Shop
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/shop-grid-right">
                                                            <a>
                                                                Shop Grid –
                                                                Right Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products">
                                                            <a>
                                                                Shop Grid – Left
                                                                Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop-list-right">
                                                            <a>
                                                                Shop List –
                                                                Right Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop-list-left">
                                                            <a>
                                                                Shop List – Left
                                                                Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop-fullwidth">
                                                            <a>Shop - Wide</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop-filter">
                                                            <a>Shop - Filter</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop-wishlist">
                                                            <a>
                                                                Shop – Wishlist
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop-cart">
                                                            <a>Shop – Cart</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop-checkout">
                                                            <a>
                                                                Shop – Checkout
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop-compare">
                                                            <a>
                                                                Shop – Compare
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <a href="#">Vendors <i className="fi-rs-angle-down"></i></a>
                                                <ul className="sub-menu">
                                                    <li><Link to="/vendors"><a>Vendors Grid</a></Link></li>
                                                    <li><Link to="/vendors-list"><a>Vendors List</a></Link></li>
                                                    <li><Link to="/vendor-dashboard"><a>Vendor Dashboard</a></Link></li>
                                                    <li><Link to="/vendor-guide"><a>Vendor Guide</a></Link></li>
                                                </ul>
                                            </li>

                                            <li className="position-static">
                                                <Link to="/#">
                                                    <a>
                                                        Mega menu
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a
                                                            className="menu-title"
                                                            href="#"
                                                        >
                                                            Fruit & Vegetables
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Meat &
                                                                    Poultry
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Fresh
                                                                    Vegetables
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Herbs &
                                                                    Seasonings
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Cuts &
                                                                    Sprouts
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Exotic
                                                                    Fruits &
                                                                    Veggies
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Packaged
                                                                    Produce
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a
                                                            className="menu-title"
                                                            href="#"
                                                        >
                                                            Breakfast & Dairy
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Milk &
                                                                    Flavoured
                                                                    Milk
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Butter and
                                                                    Margarine
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Eggs
                                                                    Substitutes
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Marmalades
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Sour Cream
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Cheese
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a
                                                            className="menu-title"
                                                            href="#"
                                                        >
                                                            Meat & Seafood
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Breakfast
                                                                    Sausage
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Dinner
                                                                    Sausage
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Chicken
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Sliced Deli
                                                                    Meat
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Wild Caught
                                                                    Fillets
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Crab and
                                                                    Shellfish
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-34">
                                                        <div className="menu-banner-wrap">
                                                            <a href="#">
                                                                <img
                                                                    src="/assets/imgs/banner/banner-menu.png"
                                                                    alt="Nest"
                                                                />
                                                            </a>
                                                            <div className="menu-banner-content">
                                                                <h4>
                                                                    Hot deals
                                                                </h4>
                                                                <h3>
                                                                    Don't miss
                                                                    <br/>
                                                                    Trending
                                                                </h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price text-success">
                                                                        Save to
                                                                        50%
                                                                    </span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <a href="#">
                                                                        Shop now
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>
                                                                        25%
                                                                    </span>
                                                                    off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/blog-category-grid">
                                                    <a>
                                                        Blog
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/blog-category-grid">
                                                            <a>
                                                                Blog Category
                                                                Grid
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blog-category-list">
                                                            <a>
                                                                Blog Category
                                                                List
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blog-category-big">
                                                            <a>
                                                                Blog Category
                                                                Big
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blog-category-fullwidth">
                                                            <a>
                                                                Blog Category
                                                                Wide
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/#">
                                                            <a>
                                                                Single Post
                                                                <i className="fi-rs-angle-right"></i>
                                                            </a>
                                                        </Link>
                                                        <ul className="level-menu level-menu-modify">
                                                            <li>
                                                                <Link to="/blog-post-left">
                                                                    <a>
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/blog-post-right">
                                                                    <a>
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/blog-post-fullwidth">
                                                                    <a>
                                                                        No
                                                                        Sidebar
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/#">
                                                    <a>
                                                        Pages
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/page-about">
                                                            <a>About Us</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/page-contact">
                                                            <a>Contact</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/page-account">
                                                            <a>My Account</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/page-login-register">
                                                            <a>
                                                                login/register
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/page-purchase-guide">
                                                            <a>
                                                                Purchase Guide
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/page-privacy-policy">
                                                            <a>
                                                                Privacy Policy
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/page-terms">
                                                            <a>
                                                                Terms of Service
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/page-404">
                                                            <a>404 Page</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/page-contact">
                                                    <a>Contact</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="hotline d-none d-lg-flex">
                                <img
                                    src="/assets/imgs/theme/icons/icon-headphone.svg"
                                    alt="hotline"
                                />

                                <p>
                                    1900 - 888<span>24/7 Support Center</span>
                                </p>
                            </div>

                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white">
                                    <span className="burger-icon-top"></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>

                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <Link to="/shop-wishlist">
                                            <a>
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-compare.svg"
                                                />
                                                <span className="pro-count white">
                                                    6666
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link to="/shop-wishlist">
                                            <a>
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-heart.svg"
                                                />
                                                <span className="pro-count white">
                                                    7777
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link to="/shop-cart">
                                            <a className="mini-cart-icon">
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-cart.svg"
                                                />
                                                <span className="pro-count white">
                                                    9999
                                                </span>
                                            </a>
                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link to="/shop-grid-right">
                                                            <a>
                                                                <img
                                                                    alt="Evara"
                                                                    src="/assets/imgs/shop/thumbnail-3.jpg"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link to="/shop-grid-right">
                                                                <a>
                                                                    Plain
                                                                    Striola
                                                                    Shirts
                                                                </a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            $800.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link to="/#">
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link to="/shop-grid-right">
                                                            <a>
                                                                <img
                                                                    alt="Evara"
                                                                    src="/assets/imgs/shop/thumbnail-4.jpg"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link to="/shop-grid-right">
                                                                <a>
                                                                    Macbook Pro
                                                                    2022
                                                                </a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            $3500.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link to="/#">
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>
                                                        Total
                                                        <span>$383.00</span>
                                                    </h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <Link to="/shop-cart">
                                                        <a>View cart</a>
                                                    </Link>
                                                    <Link to="/shop-checkout">
                                                        <a>Checkout</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-action-icon-2 d-block d-lg-none">
                                        <div
                                            className="burger-icon burger-icon-white"
                                            /*onClick={toggleClick}*/
                                        >
                                            <span className="burger-icon-top"></span>
                                            <span className="burger-icon-mid"></span>
                                            <span className="burger-icon-bottom"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
