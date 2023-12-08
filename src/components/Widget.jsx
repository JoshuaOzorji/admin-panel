import { IoIosArrowUp } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { RiWallet3Fill } from "react-icons/ri";

const Widget = ({ type }) => {
	let data;
	//temporary
	const amount = 100;
	const diff = 20;

	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				link: "See all Users",
				icon: <FaUser className='widget-icon text-red-500' />,
			};
			break;
		case "order":
			data = {
				title: "ORDERS",
				isMoney: false,
				link: "View all Orders",
				icon: <BsCart3 className='widget-icon text-[#DAA520]' />,
			};
			break;

		case "earning":
			data = {
				title: "EARNINGS",
				isMoney: true,
				link: "View all Earnings",
				icon: <AiOutlineDollar className='widget-icon text-green-700' />,
			};
			break;

		case "balance":
			data = {
				title: "BALANCE",
				isMoney: true,
				link: "See details",
				icon: <RiWallet3Fill className='widget-icon text-purple-700' />,
			};
			break;
		default:
			break;
	}

	return (
		<div className='p-3 flex flex-col border shadow-lg rounded-md gap-2'>
			<div className='flex justify-between'>
				<span className='text-accent'>{data.title}</span>
				<span className='flex items-center positive gap-1'>
					<IoIosArrowUp />
					<p className='text-sm'>{diff}%</p>
				</span>
			</div>

			<span className='text-3xl text-primary font-light'>
				{data.isMoney && "$"}
				{amount}
			</span>

			<div className='flex justify-between items-center'>
				<span className='underline decoration-accent text-accent text-[13px] underline-offset-[3px]'>
					{data.link}
				</span>
				<span>{data.icon}</span>
			</div>
		</div>
	);
};

export default Widget;
