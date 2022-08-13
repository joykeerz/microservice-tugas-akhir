require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const sampahRouter = require("./routes/sampah");
const kendaraanImgRouter = require("./routes/kendaraanImg");
const alamatRouter = require("./routes/alamat");
const saldoRouter = require("./routes/saldo");
const langgananRouter = require("./routes/langganan");
const petugasRouter = require("./routes/petugas");
const detalSampahRouter = require("./routes/detailSampah");
const transaksiSampahRouter = require("./routes/transaksi");
const penggunaRouter = require("./routes/pengguna");
const refreshTokensRouter = require("./routes/refreshTokens");

const verifyToken = require("./middleware/verifyToken");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/sampah", sampahRouter);
app.use("/kendaraan", verifyToken ,kendaraanImgRouter);
app.use("/alamat", alamatRouter);
app.use("/saldo", saldoRouter);
app.use("/langganan", langgananRouter);
app.use("/petugas", petugasRouter);
app.use("/detail-sampah", detalSampahRouter);
app.use("/transaksi", transaksiSampahRouter);
app.use("/pengguna", penggunaRouter);
app.use("/refresh-tokens", refreshTokensRouter);

module.exports = app;
