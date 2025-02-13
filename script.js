function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      const content = this.responseText;
      const lines = content.split('\n'); 
      let formattedContent = '';
      lines.forEach(line => {
        formattedContent += `<p>${line}</p>`; 
      });
      document.getElementById("demo").innerHTML = formattedContent; 
    }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }
  