import React from 'react';
import { useEffect } from "react";
import "./Sidebar.css";
import { useDataLayer } from "../../context/index";

const Sidebar = () => {
  const {
    state,
    dispatch,
    rangePrice,
    setRangePrice,
    category,
    sortType,
    setSortType,
    rating,
    setRating,
    searchTerm,
    handlChangeChecked,
    setCategory,
    initialCategoryState,
    handlRadioChangeChecked,
    filterByRatingsDB,
    handleSortRadioChangeChecked,
    sortByPriceDB,
  } = useDataLayer();

  const handleClearFilter = () => {
    setRating(filterByRatingsDB);
    setSortType(sortByPriceDB);
    setRangePrice(999);
    setCategory(initialCategoryState);
  };

  useEffect(() => {
    const applyFilters = () => {
      let filteredData = state.productData;
      const categoriesChecked = category
        .filter((item) => item.checked)
        .map((item) => item.label.toLowerCase());

      if (categoriesChecked.length) {
        filteredData = filteredData?.filter((item) =>
          categoriesChecked.includes(item.categoryName)
        );
      }
      if (rangePrice) {
        filteredData = filteredData?.filter(
          (item) => item.discountedPrice < rangePrice
        );
      }

      const checkedRating = rating.find((item) => item.checked);
      if (checkedRating) {
        filteredData = filteredData?.filter(
          (item) => item.rating >= Number(checkedRating.id)
        );
      }
      if (searchTerm) {
        filteredData = filteredData.filter(
          (item) =>
            item.name.toLowerCase().search(searchTerm.toLowerCase().trim()) !==
            -1
        );
      }

      const checkedSortingType = sortType.find((item) => item.checked);
      if (checkedSortingType) {
        filteredData =
          checkedSortingType.id === 2
            ? filteredData.sort((a, b) => b.discountedPrice - a.discountedPrice)
            : filteredData.sort(
                (a, b) => a.discountedPrice - b.discountedPrice
              );
      }

      dispatch({ type: "SET_FILTERED_DATA", payload: filteredData });
    };
    applyFilters();
  }, [rating, rangePrice, category, sortType, searchTerm]);

return (
  <aside className="section-filter">
    <div className="flex">
      <h3 className="header-filter">Filter</h3>
        <button className="btn btn-error-solid" onClick={() => handleClearFilter()}>
          Clear
        </button>
    </div>
    <h4 className="sub-header-filter">Price</h4>
    <input
      className="slider-custom"
      step="100"
      type="range"
      min="99"
      max="999"
      value={rangePrice}
      onChange={(e) => setRangePrice(e.target.value)}
    />
    <label className="price-range">
      <span id="price-max">₹99</span>
      <span id="price-min">₹499</span>
      <span id="price-mid">₹999</span>
    </label>
    <br/>
    <hr/>
    <h4 className="sub-header-filter">Ratings</h4>
      {rating.map((item) => {
        return (
          <div className="container-checkbox" key={item.id}>
            <input
              className="radio"
              type="radio"
              name="star"
              id={item.id}
              onChange={() => handlRadioChangeChecked(item.id)}
              value={item.id}
              checked={item.checked}
            />
            <label htmlFor={item.id} className="input-desc">
              {item.label}
            </label>
          </div>
        );
      })}
    <br/>
    <hr/>
    <h4 className="sub-header-filter">Life Stages</h4>
      {category.map((item) => {
        return (
          <div className="container-checkbox" key={item.id}>
            <input
              className="checkbox"
              type="checkbox"
              name={item.label}
              id={item.id}
              checked={item.checked}
              onChange={() => handlChangeChecked(item.id)}
            />
            <label htmlFor={item.label} className="input-desc">
              {item.label}
            </label>
          </div>
        );
      })}
    <br/>
    <hr/>
      <h4 className="sub-header-filter">Sort Price</h4>
        {sortType.map((item) => {
          return (
            <div className="container-checkbox" key={item.id}>
              <input
                className="checkbox"
                type="radio"
                name="price"
                id={item.id}
                onChange={() => handleSortRadioChangeChecked(item.id)}
                value={item.id}
                checked={item.checked}
              />
              <label htmlFor="low-to-high" className="input-desc">
                Price - {item.label}
              </label>
            </div>
          );
        })}
  </aside>
  );
};

export { Sidebar };