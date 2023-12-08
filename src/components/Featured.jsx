import { MdMoreVert } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Featured = () => {
	return (
		<main className='border py-2 px-6 shadow-lg'>
			<div className='text-accent'>
				<div className='flex justify-between mb-2 '>
					<h1>Total Revenue</h1>
					<MdMoreVert />
				</div>

				<section className='flex flex-col'>
					<div className='flex flex-col items-center text-sm font-light gap-2 text-center'>
						<div style={{ width: 120, height: 120 }}>
							<CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
						</div>
						<p className=''>Total sales made today</p>
						<p className='text-primary text-3xl'>$420</p>
						<p>
							Previous transactions processing. Last payments may not be
							included.
						</p>
					</div>

					<div className='flex justify-between'>
						<div className=''>
							<div className=''>Target</div>
							<span className='featured-figure negative'>
								<MdKeyboardArrowDown />
								<div className=''>$12.4k</div>
							</span>
						</div>
						<div className=''>
							<div className=''>Last Week</div>
							<span className='featured-figure positive'>
								<MdKeyboardArrowUp />
								<div className=''>$12.4k</div>
							</span>
						</div>
						<div className='item'>
							<div className=''>Last Month</div>
							<span className='featured-figure  positive'>
								<MdKeyboardArrowUp />
								<div className=''>$12.4k</div>
							</span>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Featured;
