'use client';

import { Button } from 'flowbite-react';
import { HiCheck } from 'react-icons/hi';

const TickButton = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button pill className='bg-teal-500 w-[2.7rem]' >
        <HiCheck className="w-5 h-5 rounded-full " />
      </Button>
    </div>
  )
}

export default TickButton