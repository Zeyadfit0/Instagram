function calculateTDEE() {
  const gender = document.getElementById("gender").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);
  const activity = parseFloat(document.getElementById("activity").value);
  const goal = document.getElementById("goal").value;
  const proteinRatio = parseFloat(document.getElementById("proteinRatio").value);
  const fatRatio = parseFloat(document.getElementById("fatRatio").value);

  let bmr;
  if (gender === "male") {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

  let tdee = bmr * activity;
  if (goal === "cut") tdee -= 500;
  else if (goal === "bulk") tdee += 500;

  const proteinGrams = weight * proteinRatio;
  const proteinCals = proteinGrams * 4;

  const fatCals = tdee * fatRatio;
  const fatGrams = fatCals / 9;

  const carbsCals = tdee - (proteinCals + fatCals);
  const carbsGrams = carbsCals / 4;

  document.getElementById("result").innerHTML =
    `BMR: ${bmr.toFixed(2)} سعرة<br>` +
    `TDEE: ${tdee.toFixed(2)} سعرة<br><br>` +
    `البروتين: ${proteinGrams.toFixed(1)} جم<br>` +
    `الدهون: ${fatGrams.toFixed(1)} جم (${(fatRatio * 100).toFixed(0)}%)<br>` +
    `الكارب: ${carbsGrams.toFixed(1)} جم`;
}
