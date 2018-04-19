var myNumbs = [1 , 2, 3, 4, 5 , 6, 7, 8, 9, 10];

function backwards() {
	return myNumbs.reverse();
}

console.log(myNumbs);
console.log(backwards())




var points =[40, 100, 5, 1, 10, 25];
console.log(points);

function myFunction(){
	points.sort(function(a, b){return b-a});
	console.log(points);
}

myFunction();

function test() {
	var h = [0, 8, 5, 7, 2];
	var j = ' this is makaroni baby'
	h.sort(function(a, b){return a-b}) ;
	console.log(h + j);
}

test();


