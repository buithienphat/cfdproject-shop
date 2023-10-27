import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { handleShowNavbar } from "../../store/reducers/mainreducer";
import { MenuStyle } from "../styled-components";

const HeaderMiddle = () => {
  // const { isShowNavbar, handleShowNavbar } = useMainContext();

  const { isShowNavbar } = useSelector((state) => state.main);
  const dispath = useDispatch();

  useEffect(() => {
    if (isShowNavbar) {
      $("body").addClass("mmenu-active");
      $("mobile-menu-toggler").addClass("active");
    } else {
      $("body").removeClass("mmenu-active");
      $("mobile-menu-toggler").removeClass("active");
    }
  }, [isShowNavbar]);

  const _toggleMenu = (e) => {
    e?.stopPropagation();
    dispath(handleShowNavbar());
  };

  return (
    <div className="header-middle sticky-header">
      <div className="container">
        <div className="header-left">
          <button onClick={_toggleMenu} className="mobile-menu-toggler">
            <span className="sr-only">Toggle mobile menu</span>
            <i className="icon-bars" />
          </button>
          <Link to={PATHS.HOME} className="logo">
            <img src="/assets/images/logo.svg" alt="Molla Logo" width={160} />
          </Link>
        </div>
        <nav className="main-nav">
          <MenuStyle className="menu">
            <li>
              <NavLink to="./">Home</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.ABOUT}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.PRODUCT}>Product</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.BLOG}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.CONTACT}>Contact Us</NavLink>
            </li>
          </MenuStyle>
        </nav>
        <div className="header-right">
          <div className="header-search">
            <a href="#" className="search-toggle" role="button" title="Search">
              <i className="icon-search" />
            </a>
            <form action="#" method="get">
              <div className="header-search-wrapper">
                <label htmlFor="q" className="sr-only">
                  Search
                </label>
                <input
                  type="search"
                  className="form-control"
                  name="q"
                  id="q"
                  placeholder="Search in..."
                  required
                />
              </div>
            </form>
          </div>
          <div className="dropdown cart-dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-display="static"
            >
              <i className="icon-shopping-cart" />
              <span className="cart-count">2</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-cart-products">
                <div className="product">
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <a href="product-detail.html">Beige knitted</a>
                    </h4>
                    <span className="cart-product-info">
                      <span className="cart-product-qty">1</span> x $84.00{" "}
                    </span>
                  </div>
                  <figure className="product-image-container">
                    <a href="product-detail.html" className="product-image">
                      <img
                        src="assets/images/products/cart/product-1.jpg"
                        alt="product"
                      />
                    </a>
                  </figure>
                  <a href="#" className="btn-remove" title="Remove Product">
                    <i className="icon-close" />
                  </a>
                </div>
                <div className="product">
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <a href="product-detail.html">Blue utility</a>
                    </h4>
                    <span className="cart-product-info">
                      <span className="cart-product-qty">1</span> x $76.00{" "}
                    </span>
                  </div>
                  <figure className="product-image-container">
                    <a href="product-detail.html" className="product-image">
                      <img
                        src="assets/images/products/cart/product-2.jpg"
                        alt="product"
                      />
                    </a>
                  </figure>
                  <a href="#" className="btn-remove" title="Remove Product">
                    <i className="icon-close" />
                  </a>
                </div>
              </div>
              <div className="dropdown-cart-total">
                <span>Total</span>
                <span className="cart-total-price">$160.00</span>
              </div>
              <div className="dropdown-cart-action">
                <a href="cart.html" className="btn btn-primary">
                  View Cart
                </a>
                <a href="checkout.html" className="btn btn-outline-primary-2">
                  <span>Checkout</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
