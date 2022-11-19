import express from 'express';
import 'dotenv/config';
import router from './routes';
import cors from 'cors';

import 'express-async-errors';

const app = express();

app.use(express.json());


app.use(
  cors({
    origin: true,
  }),
);

app.use(router);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Listening on Port ${process.env.PORT || '3333'}`);
});

