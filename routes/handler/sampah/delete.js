const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_TRANSAKSI } = process.env;

const api = apiAdapter(URL_SERVICE_TRANSAKSI);

module.exports = async (req, res) => {
  try {
    const id =req.params.id;
    const sampah = await api.delete(`/api/sampah/${id}`, req.body);
    return res.json(sampah.data);
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
