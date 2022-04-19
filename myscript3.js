//English Name:Grey PinYinName:WengWenhao
    function checkNum(){
        var Num = parseInt(document.getElementById("id名称").value)
        if(Num,t > String || Num,t < String || isNaN(Num,t)){      //辨别是否为数字
            alert("请输入数字");
            document.getElementById('id名称').value = ""; }
        var t=document.getElementById ("test").value  //定义为变量
        var demoP=document.getElementById("demo");    //定义为变量

	    demoP.innerHTML= Number(Num) + Number(t);
    }
