var mongoose = require('mongoose');
var gracefulShutdown;
const dbURI = 'mongodb://localhost/lab3';


//if (process.env.NODE_ENV === 'production') {
//	dbURI = process.env.MONGOLAB_URI;
//}

//mongoose.connect(dbURI);

mongoose.connect(dbURI, {useNewUrlParser: true });

//Monitor and report when DB is connected
mongoose.connection.on('connected',function () {
	console.log('Mongoose connected to ' + dbURI);
});

//Monitor and report error connecting to DB
mongoose.connection.on('error',function (err) {
	console.log('Mongoose connection error: ' + err);
});

//Monitor and report when DB is disconnected
mongoose.connection.on('disconnected',function () {
	console.log('Mongoose disconnected');
});

//Closes (disconnects) from Mongoose DB upon shutdown
gracefulShutdown = function (msg, callback) {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

//For nodemon restarts
process.once('SIGUSR2', function () {
	gracefulShutdown('nodemon restart', function () { 
		process.kill(process.pid, 'SIGUSR2' );
}); });

//For app termination
process.on('SIGINT', function () {
	gracefulShutdown('app termination', function (){
		process.exit(0);
}); });

require('./blogs');

