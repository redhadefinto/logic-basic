// Cara Pertama
const konsonan = (input) => {
  if(typeof input == "string") {
    console.log(`Input awal: ${input}`)
    let a = [...input]
    let result = "";
    for (let i = 0; i < a.length ; i++) {
      if (a[i] === "a" || a[i] === 'A') {
        a[i] = 'o';
      }
      result = result + a[i]
      a[i].length - 1;
      if (result == input) {
        console.log(`input yang anda masukan tidak memiliki huruf a nya jadi tidak ada yg berubah :)`)
      }
    }
    console.log(`Input Konsonan: ${result}`)
  } else {
    console.log('Input yang anda masukan wajib menggunakan string')
    console.log('Selesai')
  }
}

konsonan('kAsar')
