import {BiSearch} from 'react-icons/bi'
import CategoryItem from '../CategoryItem'
import RatingItem from '../RatingItem'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    updateSearchInputValue,
    updateCategorySelected,
    updateRatingSelected,
    resetFilters,
  } = props

  const onSearchInput = e => {
    if (e.key === 'Enter') {
      updateSearchInputValue(e.target.value)
    }
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          onKeyDown={onSearchInput}
          className="search-input"
          type="search"
          placeholder="Search"
        />
        <BiSearch className="search-icon" />
      </div>
      <h1 className="category-text">Category</h1>
      <ul className="category-list-container">
        {categoryOptions.map(eachCategory => (
          <CategoryItem
            categoryDetails={eachCategory}
            key={eachCategory.categoryId}
            updateCategorySelected={updateCategorySelected}
          />
        ))}
      </ul>
      <p className="category-text">Rating</p>
      <ul className="category-list-container">
        {ratingsList.map(eachRating => (
          <RatingItem
            ratingDetails={eachRating}
            key={eachRating.ratingId}
            updateRatingSelected={updateRatingSelected}
          />
        ))}
      </ul>
      <button
        onClick={resetFilters}
        type="button"
        className="clear-filters-button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
