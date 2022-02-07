import { FaRegHourglass } from 'react-icons/fa'

function Footer(){
const footerYear = new Date().getFullYear()

return(
    <footer className="footer p-4  dark:text-white">
        <div className="flex justify-center items-center">
            <FaRegHourglass /> <span> Copyright &copy; {footerYear}</span>
        </div>
    </footer>
)
}


export default Footer