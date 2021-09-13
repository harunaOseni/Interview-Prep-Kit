function minimumBribes(q) {
  let totalNumberOfBribes = 0;
  let position1 = 1;
  let position2 = 2;
  let position3 = 3;
  for (let i = 0; i < q.length; i++) {
    if (q[i] === position1) {
      position1 = position2;
      position2 = position3;
      position3++;
    } else if (q[i] === position2) {
      //1 3 4
      totalNumberOfBribes++;
      position2 = position3;
      position3++;
    } else if (q[i] === position3) {
      //1 2 4
      totalNumberOfBribes += 2;
      position3++;
    } else {
      console.log("Too chaotic");
      return;
    }
  }
  console.log(totalNumberOfBribes);
}
