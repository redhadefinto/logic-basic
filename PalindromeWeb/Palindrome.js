const palindrome = () => {
  const btn = document.getElementById("btn");
  let input = document.getElementById("input");
  const containerResult = document.getElementById("container-result");
  btn.addEventListener('click', () => {
    let pattern = /^[A-Z,a-z]+$/;
    if(input.value.match(pattern)) {
      const result = input.value.toLowerCase();
      console.log(input.value)
      let palindrome = [...result];
      palindrome = palindrome.reverse();
      palindrome = palindrome.join("");
      palindrome = palindrome.toString();
      console.log(palindrome)
      // console.log(`input Awal: ${input}`);
      // console.log(`input palindrome: ${palindrome}`);
      if (palindrome == result) {
        return containerResult.innerHTML = `<p>Kata yang anda masukan <b>palindrome</b></p>`
      } else {
        return containerResult.innerHTML = `<p>Kata yang anda masukan bukan palindrome</p>`;
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