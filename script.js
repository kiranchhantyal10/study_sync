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
            description,
            status: "pending"
        };

        let assignments = JSON.parse(localStorage.getItem("assignments")) || [];
        assignments.push(assignment);
        localStorage.setItem("assignments", JSON.stringify(assignments));
        form.reset();
        alert("Assignment added successfully!");
    });
}

const assignmentList = document.getElementById("assignment-list");
if (assignmentList) {
    const assignments = JSON.parse(localStorage.getItem("assignments")) || [];
    assignments.forEach((assignment, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${assignment.title}</td>
            <td>${assignment.subject}</td>
            <td>${assignment.priority}</td>
            <td>${assignment.status}</td>
            <td>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        `;
        assignmentList.appendChild(row);
    });

    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            const index = this.dataset.index;
            let assignments = JSON.parse(localStorage.getItem("assignments")) || [];
            assignments.splice(index, 1);
            localStorage.setItem("assignments", JSON.stringify(assignments));
            location.reload();
        });
    });
}