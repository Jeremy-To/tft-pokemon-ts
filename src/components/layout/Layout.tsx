import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface Props {
	children: ReactNode;
}

function Layout(props: Props) {
	return (
		<div className="w-full">
			<Navbar />
			<main>{props.children}</main>
		</div>
	);
}

export default Layout;
