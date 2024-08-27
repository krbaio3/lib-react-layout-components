import type React from 'react';
import { Link } from 'react-router-dom';

export const HeaderComponent: React.FunctionComponent = () => {
	return (
		<header className="bg-blue-600 text-white p-4 shadow-md">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-2xl font-bold">M50App</div>
				<nav>
					<ul className="flex space-x-4">
						<li>
							<Link to="/" className="hover:text-gray-300">
								Home
							</Link>
						</li>
						<li>
							<Link to="/remote" className="hover:text-gray-300">
								Remote
							</Link>
						</li>
						<li>
							<Link to="/contact" className="hover:text-gray-300">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
