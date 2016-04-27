    var PARSE_APP = "FAbluZyN0hpXGpudGXrt9WOgvUQCxey3KEGALLle";
    var PARSE_JS = "diTLB99p5GHZED8SDzZ4ysNMMyXTXzJOcJi2Qww6";
	var id;
		var dirid=new Array();
	
	var locationtitile;
	function myFunction()
  {    
	localStorage.clear();
	Parse.initialize(PARSE_APP,PARSE_JS);
	var query = location.search.substr(1);
       var idresult = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        idresult[item[0]] = decodeURIComponent(item[1]);
		id=idresult[item[0]];
		});
   var locItem = Parse.Object.extend("Location");
   var locQuery = new Parse.Query(locItem);
   locQuery.equalTo('objectId',id);
   locQuery.find().then(function(result){
	   localStorage.setItem( 'Hotel',JSON.stringify(result));
	  if(result[0]==undefined)
	  {

			var tempItem = Parse.Object.extend("Template");
		   var tempQuery = new Parse.Query(tempItem);
		   tempQuery.equalTo('objectId',id);
			tempQuery.find().then(function(result){
			   locationtitile=result[0].get("Name");
			   var parentid=result[0].id;
			
				localStorage.setItem( 'parentid',JSON.stringify(parentid));
				$("#location").append(locationtitile);
				
			   });
		   
	  }
	  else{
		 
		 var locationimg,locationhotelimg,loctionBackground,locTextFont,locationMsg,locFooterBackground,footerimg;
		 locationtitile=result[0].get("Name");
		 locationLogo=result[0].get("Logo");
		 locationHotelLogo=result[0].get("HotelLogo");
		 locationMessage=result[0].get("Message");
		 locationfooterimg=result[0].get("FooterImage")
		  locationaddress1=result[0].get("Address1");
		  locationaddress2=result[0].get("Address2");
		  locationstreet=result[0].get("Street");
		  locationtown=result[0].get("Town");
		  locationzip=result[0].get("zipcode");
		  locationgeo=result[0].get("Geopoints");
		  locationstyle=result[0].get("StyleId")
		  locationFrontDesk=result[0].get("FrontDesk")
		  locationBellDesk=result[0].get("BellDesk")
		  locationMaidDesk=result[0].get("MaidDesk")
		  locationEmergency=result[0].get("Emergency")
		  locationLocalAttractions=result[0].get("LocalAttractions");
		  locationHotelDirectory=result[0].get("HotelDirectory")
		  var loationStyleid=locationstyle.id 
		  
		id=result[0].get("Directories");
		if(locationLogo!=undefined){
					 locationimg=locationLogo._url;
						$('#locationlogo').attr("src",locationimg);
				 }
				 else{
					  locationimg='display:none';
					  	$('#locationlogo').attr("style",locationimg);
				 }
		if(locationHotelLogo!=undefined){
					 locationhotelimg=locationHotelLogo._url;
						$('#locationhotellogo').attr("src",locationhotelimg)
				 }
				 else{
					  locationhotelimg='display:none';
					  	$('#locationhotellogo').attr("style",locationhotelimg)
				 }
		
		
	   if(locationaddress1==undefined){
					 locationadd1='display:none';
		          }else{
					  locationadd1="";
				  }

		if(locationaddress2==undefined){
					 locationadd2="display:none";
		          }else{
					  locationadd2="";
				  }
				  
        if(locationstreet==undefined){
					 locationst="display:none";
		          }
				  else{
					  locationst="";
				  }
				  	
		if(locationtown==undefined){
					 locationtwn="display:none";
		          }
				  else{
					  locationtwn="";
				  }
		if(locationzip==undefined){
					 locationzipcode="display:none";
		          }else{
					  locationzipcode="";
				  }
				  		  
        if(locationgeo==undefined){
					 locationgeopoints="display:none";
					 locationlat="";
					 locationlang="";
					 
		          }
				  else{
					  locationlat=locationgeo.latitude;
					  locationlang=locationgeo.longitude;
					  locationgeopoints="display:show;";
				  }	
			if(loationStyleid!=undefined){
			   var locStyle = Parse.Object.extend("Style");
			   var StyleQuery = new Parse.Query(locStyle);
			   StyleQuery.equalTo('objectId',loationStyleid);
			   StyleQuery.find().then(function(result){
				   locBackground=result[0].get("LocationBackground")
				    locTextFont=result[0].get("LocationTextFont")
					locTextColor=result[0].get("LocationTextColor")
					locTextBackground=result[0].get("LocationTextBackground");
					locFooterBackground=result[0].get("LocationFooterBackground")
					locAddressFont=result[0].get("LocationAddressFont");
					locAddressFontColor=result[0].get("LocationAddressFontColor")
					
				   if(locBackground!=undefined){
					   loctionBackground="background-color:"+locBackground;
						 localStorage.setItem( 'Hotelbackground',JSON.stringify(loctionBackground));
					   $("#locationbackground").attr("style",loctionBackground)
				   }
				   		 if(locationMessage==undefined){
							locationmsg='display:none';
							$('#locationmessage').attr("style",locationmsg)
							}else{
								locationMsg="<div class='section'style='background-color:"+locTextBackground+"'><div class='container'><div class='row' ><div class='col-md-12 text-center' style='font-size:"+
						      locTextFont+";color:"+locTextColor+";'>"+locationMessage+"</div></div></div></div>"
							  $('#locationmessage').append(locationMsg)
							}	
							if(locationfooterimg!=undefined){
									 footerimage=locationfooterimg._url;
									footerimg="<div style='background:"+locFooterBackground+";margin-top:5px;' ><center><img class='footer' src='"+footerimage+"'></center></div>"	
									localStorage.setItem( 'Hotelfooter',JSON.stringify(footerimg));
									  $('#footerimage').append(footerimg)
								 }
								 else{
									 
									  footerimage='display:none';
									    $('#footerimage').attr("styles",footerimage)
								 }
						 
						 
					   
						 var dirlocationdetails="<address class='text-left addPadding' style='color:"+locAddressFontColor+";font-size:"+locAddressFont+"'>"+
						 "<text style='"+locationadd1+"'>"+locationaddress1+"</text><br>"+
						 "<text style='"+locationadd2+"'>"+locationaddress2+"</text><br>"+
						 "<text style='"+locationst+"'>"+locationstreet+"<text style='"+locationtwn+"'>,"+locationtown+"</text></text><br>"+
						 "<text style='"+locationzipcode+"'>"+locationzip+"</text></address>"
						 	$("#dirlocationdetails").append(dirlocationdetails);
		       });
			   
		  }
        
		  
		
		 var geomap="<a style='"+locationgeopoints+"' onclick='myNavFunc(this.id,this.lang)' id='"+locationlat+"' lang='"+locationlang+"' class='mapPadding'>"+
		 "<img class = 'map-logo' src='./images/map.jpg'  alt = '' >"+
		 "<p  class='mapPadding' style='margin-left:9%'>directions</p><a>"
		
		localStorage.setItem( 'parentid',JSON.stringify(id));
	
	
		
		
		
		
		$("#locationgeomap").append(geomap);
		$("#location").append(locationtitile);
		
		$("#locationFrontDesk").attr("href","tel:"+locationFrontDesk);
		$("#locationBellDesk").attr("href","tel:"+locationBellDesk);
		$("#locationMaidDesk").attr("href","tel:"+locationMaidDesk);
		$("#locationEmergency").attr("href","tel:"+locationEmergency);
		$("#locationLocalAttractions").attr("href","http://"+locationLocalAttractions)
		$("#locationHotelDirectory").attr("href","http://"+locationHotelDirectory)
	  }
	 
	
    }).then(function(){
		
	    var dItem = Parse.Object.extend("DirectoryItem");
		var dItemQuery = new Parse.Query(dItem);
		dItemQuery.limit(1000);
		dItemQuery.include("StyleId")
		dItemQuery.equalTo('LocationId', id);
		dItemQuery.find({
			success: function(dRes){
				localStorage.setItem('directory',JSON.stringify(dRes));
				
				var directory=new Array();
				var dirtitle=new Array();
				var dircaption=new Array();
				var dirColor=new Array();
				var dirLogo=new Array();
				var dirurl=new Array();
				var styles=new Array();
				var TitleColor=new Array();
				var TitleFont=new Array();
				var dirlogoDis=new Array();
				var  dirbutton=new Array();
				var titleval;
				var titletotval="";
				var titletotval1="";
				var titletotval2="";
				var character="";
				var titledis="";
				var titlecapDis="";
				
			
	       for(var i=0;i<dRes.length;i++){
			 
			if(dRes[i].get("DirectoryID")==id){
				  
							dirtitle[i]=dRes[i].get("Title");
							dircaption[i]=dRes[i].get("Caption");
							dirid[i]=dRes[i].id;
							dirLogo[i]=dRes[i].get("Picture");
				if(dirLogo[i]!=undefined){
					 dirurl[i]=dirLogo[i]._url;
					
				 }
				 else{
					  dirlogoDis[i]='display:none;';
					  dirbutton[i]='margin-left:43px!important';
				 }
				 if(dircaption[i]==undefined)
				{
				 titlecapDis='display:none';
				}
				
				
				/* var json={"title":dirtitle[i],
				          "caption":dircaption[i],
				          "dirid":dirid[i],
						  "dirlogo":dirurl[i],
						  "titlecolor":TitleColor[i],
						  "titlefont": TitleFont[i],
						  "dirlogodis": dirlogoDis[i]
						  };
				directory.push(json); */
					 titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?title="+locationtitile+"&id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton' >"+dirtitle[i]+"</button></a></span></div>";	
					titletotval=titletotval+titleval;
				
				}
				
			}	
			
			
				
			$("#titledir").append(titletotval);
				//console.log(directory[0]);
				/* function compare(a,b) {
                       if (a.title < b.title)
                           return -1;
                       if (a.title > b.title)
                           return 1;
                            return 0;
                             }
				directory.sort(compare); */
				/* for(var i=0;i<directory.length;i++){
				  
					for(var j=i;j<directory.length;j++){
						if(directory[i].title.charAt(0)==directory[j].title.charAt(0)){
							titleval="<a href='description.html?title="+locationtitile+"&id="+directory[j].dirid+"&header="+directory[j].title+"'><li class='normalListStyle' ><img src='"+directory[j].dirlogo+"' class='dirlogo pull-left' style='"+directory[j].dirlogodis+"'>"+directory[j].title+" <img src='./img/right.jpg' class='pull-right'><p style='font-size:11px;"+titlecapDis+"' class='caps'>"+directory[j].caption+"</p></li></a>";
						    titletotval1=titletotval1+titleval;
							if(j==directory.length-1){
								character="<li class='mainStyleList'>"+directory[i].title.charAt(0)+"</li>"
							titletotval2=character+titletotval1;
							titletotval=titletotval+titletotval2;
							i=directory.length;
							}
						}
						else{
							character="<li class='mainStyleList'>"+directory[i].title.charAt(0)+"</li>"
							titletotval2=character+titletotval1;
							titletotval=titletotval+titletotval2;
							i=j;
							j=j-1;
							titleval='';
							titletotval1='';
							
						}
					}
				}
				
			
				
				var titlecomlete="<ul style='"+titledis+"'>"+titletotval+"</ul>"
				
				
			    $("#title").append(titlecomlete); */
				
			}	
		}); //end for directory items
   }).then(function(){
			var pItem = Parse.Object.extend("Phones");
		  var pItemQuery = new Parse.Query(pItem);
		  pItemQuery.limit(1000);
		  pItemQuery.equalTo('LocationId', id);
		  pItemQuery.find({
		   success: function(pRes){
			   localStorage.setItem('phones',JSON.stringify(pRes));
			   var val=localStorage.getItem('phones');
	              var result=JSON.parse(val);
		   }
		   });//end for phones
	
   }).then(function(){
		 //local storage for menu details
		  var mItem = Parse.Object.extend("Menu");
		  var mItemQuery = new Parse.Query(mItem);
		  mItemQuery.limit(1000);
		  mItemQuery.include("StyleID");
		  mItemQuery.equalTo('LocationId', id);
		  mItemQuery.find({
		   success: function(mRes){
			   localStorage.setItem('menu',JSON.stringify(mRes))
			}
		   });//end for menu details
   }).then(function(){
	   ////local storage for styles details
	    var sItem = Parse.Object.extend("Style");
		  var sItemQuery = new Parse.Query(sItem);
		  sItemQuery.limit(1000);
		  sItemQuery.equalTo('LocationId', id);
		  sItemQuery.find({
		   success: function(sRes){
			   localStorage.setItem('Style',JSON.stringify(sRes));
			  // var val=localStorage.getItem('Style');
	             // var result=JSON.parse(val);
				 // console.log(result);
		   }
		  });
   });
  }

 //search box
	$('#search').click(function(){
		 var textres = $('#textbox').val();
		 var res = new RegExp(textres,"i");
		 $("#titledir").empty();
		 var dirresult=localStorage.getItem('directory');
		 var dRes=JSON.parse(dirresult);
		        var dirid=new Array();
				var directory=new Array();
				var dirtitle=new Array();
				var dircaption=new Array();
				var dirColor=new Array();
				var dirLogo=new Array();
				var dirurl=new Array();
				var styles=new Array();
				var TitleColor=new Array();
				var TitleFont=new Array();
				var dirlogoDis=new Array();
				var dirbutton=new Array();
				var titleval;
				var titletotval="";
				var titletotval1="";
				var titletotval2="";
				var character="";
				var titledis="";
				var titlecapDis="";
				
				//dRes.sort();
				if(dRes.length==0){
					titledis='display:none';
				}
	            for(var i=0;i<dRes.length;i++){
					
					
						if((res.test(dRes[i].Title))){
							if(dRes[i].LocationId==id){
							
						dirtitle[i]=dRes[i].Title;
						dircaption[i]=dRes[i].Caption;
						dirid[i]=dRes[i].objectId;
						dirLogo[i]=dRes[i].Picture;
						 styles[i]=dRes[i].StyleId;
						 if(dirLogo[i]!=undefined){
							 dirurl[i]=dirLogo[i].url;
							
						 }
						 else{
							  dirlogoDis[i]='display:none';
							  dirbutton[i]='margin-left:43px!important';
						 }
						if(styles[i]!=undefined)
						{
						 TitleColor[i]=styles[i].TitleColor;
						 TitleFont[i]=styles[i].TitleFont;
						 
						}
						if(dircaption[i]==undefined)
						{
						 titlecapDis='display:none';
						 
						}
						//
						/* var json={"title":dirtitle[i],
								  "caption":dircaption[i],
								  "dirid":dirid[i],
								  "dirlogo":dirurl[i],
								  "titlecolor":TitleColor[i],
								  "titlefont": TitleFont[i],
								  "dirlogodis": dirlogoDis[i]
								  };
						directory.push(json); */
						 titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?title="+locationtitile+"&id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton' >"+dirtitle[i]+"</button></a></span></div>";	
					titletotval=titletotval+titleval;
					  
					}
				 }
			}
			$("#titledir").append(titletotval);
				//console.log(directory[0]);
				/* function compare(a,b) {
                       if (a.title < b.title)
                           return -1;
                       if (a.title > b.title)
                           return 1;
                            return 0;
                             }
				directory.sort(compare);
				for(var i=0;i<directory.length;i++){
				  
					for(var j=i;j<directory.length;j++){
						if(directory[i].title.charAt(0)==directory[j].title.charAt(0)){
							titleval="<a href='description.html?title="+locationtitile+"&id="+directory[j].dirid+"&header="+directory[j].title+"'><li class='normalListStyle' ><img src='"+directory[j].dirlogo+"' class='dirlogo pull-left' style='"+directory[j].dirlogodis+"'>"+directory[j].title+"<img src='./img/right.jpg' class='pull-right'><p style='font-size:11px;"+titlecapDis+"' class='caps'>"+directory[j].caption+"</p></li></a>";
						    titletotval1=titletotval1+titleval;
							if(j==directory.length-1){
								character="<li class='mainStyleList'>"+directory[i].title.charAt(0)+"</li>"
							titletotval2=character+titletotval1;
							titletotval=titletotval+titletotval2;
							i=(directory.length-1);
							}
						}
						else{
							character="<li class='mainStyleList'>"+directory[i].title.charAt(0)+"</li>"
							titletotval2=character+titletotval1;
							titletotval=titletotval+titletotval2;
							i=j;
							j=j-1;
							titleval='';
							titletotval1='';
							//character="<h1>"+directory[i].title.charAt(0)+"</h1>"
						}
					}
				}
				
				var titlecomlete="<ul style='"+titledis+"'>"+titletotval+"</ul>"
				
				
			    $("#title").append(titlecomlete); */
		  event.stopPropagation();
	});
