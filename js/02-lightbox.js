import { galleryItems } from './gallery-items.js';
// Change code below this line

const myGalleryList = document.querySelector(".gallery");
myGalleryList.innerHTML = createDOMhtmlGallery(galleryItems);

function createDOMhtmlGallery(items) {
    return items.map(({ preview, original, description }) =>  
    `<li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
            class="gallery__image"
            src=${preview}
            alt=${description}
            />
        </a>
    </li>`).join('');
}

new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.3,
    captionSelector: "img",
    captionType: "attr",
    captionDelay: 250,
    captionsData: "alt",
    captionClass: 'captionstyle'
});
 
