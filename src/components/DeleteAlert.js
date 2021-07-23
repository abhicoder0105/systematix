import React from "react";
import Modal from "react-bootstrap/Modal";

const DeleteAlert = (props) => {
	const { alert, trueDelete, falseDelete } = props;
	// console.log( trueDelete , falseDelete, alert)

	return (
		<div className="container">
			<Modal show={alert.show}>
				<Modal.Header>
					<Modal.Title></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h1 style={{ color: "red" }}>Are You Sure?</h1>
				</Modal.Body>
				<Modal.Footer>
					<button className="btn btn-primary" onClick={falseDelete}>
						Cancel
					</button>
					<button className="btn btn-danger" onClick={trueDelete}>
						Delete
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default DeleteAlert;
