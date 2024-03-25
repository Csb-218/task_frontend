import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Modal } from 'flowbite-react';
import { TodoActions } from '../../store/TodoSlice'
import { weekday,months } from '../../utils/Helpers';
import EditTodoFrom from '../Forms/EditTodoFrom';
import { Badge } from "flowbite-react";

const TodoCard = ({todo,refetch}) => {

    const dispatch = useDispatch()

    const [visible,setVisible] = useState(false)

    const selectedList = useSelector(state => state.todo.todoList)

    const [openModal, setOpenModal] = useState(false);

    function handleSelect(todo) {


        if (selectedList?.includes(todo)) {
            dispatch(TodoActions.unselect(todo))
        }
        else {
            dispatch(TodoActions.select(todo))
        }
    }

    const d = new Date(todo?.due);
    const day = weekday[d.getUTCDay()].slice(0,3);
    const date = d.getUTCDate();
    const month = months[d.getUTCMonth()].slice(0,3);
    const text = d.toLocaleString().slice(11);
    const hour = Math.abs(text.slice(0,3) - 12)
    const min = text.slice(3,6)
    const M = text.slice(0,3)-12 > 0 ? 'PM' : 'AM'




    return (
        <>
            <div className={`flex items-center border-[1px] p-4 rounded-lg   max-h-32`} >

                <div className="flex flex-row align-top bg-gray-800">
                    <input type='checkbox' onChange={() => handleSelect(todo)} checked={selectedList.includes(todo)} />
                </div>

                <div className="flex-1 min-w-0 ms-4  "  onClick={() => setOpenModal(true)} >
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white" >
                        {todo?.title} by {day},{date} {month},{hour}{min} {M}
                    </p>

                    <p className="text-sm ">
                        {todo?.description}
                    </p>


                    {
                        todo?.status === 'completed' ?
                        <Badge color="success" className='w-20'>completed</Badge>
                        :
                        <Badge color="warning" className='w-16'>pending</Badge>
                    }
                    
                    
                </div>

                
            </div>

            <Modal size={'md'} show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Edit Task</Modal.Header>
                <Modal.Body>
                    <EditTodoFrom todo={todo} setOpenModal={setOpenModal} refetch={refetch}  />
                    
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default TodoCard