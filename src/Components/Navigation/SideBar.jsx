
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

function SideBar() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example" className='absolute'>
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Today
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Next 7 Days
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            All
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Personal
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Work
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>

    </Sidebar>
  );
}

export default SideBar
