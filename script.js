$("#pageLinkBox1").on("click touchend", function(){
    location.href = "https://reonaldhkt.github.io/omoro_button/index.html";
});
/*iOS10のSafariで複数指で拡大できてしまうのを防ぐ*/
/*この文がプログラムの最後にくるようにする*/
$("#foundation").on("touchend", function(event){
    event.preventDefault();
});
