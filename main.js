// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    compareDNA(obj) {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        console.log(this.dna[i], obj.dna[i]);
        if (this.dna[i] === obj.dna[i]) {
          count++;
        }
      }
      const percent = ((count / 15) * 100).toFixed(2);
      return `specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${percent}% DNA in common`;
    },
    mutate() {
      const dnaBase = ["A", "T", "C", "G"];
      const randomNumber = Math.floor(Math.random() * 15);
      const randomNumberInside = Math.floor(Math.random() * 3);
      const randomDna = this.dna[randomNumber];
      if (randomDna === "A") {
        return (this.dna[randomNumber] = dnaBase.filter(
          (item) => item !== randomDna
        )[randomNumberInside]);
      }
      if (randomDna === "T") {
        return (this.dna[randomNumber] = dnaBase.filter(
          (item) => item !== randomDna
        )[randomNumberInside]);
      }
      if (randomDna === "C") {
        return (this.dna[randomNumber] = dnaBase.filter(
          (item) => item !== randomDna
        )[randomNumberInside]);
      }
      if (randomDna === "G") {
        return (this.dna[randomNumber] = dnaBase.filter(
          (item) => item !== randomDna
        )[randomNumberInside]);
      }
    },
    willLikelySurvive() {
      let count = 0;
      let someDna = this.dna;
      for (let i = 0; i < someDna.length; i++) {
        if (someDna[i] === "C" || someDna[i] === "G") {
          count++;
        }
      }
      count /= 15;
      count *= 100;
      return count >= 60 ? true : false;
    },
  };
};






