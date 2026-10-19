const hotspots = document.querySelectorAll(".hotspot");

  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("click", (event) => {
      event.stopPropagation();

      const wasActive = hotspot.classList.contains("active");

      // Закрываем остальные карточки
      hotspots.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-expanded", "false");
      });

      // Открываем выбранную карточку
      if (!wasActive) {
        hotspot.classList.add("active");
        hotspot.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Закрываем карточки по клику вне метки
  document.addEventListener("click", () => {
    hotspots.forEach((hotspot) => {
      hotspot.classList.remove("active");
      hotspot.setAttribute("aria-expanded", "false");
    });
  });
