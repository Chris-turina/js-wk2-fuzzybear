export class Bear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.eatSmall = this.feed(5);
  }

  setHunger() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if(this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  // learn fat arrow notation for this?
  feed(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount;
      return `The bear ate the ${food}! Food level goes up ${amount}!`;
    };
  }
}
