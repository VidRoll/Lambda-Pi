var lambdaws = require('../'),
	λ = lambdaws.create;

lambdaws.config({
	accessKey: 'YOUR ACCESS KEY',
	secretKey: 'YOUR SECRET',
	role: '',
	region: 'us-east-1'
});

var calculator = function(a, b, callback) {
	callback(a + b);
};

var cloudedCalculator = λ(calculator, {
	name: 'CALCULATOR'
});

lambdaws.start();

var stdin = process.openStdin();

stdin.on('data', function(chunk) {
	
	cloudedCalculator(2, 6, function(data) {
		console.log("<--", data)
	});

});

setTimeout(function() {}, 1000 * 1000); // Keep Alive
