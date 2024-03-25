'use client';
import {useState} from 'react'
import { Button, Checkbox, Label, TextInput , Textarea } from 'flowbite-react';
import {HiRefresh} from "react-icons/hi"
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { addTask } from '../../services/service';

import TimePicker from 'react-time-picker';

const AddTodoFrom = ({setOpenModal,refetch}) => {

    const [value, onChange] = useState(new Date());


    const handleDateChange = (e) => {
      const date = new Date(e)
      formik.setFieldValue("due",date)
       console.log(e,date)
    }

    const {isLoading,mutate} = useMutation({
      
      mutationFn:(payload)=> {

        const {update} = payload
       
        return addTask(update)
      },
      onSuccess:(res)=>{
        refetch()
        console.log(setOpenModal)
        setOpenModal(false)
      }
    })

    const formik = useFormik({
      initialValues: {
        title: '',
        description: '',
        status: 'pending',
        due : ''
      },
      onSubmit: (values) => {

        const payload = {
          update:values
        }
         mutate(payload)
      },
    });

  return (

    <form className="flex max-w-md justify-center flex-col gap-4" onSubmit={formik.handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Title" />
        </div>
        <TextInput id="title" type="text" placeholder="title" onChange={formik.handleChange} value={formik?.values.title} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" />
        </div>
        <Textarea id="description" type="text" placeholder="title" onChange={formik.handleChange} value={formik?.values.description} required />
      </div>
      
     
      {/* <div className="flex items-center gap-2">
        <Checkbox id="personal" />
        <Label htmlFor="personal">personal</Label>

        <Checkbox id="work" />
        <Label htmlFor="work">work</Label>
      </div> */}

      <div className='w-2/4'>
      <DateTimePicker 
      className='w-full'
      onChange={handleDateChange} 
      value={formik?.values?.due}
      minutePlaceholder='mm'
      yearPlaceholder='yyyy'
      monthPlaceholder='mm'
      hourPlaceholder='hh'
      dayPlaceholder='dd'
      

      />
      </div>
      
      <div className='flex gap-x-3 w-full'>

         <Button type="submit" className={isLoading?'w-1/4':'w-1/5'} pill disabled={isLoading} isProcessing={isLoading}>Submit</Button>

         <Button onClick={formik.resetForm}  color='gray' className='w-[2.7rem]' pill>
           <HiRefresh className="w-5 h-5 rounded-full "/>
         </Button>

      </div>
     
    </form>
  )
}

export default AddTodoFrom