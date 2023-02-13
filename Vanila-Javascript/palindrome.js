const palindrome = (input) => {
  if(typeof input == "string" && input.length > 2) {
    input = input.toLowerCase()
    let palindrome = [...input]
    palindrome = palindrome.reverse()
    palindrome = palindrome.join('')
    palindrome = palindrome.toString()
    console.log(`input Awal: ${input}`)
    console.log(`input palindrome: ${palindrome}`)
    if (palindrome == input) {
      return console.log('input yang anda masukan palindrome')
    } else {
      return console.log('input yang anda masukan Bukan palindrome')
    }
  } else {
    console.log('Huruf harus string dan minimal huruf 3 karakter')
  }
}

palindrome('ma')