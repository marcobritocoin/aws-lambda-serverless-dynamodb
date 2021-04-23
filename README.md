# Ejercicio en AWS Lambda + Serverless (Nodejs) + DynamoDB

[Api Rest AWS](https://github.com/mbrito2019/aws-lambda-serverless-dynamodb) es un ejercicio para demostrar como se despliega un sencillo Api Rest en AWS lambda con Serverless y DynamoDb.

## Prueba técnica

Desplegar en tu cuenta de AWS con https://www.serverless.com/ un lambda donde existan dos métodos:

1. * POST /signeblock  —> Almacena el body de la petición en dynamoDB
2. * GET  /signeblock —> Recupera todo lo que está almacenado en dynamoDB.

## EndPoints:

```
GET      https://nzd4dipmzj.execute-api.us-east-2.amazonaws.com/dev/signeblock
POST     https://nzd4dipmzj.execute-api.us-east-2.amazonaws.com/dev/signeblock

```

## Para Clonar el repositorio

```bash
$ git clone https://github.com/mbrito2019/aws-lambda-serverless-dynamodb.git
```
