interface Shape {
  type: string;
}

interface Circle extends Shape {
  type: "circle";
  radius: number;
}

interface Rectangle extends Shape {
  type: "rectangle";
  width: number;
  height: number;
}

interface Triangle extends Shape {
  type: "triangle";
  base: number;
  height: number;
}

type Shapes = Circle | Triangle | Rectangle;

const getElement = (id: string): HTMLElement => {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Element not found: ${id}`);
  return el;
};

let shapeTypeSelect: HTMLSelectElement;

let propertyGroups: {
  circle: HTMLElement;
  rectangle: HTMLElement;
  triangle: HTMLElement;
};

let propertyInputs: {
  radius: HTMLInputElement;
  width: HTMLInputElement;
  height: HTMLInputElement;
  base: HTMLInputElement;
  triangleHeight: HTMLInputElement;
};

let resultText: HTMLElement;
let resultCard: HTMLElement;

const chooseShape = (shapeType: string) => {
  Object.entries(propertyGroups).forEach(([name, group]) => {
    if (name === shapeType) {
      group.classList.remove("hidden");
    } else {
      group.classList.add("hidden");
    }
  });
};

const toggleResultCard = (show: boolean) => {
  if (show) {
    resultCard.classList.add("visible");
  } else {
    resultCard.classList.remove("visible");
  }
};

const calculateArea = (shape: Shapes): string => {
  switch (shape.type) {
    case "circle":
      return `Area of Circle: ${(Math.PI * shape.radius ** 2).toFixed(2)}`;
    case "rectangle":
      return `Area of Rectangle: ${shape.width * shape.height}`;
    case "triangle":
      return `Area of Triangle: ${0.5 * shape.base * shape.height}`;
    default:
      const _nonExistent: never = shape;
      return _nonExistent;
  }
};

function clearInputFields() {
  // const elements = document.querySelectorAll(".input");
  // console.log(elements);
  // elements.forEach(e => {
  //   let str = e.toString;
  //   console.log(str);
  //   // str = "";
  //   return str.replace("input", "");
  // });
  return document.querySelectorAll(".input").forEach(
    // (e): string => { e
    (e) => { 
      // e
      // e = "";
    // let str: string = e.toString;
    // let str = e.toString;
    // console.log(str);
    // str = "";
    // return str;
    // return str.replace("input", "");
    // return e.replace("input", "");
    e.value = "";
    // return e.value = "";
  });
}
// module.exports = { clearInputFields }
// console.log(clearInputFields());
clearInputFields();

function updateResult() {
  const shape = shapeTypeSelect.value;
  let result: string = "";

  if (shape === "circle") {
    result = calculateArea({
      type: "circle",
      radius: Number(propertyInputs.radius.value),
    });
  } else if (shape === "rectangle") {
    result = calculateArea({
      type: "rectangle",
      width: Number(propertyInputs.width.value),
      height: Number(propertyInputs.height.value),
    });
  } else if (shape === "triangle") {
    result = calculateArea({
      type: "triangle",
      base: Number(propertyInputs.base.value),
      height: Number(propertyInputs.triangleHeight.value),
    });
  }

  resultText.textContent = result;
}