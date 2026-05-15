const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

  loginBtn.addEventListener("click", () => {

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    if (username === "admin" && password === "123") {

      message.style.color = "lightgreen";

      message.textContent = "Login realizado com sucesso!";

      setTimeout(() => {

        window.location.href = "dashboard.html";

      }, 1000);

    } else {

        message.style.color = "red";

        message.textContent = "Usuário ou senha incorretos.";

        const loginBox = document.querySelector(".login-box");

        loginBox.classList.add("shake");

        setTimeout(() => {
        loginBox.classList.remove("shake");
        }, 400);
        }

  });

}

const slides = document.querySelectorAll(".slide");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const currentSlideText = document.getElementById("currentSlide");
const totalSlidesText = document.getElementById("totalSlides");

const dotsContainer = document.getElementById("dotsContainer");

let currentIndex = 0;

if (slides.length > 0) {

  totalSlidesText.textContent = slides.length;

  // CRIAR BOLINHAS
  slides.forEach((_, index) => {

    const dot = document.createElement("div");

    dot.classList.add("dot");

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      goToSlide(index);
    });

    dotsContainer.appendChild(dot);

  });

  const dots = document.querySelectorAll(".dot");

  function updateSlider() {

    slides.forEach(slide => {
      slide.classList.remove("active");
    });

    dots.forEach(dot => {
      dot.classList.remove("active");
    });

    slides[currentIndex].classList.add("active");

    dots[currentIndex].classList.add("active");

    currentSlideText.textContent = currentIndex + 1;

  }

  function goToSlide(index) {

    currentIndex = index;

    updateSlider();

  }

  nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }

    updateSlider();

  });

  prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }

    updateSlider();

  });

  setInterval(() => {

    currentIndex++;

    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }

    updateSlider();

  }, 5000);

}

// LISTA

const addTaskBtn = document.getElementById("addTaskBtn");

if (addTaskBtn) {

  loadTasks();

  addTaskBtn.addEventListener("click", addTask);

}

// ADICIONAR TAREFA
function addTask() {

  const taskInput = document.getElementById("taskInput");

  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  createTaskElement(taskText);

  saveTask(taskText);

  taskInput.value = "";
  alert("Tarefa Adicionada!");

}

// CRIAR ELEMENTO DA TAREFA
function createTaskElement(taskText) {

  const li = document.createElement("li");

  const span = document.createElement("span");

  span.textContent = taskText;

  const buttonsDiv = document.createElement("div");

  buttonsDiv.classList.add("task-buttons");

  // EDITAR
  const editBtn = document.createElement("button");

  editBtn.textContent = "Editar";

  editBtn.classList.add("edit-btn");

  editBtn.addEventListener("click", () => {

    const oldText = span.textContent;

    const newTask = prompt("Editar tarefa:", oldText);

    if (newTask !== null && newTask.trim() !== "") {

      span.textContent = newTask;

      updateTask(oldText, newTask);
      alert("Tarefa Editada!");

    }

  });

  // REMOVER
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Remover";

  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {

    li.remove();

    removeTask(taskText);
    alert("Tarefa removida!");

  });

  buttonsDiv.appendChild(editBtn);

  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(span);

  li.appendChild(buttonsDiv);

  document.getElementById("taskList").appendChild(li);

}
