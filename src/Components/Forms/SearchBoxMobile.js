'use client';
import { useState } from 'react'
import { SearchActions } from '../../store/searchSlice';
import { useDispatch } from 'react-redux';

function SearchBoxMobile() {

  const dispatch = useDispatch()

  const [searchTerm, setSearch] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
    dispatch(SearchActions.searchByName(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(SearchActions.searchByName(searchTerm))
  }


  return (
    <div className="relative mt-3 md:hidden">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          id="search-navbar"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="Search..." />
      </form>
    </div>
  );
}

export default SearchBoxMobile