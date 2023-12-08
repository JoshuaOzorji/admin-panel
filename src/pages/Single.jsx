import Chart from "../components/Chart";
import List from "../components/Table";
const Single = () => {
	return (
		<main className='padding my-2'>
			<section className=''>
				<div className='w-full flex gap-4 max-h-48'>
					<div className='w-[40%] shadow-lg relative py-3'>
						<h1 className='px-3 font-bold text-accent'>Information</h1>
						<button className='text-xs absolute right-0 top-0 bg-accent/20 py-1 px-2'>
							Edit
						</button>
						<div className='flex gap-4 px-3 text-primary'>
							<img
								src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
								alt=''
								className='h-20 w-20 rounded-full'
							/>
							<div className='text-sm'>
								<h1 className='text-3xl font-bold'>Jane Doe</h1>
								<div className='text-base'>
									<span className='font-bold'>Email: </span>
									<span className=''>janedoe@gmail.com</span>
								</div>
								<div className=''>
									<span className='font-bold'>Phone:</span>
									<span className=''> +1 2345 67 89</span>
								</div>
								<div className=''>
									<span className='font-bold'>Address:</span>
									<span className=''> Elton St. 234 Garden Yd. NewYork</span>
								</div>
								<div className=''>
									<span className='font-bold'>Country:</span>
									<span className=''> USA</span>
								</div>
							</div>
						</div>
					</div>

					<div className='w-[60%]'>
						<Chart />
					</div>
				</div>
				<div className='shadow-lg'>
					<List />
				</div>
			</section>
		</main>
	);
};

export default Single;
