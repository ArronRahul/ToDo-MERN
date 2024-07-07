import './SearchBar.css';

const SearchBar = () => {

  return (
    <div className="main-search">
      <form className="search-bar" role="search">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search by task name"
          id="search-bar"
          aria-label="Search"
        />
      </form>
      <div className="dropdown-area">
        <p className="sort-by">Sort by :</p>
        <select className="sort-tasks" id="sort-tasks" >
          <option value="date-desc">Newest First</option>
          <option value="date-asc">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;