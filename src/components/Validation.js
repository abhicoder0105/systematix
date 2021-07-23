import React from "react";

const Validation = (enteredData) => {
	let errors = {};
	let regex = /^((\+91)?|91)?[789][0-9]{9}/;

	if (enteredData.fullName === "") {
		errors.fullName = "Full name is required";
	}
	if (enteredData.phoneNumber === "") {
		errors.phoneNumber = "contact number is required";
	} else if (enteredData.phoneNumber.length !== 10) {
		errors.phoneNumber = "Phone number is invalid";
	}
	if (!/^[789]\d{9}$/.test(enteredData.phoneNumber)) {
		errors.phoneNumber = "Phone number is invalid";
	}
	if (enteredData.age === "") {
		errors.age = "Age is required";
	} else if (enteredData.age < 0) {
		errors.age = "Age cannot be negative";
	} else if (enteredData.age > 100) {
		errors.age = "Please check the age";
	}
	if (enteredData.address === "") {
		errors.address = "address is required";
	} else if (enteredData.address.length < 10) {
		errors.address = "please enter proper address";
	}
	if (enteredData.gender === "") {
		errors.gender = "gender is required";
	}
	return errors;
};

export default Validation;
