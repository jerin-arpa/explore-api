function loadPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => displayPhoto(data))
}

function displayPhoto(photos) {
    const photoContainer = document.getElementById('photo-container');
    for (const photo of photos) {
        console.log(photo);
        const photoDiv = document.createElement('div');
        // photoDiv.classList.add('photo');
        photoDiv.innerHTML = `
            <h4>ID: ${photo.id}</h4>
            <h2>Title: ${photo.title}</h2>
            <h3>Url: ${photo.url}</h3>
            <p>Thumbnail Url: ${photo.thumbnailUrl}</p>
       `;
        photoContainer.appendChild(photoDiv);
    }
}

loadPhoto();