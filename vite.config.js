import { defineConfig } from 'vite'

export default defineConfig({
  base:'/romantic/',
	build: {
		rollupOptions:{
			input: {
				main: './index.html',
				second: './second_page.html'
			}
		}
	}
})
