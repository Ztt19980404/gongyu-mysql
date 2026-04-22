const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// 只保留一个基础测试接口，不连接任何数据库
app.get('/', (req, res) => {
  res.send('✅ 服务运行正常！（数据库暂时关闭）');
});

app.listen(PORT, () => {
  console.log(`🚀 服务已启动，端口: ${PORT}`);
});
