import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";

const IntrosSection = ({ introProducts }) => {
    useEffect(() => {
        function owlCarousels($wrap, options) {
            if ($.fn.owlCarousel) {
                var owlSettings = {
                    items: 1,
                    loop: true,
                    margin: 0,
                    responsiveClass: true,
                    nav: true,
                    navText: [
                        '<i class="icon-angle-left">',
                        '<i class="icon-angle-right">',
                    ],
                    dots: true,
                    smartSpeed: 400,
                    autoplay: false,
                    autoplayTimeout: 15000,
                };
                if (typeof $wrap == "undefined") {
                    $wrap = $("body");
                }
                if (options) {
                    owlSettings = $.extend({}, owlSettings, options);
                }

                // Init all carousel
                $wrap.find('[data-toggle="owl"]').each(function () {
                    var $this = $(this),
                        newOwlSettings = $.extend(
                            {},
                            owlSettings,
                            $this.data("owl-options")
                        );

                    $this.owlCarousel(newOwlSettings);
                });
            }
        }

        owlCarousels();
    }, []);

    return (
        <div className="intro-section pt-3 pb-3 mb-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="intro-slider-container slider-container-ratio mb-2 mb-lg-0">
                            <div
                                className="intro-slider owl-carousel owl-simple owl-dark owl-nav-inside"
                                data-toggle="owl"
                                data-owl-options='{"nav": false,"dots": true,"responsive": {"768": {"nav": true,"dots": false}}}'
                            >
                                <div className="intro-slide">
                                    <figure className="slide-image">
                                        <img
                                            src="assets/images/demos/demo-3/slider/slide-1.jpg"
                                            alt="Image Desc"
                                        />
                                    </figure>
                                    <div className="intro-content">
                                        <h3 className="intro-subtitle text-primary">
                                            Daily Deals
                                        </h3>
                                        <h1 className="intro-title">
                                            AirPods <br />
                                            Earphones
                                        </h1>
                                        <div className="intro-price">
                                            <sup>Today:</sup>
                                            <span className="text-primary">
                                                $247 <sup>.99</sup>
                                            </span>
                                        </div>
                                        <Link
                                            to={PATHS.PRODUCT}
                                            className="btn btn-primary btn-round"
                                        >
                                            <span>Click Here</span>
                                            <i className="icon-long-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="intro-slide">
                                    <figure className="slide-image">
                                        <img
                                            src="assets/images/demos/demo-3/slider/slide-2.jpg"
                                            alt="Image Desc"
                                        />
                                    </figure>
                                    <div className="intro-content">
                                        <h3 className="intro-subtitle text-primary">
                                            Deals and Promotions
                                        </h3>
                                        <h1 className="intro-title">
                                            Echo Dot <br />
                                            3rd Gen
                                        </h1>
                                        <div className="intro-price">
                                            <sup className="intro-old-price">
                                                $49,99
                                            </sup>
                                            <span className="text-primary">
                                                $29 <sup>.99</sup>
                                            </span>
                                        </div>
                                        <Link
                                            to={PATHS.PRODUCT}
                                            className="btn btn-primary btn-round"
                                        >
                                            <span>Click Here</span>
                                            <i className="icon-long-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <span className="slider-loader" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="intro-banners">
                            {introProducts?.map((item, index) => {
                                const { name, images, slug, id } = item;
                                const productPath = PATHS.PRODUCT + `/${slug}`;
                                return (
                                    <div
                                        key={id || index}
                                        className="banner mb-lg-1 mb-xl-2"
                                        style={{
                                            display: "flex",
                                            flexDirection: "row-reverse",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            paddingLeft: "20px",
                                            border: "1px solid #ebebeb",
                                        }}
                                    >
                                        <div className="test">
                                            <a href={productPath}>
                                                <img
                                                    src={images[0]}
                                                    alt="Banner"
                                                    style={{
                                                        // maxWidth: "70%",
                                                        height: 120,
                                                        // objectFit: "contain",
                                                        // objectPosition:
                                                        //     "center right",
                                                    }}
                                                />
                                            </a>
                                        </div>
                                        <div
                                            className="banner-content"
                                            style={{
                                                position: "relative",
                                                transform: "unset",
                                                left: 0,
                                                maxWidth: "60%",
                                            }}
                                        >
                                            <h3 className="banner-title">
                                                <Link to={productPath}>
                                                    {name}
                                                </Link>
                                            </h3>
                                            <Link
                                                to={productPath}
                                                className="banner-link"
                                            >
                                                Shop Now{" "}
                                                <i className="icon-long-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntrosSection;
