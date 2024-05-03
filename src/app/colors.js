class Color {
  constructor(secondaryColor) {
    this.secondaryColor = secondaryColor;
  }
}

let colors = {
  "lego-sand-green": new Color("lego-green"),
  "lego-sand-blue": new Color("lego-dark-azure"),
  "lego-sand-red": new Color("lego-dark-red"),
  "lego-medium-lavender": new Color("lego-purple"),
};

export default colors;
