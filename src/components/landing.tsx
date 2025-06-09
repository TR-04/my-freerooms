import { useState } from 'react';
import Navbar from './navbar';
import Searchbar from './searchbar';
import Body from './body';

// Defining the type of each variable
interface LandingProps {
 toggleDarkMode: () => void;
 isDark: boolean;
}

// LandingProps tells the code what 'shape' the variables should have
// This is defined above
// We then pass it to Navbar
const Landing = ({ toggleDarkMode, isDark }: LandingProps) => {
 const [searchTerm, setSearchTerm] = useState('');

 return (
   <div className='min-h-screen bg-white dark:bg-gray-900 duration-300'>
       <Navbar toggleDarkMode={toggleDarkMode} isDark={isDark} />
       <div className='flex-col justify-start pt-[2px] pl-2 pr-2 items-center w-full border-b-gray-300'>
         <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         <Body searchTerm={searchTerm} />
       </div>
   </div>
 );
};

export default Landing;