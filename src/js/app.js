function shortenUrls(){
    
    const url = document.getElementById("url").value;
    
    let requestHeaders = {
        "Content-Type": "application/json",
        "apiKey": "82205f4a81384d89bb0c510ca455b16f"
    }

    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }
      
    $.ajax({
    url: "https://api.rebrandly.com/v1/links",
    type: "POST",
    data: JSON.stringify(linkRequest),
    headers: requestHeaders,
    dataType: "json",
    success: (link) => {
        console.log(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
        let newUrl = document.getElementById("url");
        newUrl.value = link.shortUrl;
    }
    });
}

function copyUrl(){
    
    const url = document.getElementById("url");

	$("#copy").removeClass("fa-clone").addClass("fa-check");
	
	sleep(1000).then(() => {
		$("#copy").removeClass("fa-check").addClass("fa-clone");
	});
    
    url.select();

    document.execCommand("copy");

    url.setSelectionRange(0, 0);
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}