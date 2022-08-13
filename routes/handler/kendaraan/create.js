const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_KENDARAAN } = process.env;

const api = apiAdapter(URL_SERVICE_KENDARAAN);

module.exports = async (req, res) => {
  try {
    const kendaraan = await api.post("/kendaraan", req.body);
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
