function addData() {
    const fullName = document.getElementById("Name").value;
    const educationYear = document.getElementById("year").value;
    const goodStudent = document.getElementById("good").checked ? "добре" : "погано";

    const listItem = document.createElement("li");
    listItem.textContent = fullName + " навчається на " + educationYear + " курсі, " + goodStudent + " навчається" ;

    document.getElementById("outputDiv").getElementsByTagName("ol")[0].appendChild(listItem);
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addData();
});