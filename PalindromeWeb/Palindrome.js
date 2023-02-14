const palindrome = () => {
  const btn = document.getElementById("btn");
  let input = document.getElementById("input");
  const containerResult = document.getElementById("container-result");
  btn.addEventListener('click', () => {
    const string = input.value.toString();
    let pattern = /^[A-Z,a-z]+$/;
    if(string.match(pattern)) {
      if(string.length > 2) {
        const result = string.toLowerCase();
        let palindrome = [...result];
        palindrome = palindrome.reverse();
        palindrome = palindrome.join("");
        if (palindrome == result) {
          return containerResult.innerHTML = `<p>Kata yang anda masukan <b>palindrome</b></p>`
        } else {
          return containerResult.innerHTML = `<p>Kata yang anda masukan bukan palindrome</p>`;
        }
      } else {
        return (containerResult.innerHTML = `<p>Huruf harus lebih dari 2</p>`);
      }
    } else {
      return (containerResult.innerHTML = `<p>Kata yang anda masukan harus berupa  <b>String / Huruf</b></p>`);
    }
  })
}

palindrome()

const reset = () => {
  const btnReset = document.getElementById("btn-reset");
  const input = document.getElementById("input");
  const containerResult = document.getElementById("container-result");
  input.value = "";
  containerResult.innerHTML = `<b><h3>Hasil Palindrome</h3></b>`;
};