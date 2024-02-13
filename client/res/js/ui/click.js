

document.addEventListener("click", (e) => {
    const canvasPos = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - canvasPos.left) / canvasPos.width) * canvas.width;
    mouse.y = ((e.clientY - canvasPos.top) / canvasPos.height) * canvas.height;
    console.log(canvasPos.top);
    console.log(canvasPos.left);
})


