//import foo from "./module1.mjs";

document.getElementById("testBtn").addEventListener("click", test);

function test() {
  //console.log(`output is ${foo()}`);
  console.log(`games are: ${JSON.stringify(games)}`);
}
