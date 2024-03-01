const gambar = ["foto1", "foto2", "foto3", "foto4"];
const nama = ["Red Velvet", "Aespa", "Exo", "NCT"];
const judul = document.getElementById("RV");
let i = 1;
let j = 0;
let k = 2;
document.getElementById("next").onclick = () => {
  i++;
  j++;
  k++;
  const gambar1 = document.getElementById("gambar1");
  const gambar2 = document.getElementById("gambar2");
  const gambar3 = document.getElementById("gambar3");
  if (k == 4) {
    k = 0;
  }
  if (i == 4) {
    i = 0;
  }
  if (j == 4) {
    j = 0;
  }
  judul.innerText = `${nama[i]}`;
  gambar1.setAttribute("src", `./gambar/${gambar[j]}.jpg`);
  gambar2.setAttribute("src", `./gambar/${gambar[i]}.jpg`);
  gambar3.setAttribute("src", `./gambar/${gambar[k]}.jpg`);
};
document.getElementById("previous").onclick = () => {
  i--;
  j--;
  k--;
  const gambar1 = document.getElementById("gambar1");
  const gambar2 = document.getElementById("gambar2");
  const gambar3 = document.getElementById("gambar3");
  if (k < 0) {
    k = 3;
  }
  if (i < 0) {
    i = 3;
  }
  if (j < 0) {
    j = 3;
  }
  judul.innerText = `${nama[i]}`;
  gambar1.setAttribute("src", `./gambar/${gambar[j]}.jpg`);
  gambar2.setAttribute("src", `./gambar/${gambar[i]}.jpg`);
  gambar3.setAttribute("src", `./gambar/${gambar[k]}.jpg`);
};
