const resultCard = document.getElementById("result-card")!;
const resultText = document.getElementById("result-text")!;
const circleGroup = document.getElementById("circle-props") as HTMLElement;
const radiusInput = document.getElementById("radius") as HTMLInputElement;

resultCard.classList.add("visible");
circleGroup.classList.remove("hidden");
resultText.textContent = "Enter a radius to see the area";

radiusInput.addEventListener("input", () => {
  const radius = Number(radiusInput.value) || 0;
  const area = Math.PI * radius ** 2;
  resultText.textContent = `Area of Circle: ${area.toFixed(2)}`;
});

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
  const elem = document.getElementById(id);
  if (elem!) {
     throw new Error(`Element not found: ${id}`);
    }; 
  return elem;
};