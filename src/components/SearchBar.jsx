import '../App.css';

const SearchBar = ({setSearchQuery,searchQuery,sortOrder,handleSortChange}) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="main-search">
      <form className="search-bar" role="search">
        <input
          value={searchQuery}
          onChange={handleSearchChange}
          className="search"
          type="text"
          placeholder="Search by task name"
          id="search-bar"
          aria-label="Search"
        />
        <img src='src/assets/serchbar.svg'></img>
      </form>
      <div className="dropdown-area">
        <p className="sort-by">Sort by :</p>
        <select className="sort-tasks" id="sort-tasks" onChange={handleSortChange} value={sortOrder} >
          <option value="date-desc">Newest First </option>
          <option value="date-asc">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;