 var p,t,r,si,ci,amount;

   



    function myfunction(){
		p= document.getElementById("principal").value;
        t =document.getElementById("time").value;
        r = document.getElementById("rate").value;
		
            si = ((p*t*r)/100 );
//		    ci = p*Math.pow((1+r/),t);
		
		
		amount = p*Math.pow((1 +r/100),t );
		    ci= amount-p;
		

		
		
		document.getElementById("num").innerHTML ="simple intrest is " + si;
			document.getElementById("num1").innerHTML ="Compound intrest is " + ci;
		
	
	}

