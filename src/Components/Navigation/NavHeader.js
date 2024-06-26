

import { useState } from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { todoIcon } from '../../Assets/Images';
import SearchBox from '../Forms/SearchBox';
import { SideActions } from '../../store/SideBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import SearchBoxMobile from '../Forms/SearchBoxMobile';
import { googleLogout } from '@react-oauth/google';
import { AuthActions } from '../../store/AuthSlice';
import { useCookies } from 'react-cookie';

function NavBar() {

 
  const [cookies,removeCookie,setCookie] = useCookies(['credential']);
  const [openMenu, setOpen] = useState(false)

  const dispatch = useDispatch()

  const search = useSelector(state => state.search.search)
  const picture = useSelector(state => state.auth.picture)
  const name = useSelector(state => state.auth.name)
  const email = useSelector(state => state.auth.email)

  const sideActive = useSelector(state => state.sidebar.active)

  const handleSignOut = () =>{
    googleLogout()
    dispatch(AuthActions.logout())
    setCookie('credential',null)
  }

  return (

    <nav className="bg-teal-500 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={todoIcon} className="mr-1 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Task</span>

        </a>
        <div className="flex md:order-2 gap-x-1">
          {/* <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button> */}

          <SearchBox />
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={picture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{name}</span>
              <span className="block truncate text-sm font-medium">{email}</span>
            </Dropdown.Header>
            
            <Dropdown.Divider />
            <Dropdown.Item onClick={()=>{
              handleSignOut()
              
            }}>Sign out</Dropdown.Item>
          </Dropdown>

          <button data-collapse-toggle="navbar-search" onClick={() => setOpen(!openMenu)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between  w-full ${openMenu ? 'lg:hidden' : 'hidden'} lg:hidden md:flex md:w-auto md:order-1`} id="navbar-search">
          <SearchBoxMobile />
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <p
                // className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                className={
                  sideActive === 'all' ?
                    "block py-2 px-3 text-white bg-teal-700 rounded md:bg-transparent md:text-teal-700 md:p-0 md:dark:text-teal-500"
                    :
                    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                onClick={() => search === "" && dispatch(SideActions.select('all'))}
              >
                All
              </p>
            </li>
            <li>
              <p
                // className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                className={
                  sideActive === 'today' ?
                    "block py-2 px-3 text-white bg-teal-700 rounded md:bg-transparent md:text-teal-700 md:p-0 md:dark:text-teal-500"
                    :
                    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

                }

                onClick={() => search === "" && dispatch(SideActions.select('today'))}
              >
                today
              </p>
            </li>

            <li>
              <p
                // className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                className={
                  sideActive === 'completed' ?
                    "block py-2 px-3 text-white bg-teal-700 rounded md:bg-transparent md:text-teal-700 md:p-0 md:dark:text-teal-500"
                    :
                    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

                }

                onClick={() => search === "" && dispatch(SideActions.select('completed'))}
              >
                completed
              </p>
            </li>
            <li>
              <p
                // className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                className={
                  sideActive === 'pending' ?
                    "block py-2 px-3 text-white bg-teal-700 rounded md:bg-transparent md:text-teal-700 md:p-0 md:dark:text-teal-500"
                    :
                    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

                }

                onClick={() => search === "" && dispatch(SideActions.select('pending'))}
              >
                pending
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default NavBar