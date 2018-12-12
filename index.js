var musicians = ["John Lennon", "Paul McCartney","George Harrison","Ringo Starr"]
var instruments = ["Guitar","Bass Guitar","Lead Guitar","Drums"]

function theBeatlesPlay(musicians,instruments){
  let out = [];
  for (let i=0;i<musicians.length;i++){
    const str = `${musicians[i]} plays ${instruments[i]}`
  out.push(str);}

  return out;
}

  var facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice:"];


function johnLennonFacts(facts){
  var i=0
  var factsNumber = facts.length
  var moreFacts = [];

  while (factsNumber>0){
    moreFacts.push(moreFacts[i]+ "!!!")
    i++;
    factsNumber--;
  }
  return (moreFacts);
}
