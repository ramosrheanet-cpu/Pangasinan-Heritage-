import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >

      <label
        htmlFor="search"
        className="visually-hidden"
      >
        Search heritage
      </label>

      <input
        id="search"
        type="search"
        placeholder="Search Pangasinan heritage..."
        value={query}
        onChange={(event) =>
          setQuery(event.target.value)
        }
      />

      <Button type="submit">
        Search
      </Button>

    </form>
  );
}

export default SearchForm;