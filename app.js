const redMarker = document.querySelector(".marker.red");
const blueMarker = document.querySelector(".marker.blue");
const greenMarker = document.querySelector(".marker.green");
const markers = document.querySelectorAll(".marker");


const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let isDrawing = false;
let selectedMarker = "red";

//SELECT THE MARKER
markers.forEach((marker) => {
    marker.addEventListener("click", (e)=>{
        if (e.target.parentNode.classList.contains("red")) {
            selectedMarker = "red";
        } else if (e.target.parentNode.classList.contains("blue")){
            selectedMarker = "blue";
        } else {
            selectedMarker = "green";
        }
    })
})

function startDrawing() {

}

function stopDrawing() {
    isDrawing = false;
}

function drawing(e) {
    if (!isDrawing) {
        return;
    } else {
        context.strokeStyle = selectedMarker;
        context.lineWidth = 15;
        context.lineCap = "round";
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY)
    };
}

canvas.addEventListener("mousedown", () => {isDrawing = true;});
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    context.beginPath();
});
canvas.addEventListener("mousemove", drawing);