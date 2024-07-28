// import express from "express";
// import { fileURLToPath } from "url";
// import { dirname, join } from "path";
// import history from "connect-history-api-fallback";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();

// //app.use(path, middlewareFunction);

// // app.get("/public/style.css", (req, res) => {
// //   res.sendFile(__dirname + "/public/style.css");
// // });

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, "public")));

// // Use connect-history-api-fallback middleware for handling client-side routing
// app.use(history());

// // CORS middleware
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://zinafri.com"); // Change * to your specific origin if needed
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

// // Start the server
// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
