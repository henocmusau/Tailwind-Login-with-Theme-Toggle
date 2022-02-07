import Toggle from './Toggle'
import { HiCube } from 'react-icons/hi'

function Header() {
    return <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
                <HiCube className="mx-auto h-16 dark:fill-slate-200 w-44 object-contain cursor-pointer" alt="Logo"
          />
            <div className="hidden md:inline-flex items-center space-x-5 dark:text-white">
                <h3>About</h3>
                <h3>Contact Us</h3>
                <h3 className="text-white bg-green-600 py-1 px-4 rounded-full">Sign in</h3>
            </div>
        </div>
  
        <div className="flex items-center space-x-5 text-green-600">
       <Toggle />
        </div>
    </header>;
  }
  
  export default Header;
  