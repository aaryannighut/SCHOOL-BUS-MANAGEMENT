document.addEventListener("DOMContentLoaded", function() {
    const tripStatus = document.getElementById("trip-status");

    tripStatus.addEventListener("change", function() {
        alert("Trip status updated to: " + this.value);
    });
});
