function convertAbsUrl(relativePath){
  var anchor = document.createElement("a");
  anchor.href = relativePath;
  return anchor.href;
}

console.log("JavaScriptが読み込まれました!");

document.getElementById("pageLinkBox1").onclick = function(){
    location.href = "/omoro_button/index.html";
    location.href = convertAbsUrl("/omoro_button/index.html");
}

/*iOS10のSafariで複数指で拡大できてしまうのを防ぐ*/
/*この文がプログラムの最後にくるようにする*/
document.getElementById("foundation").addEventListener('touchend', event => {
    event.preventDefault();
}, false);
