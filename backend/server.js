import express from "express";
import dotenv from "dotenv";
import cookieParser  from "cookie-parser";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponsRoutes from "./routes/coupon.route.js";
import paymentsRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import {connectDB} from "./lib/db.js";

dotenv.config({limit: "10mb"});

const app = express();
const PORT = process.env.PORT || 5000;

const_dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponsRoutes);
app.use("/api/payments", paymentsRoutes);
app.use("/api/analytics", analyticsRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(5000, () => {
    console.log("Server is running on http://localhost:" + PORT);

    connectDB();
});

// 00mvdHIh7CCxg6Ov