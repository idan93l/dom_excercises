const array = ["hey", "you", "are", "beautiful"];

const array2 = ["hey", "you", 56, "beautiful"];

function makeAllCaps(array) {
  new Promise((resolve, reject) => {
    const capitalizedArray = array.map((word) => {
      if (typeof word !== "string") {
        reject("ERORR!");
      }
      return word.toUpperCase();
    });
    resolve(capitalizedArray);
  })
    .then((res) => res.sort())
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

makeAllCaps(array);

makeAllCaps(array2);