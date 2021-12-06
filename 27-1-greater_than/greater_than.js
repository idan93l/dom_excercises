const greaterThanTen = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve();
    } else {
      reject ();
    }
  });
};

greaterThanTen(11)
  .then(() => {
    console.log('Resolved!');
  })
  .catch(() => {
    console.log('Rejected!');
  })

greaterThanTen(9)
  .then(() => {
    console.log('Resolved!');
  })
  .catch(() => {
    console.log('Rejected!');
  })
