import Image from "next/image";
import Logo from '@/assets/images/logo-white.png'
const Footer = () => {
    return ( 
    <footer className="bg-[#573548] py-4 mt-24 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div
          className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
        >
          <ul className="flex space-x-4">
            <li><a href="/properties">Properties</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-[#edcdb1] mt-2 md:mt-0">
            &copy; 2024 LuxPlace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
     );
}
 
export default Footer;