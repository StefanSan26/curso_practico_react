import React from 'react'
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css'


const index = () => {
	return (
		<Layout>
			<Login />
		</Layout>
	);
};

export default index;