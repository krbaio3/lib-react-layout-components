import type React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const SidebarComponent: React.FunctionComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const getLinkClasses = (path: string) => `p-4 hover:bg-gray-700 ${location.pathname === path ? 'bg-gray-700' : ''}`;

	return (
		<div className="flex">
			<button
				className="p-4 bg-blue-600 text-white md:hidden"
				onClick={toggleSidebar}
				aria-expanded={isOpen}
				aria-label="Toggle sidebar menu"
			>
				{isOpen ? 'Close' : 'Menu'}
			</button>
			<div
				className={`fixed inset-0 transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-200 ease-in-out bg-gray-800 text-white md:relative md:translate-x-0 md:w-64`}
			>
				<div className="p-4 font-bold text-xl">M50App</div>
				<nav className="mt-4">
					<ul>
						<li className={getLinkClasses('/')}>
							<Link to="/">Home</Link>
						</li>
						<li className={getLinkClasses('/remote')}>
							<Link to="/remote">Remote</Link>
						</li>
						<li className={getLinkClasses('/services')}>
							<Link to="/services">Services</Link>
						</li>
						<li className={getLinkClasses('/contact')}>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
