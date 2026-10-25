const resultCard = document.getElementById("result-card")!;
const resultText = document.getElementById("result-text")!;
const circleGroup = document.getElementById("circle-props") as HTMLElement;
const radiusInput = document.getElementById("radius") as HTMLInputElement;

resultCard.classList.add("visible");
circleGroup.classList.remove("hidden");
resultText.textContent = "Enter a radius to see the area";

radiusInput.addEventListener("input", () => {
  const radius = Number(radiusInput.value) || 0;
  
});