import React, { useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

const SearchBar = ({jobcountplaceholder}) => {
  const inputRef = useRef(null);

  useHotkeys('ctrl+k', (event) => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  
  return (
    <div>
      <input
        ref={inputRef}
        className="px-3 py-2 text-lg font-bold rounded-lg border focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cccccc]"
        placeholder={`search among ${jobcountplaceholder} jobs`} 
      />
    </div>
  );
};

export default SearchBar;
