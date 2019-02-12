function evaluara(){
	var a=new Array(7);
		a[7]=document.getElementById('a7').value;
		a[6]=document.getElementById('a6').value;
		a[5]=document.getElementById('a5').value;
		a[4]=document.getElementById('a4').value;
		a[3]=document.getElementById('a3').value;
		a[2]=document.getElementById('a2').value;
		a[1]=document.getElementById('a1').value;
	var estado="";
	var i=0;
	while(estado!='ocupado'){
		for(i=0;i<=6;i++){
			if(a[i]==0){
				poner(a[i]);
				estado=='ocupado';
			}
		}
	}
}

function evaluarb(){
	var b=new Array(7);
		b[7]=document.getElementById('b7').value;
		b[6]=document.getElementById('b6').value;
		b[5]=document.getElementById('b5').value;
		b[4]=document.getElementById('b4').value;
		b[3]=document.getElementById('b3').value;
		b[2]=document.getElementById('b2').value;
		b[1]=document.getElementById('b1').value;
	var estado="";
	var i=0;
	while(estado!='ocupado'){
		for(i=0;i<=6;i++){
			if(b[i]==0){
				poner(b[i]);
				estado=='ocupado';
			}
		}
	}
}

function evaluarc(){
	var c=new Array(7);
		c[7]=document.getElementById('c7').value;
		c[6]=document.getElementById('c6').value;
		c[5]=document.getElementById('c5').value;
		c[4]=document.getElementById('c4').value;
		c[3]=document.getElementById('c3').value;
		c[2]=document.getElementById('c2').value;
		c[1]=document.getElementById('c1').value;
	var estado="";
	var i=0;
	while(estado!='ocupado'){
		for(i=0;i<=6;i++){
			if(c[i]==0){
				poner(c[i]);
				estado=='ocupado';
			}
		}
	}
}

function evaluard(){
	var d=new Array(7);
		d[7]=document.getElementById('d7').value;
		d[6]=document.getElementById('d6').value;
		d[5]=document.getElementById('d5').value;
		d[4]=document.getElementById('d4').value;
		d[3]=document.getElementById('d3').value;
		d[2]=document.getElementById('d2').value;
		d[1]=document.getElementById('d1').value;
	var estado="";
	var i=0;
	while(estado!='ocupado'){
		for(i=0;i<=6;i++){
			if(d[i]==0){
				poner(d[i]);
				estado=='ocupado';
			}
		}
	}
}

function evaluare(){
	var e=new Array(7);
		e[7]=document.getElementById('e7').value;
		e[6]=document.getElementById('e6').value;
		e[5]=document.getElementById('e5').value;
		e[4]=document.getElementById('e4').value;
		e[3]=document.getElementById('e3').value;
		e[2]=document.getElementById('e2').value;
		e[1]=document.getElementById('e1').value;
	var estado="";
	var i=0;
	while(estado!='ocupado'){
		for(i=0;i<=6;i++){
			if(e[i]==0){
				poner(e[i]);
				estado=='ocupado';
			}
		}
	}
}

function evaluarf(){
	var f=new Array(7);
		f[7]=document.getElementById('f7').value;
		f[6]=document.getElementById('f6').value;
		f[5]=document.getElementById('f5').value;
		f[4]=document.getElementById('f4').value;
		f[3]=document.getElementById('f3').value;
		f[2]=document.getElementById('f2').value;
		f[1]=document.getElementById('f1').value;
	var estado="";
	var i=0;
	while(estado!='ocupado'){
		for(i=0;i<=6;i++){
			if(f[i]==0){
				poner(f[i]);
				estado=='ocupado';
			}
		}
	}
}

function evaluarg(){
	var g=new Array(7);
		g[7]=document.getElementById('g7').value;
		g[6]=document.getElementById('g6').value;
		g[5]=document.getElementById('g5').value;
		g[4]=document.getElementById('g4').value;
		g[3]=document.getElementById('g3').value;
		g[2]=document.getElementById('g2').value;
		g[1]=document.getElementById('g1').value;
	var estado="";
	var i=0;
	while(estado!='ocupado'){
		for(i=0;i<=6;i++){
			if(g[i]==0){
				poner(g[i]);
				estado=='ocupado';
			}
		}
	}
}

function poner(campo){
	if(turno==1){
		campo.className=campo.className.replace("jugador1");
	}else{
		campo.className=campo.className.replace("jugador2");
	}
}