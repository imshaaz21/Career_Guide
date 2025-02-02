import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { useNavigate, useParams } from "react-router-dom";

function Counseller({ func }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [values, setValues] = useState({
		username: "",
		name: "",
		phoneNumber: "",
		email: "",
		highestQualifications: "",
		nic: "",
		educationLevel: "",
		majorField: "",
		specialization: "",
		password: "",
	});

	useEffect(() => {
		if (id) {
			axios
				.get(`/user/by-id/${id}`)
				.then((res) => {
					console.log(res.data);
					setValues({
						username: res.data.username,
						name: res.data.name,
						phoneNumber: res.data.phoneNumber,
						email: res.data.email,
						highestQualifications: res.data.highestQualifications,
						nic: res.data.nic,
						educationLevel: res.data.educationLevel,
						majorField: res.data.majorField,
						specialization: res.data.specialization,
						password: res.data.password,
					});
				})
				.catch((err) => console.error(err));
		}
	}, [id]);

	function handleChange(event) {
		const { name, value } = event.target;
		setValues((prevValue) => ({ ...prevValue, [name]: value }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		const method = id ? "put" : "post";
		const url = id ? `/user/by-id/${id}` : "/user/";

		axios[method](url, values)
			.then(() => navigate("/admin/manageResourcePersons"))
			.catch((err) => console.error(err));
	}
	return (
		<div>
			<section className="bg-white dark:bg-gray-900">
				<div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
					<h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
						{func} Resource Person
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
							<div className="sm:col-span-2">
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									value={values.name}
									placeholder="Full Name"
									required=""
									onChange={handleChange}
								/>
							</div>
							<div className="w-full">
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Username
								</label>
								<input
									type="text"
									name="username"
									id="username"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									value={values.username}
									placeholder="Username"
									required=""
									onChange={handleChange}
								/>
							</div>
							<div className="w-full">
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									value={values.password}
									placeholder="Password"
									required=""
									onChange={handleChange}
								/>
							</div>
							<div className="w-full">
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Phone Number
								</label>
								<input
									type="text"
									name="phoneNumber"
									id="phoneNumber"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									value={values.phoneNumber}
									placeholder="Phone Number"
									required=""
									onChange={handleChange}
								/>
							</div>
							<div className="w-full">
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									NIC
								</label>
								<input
									type="text"
									name="nic"
									id="nic"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									value={values.nic}
									placeholder="NIC"
									required=""
									onChange={handleChange}
								/>
							</div>
							<div className="w-full">
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									value={values.email}
									placeholder="Email"
									required=""
									onChange={handleChange}
								/>
							</div>
							<div className="w-full">
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Specialization
								</label>
								<input
									type="text"
									name="specialization"
									id="specialization"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									value={values.specialization}
									placeholder="Specialization"
									required=""
									onChange={handleChange}
								/>
							</div>
							<div className="sm:col-span-2">
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Educational Level
								</label>
								<input
									type="text"
									name="educationLevel"
									id="educationLevel"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									value={values.educationLevel}
									placeholder="Educational Level"
									required=""
									onChange={handleChange}
								/>
							</div>
							<div className="sm:col-span-2">
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Highest Qualifications
								</label>
								<input
									type="text"
									name="highestQualifications"
									id="highestQualifications"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									value={values.highestQualifications}
									placeholder="Highest Qualifications"
									required=""
									onChange={handleChange}
								/>
							</div>

							<div className="sm:col-span-2">
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Major Field
								</label>
								<input
									type="text"
									name="majorField"
									id="majorField"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									value={values.majorField}
									placeholder="Major Field"
									required=""
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<button
								type="submit"
								className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
								{func} Resouce Person
							</button>
							{/* <button
								type="button"
								className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
								<svg
									className="w-5 h-5 mr-1 -ml-1"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
										clipRule="evenodd"></path>
								</svg>
								Delete
							</button> */}
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}

export default Counseller;
