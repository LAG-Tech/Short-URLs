function shortenUrls(){
    
    const url = document.getElementById("url").value;

    if(!url){
        $.notify("Insira uma url", {
            className: 'error',
            position: 'top center'
        });
        return;
    }

    $.ajax({
        url: "https://is.gd/create.php",
        dataType: "jsonp",
        data: {
          url: url,
          format: "json"
        },
        error: function() {
            $.notify("Erro ao gerar link", {
                className: 'error',
                position: 'top center'
            }); 
        },
        success: function(data) {
            let newUrl = document.getElementById("url");
            newUrl.value = data.shorturl;

            if(newUrl.value == "undefined"){
                $.notify("URL infromada fora do padrão", {
                    className: 'error',
                    position: 'top center'
                });
                newUrl.value = "";
                return;
            }
    
            $.notify("URL Encurtada", {
                className: 'info',
                position: 'top center'
            });           
        }
      });
      
}

function copyUrl(){
    
    const url = document.getElementById("url");

    if(!url.value){
        $.notify("Insira uma url", {
            className: 'error',
            position: 'top center'
        });
        return;
    }

	$("#copy").removeClass("fa-clone").addClass("fa-check");

    $.notify("URL copiada", {
        className: 'success',
        position: 'top center'
      });
	
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