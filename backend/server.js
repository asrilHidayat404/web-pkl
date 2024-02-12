import express from "express";
import bodyParser from "body-parser";
import multer from "multer"; // Konfigurasi Multer untuk mengelola file upload
import cors from "cors";
import db from "./db-connection/connection.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.static("public"));
//

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
let i = 0;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}${i++}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.post("/api/users", upload.single("fileImg"), (req, res) => {
  const file = req.file; // Mengakses file yang diunggah dari objek request
  console.log(file); // Menampilkan informasi file di console

  const { nama, nomorWA, email, status, nip, jabatan } = req.body;
  console.log(req.body);
  const column5 = status === "ASN" ? nip : null;
  const column6 = status === "Non ASN" ? jabatan : null;
  const imageUrl = `http://localhost:3001/images/${file.filename}`;
  const query = `insert into listPengaju 
                 (nama, nomorWA, email, status, nip, jabatan, gambarFormulir, tglPengajuan, waktuPengajuan)
                 values
                 (?, ?, ?, ?, ?, ?, ?, now(), current_time())`;
  db.query(
    query,
    [nama, nomorWA, email, status, column5, column6, file.filename],
    (err, result) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ success: false, message: "Failed to insert data: " + err });
      } else {
        console.log("Data inserted successfully");
        return res.json({
          success: true,
          result: {
            datas: req.body,
            img: imageUrl,
          },
          message: "Success insert data",
        });
      }
    }
  );
});

app.get("/api/login", (req, res) => {
  res.send("admin");
});
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const query = "select * from admin where username = ?";
  const values = [username];
  db.query(query, values, async (err, result) => {
    const match =
      result.length > 0
        ? await bcrypt.compare(password, result[0].password)
        : false;
    const token = generateAccessToken({ username });
    if (!match) {
      console.log("Failed to login");
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    } else {
      console.log("Login Successful");
      delete result[0].password;
      return res.status(200).json({
        success: true,
        user: result[0],
        message: "Login successful",
        token,
      });
    }
  });
});

app.get("/getPengaju", (req, res) => {
  const query = "SELECT * FROM listPengaju";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Query result:", result);
      res.send(result);
    }
  });
});

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "10s" });
}

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running at ${process.env.APP_PORT}`);
});

app.get("/getPassword", (req, res) => {
  bcrypt.hash("admin", 10).then(function (hash) {
    // Store hash in your password DB.
  });
});
