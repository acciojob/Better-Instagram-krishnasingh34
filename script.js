
let dragindex = 0;
let dropindex = 0;
let clone = "";

const images = document.querySelectorAll(".image");

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  clone = e.target.cloneNode(true);
  let data = e.dataTransfer.getData("text");
  let nodelist = document.getElementById("parent").childNodes;
  console.log(data, e.target.id);
  for (let i = 0; i < nodelist.length; i++) {
    if (nodelist[i].id == data) {
      dragindex = i;
    }
  }

  dragdrop(clone);

  document
    .getElementById("parent")
    .replaceChild(document.getElementById(data), e.target);

  document
    .getElementById("parent")
    .insertBefore(
      clone,
      document.getElementById("parent").childNodes[dragindex]
    );
}

const dragdrop = (image) => {
  image.ondragstart = drag;
  image.ondragover = allowDrop;
  image.ondrop = drop;
};

images.forEach(dragdrop);


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
