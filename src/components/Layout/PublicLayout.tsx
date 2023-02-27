import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { parseJSON } from 'src/utiles/utils';

export default function PublicLayout() {
	const user = parseJSON(localStorage.getItem('user'));

	if (user) {
		return <Navigate to='/courses' />;
	}

	return <Outlet />;
}
