const obj = {
  name: 'idan',
  printName: function() {
    console.log(this.name);
  },
  delay: function () {
    setTimeout(this.printName.bind(obj), 1000);
  }
}

obj.printName()
obj.delay()