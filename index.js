// console.log(document);
// console.dir(document);
// // 1.document.gêtlementById
// console.log("thẻ h1 demo id", document.getElementById("demo - id"));
// let h1 = document.getElementById("demo-id");
// let div = document.getElementById("div-demo");
// console.log(h1);
// console.log(div);
// let lis = document.getElementsByClassName("item-list");
// console.log(lis);
// console.log("First li", lis[0]);
// console.log("Last li", lis[lis.lenght - 1]);

// for (let i = 0; i < lis.length; i++) {
//     console.log("từng thẻ", lis[i]);
// }
// //3, document>getElementsByTagName(tag)
// let liCollection = document.getElementsByTagName("li");
// console.log("tập hợp thẻ li", liCollection);
let h1 = document.getElementById("demo-id");
// console.log(h1.innerHTML);
// console.log(h1.innerText);
// console.log(h1.textContent);
// h1.innerHTML = "<ul><li>hello mới update nè</li></ul>";
// h1.innerText = "hehehehehe";
// // h1.textContent = "ủa alo bn ơi";
// console.log(h1.id);
// if (h1.id === "demo-id") {
//     alert("kiểm tra id");
// }
//classList
// h1.classList//danh sách class
// // console.log("class đầu tiên", h1.classList[0]);
// // console.log("class cuối cùng", h1.classList[h1.classList.length - 1]);

// // h1.classList.add("class-4");
// // h1.classList.remove("class-1");
// // console.log(h1.classList.contains("class-4"));//true/false
// h1.style.backgroundColor = "red"
// h1.style.width = "200px";
// h1.style.height = "200px"
// h1.style.textAlign = "center"
// h1.style.lineHeight = "200px";
// h1.style.fontSize = "30px"
// h1.style.fontWeight = "bold"
// h1.style.color = "white";
// h1.style.borderRadius = "50%"
// h1.style.backgroundColor = "red"
// h1.style.border = "10px solid black";
// let b = document.getElementById("child-b")
// console.log(b.parentElement.parentElement.children[2]);
// let input = document.getElementedById("input");
// console.log("đây là giá trị của ô input thời điểm hiện tại", input.value);
// input.value = "hello world"
// 
let btn = document.getElementById("btn");
btn.onclick = function () {
    alert("hello world sau mỗi lần click");
}

