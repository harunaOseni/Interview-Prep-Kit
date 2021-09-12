function countingValleys(steps, path) {
  // Write your code here
  let valleyCount = 0;
  let seaLevel = 0;

  for (let step of path) {
    if (step === "U") {
      seaLevel++;
    } else {
      seaLevel--;
    }

    if (step === "U" && seaLevel === 0) {
      valleyCount++;
    }
  }
  return valleyCount;
}
