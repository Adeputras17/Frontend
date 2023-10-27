import { FaShoppingCart } from 'react-icons/fa';
import logo from "../assets/logo.png"

const Navbar = () => {
 

  return (
    <nav
      className="bg-white px-20 py-2 flex items-center justify-between shadow-md"
    >
      <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between">
        {/* Logo Perusahaan */}
        <div className="text-white text-lg font-semibold cursor-pointer ">
          <img className='cursor-pointer' src={logo} width={220} height={90} alt="logo"  />
        </div>

        {/* Gambar Keranjang dengan Jumlah Item */}
        <div className="text-teal-500 text-base flex items-center">
          <FaShoppingCart  className="mr-2 text-2xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


