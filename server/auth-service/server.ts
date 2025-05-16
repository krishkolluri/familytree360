import app from './app';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://krishobj:wLHPqPGEagKTVDCK@familycluster.yozgnpn.mongodb.net/?retryWrites=true&w=majority&appName=familyCluster";

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Auth service running on port ${PORT}`);
    });
  })
  .catch(err => console.error('DB error:', err));
