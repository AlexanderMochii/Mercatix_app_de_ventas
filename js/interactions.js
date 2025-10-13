document.querySelectorAll('.post-card').forEach(post => {
  const btnLike = post.querySelector('.btn-like');
  const btnCommentToggle = post.querySelector('.btn-comment-toggle');
  const commentSection = post.querySelector('.comment-section');
  const btnSubmitComment = post.querySelector('.btn-submit-comment');
  const commentInput = post.querySelector('.comment-input');
  const commentsList = post.querySelector('.comments-list');
  const btnShare = post.querySelector('.btn-share');
  const btnSave = post.querySelector('.btn-save');
  const btnAddCart = post.querySelector('.btn-add-cart');

  // Estados iniciales
  let liked = false;
  let saved = false;

  // Función para actualizar botón Me gusta
  function updateLikeButton() {
    if (liked) {
      btnLike.classList.add('liked');
      btnLike.innerHTML = '<i class="fa-solid fa-star"></i> Te gusta';
    } else {
      btnLike.classList.remove('liked');
      btnLike.innerHTML = '<i class="fa-regular fa-star"></i> Me gusta';
    }
  }

  // Inicializar texto botón Me gusta
  updateLikeButton();

  // Toggle Me gusta
  btnLike.addEventListener('click', () => {
    liked = !liked;
    updateLikeButton();
  });

  // Mostrar/ocultar comentarios
  btnCommentToggle.addEventListener('click', () => {
    if (commentSection.style.display === 'none' || commentSection.style.display === '') {
      commentSection.style.display = 'block';
      commentInput.focus();
    } else {
      commentSection.style.display = 'none';
    }
  });

  // Enviar comentario
  btnSubmitComment.addEventListener('click', () => {
    const commentText = commentInput.value.trim();
    if (commentText.length === 0) return;

    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');
    commentItem.textContent = commentText;
    commentsList.appendChild(commentItem);

    commentInput.value = '';
  });

  // Compartir (ejemplo simple)
  btnShare.addEventListener('click', () => {
    alert('Función Compartir no implementada aún.');
  });

  // Función para actualizar botón Guardar
  function updateSaveButton() {
    if (saved) {
      btnSave.classList.add('saved');
      btnSave.innerHTML = '<i class="fa-solid fa-bookmark"></i> Guardado';
    } else {
      btnSave.classList.remove('saved');
      btnSave.innerHTML = '<i class="fa-regular fa-bookmark"></i> Guardar';
    }
  }

  // Inicializar texto botón Guardar
  updateSaveButton();

  // Toggle Guardar
  btnSave.addEventListener('click', () => {
    saved = !saved;
    updateSaveButton();
  });

  // Añadir al carrito (ejemplo simple)
  btnAddCart.addEventListener('click', () => {
    alert('Producto añadido al carrito.');
  });
});
