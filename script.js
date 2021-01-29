function displayFile( e ) { 

    const fileObj = e.files[0];
    let reader = new FileReader();
    reader.readAsText(fileObj);

    reader.onload = function() {
        const fileContent = reader.result;
        // con
        // const fileArray = fileContent.split("\n");
        // const finalString = fileArray.join("<br />");
        let d = fileContent.replaceAll("\n","<br />");
        document.getElementById("content").innerHTML = d;
        console.log(d);
    };
    reader.onerror = function() {
        alert(reader.error);
    };

}
