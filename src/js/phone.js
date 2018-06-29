export default class Phone {
	constructor(text) {
    this.text =	text;
  }

  build() {
		document.getElementById('phone').innerHTML = this.text;
  }
};
