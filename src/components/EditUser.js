import React from "react";
import UpdateModal from "./UpdateModal";

const EditUser = (props) => {
	const getEditedData = (editedData) => {
		props.updatedData(editedData);
	};

	console.log(props);
	return (
		<div>
			<UpdateModal
				show={props.modal}
				data={props.data}
				hide={props.hide}
				getData={getEditedData}
			/>
		</div>
	);
};

export default EditUser;
