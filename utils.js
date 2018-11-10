export const randomRgbVal = () => Math.floor(Math.random() * 256);
export const numberOfRandomElements = 50;
export const numberOfGridElements = 1000;

export function refreshRandomElements () {
  return Array.from({length: numberOfRandomElements}, () => ({
    width: Math.floor(Math.random() * 80), 
    color: `rgb(${randomRgbVal()}, ${randomRgbVal()}, ${randomRgbVal()})`
  }));
}

export function getGridElements() {
  return Array.from({length: numberOfGridElements}, () => null);
}
