'use client';
import { useState } from 'react'
import { search } from '../../Assets/icons';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi'
import { SearchActions } from '../../store/searchSlice';
import { useDispatch } from 'react-redux';

function SearchBox() {

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
        <form  onSubmit={handleSubmit}>

          <div class="relative hidden md:block">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input 
            type="text" 
            id="search-navbar" 
            onChange={handleChange}
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Search..." 
            
            />
          </div>


        </form>
    );
}

export default SearchBox