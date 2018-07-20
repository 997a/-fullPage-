
//鼠标滚轮事件兼容性函数
//obj 代表事件执行的对象
// fun1 向下滚动   fun2 向上滚动 
function mousewheel(obj,fun1,fun2){
	if(obj.addEventListener){
	//谷歌
		obj.addEventListener("mousewheel",scrollFn,false)
    //火狐
		obj.addEventListener("DOMMouseScroll",scrollFn,false)
	}else{
		//IE
		obj.attachEvent("onmousewheel",scrollFn)
	}


/*function scrollFn(){
	console.log("滚动")
}*/



/*//detail 谷歌
 function scrollFn(e){
	var ev=e||window.event;
	console.log(ev.detail)
}*/




function scrollFn(e){
	var ev=e||window.event;
	if(ev.detail==3||ev.wheelDelta==-120){
    //call的作用 
    //把fun1向下滚动的方法 给了obj即可检测到这个方法
		fun1.call(obj)
	}else if(ev.detail==-3||ev.wheelDelta==120){
		fun2.call(obj)
	    }
    }




}



