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
    
    url.select();

    document.execCommand("copy");

    url.setSelectionRange(0, 0);
}