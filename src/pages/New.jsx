import { useState } from "react";

const New = ({ inputs, title }) => {
	const [file, setFile] = useState("");

	return (
		<section className='flex flex-col w-full md:w-[50%] mx-auto my-4 border p-4 bg-white'>
			<span>{title}</span>

			<img
				src={
					file
						? URL.createObjectURL(file)
						: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
				}
				alt='image'
				className='w-32 h-32 mx-auto rounded-full'
			/>

			<form className='text-primary'>
				<div className=''>
					<label htmlFor='file' />
					<input
						type='file'
						id='file'
						onChange={(e) => setFile(e.target.files[0])}
						style={{ display: "none" }}
					/>
				</div>

				{inputs?.map((input) => (
					<div
						className='flex justify-between items-center md:mx-6 my-4'
						key={input.id}>
						<label className='font-bold'>{input.label}</label>
						<input
							type={input.type}
							placeholder={input.placeholder}
							className='border py-1 px-2 focus:outline-none font-light'
						/>
					</div>
				))}

				<span className='flex'>
					<button className='button bg-accent text-accent1 hover:bg-accent1 hover:text-accent border mx-auto animate'>
						Send
					</button>
				</span>
			</form>
		</section>
	);
};

export default New;
