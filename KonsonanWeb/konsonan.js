const konsonan = () => {
  const btn = document.getElementById('btn')
  const input = document.getElementById('input')
  const containerResult = document.getElementById('container-result')
  btn.addEventListener('click', () => {
    console.log('btn di click')
    let pattern = /^[A-Z,a-z]+$/
    if (input.value.match(pattern)) {
      let a = [...input.value];
      let result = "";
      for (let i = 0; i < a.length; i++) {
        if (a[i] === "a" || a[i] === "A") {
          a[i] = "o";
        }
        result = result + a[i];
        a[i].length - 1;
        if (result == input.value) {
          return containerResult.innerHTML = `<p>input yang anda masukan tidak memiliki huruf a nya jadi tidak ada yg berubah :)</p><br/> 
          <b><p>input akhir: ${result}</p><b/>`;
        }
      }
      return (containerResult.innerHTML = `<p>Hasil Konsonan: <b>${result}</b><p>`);
    } else {
      return containerResult.innerHTML = `<p>(${input.value}) Input yang anda masukan harus berupa <b>huruf/String</b></p>`
    }
  })
}

konsonan()

const reset = () => {
  const btnReset = document.getElementById('btn-reset');
  const input = document.getElementById("input");
  const containerResult = document.getElementById("container-result");
  input.value = '';
  containerResult.innerHTML =`<b><p>Hasil Konsonan</p></b>`;
}