
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { SideActions } from '../../store/SideBarSlice';
import { useDispatch , useSelector } from 'react-redux';

function SideBar() {


  const dispatch = useDispatch()

  const search = useSelector(state => state.search.search)

  const sideActive = useSelector(state => state.sidebar.active)


  return (
    <Sidebar aria-label="Sidebar with logo branding example" className='absolute z-50 lg:block hidden'>
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item  icon={HiChartPie} className={sideActive==='today'?"bg-teal-100":"hover:bg-teal-100"} onClick={()=> search === "" && dispatch(SideActions.select('today'))} >
            Today
          </Sidebar.Item>
          {/* <Sidebar.Item  icon={HiViewBoards} className={sideActive==='7days'?"bg-teal-100":"hover:bg-teal-100"} onClick={()=> search === "" && dispatch(SideActions.select('7days'))}>
            Next 7 Days
          </Sidebar.Item> */}
          <Sidebar.Item  icon={HiInbox} className={sideActive==='all'?"bg-teal-100":"hover:bg-teal-100 "} onClick={()=> search === "" && dispatch(SideActions.select('all'))}>
            All
          </Sidebar.Item>
          {/* <Sidebar.Item  icon={HiUser}>
            Personal
          </Sidebar.Item>
          <Sidebar.Item  icon={HiShoppingBag}>
            Work
          </Sidebar.Item> */}

          <Sidebar.Item  icon={HiTable} className={sideActive==='completed'?"bg-teal-100":"hover:bg-teal-100"} onClick={()=>search === "" && dispatch(SideActions.select('completed'))}>
            Completed
          </Sidebar.Item>
          <Sidebar.Item  icon={HiViewBoards} className={sideActive==='pending'?"bg-teal-100":"hover:bg-teal-100"} onClick={()=>search === "" && dispatch(SideActions.select('pending'))}>
            Pending
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>

    </Sidebar>





  );
}

export default SideBar
