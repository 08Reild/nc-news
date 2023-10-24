// import { useState } from "react";

function SearchBar () {
    // const [Id, setId] = useState("0");
    return (
        <div>
          <form>
            <label htmlFor="articleId">Search by Article Id:</label>
            <input
              type="text"
              id="articleId"
              name="articleId"
            />
            <button type="submit">Search</button>
          </form>
        </div>
      )
}

export default SearchBar