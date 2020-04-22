const mongoose = require('mongoose');
const NODE_ENV = 'production';
const MONGO_URL = 'mongodb+srv://MongoBookMark:<j1357915>@cluster0-ljgc0.mongodb.net/test?retryWrites=true&w=majority:27017';
module.exports = () => {
  const connect = () => {
    if (NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    mongoose.connect(MONGO_URL, {dbName: 'reactdb',}, (error) => {    
      if (error) {
        console.log('몽고디비 연결 에러', error);
      } else {
        console.log('몽고디비 연결 성공');
      }
    });
  };
  connect();
  mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error);
  });
  mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
    connect();
  });
  require('./user');
};