'use strict';

const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2019-11-21'});
const { v4: uuidv4 } = require('uuid');
const postsTable = process.env.POSTS_TABLE;

module.exports.inicio = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Ejercicio de despliegue Serveless (NodeJs) + AWS lambda + DynamoDB para SigneBlock | ${ uuidv4() }`
      },
      null,
      2
    ),
  };
};

module.exports.getSigneBlock = async (event, context, callback) => {
  return db.scan({
      TableName: postsTable
    }).promise().then((res) => {
      callback(null, response(200, res.Items.sort(sortByDate)))
    })
    .catch(err => callback(null, response(err.statusCode, err)));
};

module.exports.postSigneBlock = async (event, context, callback) => {

  const reqBody = JSON.parse(event.body);

  if(reqBody){

  const post = {
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    userId: 1,
    titulo: reqBody.titulo,
    mensaje: reqBody.mensaje
  };

  return db.put({
      TableName: postsTable,
      Item: post
    }).promise().then(() => {
      callback(null, response(200,post))
    })
    .catch(err => callback(null, response(err.statusCode, err)));
  }else{
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          titulo: 'Debe enviar un titulo',
          mensaje: 'Debe enviar un mensaje'
        },
        null,
        2
      ),
    };
  }
};

function sortByDate(a,b){
  if(a.createdAt > b.createdAt){
    return -1;
  } else return 1;
}

function response(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  }
}



