const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;//这个是端口
app.use(cors(
    {
        origin:'https://yufe2024.github.io/-/'
    }
)

)
app.listen(PORT, () => {
  console.log(`后端服务运行在 http://localhost:${PORT}`);
  console.log(`测试接口：http://localhost:${PORT}/api/messages`);
});