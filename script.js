const continueBtn = document.querySelector(".button");
const summaryList = document.querySelector(".summary-list");
continueBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    summaryList.innerHTML = "";
    data.forEach((item) => {
      const listItem = `
        <li class="summary-item" data-type="${item.category.toLowerCase()}">
          <div class="flex-group">
            <img src="${item.icon}" alt="icon ${item.category}" />
            <span>${item.category}</span>
          </div>
          <p class="score"><span>${item.score}</span> / 100</p>
        </li>
      `;
      summaryList.insertAdjacentHTML("beforeend", listItem);
    });
    continueBtn.textContent = "Data Loaded!";
    continueBtn.style.backgroundColor = "green";
  } catch (error) {
    console.error("Lỗi rồi mày ơi:", error);
    alert("Do not get file, check again file JSON!");
  }
});
