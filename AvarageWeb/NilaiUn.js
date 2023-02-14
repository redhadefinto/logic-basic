const avarage = () => {
  let btn = document.getElementById('btn')
  let mtk = document.getElementById('mtk')
  let bIndo = document.getElementById('b-indo')
  let bInggris = document.getElementById('b-inggris')
  let ipa = document.getElementById('ipa')
  const containerResult = document.getElementById('container-result')
  btn.addEventListener('click', () => {
    let pattern = /^[0-9]+$/;
    if (mtk.value.match(pattern) && bIndo.value.match(pattern) && bInggris.value.match(pattern) && ipa.value.match(pattern)) {
      if(mtk.value >= 0 && mtk.value <= 100 && bIndo.value >= 0  && bIndo.value <= 100 && bInggris.value >= 0 && bInggris.value <= 100 && ipa.value >= 0 && ipa.value <= 100) {
        let ResultMtk = parseInt(mtk.value);
        let ResultBIndo = parseInt(bIndo.value);
        let ResultBInggris = parseInt(bInggris.value);
        let ResultIpa = parseInt(ipa.value);
        const result = (ResultMtk + ResultBIndo + ResultBInggris + ResultIpa) / 4;
        console.log(`Nilai rata rata: ${result}`);
        if (result >= 90) {
          return containerResult.innerHTML = `<p>Nilai rata rata: ${result}</p> <p>Grade: A</p>`;
        } else if (result >= 80) {
          return (containerResult.innerHTML = `<p>Nilai rata rata: ${result}</p> <p>Grade: B</p>`);
        } else if (result >= 70) {
          return (containerResult.innerHTML = `<p>Nilai rata rata: ${result}</p> <p>Grade: C</p>`);
        } else if (result >= 60) {
          return (containerResult.innerHTML = `<p>Nilai rata rata: ${result}</p> <p>Grade: D</p>`);
        } else {
          return (containerResult.innerHTML = `<p>Nilai rata rata: ${result}</p> <p>Grade: E</p>`);
        }
      } else {
        return (containerResult.innerHTML = `<p>Angka harus di range  0 - 100</p>`)
      }
    } else {
      return(containerResult.innerHTML = `<p>Masukan Nilai Anda Wajib Menggunakan Angka !!</p>`)
    }
  })
}

avarage()

const reset = () => {
  const btnReset = document.getElementById("btn-reset");
  let mtk = document.getElementById("mtk");
  let bIndo = document.getElementById("b-indo");
  let bInggris = document.getElementById("b-inggris");
  let ipa = document.getElementById("ipa");
  const containerResult = document.getElementById("container-result");
  mtk.value = '';
  bIndo.value = '';
  bInggris.value = '';
  ipa.value = ''
  containerResult.innerHTML = `<b><p>Hasil Rata Rata</p></b>`;
};