import emailjs from "@emailjs/browser";
import {Form, Formik} from "formik";
import {useState} from "react";
import * as Yup from "yup";
import {TextAreaInput} from "./Input/TextAreaInput";
import {TextInput} from "./Input/TextInput";
import SubmitFail from "./Submit Pop-up/submitFail";
import SubmitSuccess from "./Submit Pop-up/submitSuccess";
import style from "./contactFormStyle.module.scss";

export default function ContactForm() {
	const [submiting, setSubmiting] = useState(false);

	const schema = Yup.object({
		from_name: Yup.string().required("Required"),
		reply_to: Yup.string().email("Invalid email address").required("Required"),
		message: Yup.string()
			.max(120, "Must be 120 characters or less")
			.required("Required"),
	});

	const handleSubmit = (values, actions) => {
		setSubmiting(true);
		emailjs
			.send(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				values,
				import.meta.env.VITE_USER_ID
			)
			.then(
				function (response) {
					console.log("Succes!", response.status, response.text);
					setSubmiting(false);
				},
				function (error) {
					console.log("Failed...", error);
					return <SubmitFail error={error} />;
				}
			);
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={{
				from_name: "", // user name
				to_name: import.meta.env.VITE_USER_ID,
				subject: "Message from Portfolio Form", // subject of email
				reply_to: "", // user email
				message: "", // message of email
			}}
			validationSchema={schema}
			onSubmit={(values, actions) => {
				handleSubmit(values, actions);
			}}
		>
			<Form className={style.form}>
				<TextInput name="from_name" placeholder="My name is: " />
				<TextInput name="reply_to" placeholder="My email is: " />
				<TextAreaInput name="message" placeholder="Your Message" />
				<button type="submit" className={style.submit}>
					Send
				</button>
				{submiting ? <SubmitSuccess /> : null}
			</Form>
		</Formik>
	);
}
