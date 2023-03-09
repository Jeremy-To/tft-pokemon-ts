import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
	return (
		<section>
			<div className="p-40 flex flex-col gap-2 justify-center items-center border-2 rounded-md bg-red-200 ">
				<div className=" bg-yellow-400 hover:bg-yellow-800 hover:text-white px-4 py-2 rounded-md">
					<Login />
				</div>
			</div>
		</section>
	);
};

export default Home;
