
const form = document.getElementById("marksForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    try {
        const name = document.getElementById("studentName").value.trim();

        const mark1 = Number(document.getElementById("subject1").value);
        const mark2 = Number(document.getElementById("subject2").value);
        const mark3 = Number(document.getElementById("subject3").value);

        // Debugging: check the values
        console.log("Student:", name);
        console.log("Marks:", mark1, mark2, mark3);

        // Validate the marks
        const marks = [mark1, mark2, mark3];

        if (marks.some(mark => !Number.isFinite(mark) ||
            mark < 0 || mark > 100)) {
            throw new Error("Marks must be between 0 and 100.");
        }

        // Calculate total and percentage
        const total = mark1 + mark2 + mark3;
        const percentage = total / 3;

        // Pass if every subject has at least 35 marks
        const passed = marks.every(mark => mark >= 35);

        // Debugging: check the calculated values
        console.log("Total:", total);
        console.log("Percentage:", percentage);

        result.className = passed ? "success" : "failure";

        result.innerHTML = `
            <strong>Student:</strong> ${name}<br>
            <strong>Total Marks:</strong> ${total} / 300<br>
            <strong>Percentage:</strong> ${percentage.toFixed(2)}%<br>
            <strong>Result:</strong> ${passed ? "Pass" : "Fail"}
        `;

    } catch (error) {
        console.error("Debugging error:", error.message);

        result.className = "failure";
        result.textContent = error.message;
    }
});
