function ZanShang(){
  this.popbg = $('.zs-modal-bg');
  this.popcon = $('.zs-modal-box');
  this.closeBtn = $('.zs-modal-box .close');
  this.zsbtn = $('.zs-modal-btns .btn');
  this.zsPay = $('.zs-modal-pay');
  this.zsBtns = $('.zs-modal-btns');
  this.zsFooter = $('.zs-modal-footer');
  var that = this;
  $('.show-zs').on('click',function(){
    //Haga clic en el botón Apoyar para abrir una ventana emergente
    that._show();
    that._init();
  })
}
ZanShang.prototype._hide = function(){
  this.popbg.hide();
  this.popcon.hide();
}
ZanShang.prototype._show = function(){
  this.popbg.show();
  this.popcon.show();
  this.zsBtns.show();
  this.zsFooter.show();
  this.zsPay.hide();
}
ZanShang.prototype._init = function(){
  var that = this;
  this.closeBtn.on('click',function(){
    that._hide();
  })
  this.popbg.on('click',function(){
    that._hide();
  })
  this.zsbtn.each(function(el){
    $(this).on('click',function(){
      var num = $(this).attr('data-num'); //El número correspondiente del botón
      var type = $('.zs-type:radio:checked').val();//Forma de pago
      //Genere una imagen de código QR correspondiente basada en los diferentes métodos de pago y el número del botón correspondiente，Puede personalizar la ruta a esta imagen，De forma predeterminada, se coloca en /img/reward directorio
      //Supongamos que necesita agregar una ruta de acceso remota，Por ejemplo, el mío es
      //http://www.imerualfonzo.com/img/reward/'+type+'-'+num+'.png';
      var src = '/img/reward/'+type+'-'+num+'.png';
      var text = $(this).html();
      var payType=$('#pay-type'), payImage = $('#pay-image'),payText = $('#pay-text');
      if(type=='alipay'){
        payType.html('alipay');
      }else{
        payType.html('paypal');
      }
      payImage.attr('src',src);
      payText.html(text);
      that.zsPay.show();
      that.zsBtns.hide();
      that.zsFooter.hide();

    })
  })
}
var zs = new ZanShang();
