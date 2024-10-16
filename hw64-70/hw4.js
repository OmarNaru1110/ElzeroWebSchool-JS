function specialMix(...data) {
    function checkAllumbers(data) {
      for (let i = 0; i < data.length; i++) {
        if (isNaN(data[i])) {
          return false;
        }
      }
      return true;
    }
    function checkAllStrings(data) {
        for (let i = 0; i < data.length; i++) {
            if (parseInt(data[i])) {
              return false;
            }
          }
          return true;
    }
    if (checkAllumbers(data)) {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i];
        }
        return sum;
    } else if (checkAllStrings(data)) {
      return "All Is Strings";
    } else {
        let sum = 0;
      for (let i = 0; i < data.length; i++) {
        if (parseInt(data[i])) {
          sum += parseInt(data[i]);
        }
      }
      return sum;
    }
  }
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
