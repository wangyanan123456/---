$(document).ready(function(){
 $('.backto').click(function(){
 	
  window.location.href = '../html/index.html'
 })
 $('.submit').click(function(){
 	var $val = $('.down')
 	var count=0;
 	$val.each(function(index,ele){
 		
 		if(parseInt($(this).find('span').text()) >= parseInt($(this).find('input').val())){
 			
 		}else{
 			
 			count++

  			
 		}
 	})
 	if(count>0){
 		console.log('提交失败')
 	}else{
 		console.log('提交成功')
 	}
 })

})