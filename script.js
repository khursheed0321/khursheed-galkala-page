function startDemo() {

    const number = document.getElementById("number").value.trim();
    const count = document.getElementById("count").value.trim();
    const bar = document.getElementById("bar");
    const status = document.getElementById("status");

    if (number === "" || count === "") {
        alert("Please fill all fields.");
        return;
    }

    let progress = 0;

    bar.style.width = "0%";
    status.innerHTML = "Initializing Demo...";

    const demo = setInterval(() => {

        progress++;

        bar.style.width = progress + "%";

        if (progress < 20) {
            status.innerHTML = "Checking Input...";
        } else if (progress < 40) {
            status.innerHTML = "Loading Demo Engine...";
        } else if (progress < 60) {
            status.innerHTML = "Simulating Process...";
        } else if (progress < 80) {
            status.innerHTML = "Generating Demo Results...";
        } else if (progress < 100) {
            status.innerHTML = "Finalizing...";
        } else {
            clearInterval(demo);

            status.innerHTML = "✅ Demo Completed Successfully";

            alert(
                "Demo Finished!\n\n" +
                "Target: " + number +
                "\nCount: " + count +
                "\n\nThis is only a visual demonstration.\nNo real action was performed."
            );
        }

    }, 40);

}