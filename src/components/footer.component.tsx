import type React from 'react';
import { Link } from 'react-router-dom';

export const FooterComponent: React.FunctionComponent = () => {
	return (
		<footer className="bg-gray-800 text-white p-4 mt-8">
			<div className="container mx-auto text-center">
				<p>&copy; {new Date().getFullYear()} M50App. All rights reserved.</p>
				<div className="mt-2">
					<Link to="#" className="hover:text-gray-400 mx-2">
						Twitter
					</Link>
					<Link to="#" className="hover:text-gray-400 mx-2">
						Facebook
					</Link>
					<Link to="#" className="hover:text-gray-400 mx-2">
						LinkedIn
					</Link>
				</div>
			</div>
		</footer>
	);
};
