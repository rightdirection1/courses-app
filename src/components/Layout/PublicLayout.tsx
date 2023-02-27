import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserSelector } from 'src/store/user/selectors';

export default function PublicLayout() {
	const user = useSelector(getUserSelector);

	if (user) {
		return <Navigate to='/courses' />;
	}

	return <Outlet />;
}
