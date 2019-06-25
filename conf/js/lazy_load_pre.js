/*
 * Author: lifucai
 * Date: 2019.06.11
 * Version: 1.0.0
 * Description: 实现DOM节点的动态添加以及图片的懒加载
 */

//适配Safari浏览器
window.requestAnimFrame =(function() {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
        window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
        lastTime = currTime + timeToCall;
        return id;
        };
        if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
        };
}());

//判断浏览器类别
function getBrowser() {  
    var ua = window.navigator.userAgent;   
    isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;  
    if (isSafari) { 
        document.write('<script type="text/javascript" src="js/jquery.nicescroll.min.js"><\/script>');
    } else {  
        document.write('<script type="text/javascript" src="js/jquery.nicescroll-min.js"><\/script>');   
    }
    return isSafari;  
}
getBrowser()


    //添加图片DOM节点
    function addPic(data, selector){
        var t = selector
            var container  = []
            container = data

            setTimeout(function(){
                    var total = container.length
                    var once = 50
                    var loopCount = total / once
                    var countOfRender = 0
                    var j = 0
                    var div = document.querySelector('#resp-tabs-container' + t)
                    function add(){
                    var fragment = document.createDocumentFragment();

                    for (var i=0; i < once; i++){
                    var div1 = document.createElement("div")
                    div1.innerHTML = '<a href="'+ container[j] + '" target="_blank"><img data-src="' + container[j] + '" /></a>'
                    fragment.appendChild(div1)
                    j++
                    }
                    div.appendChild(fragment)
                    countOfRender += 1
                    j = countOfRender * once
                    loop()
                    }
                    function loop(){
                        if(countOfRender < loopCount){
                            window.requestAnimationFrame(add)
                        }else{
                            if(isSafari){
                                $('#resp-tabs-list' + t).niceScroll({cursoropacitymax:0,cursorwidth:"8px"});
                            }else{
                                $('#resp-tabs-list' + t).niceScroll({cursoropacitymax:0.5,cursorwidth:"8px"});
                            }
                            $('#resp-tabs-container' + t).niceScroll({cursoropacitymax:0.5,cursorwidth:"8px"});
                            $('#parentVerticalTab' + t).easyResponsiveTabs({
type: 'vertical', //Types: default, vertical, accordion
width: 'auto', //auto or any width like 600px
fit: true, // 100% fit in a container
closed: 'accordion', // Start closed if in accordion view
tabidentify: 'hor_' + t, // The tab groups identifier
activate: function(event) { // Callback function if tab is switched
var $tab = $(this);
var $info = $('#nested-tabInfo2');
var $name = $('span', $info);
$name.text($tab.text());
$info.show();
}
}); 	

}
}
loop()				
    },0)
}

function addTabPic(data, selector){
    var t = selector
        var tabContainer = {}
    tabContainer = data			
        setTimeout(function(){
                var total = tabContainer.length
                var once = 50
                var loopCount = 0
                if(total > once){
                loopCount = total / once;
                }else{
                loopCount = 1
                }
                var countOfRender = 0
                var div = document.querySelector('#resp-tabs-container' + t)
                function add(){
                var fragment = document.createDocumentFragment();					
                for (var item in tabContainer){
                var div1 = document.createElement("div")
                div1.innerHTML = '<div><table class="pic_table"><tr><td><a href="' + tabContainer[item][0] + '" target="_blank"><img data-src="' + tabContainer[item][0] + '" /></a><p>' + tabContainer[item][1] + '</p></td><td><a href="' + tabContainer[item][2] + '" target="_blank"><img data-src="' + tabContainer[item][2] + '" /></a><p>' + tabContainer[item][3] + '</p></td></tr></table></div>'
                fragment.appendChild(div1)
                }
                div.appendChild(fragment)
                countOfRender += 1;
                loop()
                }
                function loop(){
                    if(countOfRender < loopCount){
                        window.requestAnimationFrame(add)
                    }else{
                        if(isSafari){
                            $('#resp-tabs-list' + t).niceScroll({cursoropacitymax:0,cursorwidth:"8px"});
                        }else{
                            $('#resp-tabs-list' + t).niceScroll({cursoropacitymax:0.5,cursorwidth:"8px"});
                        }
                        $('#resp-tabs-container' + t).niceScroll({cursoropacitymax:0.5,cursorwidth:"8px"});
                        $('#parentVerticalTab' + t).easyResponsiveTabs({
type: 'vertical', //Types: default, vertical, accordion
width: 'auto', //auto or any width like 600px
fit: true, // 100% fit in a container
closed: 'accordion', // Start closed if in accordion view
tabidentify: 'hor_' + t, // The tab groups identifier
activate: function(event) { // Callback function if tab is switched
var $tab = $(this);
var $info = $('#nested-tabInfo2');
var $name = $('span', $info);
$name.text($tab.text());
$info.show();
}
});	
}
}
loop()							
    },0)				
}