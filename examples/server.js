
import { join } from 'path';
import express from 'express';

const app = express();

app.use(express.static(join(__dirname, 'static')));
app.use('/dist', express.static(join(__dirname, '../dist')));

app.listen(process.env.PORT || 8989, () => {
  console.log(`Example server is listened on ${process.env.PORT || 8989} port`);
});
