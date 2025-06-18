import React from 'react';
import styles from './SearchBar.module.css';

export const SearchBar = () => {
  return (
    <div className={styles.container}>
      <form className={styles.searchForm} role="search">
        <input
          type="text"
          placeholder="Search products, brands, articles..."
          className={styles.searchInput}
          aria-label="Search products, brands, articles..."
          aria-controls="search-suggestions"
          aria-autocomplete="list"
        />
        <button 
          type="submit" 
          aria-label="Search products, brands, articles..." 
          className={styles.searchButton}
        >
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
        </button>
      </form>
    </div>
  );
};

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M16.8685 15.9524L13.1598 12.2437C13.9624 11.2612 14.4052 10.024 14.4052 8.67338C14.4052 5.49333 11.8277 2.91663 8.64847 2.91663C5.46925 2.91663 2.91663 5.49416 2.91663 8.67338C2.91663 11.8526 5.49388 14.4301 8.64847 14.4301C9.99882 14.4301 11.2376 13.9621 12.2188 13.1836L15.9274 16.8923C16.0824 17.0234 16.254 17.0871 16.4229 17.0871C16.5917 17.0871 16.7627 17.0222 16.8925 16.8925C17.1508 16.6332 17.1508 16.2125 16.8685 15.9524ZM4.24511 8.67338C4.24511 6.23174 6.23174 4.24511 8.67338 4.24511C11.115 4.24511 13.1017 6.23174 13.1017 8.67338C13.1017 11.115 11.115 13.1017 8.67338 13.1017C6.23174 13.1017 4.24511 11.1145 4.24511 8.67338Z" />
  </svg>
);