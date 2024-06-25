const Sequelize=require('sequelize');

const sequelize=new Sequelize('booking-appointment','root','1122',{
    dialect: 'mysql'
})
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports=sequelize;