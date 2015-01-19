angular.module('ContactsApp')
	.filter('labelCase', function () {
		return function (input) {
			input = input.replace(/([A-Z])/g, ' $1');
			return input[0].toUpperCase() + input.slice(1);
		};
	})
	.filter('keyFilter', function(){
		return function(object, query){
			var rsult = {};
			angular.forEach(obj, function (val, key) {
				if (key !== query) {
					result[key] = val;
				}
			});

			return result;
		};
	});