  document.getElementById("check").addEventListener("click", () => {
    const value1 = document.getElementById("input1").value;
    const value2 = document.getElementById("input2").value;

    if (value1 === value2) {
      document.getElementById("result").textContent = "The values are equal!";
    } else {
      document.getElementById("result").textContent = "The values are not equal.";
    }
  });
