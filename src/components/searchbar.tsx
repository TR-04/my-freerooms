const Searchbar = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-0 pl-4 pr-4 pt-3 w-full sm:h-12 gap-y-2">
            <div className="relative w-full sm:w-1/2">
            
                <svg className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 fill-gray-500" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
                </svg>
                
                <input 
                    className="h-[43px] w-full border-2 border-gray-300 dark:border-gray-600 dark:text-white dark:bg-gray-900 duration-300 rounded-md pl-10 pr-4 focus:outline-none focus:border-[#ef6c00] focus:ring-[#ef6c00]" 
                    placeholder="Search for a building..." 
                />
            </div>
            
            <div className="flex w-full sm:w-auto justify-between sm:justify-normal gap-2">
                <button className="flex flex-1 sm:flex-none h-[43px] pl-6 pr-6 rounded-lg justify-around items-center text-[#ef6c00] border-2 border-[#ef6c00]">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61"></path>
                    </svg>
                    <p className="font-bold ml-1">Filters</p>
                </button>
                
                <button className="flex flex-1 sm:flex-none h-[43px] pl-6 pr-6 rounded-lg justify-evenly items-center text-[#ef6c00] border-2 border-[#ef6c00]">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"></path>
                    </svg>
                    <p className="font-bold ml-1">Sort</p>
                </button>
            </div>
        </div>
    );
};

export default Searchbar;