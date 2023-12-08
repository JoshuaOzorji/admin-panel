import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../datatablesource";
import { useState } from "react";

const Datatable = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className='flex gap-3'>
						<Link to='/users/test'>
							<button className='button border-[darkBlue] text-[darkBlue]'>
								View
							</button>
						</Link>

						<button
							onClick={() => handleDelete(params.row.id)}
							className='button border-[red] text-[red]'>
							Delete
						</button>
					</div>
				);
			},
		},
	];

	return (
		<div className='px-3 my-4'>
			<div className='flex justify-between items-center py-2'>
				<p>Users</p>
				<Link
					to='/users/new'
					className='button border-accent hover:text-accent1 hover:bg-accent animate'>
					<button>Add New</button>
				</Link>
			</div>
			<DataGrid
				className='datagrid'
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
