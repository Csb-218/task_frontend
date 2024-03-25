'use client';

import { Button } from 'flowbite-react';
import { HiCheck } from 'react-icons/hi';
import {useSelector} from 'react-redux';

const TickButton = () => {

  const selectedList = useSelector(state => state.todo.todoList)
  const isAllPending = selectedList?.every(task => task?.status === 'pending')

  return (
    <div className="flex flex-wrap gap-2">
      <Button pill className='bg-teal-500 ' disabled={!isAllPending}  >
        
        <HiCheck className="w-5 h-5 rounded-full " />
        Mark Completed
      </Button>
    </div>
  )
}

export default TickButton