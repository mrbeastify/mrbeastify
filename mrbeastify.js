(new MutationObserver(() =>
	document.querySelectorAll('ytd-thumbnail yt-image, .ytp-videowall-still-image')
		.forEach(e => {
			if (e.classList.contains('mrbeastified')) return;
			let img = document.createElement('IMG');
			img.src = `https://mrbeastify.com/MrBeastify${Math.floor(Math.random()*36)+1}.png`;
			img.style.position = 'absolute';
			img.style.width = '100%';
			img.style.left = 0;
			img.style.bottom = 0;
			img.style.objectFit = 'cover';
			e.append(img);
			e.classList.add('mrbeastified');
		})
)).observe(document.querySelector('ytd-page-manager'), {subtree: true, childList: true});
