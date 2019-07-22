function doIt(what){
    var text = document.getElementById((what==1)?"normal":"encrypted").value;
    len = text.length;
    var newText ="";
    for(x=0;x<(len);x++){
        codeN=text[x].charCodeAt(0)
        var code = text[x].toUpperCase().charCodeAt(0);
        if( (what==1)?code >=65&&code<=88:code >=67&&code<=90){
            newText += (what==1)?String.fromCharCode(codeN+=2):
                        String.fromCharCode(codeN-=2);
         }else if((what==1)?89<=code>=90:65<=code>=66){
            newText += (what==1)?String.fromCharCode(codeN-=24):
                        String.fromCharCode(codeN+=24);
         }
 }
   document.getElementById((what==1)?"encrypted":"normal").value = newText;
}
