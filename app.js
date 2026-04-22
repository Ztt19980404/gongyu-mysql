const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// MySQL 连接配置（部署时自动读取环境变量）
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});

// 基础测试接口
app.get('/', (req, res) => {
  res.send('✅ MySQL 公益后端服务运行正常！');
});

// 启动服务
app.listen(PORT, async () => {
  try {
    await pool.getConnection();
    console.log('✅ MySQL 数据库连接成功');
    console.log(`🚀 服务已启动，端口: ${PORT}`);
  } catch (err) {
    console.error('❌ 数据库连接失败:', err);
  }
});
