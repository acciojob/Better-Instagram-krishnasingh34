let divs = document.querySelectorAll(".image");
let count = 1;
divs.forEach(div=>{
    div.id = "div" + count;
    count++;
    div.addEventListener("dragstart",(e)=>{
		div.classList.add("selected")
        e.dataTransfer.setData("text",div.id);
    })
});
let arr = ["dragover","dragenter","drop"];
let parent = document.querySelector("#parent");
arr.forEach(event =>{
    parent.addEventListener(event,(e)=>{
        e.preventDefault();
        if(event == "drop"){
			// console.log(e.target.id)
			let droppedDiv = document.querySelector("#" + e.target.id);
			let draggedDiv = document.querySelector("#" + e.dataTransfer.getData("text"));

			let temp = document.createElement("div");
			droppedDiv.replaceWith(temp);
			draggedDiv.replaceWith(droppedDiv);
			temp.replaceWith(draggedDiv);
			draggedDiv.classList.remove("selected")
        }
    })
})


// let arr = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6']
// let images = document.querySelectorAll('.image')
// let k = 0
// for (let imgSection of images) {
//     imgSection.id = arr[k]
//     k++

// // dragstart and dragend
//     imgSection.addEventListener('dragstart', (e) => {
//         // e.preventDefault() // to make the draggable property enable
//         let div = e.target
//         div.style.opacity = '0.5'
//         e.dataTransfer.setData('text', div.id)
//     })

//     imgSection.addEventListener('dragend', (e) => {
//         // e.preventDefault() // to make the draggable property enable
//         let div = e.target
//         div.style.opacity = '1'
//     })
// }

// // dragover, dragenter, drop
// let eventsArr = ['dragover', 'dragenter', 'drop']
// for (let dragEvents of eventsArr) {
//     for (let imgSection of images) {
//         imgSection.addEventListener(dragEvents, (e) => {
//             e.preventDefault()
//             if(dragEvents=='drop'){
//                 // replace images
//                 let drag1 = e.dataTransfer.getData('text')
//                 let drag1Element = document.getElementById(drag1)
//                 let drag2 = imgSection.id
//                 imgSection.id = drag1
//                 drag1Element.id = drag2
//                 // replace text
//                 let text1 = drag1Element.innerText
//                 let text2 = imgSection.innerText
//                 drag1Element.innerText = text2
//                 imgSection.innerText = text1
//             }
//         })
//     }
// }
