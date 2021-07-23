import React, { useState } from "react";

const InputForm = (props) => {
	console.log(props);

	return (
		<div>
			<form>
				<div className="form-group">
					<label htmlFor="name">Full Name</label>
					<input
						type="text"
						className="form-control"
						name="fullName"
						placeholder="Enter Full Name"
						onChange={props.inputChangeHandler}
						value={props.data.fullName}
					/>
				</div>
				<div>
					{props.errors.fullName && (
						<p style={{ color: "red" }}>{props.errors.fullName}</p>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="age">Age</label>
					<input
						type="number"
						className="form-control"
						name="age"
						placeholder="Enter your age"
						onChange={props.inputChangeHandler}
						value={props.data.age}
					/>
				</div>
				<div>
					{props.errors.age && (
						<p style={{ color: "red" }}>{props.errors.age}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="gender">Gender</label>
					<div className="form-check">
						<input
							type="radio"
							className="form-check-input"
							id="Male"
							name="gender"
							value="male"
							onChange={props.inputChangeHandler}
						/>
						<label className="form-check-label">Male</label>
					</div>
					<div className="form-check">
						<input
							type="radio"
							className="form-check-input"
							id="Female"
							name="gender"
							value="female"
							onChange={props.inputChangeHandler}
						/>
						<label className="form-check-label">Female</label>
					</div>
					<div>
						{props.errors.gender && (
							<p style={{ color: "red" }}>{props.errors.gender}</p>
						)}
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="contact Number">Contact Number</label>
					<input
						type="number"
						className="form-control"
						name="phoneNumber"
						placeholder="Enter your Contact Number"
						onChange={props.inputChangeHandler}
						value={props.data.phoneNumber}
					/>
				</div>
				<div>
					{props.errors.phoneNumber && (
						<p style={{ color: "red" }}>{props.errors.phoneNumber}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="address">Address</label>
					<textarea
						id=""
						className="md-textarea form-control"
						name="address"
						rows="3"
						onChange={props.inputChangeHandler}
						value={props.data.address}
					></textarea>
				</div>
				<div>
					{props.errors.address && (
						<p style={{ color: "red" }}>{props.errors.address}</p>
					)}
				</div>
			</form>
		</div>
	);
};

export default InputForm;
