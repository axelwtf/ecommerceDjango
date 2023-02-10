import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineInformationCircle, HiOutlineUser, HiOutlineMapPin, HiOutlineHeart, HiMagnifyingGlass } from "react-icons/hi2";
import Headroom from 'react-headroom'
import Dropdown from './Dropdown'
import { useSelector } from 'react-redux'


function Header() {
    const authUserInfo = useSelector(state => state.userLogin.userInfo);
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    const itemCount = cartItems.length

    return (
        <header>
            <div className="container">
                <div className=''>
                    <div className='top-slide'>
                        <div className="header-left">
                            <p className="welcome-msg">Welcome to LOGO</p>
                        </div>

                        <div className="header-right">
                            <div className="dropdown">
                                <ul className="dropdown-box">
                                    <li><Link to="#">USD</Link></li>
                                    <li><Link to="#">EUR</Link></li>
                                </ul>
                            </div>
                            <span className="divider"></span>
                            <div className='list_user'>
                                <ul>
                                    <li><Link to="/contact"><HiOutlineMapPin className='icon' size={20} />Contact</Link></li>
                                    <li><Link to="#"><HiOutlineInformationCircle className='icon' size={20} />Help</Link></li>

                                    <li>
                                        {authUserInfo ? (
                                            <Dropdown authUserInfo={authUserInfo} />
                                        ) : (
                                            <Link to="/login"><HiOutlineUser className='icon' size={20} /> Sign In / Register</Link>
                                        )}
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Headroom>
                <nav>
                    <div className="container">
                        <div className='nav_flex'>
                            <div></div>
                            <div className="navigation">
                                <ul>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/articles">Articles</NavLink></li>
                                    <li><NavLink>Blog</NavLink></li>
                                    <li className='search_bar'><HiMagnifyingGlass className='icon' size={20} /></li>
                                </ul>
                            </div>
                            <div className="nav_option">
                                <NavLink><HiOutlineHeart className='icon' size={20} /></NavLink>
                                <NavLink to="/cart"><HiOutlineShoppingBag className='icon' size={20} />{itemCount}</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>

            </Headroom>
        </header>
    )
}

export default Header
