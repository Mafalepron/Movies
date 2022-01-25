
function SearchCategories() {

    return (
        <form action="#" className="search-form">
    <p>
      <label>
        <input className="with-gap" name="group1" type="radio" />
        <span>All</span>
      </label>
    </p>
    <p>
      <label>
        <input className="with-gap" name="group1" type="radio" />
        <span>films</span>
      </label>
    </p>
    <p>
      <label>
        <input className="with-gap" name="group1" type="radio"  />
        <span>series</span>
      </label>
    </p>
  </form>

    )
};

export {SearchCategories};