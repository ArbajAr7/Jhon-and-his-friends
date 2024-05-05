/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
// arr.filter(item => item.profession ==="developer").map(item => { console.log(item.name + " is a Developer") });
arr.map(item => {
      if (item.profession === "developer") {
      console.log(item);
    }
    });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(item => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const obj = { id:4, name:"susan", age:"20", profession:"intern" };
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredArray = arr.filter(item => item.profession !== "admin");
  arr = filteredArray;
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const arr2 = [{ id:7, name:"xyxabc", age:"23", profession:"MERN Developer" }];
  arr = arr.concat(arr2)
  console.log(arr);
}
