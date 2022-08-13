const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_TRANSAKSI } = process.env;

const api = apiAdapter(URL_SERVICE_TRANSAKSI);

module.exports = async (req, res) => {
  try {
    const query = await api.post("/api/detail-sampah", req.body);
    return res.json(query.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        status: "error",
        message: "Service transaksi tidak ditemukan",
      });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
