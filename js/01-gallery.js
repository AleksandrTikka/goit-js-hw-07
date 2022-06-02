import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const imagesMarkup = galleryItems
  .map(galleryItem => 
  `<div class="gallery__item">
  <a class="gallery__link" href='${galleryItem.original}'>
    <img
      class="gallery__image"
      src='${galleryItem.preview}'
      data-source='${galleryItem.original}'
      alt='${galleryItem.description}'
    />
  </a>
</div>`)
    .join("");
  
galleryRef.insertAdjacentHTML("beforeend", imagesMarkup);
    
galleryRef.addEventListener('click', onItemClick);
    
function onItemClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    };
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
    `, {
            onShow: (instance) => {
                window.addEventListener('keydown', onEscDown(instance));
        },
            onClose: (instance) => {
                window.removeEventListener('keydown', onEscDown(instance));
        },
        
    });
    
    function onEscDown(instance) {
        return function (evt) {
            if (evt.key !== "Escape") {
                return;
            };
            return instance.close();
            
        };
    };
    
            
   instance.show();

};

