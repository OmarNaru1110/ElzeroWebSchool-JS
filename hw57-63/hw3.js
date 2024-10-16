function ageInTime(theAge) {
    if(theAge <= 10 || theAge >= 100){
        console.log("Age out of range");
        return;
    }
    console.log(`You have ${theAge} years`);
    console.log(`You have ${theAge*12} months`);
    console.log(`You have ${theAge*12*4} weeks`);
    console.log(`You have ${theAge*12*4*7} days`);
    console.log(`You have ${theAge*12*4*7*24} hours`);
    console.log(`You have ${theAge*12*4*7*24*60} minutes`);
    console.log(`You have ${theAge*12*4*7*24*60*60} seconds`);
}
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months