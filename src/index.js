import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const printTextButton = document.getElementById("my-button");
  printTextButton.addEventListener("click", function () {
    const text = "Hello world";
    console.log(text);
    const newText = "My notebook";
    const newHeader = document.getElementById("header1");
    let something = document.createElement("h1");
    newHeader.innerText = newText;
  });
  //had problems with the list part so I got help from here: https://thewebdev.info/2022/05/17/how-to-add-new-li-to-ul-on-click-with-javascript/#:~:text=To%20add%20new%20li%20to%20ul%20on%20click,4%22%29%29%3B%20ul.appendChild%20%28li%29%3B%20in%20our%20click%20handler%20function.
  const addItemsButton = document.getElementById("add-data");
  addItemsButton.addEventListener("click", function () {
    const newData = "SomeText";
    const listMembers = document.getElementById("dataList");
    let newElement = document.createElement("li");
    newElement.appendChild(
      document.createTextNode(document.getElementById("input1").value)
    );
    listMembers.appendChild(newElement);
  });
}
