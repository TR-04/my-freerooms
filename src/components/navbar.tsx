import logoOpen from '../assets/freeRoomsLogo.png';
import logoClose from '../assets/freeroomsDoorClosed.png';
import { useState } from 'react';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDark: boolean;
}

// Same as landing.tsx
const Navbar = ({ toggleDarkMode }: NavbarProps) => {
  
  // Get usestate from local storage
  const [isDoorOpen, setIsDoorOpen] = useState(() => {
    const saved = localStorage.getItem('FreeRoomsImage');

    if (saved) {
      return JSON.parse(saved);
    } else {

      // Otherwise default to door being open
      return true;
    }
  });

  const ToggleDoor = () => {
    const newDoorState = !isDoorOpen;

    setIsDoorOpen(newDoorState);

    localStorage.setItem('FreeRoomsImage', JSON.stringify(newDoorState));
  }


  return (
    <div id='root'>
      <div className='bg-white dark:bg-gray-900 duration-300'>
        <nav className="flex justify-between pl-2 items-center w-full h-[68px] border dark:border-gray-700 bg-white dark:bg-gray-800 border-b-gray-300 dark:border-b-gray-700 duration-300">

          <div className='flex justify-center items-center cursor-pointer hover:opacity-70 duration-300'>
            <img src={isDoorOpen ? logoOpen : logoClose} onClick={ToggleDoor} className='w-12 object-cover'></img>
            <div onClick={ToggleDoor} className="text-[#ef6c00] text-3xl font-[700] select-none">
              Freerooms
            </div>
          </div>
          
          <div className="flex w-52 justify-evenly items-center">
            <button className='flex w-10 h-10 p-2 border-orange-300 hover:bg-[#FFF9F5] hover:border-[#ef6c00] duration-300 border rounded-[4px] dark:border-orange-500 dark:hover:bg-gray-900 dark:hover:border-orange-600'>
              <svg className="w-6 h-6 fill-[#ef6c00]" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
              </svg>
            </button>

            <button className="flex w-10 h-10 p-2 bg-[#ef6c00] hover:bg-orange-800 border-[#ef6c00] duration-300 border rounded-[4px]">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M11 11V3H5c-1.1 0-2 .9-2 2v6zm2 0h8V5c0-1.1-.9-2-2-2h-6zm-2 2H3v6c0 1.1.9 2 2 2h6zm2 0v8h6c1.1 0 2-.9 2-2v-6z"></path>
              </svg>
            </button>

            <button className="flex w-10 h-10 p-2 border-orange-300 hover:bg-[#FFF9F5] hover:border-[#ef6c00] duration-200 border rounded-[4px] dark:border-[#ef6c00] dark:hover:bg-gray-900 dark:hover:border-orange-600">
              <svg className="w-6 h-6 fill-[#ef6c00]" viewBox="0 0 24 24">
                <path d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M15 19l-6-2.11V5l6 2.11z"></path>
              </svg>
            </button>

            <button 
              onClick={toggleDarkMode}
              className="flex w-10 h-10 p-2 border-orange-300 hover:bg-[#FFF9F5] hover:border-[#ef6c00] duration-200 border rounded-[4px] dark:border-[#ef6c00] dark:hover:bg-orange-800 dark:hover:border-[#ef6c00] dark:bg-orange-500"
            >
              <svg className="w-6 h-6 fill-[#ef6c00] dark:fill-white" viewBox="0 0 24 24">
                
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1" />
              
              </svg>
            </button>

          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;