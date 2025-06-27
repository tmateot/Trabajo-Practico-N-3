const listaTareas = document.getElementById("listaTareas");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(r => r.json())
  .then(d => {
    const hechas = d.filter(t => t.completed);
    hechas.forEach(t => {
      const item = document.createElement("li");
      item.textContent = t.title;
      listaTareas.appendChild(item);
    });
  });
