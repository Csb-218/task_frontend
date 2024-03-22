import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Modal } from 'flowbite-react';
import { TodoActions } from '../../store/TodoSlice'
import { useState } from 'react';
import { weekday,months } from '../../utils/Helpers';
import EditTodoFrom from '../Forms/EditTodoFrom';


const TodoCard = ({todo}) => {

    const dispatch = useDispatch()

    const selectedList = useSelector(state => state.todo.todoList)

    const [openModal, setOpenModal] = useState(false);

    function handleSelect(id) {
        console.log(id, selectedList)

        if (selectedList?.includes(id)) {
            dispatch(TodoActions.unselect(id))
        }
        else {
            dispatch(TodoActions.select(id))
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
            <div className="flex items-center border-[1px] p-4 rounded-lg max-h-20" >

                <div className="flex-shrink-0">
                    <input type='checkbox' onChange={() => handleSelect(todo?._id)} checked={selectedList.includes(todo?._id)} />
                </div>

                <div className="flex-1 min-w-0 ms-4"  onClick={() => setOpenModal(true)} >
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white" >
                        {todo?.title} by {day},{date} {month},{hour}{min} {M}
                    </p>
                    
                    
                </div>

                
            </div>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <EditTodoFrom/>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TodoCard