'use client';

import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiShoppingCart ,HiTrash } from 'react-icons/hi';

function TrashButton() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button pill color='failure' className=' w-[2.7rem]' >
        <HiTrash className="w-5 h-5 rounded-full " />
      </Button>
    </div>
  );
}

export default TrashButton
