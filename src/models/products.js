const db = require("../configs/db");
const models = {};

models.getData = function () {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM public.products ORDER BY product_id ASC")
      .then((data) => {
        resolve(data.rows);
      })
      .catch((err) => reject(err));
  });
};

models.addData = function ({ name, price, category = "" }) {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO public.products (name, price, category) VALUES($1, $2, $3)`, [name, price, category])
      .then((data) => {
        resolve("Data Berhasil di simpan");
      })
      .catch((err) => reject(err));
  });
};

module.exports = models;
