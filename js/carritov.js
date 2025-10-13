document.addEventListener("DOMContentLoaded", function () {
  const btnCarrito = document.querySelector(".cart"); // ahora .cart
  const carritoSidebar = document.getElementById("carrito-sidebar");
  const cerrarCarrito = document.getElementById("cerrar-carrito");

  btnCarrito.addEventListener("click", (e) => {
    e.preventDefault(); // para que no recargue o cambie página
    carritoSidebar.classList.add("abierto");
  });

  cerrarCarrito.addEventListener("click", () => {
    carritoSidebar.classList.remove("abierto");
  });
});

