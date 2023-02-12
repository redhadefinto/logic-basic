const avarage = () => {
  let mtk = document.getElementById('mtk')
  let btn = document.getElementById('btn')
  let bIndo = document.getElementById('b-indo')
  let bInggris = document.getElementById('b-inggris')
  let ipa = document.getElementById('ipa')
  const containerResult = document.getElementById('container-result')
  btn.addEventListener('click', () => {
    console.log('button di click')
    let pattern = /^[0-9]+$/;
    if (mtk.value.match(pattern) && bIndo.value.match(pattern) && bInggris.value.match(pattern) && ipa.value.match(pattern)) {
      if(mtk.value >= 0 && mtk.value <= 100 && bIndo.value >= 0  && bIndo.value <= 100 && bInggris.value >= 0 && bInggris.value <= 100 && ipa.value >= 0 && ipa.value <= 100) {
        mtk = parseInt(mtk.value);
        bIndo = parseInt(bIndo.value);
        bInggris = parseInt(bInggris.value);
        ipa = parseInt(ipa.value);
        const result = (mtk + bIndo + bInggris + ipa) / 4;
        console.log(`Nilai rata rata: ${result}`);
        if (result <= 100 && result >= 90) {
          return containerResult.innerHTML = `<p>Nilai rata rata: ${result}</p> <p>Grade: A</p>`;
        } else if (result <= 89 && result >= 80) {
          return (containerResult.innerHTML = `<p>Nilai rata rata: ${result}</p> <p>Grade: B</p>`);
        } else if (result <= 79 && result >= 70) {
          return (containerResult.innerHTML = `<p>Nilai rata rata: ${result}</p> <p>Grade: C</p>`);
        } else if (result <= 69 && result >= 60) {
          return (containerResult.innerHTML = `<p>Nilai rata rata: ${result}</p> <p>Grade: D</p>`);
        } else {
          return (containerResult.innerHTML = `<p>Nilai rata rata: ${result}</p> <p>Grade: E</p>`);
        }
      } else {
        return (containerResult.innerHTML = `<p>Angka harus di range antara 0 - 100</p>`)
      }
    } else {
      return(containerResult.innerHTML = `<p>Masukan Nilai Anda Wajib Menggunakan Angka !!</p>`)
    }
  })
}

avarage()
