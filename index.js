const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 模擬的資料
const foods = [
  { id: 1, name: "牛肉麵", price: 120 },
  { id: 2, name: "雞排飯", price: 100 },
  { id: 3, name: "陽春麵", price: 60 }
];

// 路由 - 取得所有食物資料
app.get('/foods', (req, res) => {
  res.json(foods);
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
