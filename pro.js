document.addEventListener("DOMContentLoaded", () => {
    const progressFill = document.querySelector(".progress-fill");
    const completeBtns = document.querySelectorAll(".complete-btn");

    completeBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            btn.textContent = "Completed";
            btn.disabled = true;
            updateProgress();
        });
    });

    function updateProgress() {
        const completed = document.querySelectorAll(".complete-btn:disabled").length;
        const total = completeBtns.length;
        const percentage = (completed / total) * 100;
        progressFill.style.width = `${percentage}%`;
    }
});
// Submit Rating
document.getElementById("submit-rating").addEventListener("click", () => {
    const rating = document.getElementById("course-rating").value;
    if (rating) {
        alert("Thank you for rating this course: " + rating + " Stars");
    } else {
        alert("Please select a rating.");
    }
});  