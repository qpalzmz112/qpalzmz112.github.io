// currently unused, since Tailwind wouldn't apply the color classes this way

class Color {
  constructor(col) {
    this.to_color = `to-${col}`;
    this.bg_color = `bg-${col}`;
    this.text_color = `text-${col}`;
  }
}

let colorList = ["lego-sand-green", "lego-sand-blue"];
let colorObjects = {};
for (let col of colorList) {
  colorObjects[col] = new Color(col);
}

export default colorObjects;
