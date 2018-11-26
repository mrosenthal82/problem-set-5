/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  let op = document.getElementById("mario-easy-output");
  do {
    height = Number(prompt("How tall would you like your tower?"));
  } while (height < 1 || height > 23);

  let combined = "";
  for (let i=0; i<height; i++){
    let row = "";
    for (let i2=0; i2<(height-i-1); i2++){
      row = row+"&nbsp;";
    }
    row = row+"#";
    for (let i3=0; i3<(i+1); i3++){
      row = row+"#";
    }
    combined = combined+row+"<br/>";
  }
  op.innerHTML = "<code>" + combined + "</code>";

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  let op = document.getElementById("mario-hard-output");
  do {
    height = Number(prompt("How tall would you like your tower?"));
  } while (height < 1 || height > 23);

  let combined = "";
  for (let i=0; i<height; i++){
    let row = "";
    for (let i2=0; i2<(height-i-1); i2++){
      row = row+"&nbsp;";
    }
    row = row+"#";
    for (let i3=0; i3<(i+1); i3++){
      row = row+"#";
    }
    row = row+"&nbsp;&nbsp;#";
    for (let i4=0; i4<(i+1); i4++){
      row = row+"#";
    }

    combined = combined+row+"<br/>";
  }
  op.innerHTML = "<code>" + combined + "</code>";

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY
  let op = document.getElementById("credit-output");

  do {
    card = prompt("What card number would you like to check?");
  }
  while ((card.length < 13 || card.length > 16) && /[^0-9]/.test(card));
  let cardInt = parseInt(card, 10);

  let luhnTotal=0;
  let digit=0;
  let even=false;

  for (let i = cardInt.length - 1; i>=0; i--){
    let digitRetrieve = card.charAt(i);
    digit = parseInt(digitRetrieve, 10);

    if (even) {
      digit = digit*2;
    }
    luhnTotal = luhnTotal+digit;
    even = !even;
  }

  if ((luhnTotal%10)!=0){
      op.innerHTML="<img src=images/invalid.png width=100% />";
  } else if (card.length == 15 && card.charAt(0)==3){
      if (card.charAt(1)==4 || card.charAt(1)==7){
        op.innerHTML="<img src=images/amex.png width=100% />";
      } else {
        op.innerHTML="<img src=images/invalid.png width=100% />";
      }
  } else if (card.length == 16 && card.charAt(0)==5){
      if (card.charAt(1)==1 || card.charAt(1)==2 || card.charAt(1)==3 || card.charAt(1)==4 || card.charAt(1)==5){
        op.innerHTML="<img src=images/mastercard.png width=100% />";
      } else {
        op.innerHTML="<img src=images/invalid.png width=100% />";
      }
  } else if (card.length == 13 || card.length == 16){
      if (card.charAt(0)==4){
        op.innerHTML="<img src=images/visa.png width=100% />";
      } else {
        op.innerHTML="<img src=images/invalid.png width=100% />";
      }
  } else {
      op.innerHTML="<img src=images/invalid.png width=100% />";
  }


  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

   card = Number(card);

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  goal = Math.floor(Math.random() * (1001 - 1) + 1);
  correct = false;
  let input;
  let attempts = 0;

  while (!correct){
    input = Number(prompt("What is your guess?"));
    attempts += 1;
    if (input > goal){
      alert ("Guess lower");
    } else if (input < goal){
      alert ("Guess higher");
    } else if (input == goal){
      alert ("Congratulations!");
      correct = true;
    }
  }

   let op = document.getElementById("guess-output");
   op.innerHTML = `The number: ${goal}<br/>Your attempts: ${attempts}`;

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

  do {
    windspeed = Number(prompt("What is the windspeed of the hurricane?"));
  } while (windspeed < 0);

  let cat = "";

  if (windspeed >= 157){
    cat = "Category 5 Hurricane.";
  } else if (windspeed < 157 && windspeed >= 130) {
    cat = "Category 4 Hurricane.";
  } else if (windspeed < 130 && windspeed >= 111) {
    cat = "Category 3 Hurricane.";
  } else if (windspeed < 111 && windspeed >= 96) {
    cat = "Category 2 Hurricane.";
  } else if (windspeed < 96 && windspeed >= 74) {
    cat = "Category 1 Hurricane.";
  } else if (windspeed < 74 && windspeed >= 39) {
    cat = "Tropical Storm.";
  } else {
    cat = "The skies are calm...";
  }

  let op = document.getElementById("hurricane-output");
  op.innerHTML = cat;

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

   do {
     scoreOne = Number(prompt("What is the first score?"));
     scores.push(scoreOne);
   } while (scoreOne <= 0.0 && scoreOne >= 10.0);
   do {
     scoreTwo = Number(prompt("What is the second score?"));
     scores.push(scoreTwo);
   } while (scoreTwo <= 0.0 && scoreTwo >= 10.0);
   do {
     scoreThree = Number(prompt("What is the third score?"));
     scores.push(scoreThree);
   } while (scoreThree <= 0.0 && scoreThree >= 10.0);
   do {
     scoreFour = Number(prompt("What is the fourth score?"));
     scores.push(scoreFour);
   } while (scoreFour <= 0.0 && scoreFour >= 10.0);
   do {
     scoreFive = Number(prompt("What is the fifth score?"));
     scores.push(scoreFive);
   } while (scoreFive <= 0.0 && scoreFive >= 10.0);
   do {
     scoreSix = Number(prompt("What is the sixth score?"));
     scores.push(scoreSix);
   } while (scoreSix <= 0.0 && scoreSix >= 10.0);

   total = scores.reduce((a,b) => a + b, 0)
   let l = scores.indexOf(Math.min(...scores));
   let low = scores[l];
   let h = scores.indexOf(Math.max(...scores));
   let high = scores[h];
   let avg = ((total - low - high) / 4).toFixed(2);

   let op = document.getElementById("gymnastics-output");
   op.innerHTML = `Discarded: ${low}, ${high}<br/>Score: ${avg}`;

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
