window.onload=function(){
var box=document.getElementsByClassName('box')[0];
var inner=document.getElementsByClassName('inner');
var btn=document.getElementsByClassName('btn');

    var num=0;
    //小按钮的第一个颜色默认的是 灰色
    btn[0].style.border="2px solid #a5a5a5";
    //遍历每一屏的页面
    for(var i=0;i<inner.length;i++){
    //为动态控制浏览器的高 
    //声明hh获取浏览器的高
		var hh=document.documentElement.clientHeight;
    //每一屏的页面的高等于浏览器的高
		inner[i].style.height=hh+"px";
	}
	//遍历小按钮
	for(var j=0;j<btn.length;j++){
		//给小按钮一个index用来记录按钮值
		btn[j].index=j;
        //给小按钮一个点击事件
		btn[j].onclick=function(){
		//为实现小按钮点击与页面对应
		//所以小按钮要与页面的 btn[num]
			btn[num].style.border="solid 2px transparent";
        //this.index指的是小按钮 
			animate(box,{marginTop:-hh*this.index},1000)
		//之前的小按钮是num控制的
		//现在需要小按钮的值与页面的值相对应
			num=this.index;
            btn[num].style.border="2px solid #a5a5a5";
		}
	}

// 第一个大function  滚轮向下
   
    var flag=true;
	mousewheel(box,function(){
		//滚轮向下滚动
		if(flag){
			flag=false;
		//}
		num++
		if(num>inner.length-1){
			num=inner.length-1
		}
		//遍历小按钮让其变颜色
		for(var j=0;j<btn.length;j++){
			btn[j].style.border="2px solid transparent";
		}
		    btn[num].style.border="2px solid #a5a5a5";
        //动画向下
       animate(box,{marginTop:-hh*num},1000,function(){
       	flag=true;
       })
       }  
	},function(){  //滚轮滚动 向上
	   if(flag){
		 flag=false;
	//}
	num--; //向上是依次减少 num的值是越来越小
	//判断num=0时inner在第一个页面时暂停
	if(num<0){
		num=0;
	}
    //遍历小按钮让其变颜色
	for(var j=0;j<btn.length;j++){
			btn[j].style.border="2px solid transparent";
		}
		    btn[num].style.border="2px solid #a5a5a5";
        //
    //滚轮向上滑的动画
	animate(box,{marginTop:-hh*num},1000,function(){
		flag=true;
	})

	 }
     
    })



// 无缝轮播
var innerbox=$('.innerbox');
     var num=0;
     // 计时器(每两秒自动轮播一次)
     var t=setInterval(move,10000)
     // 自动轮播函数
     function move(){
     	num++;
     	if(num>$('.innera').length-1){
            num=0;
            innerbox.css('marginLeft','0')
     	}
     	
     	innerbox.animate({'marginLeft':-1366*num},1000,function(){
     		if(num>$('.innera').length-2){
     			$('.btna').eq(0).css('background','orange')
     		}
     	})	
     }
     // 小按钮点击事件
     $('.btna').click(function(){
     	var index=$(this).index();
     	$('.btna').eq(index).css('background','orange');
     	$(this).siblings().css('background','#aaa')
     	num=index;
     	innerbox.animate({'marginLeft':-1366*num},1000)
     })
     // 默认第一张显示
     $('.btna').eq(0).trigger('click')
     // 鼠标移入轮播停止，鼠标移出轮播开始
     $('.bigbox').hover(function(){
        clearInterval(t);
        $('.left').add('.right').css('opacity','1')
     },function(){
     	t=setInterval(move,10000)
     	$('.left').add('.right').css('opacity','0')
     })
     // 左右按钮点击效果
     $('.left').click(function(){
     	if(!innerbox.is(":animated")){
     	num++;
         if(num>$('.innera').length-1){
 			innerbox.css('marginLeft',0)
 			num=1;
 			innerbox.animate({'marginLeft':-1366*num},1000)
         }
         $('.btna').css('background','#aaa')
     	 $('.btna').eq(num).css('background','orange')
         innerbox.animate({'marginLeft':-1366*num},1000,function(){
         	if(num==$('.innera').length-1){
         		$('.btna').eq(0).css('background','orange')
         	}
         })
     }
     })
     $('.right').click(function(){
     	if(!innerbox.is(":animated")){
         num--;
         if(num<0){
         	innerbox.css('marginLeft',-1366*($('.innera').length-1))
         	 num=$('.innera').length-2;
         	 innerbox.animate({'marginLeft':-1366*num},1000) 
         	}
         $('.btna').css('background','#aaa')
     	 $('.btna').eq(num).css('background','orange')
         innerbox.animate({'marginLeft':-1366*num},1000)
         }
     })


// 服务轮播
 var innerbox2=document.getElementsByClassName('fw')[0];
  var out2=document.getElementsByClassName('fuwu-box')[0];
  var inner2=document.getElementsByClassName('f');
  var left2=document.getElementsByClassName('fw-left')[0];
  var right2=document.getElementsByClassName('fw-right')[0];
  var num2=0;
          
       // 一直循环执行轮播函数
       var t=setInterval(move2,500000)
      
       // 左右点击按钮
        right2.onclick=function(){
          num2++;
          if(num2>inner2.length-2){
            num2=inner2.length-2;
          }
              

          animate(innerbox2,{marginLeft:-1130*num2},1000)
         }
         left2.onclick=function(){
          num2--;
          if(num2<0){
            num2=0;
          }
         

           animate(innerbox2,{marginLeft:-1130*num2},1000)
         }

       // 实现自动轮播的效果
        function move2(){
          num2++;
          if(num2>=inner2.length-1){ 
               animate(innerbox2,{marginLeft:-1130*num2},1000,function(){
                innerbox2.style.marginLeft=0;
                num2=0;
                // 实现无缝轮播的默认按钮颜色
               for(var j=0;j<btn2.length;j++){
              btn2[j].style.border='1px solid #b2b2b2';
                btn2[j].style.backgroundColor='transparent';

               }
               btn2[num2].style.backgroundColor="orange";
               btn2[num2].style.border='1px solid orange';

               })
          }
          else{
               // 实现自动轮播的默认按钮颜色
               for(var j=0;j<btn2.length;j++){
               btn2[j].style.border='1px solid #b2b2b2';
                btn2[j].style.backgroundColor='transparent';

               }
               btn2[num2].style.backgroundColor="orange";
               btn2[num2].style.border='1px solid orange';

                animate(innerbox2,{marginLeft:-1130*num2},1000)
          }
       }











}