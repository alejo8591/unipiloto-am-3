(function test(){
	var number_a = 424494;

	var number_b = 484848;

	function add_numbers(number_a, number_b){

		return number_a + number_b;
	}

	console.log(add_numbers(number_a, number_b));

	if (number_b === number_a){

		console.log('Son iguales');
	
	} else{

		console.log('Son diferentes');

	}
	
})();