'use client';

import { search } from '../../Assets/icons';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi'

function SearchBox() {
    return (
        <form className="flex max-w-xl flex-row gap-4 absolute left-64 w-full">

            <div className='relative w-1/2  flex'>

                <input className="rounded-full grow h-10" />

                <div className="flex flex-wrap gap-2 absolute   right-1  rounded-full  p-2 ">
                    <button className=' ' >
                        <img src={search} alt="" /> 
                    </button>
                </div>
            </div>


        </form>
    );
}

export default SearchBox