"use strict"
let original;
let tag;
let clean;

function apply_tag(text){
  
  text = text.replace(/\> /g,"<li>");
  text = text.replace('"',"<ul>");
  text = text.replace(/\"$/g,"</ul>");
  text = text.replace(/\n/g, "</li>\n");
  text = text.replace(/<\/ul>/g,"</li></ul>");
  return text;
}
function remove_tag(text){
  
  text = text.replace(/\<li>/g,"");
  text = text.replace('<ul>',"");
  text = text.replace('</ul>',"");
  text = text.replace(/\<\/li>/g, ";");
 
  return text;
}
$(document).ready(function(){
  $("#run").click(function(){
    original = $("#original").val();
    tag = apply_tag(original);
    $("#tag").html(tag);
    clean = remove_tag(tag);
    $("#clean").html(clean);
  })
});