//search for food	
 $("#food").click(function(){
    //alert("The paragraph was clicked.");
	var textfood = "Food and Beverage"
	 var textdining = "dining";
	 var textrestaurant ="restaurant";
		 var resdining = new RegExp(textdining,"i");
		 var resfood = new RegExp(textfood,"i");
		 var resrestaurant = new RegExp(textrestaurant,"i");
		 $("#titledir").empty();
		 var dirresult=localStorage.getItem('directory');
		 var dRes=JSON.parse(dirresult);
		        var dirid=new Array();
				var directory=new Array();
				var dirtitle=new Array();
				var dircaption=new Array();
				var dirColor=new Array();
				var dirLogo=new Array();
				var dirurl=new Array();
				var styles=new Array();
				var TitleColor=new Array();
				var TitleFont=new Array();
				var dirlogoDis=new Array();
				var dirbutton=new Array();
				var titleval;
				var titletotval="";
				var titletotval1="";
				var titletotval2="";
				var character="";
				var titledis="";
				var titlecapDis="";
				
				//dRes.sort();
				if(dRes.length==0){
					titledis='display:none';
				}
	            for(var i=0;i<dRes.length;i++){
					
					
						if((resdining.test(dRes[i].Title))||(resfood.test(dRes[i].Title))||(resrestaurant.test(dRes[i].Title))){
							if(dRes[i].LocationId==id){
							//console.log(dRes[i]);
						dirtitle[i]=dRes[i].Title;
						dircaption[i]=dRes[i].Caption;
						dirid[i]=dRes[i].objectId;
						dirLogo[i]=dRes[i].Picture;
						 styles[i]=dRes[i].StyleId;
						 if(dirLogo[i]!=undefined){
							 dirurl[i]=dirLogo[i].url;
							
						 }
						 else{
							  dirlogoDis[i]='display:none';
							  dirbutton[i]='margin-left:43px!important';
						 }
						if(styles[i]!=undefined)
						{
						 TitleColor[i]=styles[i].TitleColor;
						 TitleFont[i]=styles[i].TitleFont;
						 
						}
						if(dircaption[i]==undefined)
						{
						 titlecapDis='display:none';
						}
						titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?title="+locationtitile+"&id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton' >"+dirtitle[i]+"</button></a></span></div>";	
					    titletotval=titletotval+titleval;
						//
						/* var json={"title":dirtitle[i],
								  "caption":dircaption[i],
								  "dirid":dirid[i],
								  "dirlogo":dirurl[i],
								  "titlecolor":TitleColor[i],
								  "titlefont": TitleFont[i],
								  "dirlogodis": dirlogoDis[i]
								  };
						directory.push(json); */
					  // console.log(json);
					}
				 }
			}
				//console.log(directory[0]);
				/* function compare(a,b) {
                       if (a.title < b.title)
                           return -1;
                       if (a.title > b.title)
                           return 1;
                            return 0;
                             }
				directory.sort(compare);
				for(var i=0;i<directory.length;i++){
				  
					for(var j=i;j<directory.length;j++){
						if(directory[i].title.charAt(0)==directory[j].title.charAt(0)){
							titleval="<a href='description.html?title="+locationtitile+"&id="+directory[j].dirid+"&header="+directory[j].title+"'><li class='normalListStyle' ><img src='"+directory[j].dirlogo+"' class='dirlogo pull-left' style='"+directory[j].dirlogodis+"'>"+directory[j].title+"<img src='./img/right.jpg' class='pull-right'><p style='font-size:11px;"+titlecapDis+"' class='caps'>"+directory[j].caption+"</p></li></a>";
						    titletotval1=titletotval1+titleval;
							if(j==directory.length-1){
								character="<li class='mainStyleList'>"+directory[i].title.charAt(0)+"</li>"
							titletotval2=character+titletotval1;
							titletotval=titletotval+titletotval2;
							i=(directory.length-1);
							}
						}
						else{
							character="<li class='mainStyleList'>"+directory[i].title.charAt(0)+"</li>"
							titletotval2=character+titletotval1;
							titletotval=titletotval+titletotval2;
							i=j;
							j=j-1;
							titleval='';
							titletotval1='';
							//character="<h1>"+directory[i].title.charAt(0)+"</h1>"
						}
					}
				}
				
				var titlecomlete="<ul style='"+titledis+"'>"+titletotval+"</ul>"
				 */
				
			    $("#titledir").append(titletotval);
		  event.stopPropagation();
});

  //search for banking
   $("#banking").click(function(){
    //alert("The paragraph was clicked.");
	var textatm = "atm"
	 var textbank = "bank";
	 var textmoney ="money";
		 var resatm = new RegExp(textatm,"i");
		 var resbank = new RegExp(textbank,"i");
		 var resmoney = new RegExp(textmoney,"i");
		 $("#title").empty();
		 var dirresult=localStorage.getItem('directory');
		 var dRes=JSON.parse(dirresult);
		        var dirid=new Array();
				var directory=new Array();
				var dirtitle=new Array();
				var dircaption=new Array();
				var dirColor=new Array();
				var dirLogo=new Array();
				var dirurl=new Array();
				var styles=new Array();
				var TitleColor=new Array();
				var TitleFont=new Array();
				var dirlogoDis=new Array();
				var titleval;
				var titletotval="";
				var titletotval1="";
				var titletotval2="";
				var character="";
				var titledis="";
				var titlecapDis="";
				
				//dRes.sort();
				if(dRes.length==0){
					titledis='display:none';
				}
	            for(var i=0;i<dRes.length;i++){
					
					
						if((resatm.test(dRes[i].Title))||(resbank.test(dRes[i].Title))||(resmoney.test(dRes[i].Title))){
							if(dRes[i].LocationId==id){
						//	console.log(dRes[i]);
						dirtitle[i]=dRes[i].Title;
						dircaption[i]=dRes[i].Caption;
						dirid[i]=dRes[i].objectId;
						dirLogo[i]=dRes[i].Picture;
						 styles[i]=dRes[i].StyleId;
						 if(dirLogo[i]!=undefined){
							 dirurl[i]=dirLogo[i].url;
							
						 }
						 else{
							  dirlogoDis[i]='display:none';
						 }
						if(styles[i]!=undefined)
						{
						 TitleColor[i]=styles[i].TitleColor;
						 TitleFont[i]=styles[i].TitleFont;
						 
						}
						if(dircaption[i]==undefined)
						{
						 titlecapDis='display:none';
						}
						//
						var json={"title":dirtitle[i],
								  "caption":dircaption[i],
								  "dirid":dirid[i],
								  "dirlogo":dirurl[i],
								  "titlecolor":TitleColor[i],
								  "titlefont": TitleFont[i],
								  "dirlogodis": dirlogoDis[i]
								  };
						directory.push(json);
					  // console.log(json);
					}
				 }
			}
				//console.log(directory[0]);
				function compare(a,b) {
                       if (a.title < b.title)
                           return -1;
                       if (a.title > b.title)
                           return 1;
                            return 0;
                             }
				directory.sort(compare);
				for(var i=0;i<directory.length;i++){
				  
					for(var j=i;j<directory.length;j++){
						if(directory[i].title.charAt(0)==directory[j].title.charAt(0)){
							titleval="<a href='description.html?title="+locationtitile+"&id="+directory[j].dirid+"&header="+directory[j].title+"'><li class='normalListStyle' ><img src='"+directory[j].dirlogo+"' class='dirlogo pull-left' style='"+directory[j].dirlogodis+"'>"+directory[j].title+"<img src='./img/right.jpg' class='pull-right'><p style='font-size:11px;"+titlecapDis+"' class='caps'>"+directory[j].caption+"</p></li></a>";
						    titletotval1=titletotval1+titleval;
							if(j==directory.length-1){
								character="<li class='mainStyleList'>"+directory[i].title.charAt(0)+"</li>"
							titletotval2=character+titletotval1;
							titletotval=titletotval+titletotval2;
							i=(directory.length-1);
							}
						}
						else{
							character="<li class='mainStyleList'>"+directory[i].title.charAt(0)+"</li>"
							titletotval2=character+titletotval1;
							titletotval=titletotval+titletotval2;
							i=j;
							j=j-1;
							titleval='';
							titletotval1='';
							//character="<h1>"+directory[i].title.charAt(0)+"</h1>"
						}
					}
				}
				
				var titlecomlete="<ul style='"+titledis+"'>"+titletotval+"</ul>"
				
				
			    $("#title").append(titlecomlete);
		  event.stopPropagation();
});
 //search for transport 
 $("#transport").click(function(){
    //alert("The paragraph was clicked.");
	var texttransport = "transport"
	 var textairport = "airport";
		 var restransport = new RegExp(texttransport,"i");
		 var resairport = new RegExp(textairport,"i");
		 $("#title").empty();
		 var dirresult=localStorage.getItem('directory');
		 var dRes=JSON.parse(dirresult);
		        var dirid=new Array();
				var directory=new Array();
				var dirtitle=new Array();
				var dircaption=new Array();
				var dirColor=new Array();
				var dirLogo=new Array();
				var dirurl=new Array();
				var styles=new Array();
				var TitleColor=new Array();
				var TitleFont=new Array();
				var dirlogoDis=new Array();
				var titleval;
				var titletotval="";
				var titletotval1="";
				var titletotval2="";
				var character="";
				var titledis="";
				var titlecapDis="";
				
				//dRes.sort();
				if(dRes.length==0){
					titledis='display:none';
				}
	            for(var i=0;i<dRes.length;i++){
					
					
						if((restransport.test(dRes[i].Title))||(resairport.test(dRes[i].Title))){
							if(dRes[i].LocationId==id){
							//console.log(dRes[i]);
						dirtitle[i]=dRes[i].Title;
						dircaption[i]=dRes[i].Caption;
						dirid[i]=dRes[i].objectId;
						dirLogo[i]=dRes[i].Picture;
						 styles[i]=dRes[i].StyleId;
						 if(dirLogo[i]!=undefined){
							 dirurl[i]=dirLogo[i].url;
							
						 }
						 else{
							  dirlogoDis[i]='display:none';
						 }
						if(styles[i]!=undefined)
						{
						 TitleColor[i]=styles[i].TitleColor;
						 TitleFont[i]=styles[i].TitleFont;
						 
						}
						if(dircaption[i]==undefined)
						{
						 titlecapDis='display:none';
						}
						//
						var json={"title":dirtitle[i],
								  "caption":dircaption[i],
								  "dirid":dirid[i],
								  "dirlogo":dirurl[i],
								  "titlecolor":TitleColor[i],
								  "titlefont": TitleFont[i],
								  "dirlogodis": dirlogoDis[i]
								  };
						directory.push(json);
					//   console.log(json);
					}
				 }
			}
				//console.log(directory[0]);
				function compare(a,b) {
                       if (a.title < b.title)
                           return -1;
                       if (a.title > b.title)
                           return 1;
                            return 0;
                             }
				directory.sort(compare);
				for(var i=0;i<directory.length;i++){
				  
					for(var j=i;j<directory.length;j++){
						if(directory[i].title.charAt(0)==directory[j].title.charAt(0)){
							
								titleval="<a href='description.html?title="+locationtitile+"&id="+directory[j].dirid+"&header="+directory[j].title+"'><li class='normalListStyle' ><img src='"+directory[j].dirlogo+"' class='dirlogo pull-left' style='"+directory[j].dirlogodis+"'>"+directory[j].title+"<img src='./img/right.jpg' class='pull-right'><p style='font-size:11px;"+titlecapDis+"' class='caps'>"+directory[j].caption+"</p></li></a>";
								titletotval1=titletotval1+titleval;
								if(j==directory.length-1){
									character="<li class='mainStyleList'>"+directory[i].title.charAt(0)+"</li>"
								titletotval2=character+titletotval1;
								titletotval=titletotval+titletotval2;
								i=(directory.length-1);
								}
						}
						else{
							character="<li class='mainStyleList'>"+directory[i].title.charAt(0)+"</li>"
							titletotval2=character+titletotval1;
							titletotval=titletotval+titletotval2;
							i=j;
							j=j-1;
							titleval='';
							titletotval1='';
							//character="<h1>"+directory[i].title.charAt(0)+"</h1>"
						}
					}
				}
				
				var titlecomlete="<ul style='"+titledis+"'>"+titletotval+"</ul>"
				
				
			    $("#title").append(titlecomlete);
		  event.stopPropagation();
});
	

  
	