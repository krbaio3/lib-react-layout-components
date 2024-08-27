// components/LayoutComponent.js

import type React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { FooterComponent } from './footer.component.tsx';
import { HeaderComponent } from './header.component.tsx';
import { SidebarComponent } from './sidebar.component.tsx';

export const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
	return (
		<BrowserRouter>
			<div className="min-h-screen flex flex-col">
				<HeaderComponent />
				<div className="flex flex-1">
					<SidebarComponent />
					<main className="flex-1 p-4">{children}</main>
				</div>
				<FooterComponent />
			</div>
		</BrowserRouter>
	);
};
