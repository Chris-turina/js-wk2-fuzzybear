export class Bear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
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
    console.log("hello. this is the inside of feed.")
    let that = this;
    return customFeed(food) {
      console.log("hello. this is the inner inside of feed.")
      that.foodLevel += amount;
      return `The bear ate the ${food}! Food level goes up by ${amount}!`;
    };
  }

  eatSmall() {
    this.feed(5);
  }
}
