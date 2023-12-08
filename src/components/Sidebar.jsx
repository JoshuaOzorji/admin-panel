import { MdDashboard, MdSettingsSystemDaydream } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillShop } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import {
	IoIosStats,
	IoMdNotificationsOutline,
	IoMdSettings,
} from "react-icons/io";
import { RxActivityLog } from "react-icons/rx";
import { IoLogOutSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaSquareFull } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<main>
			<section className='flex flex-col text-primary1 padding gap-3 border-r mb-2'>
				<ul>
					<li className='sidebar-li'>
						<h1 className='sidebar-h1'>MAIN</h1>
						<span className='sidebar-list'>
							<MdDashboard className='sidebar-icon' />
							<Link to='/' className='sidebar-p'>
								Dashboard
							</Link>
						</span>
					</li>

					<li className='sidebar-li'>
						<h1 className='sidebar-h1'>LISTS</h1>
						<Link to='/users'>
							<span className='sidebar-list'>
								<FaUser className='sidebar-icon' />
								<p className='sidebar-p'>Users</p>
							</span>
						</Link>

						<Link to='/products'>
							<span className='sidebar-list'>
								<AiFillShop className='sidebar-icon' />
								<p className='sidebar-p'>Products</p>
							</span>
						</Link>

						<span className='sidebar-list'>
							<IoCardOutline className='sidebar-icon' />
							<p className='sidebar-p'>Orders</p>
						</span>

						<span className='sidebar-list'>
							<TbTruckDelivery className='sidebar-icon' />
							<p className='sidebar-p'>Delivery</p>
						</span>
					</li>

					<li className='sidebar-li'>
						<h1 className='sidebar-h1'>USEFUL</h1>
						<span className='sidebar-list'>
							<IoIosStats className='sidebar-icon' />
							<p className='sidebar-p'>Stats</p>
						</span>

						<span className='sidebar-list'>
							<IoMdNotificationsOutline className='sidebar-icon' />
							<p className='sidebar-p'>Notifications</p>
						</span>
					</li>

					<li className='sidebar-li'>
						<h1 className='sidebar-h1'>SERVICE</h1>
						<span className='sidebar-list'>
							<MdSettingsSystemDaydream className='sidebar-icon' />
							<p className='sidebar-p'>System Health</p>
						</span>

						<span className='sidebar-list'>
							<RxActivityLog className='sidebar-icon' />
							<p className='sidebar-p'>Logs</p>
						</span>

						<span className='sidebar-list'>
							<IoMdSettings className='sidebar-icon' />
							<p className='sidebar-p'>Settings</p>
						</span>
					</li>

					<li className='sidebar-li'>
						<h1 className='sidebar-h1'>USER</h1>
						<span className='sidebar-list'>
							<CgProfile className='sidebar-icon' />
							<p className='sidebar-p'>Profile</p>
						</span>

						<span className='sidebar-list'>
							<IoLogOutSharp className='sidebar-icon' />
							<p className='sidebar-p'>Logout</p>
						</span>
					</li>
				</ul>
				<div className='flex gap-2 mx-auto'>
					<FaSquareFull className='sidebar-colorOption text-white' />

					<FaSquareFull className='sidebar-colorOption ' />
				</div>
			</section>
		</main>
	);
};

export default Sidebar;
