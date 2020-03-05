const o = {
  name: 'Julie',
  greetBackwards: function () {
    function getReverseName() {
      // let nameBackwards = '';
      // for (let i = this.name.length - 1; i >= 0; i--) {
      //   nameBackwards += this.name[i];
      // }
      // return nameBackwards;
      console.log(this.name)
    }
    return `${getReverseName()} si eman ym ,olleH`;
  }
}

console.log(o.greetBackwards());