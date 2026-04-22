const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// 👇 你的 Supabase 固定信息（不用改）
const SUPABASE_URL = "https://gmvvgikzhpxlpuwfazbx.supabase.co";
// 👇 请把这里替换成你刚复制的完整密钥
const SUPABASE_KEY = "sb_publishable_jctrxx-ZlnuvTlLD38dDUA_9K2fBr4z";

// 初始化客户端
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// 测试接口：打通服务与数据库
app.get('/', async (req, res) => {
  try {
    // 简单查询检查连接（不需要你建表）
    const { data, error } = await supabase.from('information_schema.tables').select('table_name').limit(1);
    if (error) throw error;
    res.send('✅ 服务运行正常！Supabase 数据库连接成功');
  } catch (err) {
    res.send(`✅ 服务运行正常！连接测试：${err.message}`);
  }
});

// 启动服务
app.listen(PORT, () => {
  console.log(`🚀 服务已启动，端口: ${PORT}`);
});
