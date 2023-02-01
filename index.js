window.addEventListener("DOMContentLoaded", () => {
  try {
    (async function () {
      let res = await fetch("https://reqres.in/api/users");
      let data = await res.json();
      console.log(data);
      for (let i in data.data) {
        const table = document.querySelector("table");
        const list = document.createElement("tr");
        const name = document.createElement("td");
        const lastName = document.createElement("td");
        const male = document.createElement("td");
        const img = document.createElement("td");
        const bask = document.createElement("td");
        const image = document.createElement("img");
        const del = document.createElement("img");

        del.className = "basket";
        del.src = "delete-4_90871.png";
        image.src = data.data[i].avatar;
        name.className = "name";
        bask.append(del);

        name.textContent = data.data[i].first_name;
        lastName.textContent = data.data[i].last_name;
        male.textContent = data.data[i].email;
        img.append(image);

        list.append(name, lastName, male, img, bask);
        table.append(list);

        del.addEventListener("click", (e) => {
          fetch(`https://reqres.in/api/users/${data.data[i].id}`, {
            method: "DELETE",
          }).then(() => console.log("Пользователь удален")).catch((err) => console.log(err));
          e.target.parentElement.parentElement.remove();
        });
      }
    })();
  } catch (err) {
    console.log(err);
  }
});
