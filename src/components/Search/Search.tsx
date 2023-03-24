import {ReactComponent as SearchIcon} from 'assets/icon-search.svg';
import { Button } from 'components/Button';
//import { useRef } from 'react';

import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSumbmit: (text: string) => void
}

type FormFields = {
  username: HTMLInputElement;
}

export const Search = ({hasError, onSumbmit}: SearchProps) => {
  /* const searchRef = useRef<HTMLInputElement | null>(null); */

  const handleSumbit = (event: React.FormEvent<HTMLFormElement & FormFields>) => { // ФормЭвент принимает два типа и мерджит их.
    event.preventDefault();
    const text = event.currentTarget.username.value

    if (text) {
      onSumbmit(text);
      event.currentTarget.reset();
    }
    /* const text = searchRef.current?.value || '';
    if (text) {
      onSumbmit(text);
      if (searchRef.current) {
        searchRef.current.value = '';
      }
    } */
  };

  return (
    <form
      onSubmit={handleSumbit}
      autoComplete="off"
    >
      <div className={styles.search}>
        <label
          htmlFor="search"
          className={styles.label}
        >
          <SearchIcon />
        </label>
        <input
          /* ref={searchRef} */
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        <Button>Search</Button>
      {hasError && <div className={styles.error}>No result</div>}
      </div>
    </form>
  );
}


