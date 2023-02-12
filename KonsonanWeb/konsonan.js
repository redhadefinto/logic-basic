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
          console.log(`input yang anda masukan tidak memiliki huruf a nya jadi tidak ada yg berubah :)`);
        }
      }
      return (containerResult.innerHTML = `Input Konsonan: ${result}`);
    } else {
      return containerResult.innerHTML = `<p>(${input.value}) Input yang anda masukan harus berubah <b>huruf/String</b></p>`
    }
  })
}

konsonan()