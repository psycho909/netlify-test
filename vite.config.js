import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
	const root = process.cwd();
	const envConfig = loadEnv(mode, "./");
	return {
		base: "./",
		plugins: [
			Components({
				dirs: ["src/components"],
				extensions: ["vue", "jsx"]
			}),
			AutoImport({
				imports: ["vue"]
			}),
			vue(),
			vueJsx()
		],
		build: {
			target: "modules",
			outDir: "dist",
			assetsDir: "assets",
			cssCodeSplit: true,
			emptyOutDir: mode == "devbuild" ? false : true,
			rollupOptions: {
				input: {
					index: path.resolve(__dirname, "index.html")
				},
				// entryFileNames: "assets/js/[name].[hash].js",
				output: {
					entryFileNames: "js/default.js",
					chunkFileNames: "js/default.js",
					assetFileNames: (assetInfo) => {
						let extType = assetInfo.name.split(".").at(1);
						if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
							extType = "img";
						}
						return `assets/${extType}/[name][extname]`;
					}
				}
			}
		}
	};
});
