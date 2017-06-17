document.getElementById("pageLinkBox1").onclick = function(){
    location.href = "https://reonaldhkt.github.io/omoro_button/index.html";
}
document.getElementById("pageLinkBox1").ontouchstart = function(){
    location.href = "https://reonaldhkt.github.io/omoro_button/index.html";
}
/*iOS10のSafariで複数指で拡大できてしまうのを防ぐ*/
/*この文がプログラムの最後にくるようにする*/
document.getElementById("foundation").addEventListener('touchend', event => {
    event.preventDefault();
}, false);
