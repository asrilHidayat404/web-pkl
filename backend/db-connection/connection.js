import mysql from "mysql";
// Konfigurasi koneksi database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pengajutte",
});

// Terhubung ke database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

export default db;
