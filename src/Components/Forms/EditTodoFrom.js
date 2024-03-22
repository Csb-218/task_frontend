'use client';
import {useState} from 'react'
import { Button, Checkbox, Label, TextInput , Textarea } from 'flowbite-react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const EditTodoFrom = () => {

    const [value, onChange] = useState(new Date());

  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Title" />
        </div>
        <TextInput id="title" type="text" placeholder="title" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" />
        </div>
        <Textarea id="title" type="text" placeholder="title" required />
      </div>
      
     
      <div className="flex items-center gap-2">
        <Checkbox id="personal" />
        <Label htmlFor="personal">personal</Label>

        <Checkbox id="work" />
        <Label htmlFor="work">work</Label>
      </div>

      <div>
      <DateTimePicker onChange={onChange} value={value} amPmAriaLabel />
      </div>
      
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default EditTodoFrom