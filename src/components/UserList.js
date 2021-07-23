import React, { useState } from "react";

const UserList = (props) => {
	const deleteHandler = (id) => {
		props.remove({
			show: true,
			id: id,
		});
	};

	const editHanlder = (id) => {
		props.edit({
			showModal: true,
			id,
		});
	};

	const userList = props.data.map((user) => {
		return (
			<tr key={user.id}>
				<th scope="row">1</th>
				<td>{user.fullName}</td>
				<td>{user.age}</td>
				<td>{user.gender}</td>
				<td>{user.phoneNumber}</td>
				<td>{user.address}</td>
				<td>
					<button
						className="btn btn-primary"
						onClick={() => editHanlder(user.id)}
					>
						Edit
					</button>
				</td>
				<td>
					<button
						className="btn btn-danger"
						onClick={() => deleteHandler(user.id)}
					>
						Delete
					</button>
				</td>
			</tr>
		);
	});

	return (
		<div className="container mt-4">
			<button className="btn btn-success" onClick={props.showModal}>
				Add User
			</button>

			<div className="text-center mt-3">
				<h2
					style={{
						backgroundColor: "black",
						color: "white",
						padding: 10 + "px",
					}}
				>
					User List
				</h2>
			</div>
			<table className="table table-striped table-dark">
				<thead>
					<tr>
						<th scope="col">S.No</th>
						<th scope="col">Full Name</th>
						<th scope="col">Age</th>
						<th scope="col">Gender</th>
						<th scope="col">Phone Number</th>
						<th scope="col">Address</th>
						<th scope="col">Edit</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>{userList}</tbody>
			</table>
		</div>
	);
};

export default UserList;
