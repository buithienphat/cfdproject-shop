import React, { useEffect, useRef } from "react";
import CheckBox from "../../components/CheckBox";
import useDebounce from "../../hook/useDebounce";
import { Skeleton } from "antd";

const ProductsFilter = ({
  categories,
  isLoading,
  isError,
  activeCategory,
  onCateFilterChange,
  handleFilterChange,
  currentPriceRange,
}) => {
  const myPriceFilterTimeout = useRef();
  useEffect(() => {
    // Slider For category pages / filter price
    if (typeof noUiSlider === "object") {
      var priceSlider = document.getElementById("price-slider");

      // Check if #price-slider elem is exists if not return
      // to prevent error logs
      if (priceSlider == null) return;

      noUiSlider.create(priceSlider, {
        start: currentPriceRange,
        connect: true,
        step: 50,
        margin: 100,
        range: {
          min: 0,
          max: 1000,
        },
        tooltips: true,
        format: wNumb({
          decimals: 0,
          prefix: "$",
        }),
      });

      // Update Price Range
      priceSlider.noUiSlider.on("update", function (values, handle) {
        $("#filter-price-range").text(values.join(" - "));

        if (myPriceFilterTimeout.current) {
          clearTimeout(myPriceFilterTimeout.current);
        }
        myPriceFilterTimeout.current = setTimeout(() => {
          handleFilterChange(values.map((value) => value.substring(1)));
        }, 500);
      });
    }
  }, []);

  const onFilterChange = (id, isChecked) => {
    // if (isChecked) {
    //   onCateFilterChange(id);
    // } else {
    //   onCateFilterChange("");
    // }

    onCateFilterChange(id, isChecked);
  };
  return (
    <aside className="col-lg-3 order-lg-first">
      <div className="sidebar sidebar-shop">
        <div className="widget widget-clean">
          <label>Filters:</label>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onCateFilterChange("");
            }}
            className="sidebar-filter-clear"
          >
            Clean All
          </a>
        </div>
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-1"
              role="button"
              aria-expanded="true"
              aria-controls="widget-1"
            >
              Category
            </a>
          </h3>
          <div className="collapse show" id="widget-1">
            <div className="widget-body">
              <div className="filter-items filter-items-count">
                {isLoading
                  ? Array(3)
                      .fill("")
                      .map((_, i) => (
                        <div key={i} className="filter-item">
                          <Skeleton active />
                        </div>
                      ))
                  : categories?.map((category, i) => (
                      <div key={category?.id || i} className="filter-item">
                        <CheckBox
                          id={category?.id || i}
                          label={category.name || ""}
                          checked={activeCategory?.includes(category?.id)}
                          onChange={(value) => {
                            onFilterChange(category?.id, value.target.checked);
                          }}
                        />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-2"
              role="button"
              aria-expanded="true"
              aria-controls="widget-5"
            >
              {" "}
              Price{" "}
            </a>
          </h3>
          <div className="collapse show" id="widget-2">
            <div className="widget-body">
              <div className="filter-price">
                <div className="filter-price-text">
                  {" "}
                  Price Range: <span id="filter-price-range" />
                </div>
                <div id="price-slider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProductsFilter;
