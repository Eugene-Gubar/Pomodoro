
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function flatColor() {

  var flatColors = [
    { name: "turquoise",     rgb: "26,  188, 156", hex: "#1abc9c" },
    { name: "emerland",      rgb: "46,  204, 113", hex: "#2ecc71" },
    { name: "peter-river",   rgb: "52,  152, 219", hex: "#3498db" },
    { name: "amethyst",      rgb: "155, 89,  182", hex: "#9b59b6" },
    { name: "wet-asphalt",   rgb: "52,  73,  94",  hex: "#34495e" },
    { name: "green-sea",     rgb: "22,  160, 133", hex: "#16a085" },
    { name: "nephritis",     rgb: "39,  174, 96",  hex: "#27ae60" },
    { name: "belize-hole",   rgb: "41,  128, 185", hex: "#2980b9" },
    { name: "wisteria",      rgb: "142, 68,  173", hex: "#8e44ad" },
    { name: "midnight-blue", rgb: "44,  62,  80",  hex: "#2c3e50" },
    { name: "sun-flower",    rgb: "241, 196, 15",  hex: "#f1c40f" },
    { name: "carrot",        rgb: "230, 126, 34",  hex: "#e67e22" },
    { name: "alizarin",      rgb: "231, 76,  60",  hex: "#e74c3c" },
    { name: "clouds",        rgb: "236, 240, 241", hex: "#ecf0f1" },
    { name: "concrete",      rgb: "149, 165, 166", hex: "#95a5a6" },
    { name: "orange",        rgb: "243, 156, 18",  hex: "#f39c12" },
    { name: "pumpkin",       rgb: "211, 84,  0",   hex: "#d35400" },
    { name: "pomegranate",   rgb: "192, 57,  43",  hex: "#c0392b" },
    { name: "silver",        rgb: "189, 195, 199", hex: "#bdc3c7" },
    { name: "asbestos",      rgb: "127, 140, 141", hex: "#7f8c8d" }
  ];

  var hexColor = flatColors[getRandomInt(0, flatColors.length + 1)].hex;
  

}
