        var slideshow = document.getElementById("slideshow");
		var images = slideshow.getElementsByTagName("img");
		var index = 0;

		function next() {
			images[index].classList.remove("active");
			index = (index + 1) % images.length;
			images[index].classList.add("active");
		}

		function prev() {
			images[index].classList.remove("active");
			index = (index - 1 + images.length) % images.length;
			images[index].classList.add("active");
		}

		setInterval(next, 5000);


