import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AdminSignup.module.css";

const AdminSignup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		employeeNumber: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Validate the employee number
		if (!data.employeeNumber.startsWith('AVH')) {
			setError('Employee Number must start with AVH');
			return;
		}
	
		try {
			const url = "http://localhost:5000/api/admins";
			const { data: res } = await axios.post(url, data);
			navigate("/admin");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	

	return (
		<div className={styles.adminsignup_container}>
			<div className={styles.adminsignup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/admin">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Employee Number"
							name="employeeNumber"
							onChange={handleChange}
							value={data.employeeNumber}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminSignup;