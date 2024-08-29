import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
	if (command === 'serve') {
		return {
			plugins: [react()],
		};
	} else {
		return {
			plugins: [react()],
			build: {
				lib: {
					entry: resolve(__dirname, 'src/index.ts'), // Entrada principal de la librería
					name: 'LibReactLayoutComponents',
					formats: ['es', 'cjs'] as const, // Formatos que deseas exportar
					fileName: format => `layout-components.${format}.js`,
				},
				rollupOptions: {
					// Externaliza las dependencias que no quieras incluir en el bundle
					external: ['react', 'react-dom', 'react-router-dom'],

					output: {
						globals: {
							react: 'React',
							'react-dom': 'ReactDOM',
							'react-router-dom': 'ReactRouterDOM',
						},
					},
					plugins: [
						{
							name: 'rename-css-plugin',
							// eslint-disable-next-line no-empty-pattern
							generateBundle({}, bundle) {
								for (const [fileName, file] of Object.entries(bundle)) {
									if (fileName === 'style.css') {
										file.fileName = 'basic-style.css';
									}
								}
							},
						},
					],
				},
			},
		};
	}
});
