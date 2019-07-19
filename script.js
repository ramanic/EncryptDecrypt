function encrypt(){
    
    var normal = document.getElementById("normal").value;
    var text="";
    for(x=0;x<(normal.length);x++){

        var code = normal[x].charCodeAt(0);
        if((code >=65&&code<=88)||(code >=97&&code<=120))
            text += String.fromCharCode(code+2);
        if(code == 89)
         text +="A";
         if(code == 90)
        text +="B";
         if(code == 121)
        text +="a";
         if(code == 122)
        text +="b";

     ;
        
    }

    document.getElementById("encrypted").value = text;

   
}


function decrypt(){
    var normal = document.getElementById("encrypted").value;
    var text="";
    for(x=0;x<(normal.length);x++){

        var code = normal[x].charCodeAt(0);
        if((code >=67&&code<=90)||(code >=99&&code<=122))
            text += String.fromCharCode(code-2);
        if(code == 65)
         text +="Y";
         if(code ==66 )
        text +="Z";
         if(code == 97)
        text +="y";
         if(code == 98)
        text +="z";

        console.log(text);
        
    }

    document.getElementById("normal").value = text;

   

}