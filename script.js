'use strict';

console.log(axios);
const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const loaderContainer = document.querySelector('.loader-container');

async function getPhotos() {
	try {
		loaderContainer.style.display = 'flex';
		setTimeout(async () => {
			const { data } = await axios.get(`${BASE_URL}photos`, {
				params: {
					_limit: 10,
				},
			});

			data.forEach(photo => {
				const galleryItem = document.createElement('div');
				galleryItem.classList.add('gallery-item');

				galleryItem.innerHTML = `
                    <img src="${photo.thumbnailUrl}" alt="${photo.title}">
                    <p>${photo.title}</p>
                `;

				document.body.appendChild(galleryItem);
			});
		}, 2000);
	} catch (error) {
		console.error(error);
	} finally {
		setTimeout(() => {
			loaderContainer.style.display = 'none';
			console.log('Finally');
		}, 2000);
	}
}

getPhotos();
