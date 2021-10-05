const lowerCaseWords = function(mixedArray) {
    return new Promise((resolve, reject) => {
      if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
        const filteredArray = mixedArray.filter((eachElOfArr) => typeof eachElOfArr === "string");
  
        const lowerCaseStrings = filteredArray.map((eachItemOfFilterArr) =>
          eachItemOfFilterArr.toLowerCase()
        );
  
        resolve(lowerCaseStrings);
      } else {
        reject("Invalid array");
      }
    });
  };
  
  const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
  
  lowerCaseWords(mixedArray)
    .then((value) =>
      console.log(value)
    )
    .catch((error) =>
      console.log(error)
    );