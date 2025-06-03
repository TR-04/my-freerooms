import agsm from '../assets/agsm.webp';
import ainsworth from '../assets/ainsworth.webp';
import anitab from '../assets/anitab.webp';
import biologicalScience from '../assets/biologicalScience.webp';
import biologicalScienceWest from '../assets/biologicalScienceWest.webp';
import blockhouse from '../assets/blockhouse.webp';
import businessSchool from '../assets/businessSchool.webp';
import civilBuilding from '../assets/civilBuilding.webp';
import colombo from '../assets/colombo.webp';
import cseBuilding from '../assets/cseBuilding.webp';

interface Building {
  name: string;
  rooms_available: number;
  building_picture: string;
}

const buildings: Building[] = [
 {
   name: "AGSM",
   rooms_available: 9,
   building_picture: agsm,
 },
 {
   name: "Ainsworth Building",
   rooms_available: 16,
   building_picture: ainsworth,
 },
 {
   name: "Anita B Lawrence Centre",
   rooms_available: 44,
   building_picture: anitab,
 },
 {
   name: "Biological Sciences",
   rooms_available: 6,
   building_picture: biologicalScience,
 },
 {
   name: "Biological Science (West)",
   rooms_available: 8,
   building_picture: biologicalScienceWest,
 },
 {
   name: "Blockhouse",
   rooms_available: 42,
   building_picture: blockhouse,
 },
 {
   name: "Business School",
   rooms_available: 18,
   building_picture: businessSchool,
 },
 {
   name: "Civil Engineering Building",
   rooms_available: 8,
   building_picture: civilBuilding,
 },
 {
   name: "Colombo Building",
   rooms_available: 5,
   building_picture: colombo,
 },
 {
   name: "Computer Science & Eng (K17)",
   rooms_available: 20,
   building_picture: cseBuilding,
 },
];

const AvailabilityColor = (building: Building) => {
  if (building.rooms_available <= 5) return 'bg-yellow-500';
  return 'bg-green-500';
};

const Body = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[20px] p-4">
            {buildings.map((building, index) => (
                <div 
                    key={index}
                    className="p-2 cursor-pointer hover:brightness-75 hover:scale-[102%] duration-300 md:aspect-square sm:aspect-video bg-gray-300 rounded-lg flex flex-row-reverse sm:flex-col sm:justify-between items-center min-h-[120px]"
                    style={{ 
                        backgroundImage: `url(${building.building_picture})`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className='w-full flex justify-end items-center'>
                        <div className='bg-white dark:bg-gray-900 duration-300 rounded-xl h-[40px] w-[154px] flex justify-center items-center'>
                            <div className={`rounded-full ${AvailabilityColor(building)} w-2 h-2 mr-[10px]`}></div>
                            <div className='text-black dark:text-white font-semibold text-[12px]'>
                                {building.rooms_available} rooms available
                            </div>
                        </div>
                    </div>

                    <div className='sm:bg-[#ef6c00] bg-gray-700 bg-opacity-60 flex p-4 justify-start items-center w-full h-[58px] rounded-lg text-white'>
                        <div className='text-sm font-semibold'>
                            {building.name}
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Body;