/**
 * user.js
 * @description :: sequelize model of database table user
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
const bcrypt = require('bcrypt');
let User = sequelize.define('user',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
  nik:{ type:DataTypes.STRING },
  name:{ type:DataTypes.STRING },
  email:{ type:DataTypes.STRING },
  username:{ type:DataTypes.STRING },
  department:{ type:DataTypes.STRING },
  lokasi:{ type:DataTypes.STRING },
  grade:{ type:DataTypes.STRING },
  jabatan:{ type:DataTypes.STRING },
  no_hp:{ type:DataTypes.STRING },
  email_verified_at:{ type:DataTypes.STRING },
  avatar:{ type:DataTypes.STRING },
  password:{ type:DataTypes.STRING },
  join_date:{ type:DataTypes.DATE },
  remember_token:{ type:DataTypes.STRING },
  userType:{ type:DataTypes.INTEGER },
  isDeleted:{ type:DataTypes.BOOLEAN },
  created_at:{ type:DataTypes.DATE },
  updated_at:{ type:DataTypes.DATE },
  role_name:{ type:DataTypes.STRING },
  role_approval:{ type:DataTypes.INTEGER },
  isActive:{ type:DataTypes.BOOLEAN },
  addedBy:{ type:DataTypes.INTEGER },
  updatedBy:{ type:DataTypes.INTEGER },
  mobileNo:{ type:DataTypes.STRING }
}
,{
  hooks:{
    beforeCreate: [
      async function (user,options){
        if (user.password){ user.password =
          await bcrypt.hash(user.password, 8);}
        user.isActive = true;
        user.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (user,options){
        if (user !== undefined && user.length) { 
          for (let index = 0; index < user.length; index++) { 
            const element = user[index];
            if (element.password){ 
              element.password = await bcrypt.hash(element.password, 8);
            }
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
    afterCreate: [
      async function (user,options){
        sequelize.model('userAuthSettings').create({ userId:user.id });
      },
    ],
  }
}
);
User.prototype.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};
User.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  delete values.password;
  return values;
};
sequelizeTransforms(User);
sequelizePaginate.paginate(User);
module.exports = User;
