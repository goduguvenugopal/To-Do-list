document.addEventListener("DOMContentLoaded", function () {
  const text = document.getElementById("text");
  const addBt = document.getElementById("addtask");
  const display = document.getElementById("display");

  addBt.addEventListener("click", function () {
    const getText = text.value.trim();

    if (getText !== "") {
      text.value = "";

      // storing the task in localstorage
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      if (tasks) {
        tasks.push({ text: getText });
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }

      createtask(getText);
    }
  });

  //this function makes when window loaded it checks the localStorage and retrieve if data available
  window.onload = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      tasks.forEach((task) => createtask(task.text));
    }
  };

  //function dyanamically createing the elements to displaythe tasks
  function createtask(getText) {
    const newdiv = document.createElement("div");
    newdiv.className = "list-tag";
    display.appendChild(newdiv);

    const newSpan = document.createElement("span");
    newSpan.className = "spantext";
    newSpan.textContent = getText;
    newdiv.appendChild(newSpan);

    const subDiv = document.createElement("div");
    subDiv.className = "subdiv";
    newdiv.appendChild(subDiv);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "editbtn1";
    editBtn.addEventListener("click", function () {
      editFunction(newdiv);
    });
    subDiv.appendChild(editBtn);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "editbtn";
    delBtn.addEventListener("click", function () {
      deleteFunction(newdiv);
    });

    // dynamically created elements are appending to the parent div
    subDiv.appendChild(delBtn);
  }

  // deleteing the task in localStorage and ui
  function deleteFunction(newdi) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const taskText = newdi.querySelector(".spantext").textContent;
    const updatedTasks = tasks.filter((task) => task.text !== taskText);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    newdi.remove();
  }

  // Editing the task in localStorage and ui
  function editFunction(Change) {
    const promp = prompt(`Change your Task Here`);

    if (promp !== null) {
      const promtFunc = Change.querySelector("span").textContent;
      let data = JSON.parse(localStorage.getItem("tasks"));

      // this map method checks condition if satisfy transform the array and returns the transformed Elements
      data = data.map((item) => {
        if (item.text === promtFunc) {
          return { text: promp };
        }
        return item;
      });

      localStorage.setItem("tasks", JSON.stringify(data));
      promtFunc.textContent = data;
      Change.querySelector("span").textContent = promp;
    }
  }
});
