function fungsiRegular() {
  return "Ini Fungsi Regular"; // Fungsi Regular
}

const fungsiArrow = () => {
  return "ini Fungsi Arrow" // Fungsi Arrow
}

let arr = [1,2,3,4,5]

// Fungsi Regular vs Fungsi Arrow
function arrayMapRegular() {
  return arr.map(function (x) { return x * 2 }) // Fungsi Regular
}

const arrayMapArrow = () => arr.map(x => x * 2) // Fungsi Arrow



