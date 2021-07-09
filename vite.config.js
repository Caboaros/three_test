import Pages from "vite-plugin-pages";

export default {
  plugins: [
    Pages({
      pagesDir: [
        { dir: "src/", baseRoute: "" },
      ],
    }),
  ],
};