import galleryItems from "./gallery-items.js";
// console.log(galleryItems);
// console.log(galleryItems[0].original);

const refs = {
  gallery: document.querySelector(".js-gallery"), //ul
  modalBox: document.querySelector(".js-lightbox"),
  modalImage: document.querySelector('.lightbox__image'),
  closeModalBtn:document.querySelector('.lightbox__button')
};
// console.log(refs.modalImage);
let markup = galleryItems.reduce((acc, item) => {
  acc.push(`<li class="gallery__item">
<a
  class="gallery__link"
  href="${item.original}"
>
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>
`);
  return acc;
}, []);

refs.gallery.insertAdjacentHTML("afterbegin", markup.join(" "));
// console.log(markup.length);

let openModal = function (event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    refs.modalBox.classList.add("is-open");
    refs.modalImage.src = event.target.dataset.source
    refs.modalImage.alt = event.target.alt
    
    refs.modalBox.addEventListener('click', closeModal)
    
}

};

let closeModal = function(event){
    // console.log(event.target.dataset);
    if(event.target.dataset.action !== 'close-lightbox'){
        return
    } else{
        refs.modalBox.classList.remove('is-open');
        refs.modalImage.src = '';
        refs.modalImage.alt = '';
        refs.modalBox.removeEventListener('click', closeModal)

    }
}

refs.gallery.addEventListener("click", openModal);