function clearBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function getMousePos(evt, canvas) {
    const rect = canvas != null
        ? canvas.getBoundingClientRect()
        : new Vector(0, 0);
    return new Vector(evt.clientX - rect.left, evt.clientY - rect.top);
}
