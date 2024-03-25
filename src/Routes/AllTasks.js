import React from 'react'
import TodoCard from '../Components/Cards/TodoCard'
import { PlusButton } from '../Assets/icons'
import { TrashButton, TickButton } from '../Components/Buttons'
import { markComplete , deleteTasks} from '../services/service'
import { Button } from 'flowbite-react';
import { HiCheck ,HiTrash } from 'react-icons/hi';
import { useSelector , useDispatch } from 'react-redux';
import { TodoActions } from '../store/TodoSlice'
import { useMutation } from 'react-query';


const AllTasks = ({ task, refetch }) => {
  

    const dispatch = useDispatch()
    const selectedList = useSelector(state => state.todo.todoList)
    const isAllPending = selectedList?.every(task => task?.status === 'pending')

    const{isLoading:isCompleteLoading,mutate:complete} = useMutation({
        mutationFn:()=>{
            return (selectedList?.length >= 1 ? markComplete(selectedList) : null)
        },
        onSuccess:(res)=>{
            console.log(res)
            dispatch(TodoActions?.reset())
            refetch()
        }
    })

    const{isLoading:isDeleteLoading,mutate:_delete} = useMutation({
        mutationFn:()=>{
            return (selectedList?.length >= 1 ? deleteTasks(selectedList) : null)
        },
        onSuccess:(res)=>{
            console.log(res)
            dispatch(TodoActions?.reset())
            refetch()
        }
    })

    return (
        <>
            <main >
                <div className="p-4 sm:ml-64 ">

                    <div className=' flex flex-row-reverse gap-2'>
                        <Button pill color='failure' className=' w-[2.7rem]' onClick={_delete} disabled={isDeleteLoading} isProcessing={isDeleteLoading} >
                            <HiTrash className="w-5 h-5 rounded-full " />
                        </Button>

                        <Button pill className='bg-teal-500 ' disabled={!isAllPending || isCompleteLoading} isProcessing={isCompleteLoading} onClick={complete}>
                            <HiCheck className="w-5 h-5 rounded-full " />
                            Mark Completed
                        </Button>
                    </div>

                    <div className="p-4 border-gray-200  grid lg:grid-cols-3 gap-5  grid-cols-1 rounded-lg dark:border-gray-700 mt-8">

                        {
                            task?.map((todo, index) => <TodoCard key={index} todo={todo} refetch={refetch} />)
                        }

                    </div>
                </div>
                <div className='fixed lg:bottom-5 lg:right-10 right-5 bottom-2  w-10'>
                    <PlusButton refetch={refetch}/>
                </div>

                
            </main >
        </>
    )
}
export default AllTasks
