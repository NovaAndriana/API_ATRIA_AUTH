/**
 * userValidation.js
 * @description :: validate each post and put request as per user model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

const { USER_TYPES } = require('../../constants/authConstant');
const { convertObjectToEnum } = require('../common');  

/** validation keys and properties of user */
exports.schemaKeys = joi.object({
  nik: joi.string().allow(null).allow(''),
  name: joi.string().allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  username: joi.string().allow(null).allow(''),
  department: joi.string().allow(null).allow(''),
  lokasi: joi.string().allow(null).allow(''),
  grade: joi.string().allow(null).allow(''),
  jabatan: joi.string().allow(null).allow(''),
  no_hp: joi.string().allow(null).allow(''),
  email_verified_at: joi.string().allow(null).allow(''),
  avatar: joi.string().allow(null).allow(''),
  password: joi.string().allow(null).allow(''),
  join_date: joi.date().options({ convert: true }).allow(null).allow(''),
  remember_token: joi.string().allow(null).allow(''),
  userType: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  created_at: joi.date().options({ convert: true }).allow(null).allow(''),
  updated_at: joi.date().options({ convert: true }).allow(null).allow(''),
  role_name: joi.string().allow(null).allow(''),
  role_approval: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  mobileNo: joi.string().allow(null).allow('')
}).unknown(true);

/** validation keys and properties of user for updation */
exports.updateSchemaKeys = joi.object({
  nik: joi.string().allow(null).allow(''),
  name: joi.string().allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  username: joi.string().allow(null).allow(''),
  department: joi.string().allow(null).allow(''),
  lokasi: joi.string().allow(null).allow(''),
  grade: joi.string().allow(null).allow(''),
  jabatan: joi.string().allow(null).allow(''),
  no_hp: joi.string().allow(null).allow(''),
  email_verified_at: joi.string().allow(null).allow(''),
  avatar: joi.string().allow(null).allow(''),
  password: joi.string().allow(null).allow(''),
  join_date: joi.date().options({ convert: true }).allow(null).allow(''),
  remember_token: joi.string().allow(null).allow(''),
  userType: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  created_at: joi.date().options({ convert: true }).allow(null).allow(''),
  updated_at: joi.date().options({ convert: true }).allow(null).allow(''),
  role_name: joi.string().allow(null).allow(''),
  role_approval: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  mobileNo: joi.string().allow(null).allow(''),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of user for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      nik: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      username: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      department: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      lokasi: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      grade: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      jabatan: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      no_hp: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      email_verified_at: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      avatar: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      password: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      join_date: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      remember_token: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      userType: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      created_at: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      updated_at: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      role_name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      role_approval: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      mobileNo: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
