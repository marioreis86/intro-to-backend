import express from 'express';

const app = express();

app.use(express.json());

import userRoute from './routes/user.route.js';
import postRoute from './routes/post.route.js';

app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);

export default app;