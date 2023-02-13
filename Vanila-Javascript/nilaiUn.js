const avarage = (mtk, bIndo, bInggris, ipa) => {
  if(typeof mtk == "number" && typeof bIndo == "number" && typeof bInggris == "number" && typeof ipa == "number") {
    if(mtk >= 0 && mtk <= 100 && bIndo >= 0 && bIndo <= 100 && bInggris >= 0 && bInggris <= 100 && ipa >= 0 && ipa <= 100) {
      const result = (mtk + bIndo + bInggris + ipa)/4;
      console.log(`Nilai rata rata: ${result}`)
      if (result <= 100 && result >= 90) {
        return console.log('Grade: A')
      } else if(result <= 89 && result >= 80) {
        return console.log('Grade: B')
      } else if(result <= 79 && result >= 70) {
        return console.log('Grade: C')
      } else if (result <= 69 && result >= 60) {
        return console.log('Grade: D')
      } else {
        console.log('GRade: e')
      }
    } else {
      console.log(`range nilai di antara 0 - 100`)
    }
  } else {
    console.log('Ke empat Nilai Harus bernilai angka')
  }
}

avarage(100, 90, 80, 90)