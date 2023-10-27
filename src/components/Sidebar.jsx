import {
  FaUser,
  FaLaptop,
  FaBook,
  FaShoppingCart,
  FaSignOutAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import user from "../assets/user.png";

const Sidebar = () => {
  return (
    <div className="bg-white text-teal-500 h-screen w-64 p-10 shadow-md">
      <div className="max-w-md mx-auto">
        {/* Nama User dan Gambar User */}
        <div className="mb-10 flex-col items-center flex justify-center">
          <div className="cursor-pointer space-x-2">
            <img
              src={user} // Ganti dengan URL gambar user Anda
              alt="User Avatar"
              width={800}
              height={500}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <h3 className="cursor-pointer text-center mb-2">Nama User</h3>
          <Link href='#' className='border-2 border-teal-500 text-teal-500 rounded px-4 py-1 inline-block font-semibold hover:bg-teal-500 hover:text-white text-xs transition-colors duration-300'>
            Beli Paket
          </Link>
        </div>
      </div>

      {/* Menu Sidebar */}
      <ul className="mt-8 ">
        <Link to="/" className="cursor-pointer mb-4 flex items-center p-1 relative transition-transform group hover:translate-x-3">
          <FaUser className="mr-3" />
          <span className="text-lg">Profil</span>
        </Link>
        <Link to="/tryout" className="cursor-pointer mb-4 flex items-center p-1 relative transition-transform group hover:translate-x-3">
          <FaLaptop className="mr-3" />
          <span className="text-lg">Try Out</span>
        </Link>
        <Link to="/" className="cursor-pointer mb-4 flex items-center p-1 relative transition-transform group hover:translate-x-3">
          <FaBook className="mr-3" />
          <span className="text-lg">Latihan Soal</span>
        </Link>
        <Link to="/" className="cursor-pointer mb-4 flex items-center p-1 relative transition-transform group hover:translate-x-3">
          <FaShoppingCart className="mr-3" />
          <span className="text-lg">Pembelian Akun</span>
        </Link>
        <Link to="/" className="cursor-pointer mb-4 flex items-center p-1 relative transition-transform group hover:translate-x-3">
          <FaSignOutAlt className="mr-3" />
          <span className="text-lg">Keluar</span>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;


