/* eslint-disable react/prop-types */
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth"; // Ensure you have the AuthContext set up

const ProtectedRoute = ({ children, allowedRoles }) => {
	const { user } = useAuth();
	const location = useLocation();

	if (!user || !user.isAuthenticated) {
		// Redirect to login and remember the last location
		return (
			<Navigate
				to="/login"
				state={{ from: location }}
				replace
			/>
		);
	}

	if (allowedRoles && !allowedRoles.includes(user.role)) {
		// Redirect to an unauthorized access page
		return (
			<Navigate
				to="/unauthorized"
				replace
			/>
		);
	}

	return children;
};

export default ProtectedRoute;

// const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         // Simulate an async check if needed or wait for user to be loaded
//         const checkUser = async () => {
//             // Example: await validateToken();
//             setIsLoading(false);
//         };
//         checkUser();
//     }, [user]);

//     if (isLoading) {
//         return <div>Loading...</div>; // Or some loading component
//     }
