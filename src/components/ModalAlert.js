import React from "react";
import Modal from "react-bootstrap/Modal";

const ModalAlert = (props) => {
	return (
		<div className="container">
			<Modal show={props.isOpen}>
				<Modal.Header>
					<Modal.Title></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h1 style={{ color: "green" }}>{props.alertData}</h1>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</div>
	);
};

export default ModalAlert;
