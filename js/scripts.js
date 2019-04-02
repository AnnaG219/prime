var prime = 2;
var factors = [];


findPrimes(100);



//Find all prime numbers below number
function findPrimes(number) {

  //Setup array of ints below number
  for (var i = 2; i <= number; i++) {
    factors.push(i);
  }
  for (var x = 0; x < number; x++) {
    for (var i = 0; i < factors.length; i++) {
      if (factors[i] % prime == 0 && factors[i] != prime) {
        factors.splice(i, 1)
      }
    }
    prime++;
  }
  console.log(factors)
}
