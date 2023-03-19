import { galleryItems } from './gallery-items.js';
// Change code below this line


const myGalleryList = document.querySelector(".gallery");

function createDOMhtmlGallery(items) {
    return items.map(({ preview, original, description }) =>  
    `<li class="gallery__item">
        <a class="gallery__link" href=${preview}>
            <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
            />
        </a>
    </li>`).join('');
}

myGalleryList.innerHTML = createDOMhtmlGallery(galleryItems);
myGalleryList.addEventListener('click', onImageClick) 

function onImageClick(evt) {
    evt.preventDefault()

    if (evt.target.nodeName !== "IMG") {
        return
    }
    
    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`)
    instance.show();

    myGalleryList.addEventListener("keydown", EscapeKey);    

    function EscapeKey(event) {
    if (event.code === "Escape") {
        instance.close();
        myGalleryList.removeEventListener("keydown",EscapeKey)
    }
}
}













