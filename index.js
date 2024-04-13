fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=sdfghmxfghmxcgh")
    .then(res => res.json())
    .then(data => {
       console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        console.log("Something went wrong! 😭")
        // This is where I can handle the error
        // Choose to use a default background image
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1535961652354-923cb08225a7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI5NzQ1MzB8&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080&quot;)`

    })

