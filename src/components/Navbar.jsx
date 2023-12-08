import { AiOutlineGlobal } from "react-icons/ai";
import { IoMoonOutline, IoSearchOutline } from "react-icons/io5";
import { IoIosList, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineFullscreenExit } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import logo from "/josh-logo.png";

const Navbar = () => {
	return (
		<aside className='border-b sticky top-0 bg-white z-30'>
			<section className='flex items-center justify-between padding py-4 '>
				<div className='flex gap-4 items-center'>
					<span className='flex gap-2 '>
						<img src={logo} alt='logo' className='h-6 w-6' />
						<p className='font-bold text-primary1'>Mr Josh</p>
					</span>

					<span className='flex border items-center px-1'>
						<input
							type='search'
							placeholder='Search...'
							className='form-focus py-1 px-2 text-sm'
						/>
						<IoSearchOutline />
					</span>
				</div>

				<div className='flex items-center gap-5'>
					<span className='flex items-center gap-1'>
						English
						<AiOutlineGlobal />
					</span>

					<span>
						<IoMoonOutline className='icon' />
					</span>

					<span>
						<MdOutlineFullscreenExit className='icon' />
					</span>

					<span className='relative'>
						<p className='counter'>1</p>
						<IoMdNotificationsOutline className='icon' />
					</span>

					<span className='relative'>
						<p className='counter'>2</p>
						<FiMessageSquare className='icon ' />
					</span>

					<span>
						<IoIosList className='icon' />
					</span>

					<div className='item'>
						<img
							src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
							alt=''
							className='w-8 h-8 rounded-full'
						/>
					</div>
				</div>
			</section>
		</aside>
	);
};

export default Navbar;
