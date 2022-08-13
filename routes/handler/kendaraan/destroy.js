const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_KENDARAAN } = process.env;

const api = apiAdapter(URL_SERVICE_KENDARAAN);

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const kendaraan = await api.delete(`/kendaraan/${id}`);
    return res.json(kendaraan.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        status: "error",
        message: "Service kendaraan tidak ditemukan",
      });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
