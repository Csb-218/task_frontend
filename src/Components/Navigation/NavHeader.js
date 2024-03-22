
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { todoIcon } from '../../Assets/Images';
import SearchBox from '../Forms/SearchBox';

function NavBar() {
  return (
    <Navbar fluid rounded className='bg-teal-500 text-white relative'>

      <Navbar.Brand href="https://flowbite-react.com" className="">
        <img src={todoIcon} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Task</span>

      </Navbar.Brand>

      <SearchBox/>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      
    </Navbar>
  );
}

export default NavBar