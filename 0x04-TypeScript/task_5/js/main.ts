interface MajorCredits{
    credits:number;
    _brand: "major";
}
interface MinorCredits{
    credits:number;
    _brand: "minor";
}


function sumMajorCredits (subject1: MajorCredits ,subject2: MajorCredits): MajorCredits{
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "major"
  }
}
function sumMinorCredits (subject1: MinorCredits ,subject2: MinorCredits): MinorCredits{
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "minor"
  }
}


console.log(sumMajorCredits({ credits: 13400, _brand: "major" }, { credits: 446, _brand: "major" }));
//  { credits: 13846, _brand: 'major' }
console.log(sumMinorCredits({ credits: 334, _brand: "minor" }, { credits: 456, _brand: "minor" }))
//  { credits: 790, _brand: 'minor' }

