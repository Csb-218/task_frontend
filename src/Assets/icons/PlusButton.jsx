import {useState} from 'react'
import { Modal } from 'flowbite-react'
import AddTodoFrom from '../../Components/Forms/AddTodoForm'

const PlusButton = ({refetch}) => {

    const [openModal,setOpenModal] = useState(false)

    return (
        <>
          <button
            title="Add New"
            className="group cursor-pointer outline-none hover:rotate-90 duration-300 bg-white dark:bg-slate-800 rounded-full"
            onClick={()=>setOpenModal(true)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className="stroke-teal-400 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
            >
                <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    strokeWidth="1.5"
                ></path>
                <path d="M8 12H16" strokeWidth="1.5"></path>
                <path d="M12 16V8" strokeWidth="1.5"></path>
            </svg>
        </button>
        <Modal size={'md'} show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Add a Task</Modal.Header>
                <Modal.Body>
                    <AddTodoFrom refetch={refetch} setOpenModal={setOpenModal}/>
                    
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

export default PlusButton