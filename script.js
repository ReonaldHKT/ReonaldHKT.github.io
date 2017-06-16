console.log("JavaScriptが読み込まれました!");

document.getElementById("pageLinkBox1").onclick = function(){
    location.href = "/omoro_button/index.html";
}

/*iOS10のSafariで複数指で拡大できてしまうのを防ぐ*/
/*この文がプログラムの最後にくるようにする*/
document.getElementById("foundation").addEventListener('touchend', event => {
    event.preventDefault();
}, false);
