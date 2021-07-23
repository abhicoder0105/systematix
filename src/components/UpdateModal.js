import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
// import { v4 as uuidv4 } from "uuid";
import InputForm from "./InputForm";
import Validation from "./Validation";

const UpdateModal = (props) => {
	console.log(props);
	const data = props.data;
	console.log(data);
	const { id, fullName, age, gender, phoneNumber, address } = data;

	const [enteredData, setEnteredData] = useState({});

	useEffect(() => {
		if (props.data) {
			setEnteredData({ ...props.data });
		}
	}, [props.data]);

	console.log(enteredData);

	const [errors, setErrors] = useState({
		form: "please fill the form",
	});

	const inputChangeHandler = (e) => {
		setEnteredData({
			...enteredData,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setErrors(Validation(enteredData));
		if (Object.values(errors).length !== 0) {
			console.log(errors);
		} else {
			setEnteredData({
				fullName: "",
				age: "",
				gender: "",
				phoneNumber: "",
				address: "",
			});
			props.hide();
			// props.alert();
			props.getData(enteredData);
		}
	};

	const cancelHandler = () => {
		props.hide();
		setErrors({ form: "please fill the form" });
		setEnteredData({
			fullName: "",
			age: "",
			gender: "",
			phoneNumber: "",
			address: "",
		});
	};

	return (
		<div className="container">
			<Modal show={props.show} onHide={props.hide}>
				<div className="container mt-4">
					{errors.form && (
						<div class="alert alert-success" role="alert">
							{errors.form}
						</div>
					)}
				</div>
				<Modal.Header>
					<div>
						<Modal.Title>Enter Your Details</Modal.Title>
					</div>
				</Modal.Header>

				<Modal.Body>
					<InputForm
						inputChangeHandler={inputChangeHandler}
						data={enteredData}
						errors={errors}
					/>
				</Modal.Body>
				<Modal.Footer>
					<button className="btn btn-primary" onClick={cancelHandler}>
						Cancel
					</button>
					<button className="btn btn-success" onClick={submitHandler}>
						Save
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default UpdateModal;
