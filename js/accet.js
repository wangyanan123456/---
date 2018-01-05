$(document).ready(function(){
 $('.backto').click(function(){
 	
  window.location.href = '../html/index.html'
 })
 function toast(){
     $('.toast').css('display','block')
        setTimeout(function(){
          $('.toast').css('display','none')
        },1000)
  }
 $('.submit').click(function(){
 	var $val = $('.down')
 	var count=0;
 	$val.each(function(index,ele){
 		
 		if(parseInt($(this).find('span').text()) >= parseInt($(this).find('input').val())){
 			
 		}else{
 			
 			count++

  			
 		}
 	})
 	if(count>0 ||  $('input').val()<0){
 		 $('.toast').text('提交失败')
      		toast()
 	}else{
 		 $('.toast').text('提交成功')
     toast()
 	}
 })

})