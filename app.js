const Hapi  = require("hapi");
const Joi = require("joi");
cost pg = require("pg");

const server = new Hapi.Server();

server.connection({"host":"localhost","port":3000});

server.start(error=> {
    if(error) {
        throw error;
    }
    console.log("Listening at ", +server.info.uri);
});

server.route({
    method: "GET",
    path: "/",
    handler: (request, response) => {
    var connectionString = "postgres://ricsfmcmbmsfif:f4364b4f87b5018a668af0f8a996c7e611ae5128b9304e93a72f1ad24dd13bdf@ec2-107-20-185-27.compute-1.amazonaws.com:5432/d3nf58uf3jvf2l"
    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT * FROM Opportunity', function(err, result) {
        done();
      if(err) return console.error(err);
      console.log(result.rows);
   });
});
        response("Hello World");
    }
});