/*
* Implementei o Redis no meu projeto para carregar o menu mais rapidamente, porém teria que hospedar no AWS ElastiCache
* ou algo do tipo, que são pagos, porque o Vercel não suporta o Redis. Então escolhi comentar todos os códigos
* que eu fiz para fazer o Redis funcionar e o projeto continuar funcionando do jeito que estava antes.
*/

/*
* const redis = require('redis');
* 
* const clientRedis = redis.createClient({
*     host: 'localhost',
*     port: 6379
* });
*
* module.exports = clientRedis;
*/