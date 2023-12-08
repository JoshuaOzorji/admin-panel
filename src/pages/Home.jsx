import Widget from "../components/Widget";
import Featured from "../components/Featured";
import Chart from "../components/Chart";
import Table from "../components/Table";

const Home = () => {
	return (
		<main className='flex w-full'>
			<div className='w-full p-2 mx-auto'>
				<div className='grid grid-cols-4 w-full gap-4'>
					<Widget type='user' />
					<Widget type='order' />
					<Widget type='earning' />
					<Widget type='balance' />
				</div>

				<div className='w-full flex justify-between my-4 gap-4'>
					<span className='w-[30%]'>
						<Featured />
					</span>

					<span className='w-[70%]'>
						<Chart />
					</span>
				</div>

				<div>
					<Table />
				</div>
			</div>
		</main>
	);
};

export default Home;
