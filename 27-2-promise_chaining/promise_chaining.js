const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    const capitalizedArray = array.map((word) => {
      if (typeof word !== 'string') {
        reject();
      }
      return word.toUpperCase();
    });
    resolve(capitalizedArray);
  });
};

array = ['hey', 'you', 'are', 'beautiful']

array2 = ['hey', 'you', 56, 'beautiful']

makeAllCaps(array)
  .then((res) =>{
    console.log(res.sort());
  })
  .catch(() => {
    console.log('error!');
  })

makeAllCaps(array2)
  .then((res) =>{
    console.log(res.sort());
  })
  .catch(() => {
    console.log('error!');
  })