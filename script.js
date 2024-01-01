productItem = document.querySelectorAll(".product-item");
productItem = Array.from(productItem);
let image = document.querySelector(".image");

productItem.forEach((product) => {
  product.addEventListener("dragover", (e) => {
    e.preventDefault();
    product.classList.add("hovered");
  });
  product.addEventListener("dragleave", (e) => {
    product.classList.remove("hovered");
  });
  product.addEventListener("drop", () => {
    product.appendChild(image);
  });
  product.addEventListener("mousedown", () => {
    product.style.cursor = "grabbing";
  });

  product.addEventListener("mouseup", () => {
    product.style.cursor = "grab";
  });
});
