$(document).ready(function(){
   BUG();
   $('.PNF6le').text('123');
})

function BUG(){
    tmp = $('body').attr("style");
    
    if(tmp === undefined){
        setTimeout("BUG()",3000);
    }else{
        BUTTON();
        URL();
    }
}
function BUTTON(){
   $('.h-e-f-Ra-c').html('<div role="button" class="dd-Va g-c-wb g-eg-ua-Uc-c-za g-c g-c-Sc-ci" aria-label="Remove from Chrome" tabindex="0" style="user-select: none;"><div class="g-c-Hf"><div class="g-c-x"><div class="g-c-R  webstore-test-button-label">添加至 Chrome</div></div></div></div>')
   
}

function URL(){
//获取URL 并且组合新URL
  var str = window.location.href; 
  var of = str.lastIndexOf('/')+1;
  var len = str.length;
  var str1 = str.substring(of,len)
  console.log(str1);
  var str2 = "https://clients2.google.com/service/update2/crx?response=redirect&prodversion=49.0&x=id%3D<Extension_ID>%26installsource%3Dondemand%26uc"; 
  var str3 = str2.replace(/<Extension_ID>/,str1);
  console.log(str3);
  
  //创建'a'标签
  var link = $('<a>',{
      id:'click-a',
      href:str3,
      title:"goto clients"
  });
  //用'a'包裹
  $('.h-e-f-Ra-c>.dd-Va').wrap(link);
  //提示框
  $('#click-a').click(function(e){
	var r=confirm("确认添加到chrome吗? ");
		if(r==true){
			return true;
			}else{
			return false;
		}
	})
}