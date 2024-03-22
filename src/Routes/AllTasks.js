import React from 'react'
import { useQuery } from 'react-query'
import SidebarPlusNavbar from '../Components/Navigation/SidebarPlusNavbar'
import CardList from '../Components/Lists/CardList'
import TodoCard from '../Components/Cards/TodoCard'
import { PlusButton } from '../Assets/icons'
import { getTasks } from '../services/service'
import { TrashButton , TickButton } from '../Components/Buttons'




const AllTasks = () => {

    const {data : response } = useQuery({
        queryKey:['tasks'],
        queryFn:()=>getTasks(),
        onSuccess:(data)=>{
            console.log(data)
        },
        onError:(err)=> console.error(err),
        refetchIntervalInBackground:false,
        refetchOnMount:false,
        refetchOnWindowFocus:false,
        refetchOnReconnect:false

    })


    return (
        <>
            <main >
                <div className="p-4 sm:ml-64 ">

                    <div className=' flex flex-row-reverse gap-2'>
                        <TrashButton/>
                        <TickButton/>
                    </div>
                    
                    <div className="p-4 border-gray-200 border-2 grid grid-cols-3 gap-5 rounded-lg dark:border-gray-700 mt-8">
 
                        {
                            response?.data?.map((todo,index) => <TodoCard key={index} todo={todo}/> )
                        }
                        
                    </div>
                </div>
                <div className='fixed lg:bottom-5 lg:right-10 right-5 bottom-2  w-10'>
                    <PlusButton />
                </div>
            </main>
        </>
    )
}
export default AllTasks
