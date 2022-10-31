let numberInput = document.querySelector(".numberInput");
let numberAdd = document.querySelector(".numberAdd");
let allnumberserr = document.querySelector(".allnumberserr");
let allnumbers = document.querySelector(".allnumbers");
let evenNum = document.querySelector(".even");
let oddNum = document.querySelector(".odd");
let result = document.querySelector(".result");

let numberArr = [];
let evenArr = [];
let oddArr = [];

numberAdd.addEventListener("click", () => {
  if (!numberInput.value) {
    allnumberserr.innerHTML = "Please enter number";
    allnumberserr.style.color = "red";
  } else {
    allnumberserr.innerHTML = "";
    numberArr.push(numberInput.value);
    numberArr.map((nums) => {
      if (nums % 2 == 0) {
        numberArr = [];
        evenArr.push(nums);
        evenNum.innerHTML = `${evenArr}.`;
        result.innerHTML = `${nums} is an even number`;
        console.log(evenArr);
      } else {
        numberArr = [];
        oddArr.push(nums);
        oddNum.innerHTML = `${oddArr}.`;
        result.innerHTML = `${nums} is an odd number`;
        console.log(oddArr);
      }
    });
  }

  numberInput.value = "";
});
