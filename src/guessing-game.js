class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.minNum = min;
      this.maxNum = max;
    }

    guess() {
      return  Math.round((this.minNum + this.maxNum)/2);
    }

    lower() {
      this.maxNum = this.guess()
    }

    greater() {
      this.minNum = this.guess()
    }
}

module.exports = GuessingGame;
