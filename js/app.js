$("#imagem_principal").on("mouseover", function(e) {
  $("#imagem_principal").css("max-width", "100%");
  $("#imagem_principal").css("-moz-transition", "all 0.3s");
  $("#imagem_principal").css("-webkit-transition", "all 0.3s");
  $("#imagem_principal").css("transition", "all 0.3s");
  $("#imagem_principal").css("-moz-transform", "scale(1.1)");
  $("#imagem_principal").css("-webkit-transform", "scale(1.1)");
});
  
$("#imagem_principal").on("mouseleave", function(e) {
  $("#imagem_principal").css("-moz-transform", "");
  $("#imagem_principal").css("-webkit-transform", "");
});

//====================================================================//

$("#icone_fa_whatsapp").on("mouseover", function(e) {
  $("#icone_fa_whatsapp").css("max-width", "100%");
  $("#icone_fa_whatsapp").css("-moz-transition", "all 0.3s");
  $("#icone_fa_whatsapp").css("-webkit-transition", "all 0.3s");
  $("#icone_fa_whatsapp").css("transition", "all 0.3s");
  $("#icone_fa_whatsapp").css("-moz-transform", "scale(1.1)");
  $("#icone_fa_whatsapp").css("-webkit-transform", "scale(1.1)");
});
  
$("#icone_fa_whatsapp").on("mouseleave", function(e) {
  $("#icone_fa_whatsapp").css("-moz-transform", "");
  $("#icone_fa_whatsapp").css("-webkit-transform", "");
});

//====================================================================//

$("#icone_fa_instagram").on("mouseover", function(e) {
  $("#icone_fa_instagram").css("max-width", "100%");
  $("#icone_fa_instagram").css("-moz-transition", "all 0.3s");
  $("#icone_fa_instagram").css("-webkit-transition", "all 0.3s");
  $("#icone_fa_instagram").css("transition", "all 0.3s");
  $("#icone_fa_instagram").css("-moz-transform", "scale(1.1)");
  $("#icone_fa_instagram").css("-webkit-transform", "scale(1.1)");
});
  
$("#icone_fa_instagram").on("mouseleave", function(e) {
  $("#icone_fa_instagram").css("-moz-transform", "");
  $("#icone_fa_instagram").css("-webkit-transform", "");
});

//====================================================================//

$("#icone_fa_github").on("mouseover", function(e) {
  $("#icone_fa_github").css("max-width", "100%");
  $("#icone_fa_github").css("-moz-transition", "all 0.3s");
  $("#icone_fa_github").css("-webkit-transition", "all 0.3s");
  $("#icone_fa_github").css("transition", "all 0.3s");
  $("#icone_fa_github").css("-moz-transform", "scale(1.1)");
  $("#icone_fa_github").css("-webkit-transform", "scale(1.1)");
});
  
$("#icone_fa_github").on("mouseleave", function(e) {
  $("#icone_fa_github").css("-moz-transform", "");
  $("#icone_fa_github").css("-webkit-transform", "");
});

//====================================================================//

function myFunction(x) {
  x.classList.toggle("change");
}

//====================================================================//

var menu_aberto = 0;

$("#row_menu_tablet").on("click", function(e) {

  if(menu_aberto == 0){
    abrirMenu();
  }else{
    fecharMenu();
  }

});

function abrirMenu(){
  $("#conteudo_responsivo_dnone").show(7500);
  $("#divisor_sobre-mim").css("margin-top", "665px");
  $("#espancamento_div_top").css("margin-top", "320px");
  menu_aberto = 1;
  }
  
function fecharMenu(){
  $("#conteudo_responsivo_dnone").hide(7500);
  $("#divisor_sobre-mim").css("margin-top", "200px");
  $("#espancamento_div_top").css("margin-top", "100px");
  menu_aberto = 0;
}

//====================================================================// 