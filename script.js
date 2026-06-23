const form = document.getElementById("assignment-form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const subject= document.getElementById("subject").value;
        const dueDate = document.getElementById("due-date").value;
        const priority = document.getElementById("priority").value;
        const description = document.getElementById("description").value;

        const assignment = {
            title,
            subject,
            dueDate,
            priority,
            description
        };

        let assignments = JSON.parse(localStorage.setItem("assignments")) || [];
        assignments.push(assignment);
        localStorage.setItem("assignments", JSON.stringify(assignments));
        form.reset();
        alert("Assignment added successfully!");
    });
}