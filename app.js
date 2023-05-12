let cursor = document.querySelector(".cursor");
// follow cursor
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // hidden mouse stopped
    function mouseStopped() {
        cursor.style.display = "none";
    }
    const timeOut = setTimeout(mouseStopped, 10000);
    timeOut();
});

// hidden mouse out
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});
