import { useState, useEffect } from 'react'
import { SideBar, NavBar } from '../Components/Navigation'
import { useQuery } from 'react-query'
import { getTasks } from '../services/service'
import AllTasks from './AllTasks'
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { server_down } from '../Assets/icons'

const Home = () => {

  // const [cookies] = useCookies(['credential']);
  // const {credential} = cookies

  const credential = useSelector(state => state.auth.credential)
  const sideActive = useSelector(state => state.sidebar.active)
  const searchTerm = useSelector(state => state.search.search)

  const [task, setTask] = useState([])
  
  const { data: allTask, refetch,isLoading ,isError } = useQuery({
    queryKey: ['tasks',credential],
    queryFn: () => getTasks(credential),
    onSuccess: (res) => {
      console.log(res)
      setTask(res?.data)
    },
    enabled:!!credential,
    onError: (err) => console.error(err),
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false

  })

  useEffect(() => {

    if (searchTerm === '') {

      if (sideActive === 'completed') {
        const completed_tasks = allTask?.data?.filter(task => task?.status === 'completed')
        setTask(completed_tasks)
      }

      if (sideActive === 'pending') {
        const pending_tasks = allTask?.data?.filter(task => task?.status === 'pending')
        console.log(task,pending_tasks)
        setTask(pending_tasks)
      }

      if (sideActive === 'all') {

        setTask(allTask?.data)
      }

      if (sideActive === 'today') {

        const today = new Date()
        const today_task = allTask?.data?.filter(task => {

          const due = new Date(task?.due)
          console.log(today, due.getDate())

          return (due.getFullYear() === today.getFullYear() && due.getMonth() === today.getMonth() && due.getDate() === today.getDate())

        })

        setTask(today_task)
      }
    }
    else {
      const searchedItem = allTask?.data?.filter(task => task.title.includes(searchTerm))
      console.log(searchedItem)
      setTask(searchedItem)
    }

  }, [sideActive, allTask, searchTerm])



  return (
    <div className='relative'>
      <NavBar />
      <SideBar />
      
        <AllTasks task={task} refetch={refetch} isLoading={isLoading}/>
      
      
    </div>
  )
}

export default Home