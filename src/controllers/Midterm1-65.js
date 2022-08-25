module.exports = {
  add1(req, res) {
    input = parseInt(JSON.stringify(req.body["input"]));
    console.log("input = " + input);
    output = input + 1;
    res.send(output.toString());
  },

  //Api1 ข้อ x+x
  func1(req, res) {
    n = parseInt(JSON.stringify(req.body["input"]));
    console.log("input = " + n);
    output = number + number;
    console.log("result = " + output);
    res.send(output.toString());
  },

  //Api2 ข้อ isPrime()
  func2(req, res) {
    number = parseInt(JSON.stringify(req.body["input"]));
    console.log("input = " + number);

    let isPrime = true;

    if (number === 1) {
      console.log("1 is neither prime nor composite number.");
    }

    else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(number+' is a prime number.');
        res.send(number.toString()+" is a prime number.");
      } else {
        console.log(number+' is a not prime number.');
        res.send(number.toString()+" is not a prime number.");
      }
    }
    else {
      console.log(number+" is not a prime number.");
      res.send(number.toString()+" is not a prime number.");
    }

    //res.send(output.toString());
  }
};
