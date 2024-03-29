// document.addEventListener("DOMContentLoaded", function () {
//   const text = document.getElementById("text");
//   const addBt = document.getElementById("addtask");
//   const display = document.getElementById("display");

//   addBt.addEventListener("click", function () {
//     const getText = text.value.trim();

//     if (getText !== "") {
//       text.value = "";

//       localStorage.setItem(
//         "list-data",
//         JSON.stringify({ text: getText, text: getText })
//       );
//       createtask(getText);
//     }
//   });

//   window.onload = () => {
//     const getData = JSON.parse(localStorage.getItem("list-data"));

//     const getText = getData.text;
//     if (getData && getData.text) {
//       createtask(getText);
//     }
//   };

//   function createtask(getText) {
//     const newdiv = document.createElement("div");
//     newdiv.className = "list-tag";
//     display.appendChild(newdiv);

//     const newSpan = document.createElement("span");
//     newSpan.className = "spantext";
//     newSpan.textContent = getText;
//     newdiv.appendChild(newSpan);

//     const subDiv = document.createElement("div");
//     subDiv.className = "subdiv";
//     newdiv.appendChild(subDiv);

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.className = "editbtn1";
//     editBtn.addEventListener("click", function () {
//       editFunction(newdiv);
//     });
//     subDiv.appendChild(editBtn);

//     const delBtn = document.createElement("button");
//     delBtn.textContent = "Delete";
//     delBtn.className = "editbtn";
//     delBtn.addEventListener("click", function () {
//       deleteFunction(newdiv);
//     });
//     subDiv.appendChild(delBtn);
//   }

//   function deleteFunction(newdi) {
//     newdi.remove();
//   }

//   function editFunction(Change) {
//     const promp = prompt(`Change your Task Here`);

//     if (promp !== null) {
//       const promtFunc = Change.querySelector("span");
//       promtFunc.textContent = promp;
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const text = document.getElementById("text");
  const addBt = document.getElementById("addtask");
  const display = document.getElementById("display");

  addBt.addEventListener("click", function () {
    const getText = text.value.trim();

    if (getText !== "") {
      text.value = "";

      let tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks.push({ text: getText });
      localStorage.setItem("tasks", JSON.stringify(tasks));

      createtask(getText);
    }
  });

  window.onload = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach((task) => createtask(task.text));
  };

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
    subDiv.appendChild(delBtn);
  }

  function deleteFunction(newdi) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const taskText = newdi.querySelector(".spantext").textContent;
    const updatedTasks = tasks.filter((task) => task.text !== taskText);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    newdi.remove();
  }

  function editFunction(Change) {
    const promp = prompt(`Change your Task Here`);

    if (promp !== null) {
      const promtFunc = Change.querySelector("span");
      promtFunc.textContent = promp;
    }
  }
});
