    var PARSE_APP = "FAbluZyN0hpXGpudGXrt9WOgvUQCxey3KEGALLle";
    var PARSE_JS = "diTLB99p5GHZED8SDzZ4ysNMMyXTXzJOcJi2Qww6";
	var id;
		var dirid=new Array();
	
	var locationtitile;
	 
  /*   window.onpaint = myFunction() */
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
		
	
	//content of app
   var locItem = Parse.Object.extend("Location");
   var locQuery = new Parse.Query(locItem);
   locQuery.equalTo('objectId',id);
   locQuery.find().then(function(result){
	   console.log(result[0]);
	   localStorage.setItem( 'Hotel',JSON.stringify(result));
	  if(result[0]=="undefined"||result[0]==null)
	  {
			  console.log(result[0]);
			var tempItem = Parse.Object.extend("Template");
		   var tempQuery = new Parse.Query(tempItem);
		   tempQuery.equalTo('objectId',id);
			tempQuery.find().then(function(result){
			      locationtitile=result[0].get("Name");
			      locationaddress1=result[0].get("Address1");
				  locationaddress2=result[0].get("Address2");
				  locationstreet=result[0].get("Street");
				  locationtown=result[0].get("Town");
				  locationzip=result[0].get("zipcode");
				  locationcountry=result[0].get("Country");
				  locationgeo=result[0].get("Geopoints");
				  locationLogo=result[0].get("Logo");
				  locationHotelLogo=result[0].get("HotelLogo");
				  locationMessage=result[0].get("description");
					   
			   var parentid=result[0].id;
			  
				localStorage.setItem( 'parentid',JSON.stringify(parentid));
				 localStorage.setItem( 'HotelTitle',JSON.stringify(locationtitile));
				$("#location").html(locationtitile);
				if((locationaddress1==undefined)&&(locationaddress2==undefined)&&(locationstreet==undefined)&&(locationtown==undefined)&&(locationzip==undefined)&&(locationcountry==undefined)){
						locationgeopoints="display:none;";
						$('.mapfun').attr("style",locationgeopoints)
		            }
					if((locationaddress1==undefined)&&(locationaddress2==undefined)&&(locationstreet==undefined)&&(locationtown==undefined)&&(locationzip==undefined)&&(locationcountry==undefined)&&(locationLogo==undefined)&&(locationHotelLogo==undefined)&&(locationMessage==undefined)){
						locationcontent="display:none;";
						$('.locationcontent').attr("style",locationcontent)
		            }
				
			   });
		   
	  }
	  else{
		 
		 var locationimg,locationhotelimg,loctionBackground,locTextFont,locationMsg,locFooterBackground,footerimg,locCaptionstyle;
		 locationtitile=result[0].get("Name");
		 locationcaption=result[0].get("hotelCaption")
		 locationLogo=result[0].get("Logo");
		 locationHotelLogo=result[0].get("HotelLogo");
		 locationMessage=result[0].get("description");
		 locationfooterimg=result[0].get("FooterImage");
		 locationfooterText=result[0].get("footerText");
		  locationaddress1=result[0].get("Address1");
		  locationaddress2=result[0].get("Address2");
		  locationstreet=result[0].get("Street");
		  locationtown=result[0].get("Town");
		  locationzip=result[0].get("zipcode");
		  locationcountry=result[0].get("Country");
		  locationgeo=result[0].get("Geopoints");
		  locationhtml=result[0].get("HtmlContent");
		  locationstyle=result[0].get("StyleId");
		  /* locationFrontDesk=result[0].get("FrontDesk")
		  locationBellDesk=result[0].get("BellDesk")
		  locationMaidDesk=result[0].get("MaidDesk")
		  locationEmergency=result[0].get("Emergency")
		  locationLocalAttractions=result[0].get("LocalAttractions");
		  locationHotelDirectory=result[0].get("HotelDirectory") */
		  var loationStyleid=locationstyle.id 
		  
		id=result[0].get("Directories");
	
		
		
		if(locationLogo!=undefined){
					 locationimg=locationLogo._url;
					  imgstyle="margin-top:5px;"
						$('#locationlogo').attr("src",locationimg).attr("style",imgstyle);
				 }
				 else{
					  locationimg='display:none;margin-top:0px;margin-bottom:0px !important';
					  	$('#locationlogo').attr("style",locationimg);
				 }
		if(locationHotelLogo!=undefined){
					 locationhotelimg=locationHotelLogo._url;
					
						$('#locationhotellogo').attr("src",locationhotelimg);
				 }
				 else{
					  locationhotelimg='display:none;margin-top:0px;margin-bottom:0px !important';
					  	$('#locationhotellogo').attr("style",locationhotelimg)
				 }
		
		
	   if(locationaddress1==undefined){
					 locationadd1='display:none;margin-top:0px';
		          }else{
					  locationadd1="";
				  }

		if(locationaddress2==undefined){
					 locationadd2="display:none;margin-top:0px";
		          }else{
					  locationadd2="";
				  }
				  
        if(locationstreet==undefined){
					 locationst="display:none;margin-top:0px";
		          }
				  else{
					  locationst="";
				  }
				  	
		if(locationtown==undefined){
					 locationtwn="display:none;margin-top:0px";
		          }
				  else{
					  locationtwn="";
				  }
		if(locationzip==undefined){
					 locationzipcode="display:none;margin-top:0px";
		          }else{
					  locationzipcode="";
				  }
		if(locationcountry==undefined){
					 locationctry="display:none;margin-top:0px";
		          }else{
					  locationctry="";
				  }
				  
		if((locationaddress1==undefined)&&(locationaddress2==undefined)&&(locationstreet==undefined)&&(locationtown==undefined)&&(locationzip==undefined)&&(locationcountry==undefined)){
			locationgeopoints="display:none;";
			$('.mapfun').attr("style",locationgeopoints)
		}		  		  
        if(locationgeo==undefined){
					 locationgeopoints="display:none;";
					 locationlat="";
					 locationlang="";
					 /* style="margin:auto;width:100%"
					 $('#geocss').attr("style",style) */
					 style="col-md-12"
					 styleclass="text-center"
					 $('.geocss').attr("class",style)
					 
		          }
				  else{
					  locationlat=locationgeo.latitude;
					  locationlang=locationgeo.longitude;
					  locationgeopoints="display:show;";
					  styleclass="text-left addPadding"
				  }	
			if(loationStyleid!=undefined){
			   var locStyle = Parse.Object.extend("Style");
			   var StyleQuery = new Parse.Query(locStyle);
			   StyleQuery.equalTo('objectId',loationStyleid);
			   StyleQuery.find().then(function(result){
				   localStorage.setItem('locationBrandstyle',JSON.stringify(result));
				   locTitleColor=result[0].get("hotelTitleColor");
				    locTitleFont=result[0].get("hotelTitleFont");
					 locTitleFontFamily=result[0].get("hotelTitleFontFamily");
				   locCaptionColor=result[0].get("hotelCaptionColor")
				    locCaptionFont=result[0].get("hotelCaptionFont")
					 locCaptionFontFamily=result[0].get("hotelCaptionFontFamily")
				   locBackground=result[0].get("LocationBackground")
					locTextBackground=result[0].get("LocationTextBackground");
					locHtmlColor=result[0].get("HtmlContentColor")
					locHtmlFont=result[0].get("HtmlContentFont")
					locFooterBackground=result[0].get("LocationFooterBackground")
					locAddressFont=result[0].get("LocationAddressFont");
					locAddressFontColor=result[0].get("LocationAddressFontColor")
					locFooterTextFont=result[0].get("footerFont");
					locFooterTextFontfamily=result[0].get("footerCaptionFamily");
					locFooterTextColor=result[0].get("FooterTextColor");
							if(locationtitile==undefined){
								locTitleStyle="display:none"
								$(".titlestyle").attr("style",locTitlestyle);
								
							}else{
								 locTitle="<text style='color:#"+locTitleColor+";font-size:"+locTitleFont+";font-family:"+locTitleFontFamily+"'>"+locationtitile+"</text>"
								  localStorage.setItem( 'HotelTitle',JSON.stringify(locTitle));
								   	$("#location").html(locTitle);
								 
							}
							if(locationcaption==undefined){
									locCaptionstyle="display:none";
									$(".captionstyle").attr("style",locCaptionstyle);
							 }
							else{
								  
								   locCaption="<text style='color:#"+locCaptionColor+";font-size:"+locCaptionFont+";font-family:"+locCaptionFontFamily+"'>"+locationcaption+"</text>"
								   localStorage.setItem( 'HotelCaption',JSON.stringify(locCaption));
								   $("#locationcaption").html(locCaption);
			
								   
								}
							   if(locBackground!=undefined){
								   loctionBackground="background-color:#"+locBackground;
									 localStorage.setItem( 'Hotelbackground',JSON.stringify(loctionBackground));
								   $("#locationbackground").attr("style",loctionBackground)
							   }
								 if(locationMessage==undefined){
									locationmsg='display:none';
									$('#locationmessage').attr("style",locationmsg)
									}else{
										locationMsg="<div class='section'style='background-color:#"+locTextBackground+"'><div class='container'><div class='row' ><div class='col-md-12 text-center'>"+locationMessage+"</div></div></div></div>"
									  $('#locationmessage').html(locationMsg)
									}
                            /* if(locationhtml==undefined){
							locationhtml='display:none';
							$('#locationhtml').attr("style",locationhtml)
							}else{
								locationHtml="<div class='section'><div class='container'><div class='row' ><div class='col-md-12 text-center' style='font-size:"+
						      locHtmlFont+";color:#"+locHtmlColor+";'>"+locationhtml+"</div></div></div></div>"
							  $('#locationhtml').html(locationHtml)
							}
                            										 */
							if(locationfooterimg!=undefined){
									 footerimage=locationfooterimg._url;
									footerimg="<div style='background-color:#"+locFooterBackground+";margin-top:5px;' ><center><img class='footer' src='"+footerimage+"'></center></div>"
									localStorage.setItem( 'Hotelfooter',JSON.stringify(footerimg));
									  $('#footerimage').html(footerimg)
								 }
								 else{
									 
									  footerimage='display:none';
									    $('#footerimage').attr("styles",footerimage)
								 }
						 
						   if(locationfooterText!=undefined){
							   
							   footerText="<center><text style='font-size:"+
						      locFooterTextFont+";font-family:"+locFooterTextFontfamily+";color:#"+locFooterTextColor+";'>"+locationfooterText+"</text></center>"	
									localStorage.setItem( 'HotelfooterText',JSON.stringify(footerText));
									  $('#footerText').html(footerText)
							   
						   }else{
							   footerText='display:none';
							   $('#footerText').attr("styles",footerText)
						   }
					   
						 var dirlocationdetails="<address class='"+styleclass+"' style='color:#"+locAddressFontColor+";font-size:"+locAddressFont+"'>"+
						 "<text style='"+locationadd1+"'>"+locationaddress1+"</text><br>"+
						 "<text style='"+locationadd2+"'>"+locationaddress2+"</text><br>"+
						 "<text style='"+locationst+"'>"+locationstreet+"<text style='"+locationtwn+"'>, "+locationtown+"</text></text><br>"+
						 "<text style='"+locationzipcode+"'>"+locationzip+"</text><br>"+"<text style='"+locationctry+"'>"+locationcountry+"</text></address>"
						 	$("#dirlocationdetails").html(dirlocationdetails);
		       });
			   
		  }
        
		  
		
		 var geomap="<a style='"+locationgeopoints+"' onclick='myNavFunc(this.id,this.lang)' id='"+locationlat+"' lang='"+locationlang+"' class='mapPadding'>"+
		 "<img class = 'map-logo' src='./images/map.jpg'  alt = '' >"+
		 "<p  class='mapPadding' style='margin-left:9%'> &nbsp Directions</p><a>"
		
		localStorage.setItem( 'parentid',JSON.stringify(id));
	
	
		
		
		
		
		$("#locationgeomap").html(geomap);
	
		
		/* $("#locationFrontDesk").attr("href","tel:"+locationFrontDesk);
		$("#locationBellDesk").attr("href","tel:"+locationBellDesk);
		$("#locationMaidDesk").attr("href","tel:"+locationMaidDesk);
		$("#locationEmergency").attr("href","tel:"+locationEmergency);
		$("#locationLocalAttractions").attr("href","http://"+locationLocalAttractions)
		$("#locationHotelDirectory").attr("href","http://"+locationHotelDirectory) */
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
							dirid[i]=dRes[i].id;
							dirLogo[i]=dRes[i].get("Picture");
				if(dirLogo[i]!=undefined){
					 dirurl[i]=dirLogo[i]._url;
					
				 }
				 else{
					  dirlogoDis[i]='display:none;';
					  dirbutton[i]='margin-left:44px!important';
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
						var brandresult=localStorage.getItem('locationBrandstyle');
		                var bRes=JSON.parse(brandresult);
						if(bRes!=null){
							console.log(bRes)
						var brandButtonColor=bRes[0].BrandButtonColor;
						var brandFontColor=bRes[0].BrandFontColor;
						var brandFontFamily=bRes[0].BrandFontFamily;

						}
						
					 titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton' style='background-color:#"+brandButtonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";'>"+dirtitle[i]+"</button></a></span></div>";	
					titletotval=titletotval+titleval;
				
				}
				
			}	
			
			
				
			$("#titledir").html(titletotval);
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
   //header
	  var MenuItem = Parse.Object.extend("HotelMenuList");
   var MenuQuery = new Parse.Query(MenuItem);
   MenuQuery.equalTo('HotelId',id);
   MenuQuery.find().then(function(menuRes){
	   localStorage.setItem( 'HotelMenu',JSON.stringify(menuRes));
	      var menuDesc=new Array();
	      var menuSequence=new Array();
		  var menuIcon=new Array();
		  var menuIconSeq=new Array();
		  var menuAction=new Array();
		  var menuUrl=new Array();
		  var menuUrlDis=new Array();
		    var menuOrder=new Array();
			var iconOrder=new Array();
			var menulist,totmenulist="",iconlist,toticonlist="";
	    for(var i=0;i<menuRes.length;i++){
			menuDesc[i]=menuRes[i].get("MenuDescription");
			menuSequence[i]=menuRes[i].get("MenuSequence");
			menuIcon[i]=menuRes[i].get("Icon");
			menuIconSeq[i]=menuRes[i].get("IconSequence");
			menuAction[i]=menuRes[i].get("IconAction");
			if(menuIcon[i]!=undefined){
					 menuUrl[i]=menuIcon[i]._url;
					
				 }
				 else{
					  menuUrlDis[i]='display:none;';
					 
				 }
			
			if((menuSequence[i]!=undefined))
			{
				var json={"menuDesc":menuDesc[i],
				          "menuSequence":menuSequence[i],
				          "menuIcon":menuUrl[i],
						  "menuAction":menuAction[i]
						  };
					menuOrder.push(json);
			}
			if((menuIconSeq[i]!=undefined))
			{
				var json={"menuDesc":menuDesc[i],
				          "menuIconSeq":menuIconSeq[i],
				          "menuIcon":menuUrl[i],
						  "menuAction":menuAction[i]
						  };
					iconOrder.push(json);
			}
			
		}
					//menuicons
					menuOrder.sort(function(a, b) {
				return parseInt(a.menuSequence) - parseInt(b.menuSequence);
				  });
		
				var callItems=["Service","Front Desk","Bellman","Bellman/Baggage","Baggage","Maid Service","Emergency"];
				var webItems=["Local Attractions","Hotel Directory"];
				var searchItems=["Food and Beverage","Taxi","House Phone"] 
				for(var i=0;i<menuOrder.length;i++){
					var mlink="";
					for(j=0;j<callItems.length;j++)
					{
						if(menuOrder[i].menuDesc==callItems[j])
						{
							mlink="href='tel:"+menuOrder[i].menuAction+"'";
						}
						 
					}
					
					
					 for(k=0;k<webItems.length;k++)
					{
						if(menuOrder[i].menuDesc==webItems[k])
						{
							mlink="href='http://"+menuOrder[i].menuAction+"'";
						}
						 
					}
					for(k=0;k<searchItems.length;k++)
					{
						if(menuOrder[i].menuDesc==searchItems[k])
						{
							mlink="id='"+menuOrder[i].menuDesc+"' onclick='searchField(this.id)'";
						}
						 
					}
					
					 /* if(menuOrder[i].menuDesc=="Home"){
						 mlink="href='directories.html?id="+id+"'";
						 
					 } */
						 
					/* menulist="<a "+mlink+"><img src="+menuOrder[i].menuIcon+" class='iconimg' title="+menuOrder[i].menuDesc+"><br>"+menuOrder[i].menuDesc+"</a>" */
					menulist="<a "+mlink+">"+menuOrder[i].menuDesc+"</a>"
					
					totmenulist=totmenulist+menulist;
				}
				 localStorage.setItem('menuicons',JSON.stringify(totmenulist));
				$(".menuItems").append(totmenulist);
				//access icons
					
					iconOrder.sort(function(a, b) {
						return parseInt(a.menuIconSeq) - parseInt(b.menuIconSeq);
						  });
				
				for(var i=0;i<iconOrder.length;i++){
					var alink=''
				    
					for(j=0;j<callItems.length;j++)
					{
						if(iconOrder[i].menuDesc==callItems[j])
						{
							alink="href='tel:"+iconOrder[i].menuAction+"'";
						}
						 
					}
					
					
					 for(k=0;k<webItems.length;k++)
					{
						if(iconOrder[i].menuDesc==webItems[k])
						{
							alink="href='http://"+iconOrder[i].menuAction+"'";
						}
						 
					}
					for(k=0;k<searchItems.length;k++)
					{
						if(iconOrder[i].menuDesc==searchItems[k])
						{
							alink="id='"+iconOrder[i].menuDesc+"' onclick='searchField(this.id)'";
						}
						 
					}
					
					/*  if(iconOrder[i].menuDesc=="Home"){
						 alink="href='directories.html?id="+id+"'";
						
					 } */
						 
					
					iconlist="<a "+alink+"><img src='"+iconOrder[i].menuIcon+"' class='iconimg' title='"+iconOrder[i].menuDesc+"'></a>"
					toticonlist=toticonlist+iconlist;
				}
				 localStorage.setItem('accessicons',JSON.stringify(toticonlist));
				$(".iconlist").append(toticonlist);
				
    });

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
						var brandresult=localStorage.getItem('locationBrandstyle');
		                var bRes=JSON.parse(brandresult);
						console.log(bRes)
						if(bRes!=null){
						var brandButtonColor=bRes[0].BrandButtonColor;
						var brandFontColor=bRes[0].BrandFontColor;
						var brandFontFamily=bRes[0].BrandFontFamily;
						}
						 titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?title="+locationtitile+"&id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton' style='background-color:#"+brandButtonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";'>"+dirtitle[i]+"</button></a></span></div>";	
					titletotval=titletotval+titleval;
					  
					}
				 }
			}
			$("#titledir").html(titletotval);
			
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
	
//
function searchField(field){
	
	var resfield = new RegExp(field,"i")
		//var resdining = new RegExp(textdining,"i");
		// var resfood = new RegExp(textfood,"i");
		// var resrestaurant = new RegExp(textrestaurant,"i");
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
					
					
						/* if((resdining.test(dRes[i].Title))||(resfood.test(dRes[i].Title))||(resrestaurant.test(dRes[i].Title))) */
						if(resfield.test(dRes[i].Title))
						{
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
						var brandresult=localStorage.getItem('locationBrandstyle');
		                var bRes=JSON.parse(brandresult);
						console.log(bRes)
						if(bRes!=null){
						var brandButtonColor=bRes[0].BrandButtonColor;
						var brandFontColor=bRes[0].BrandFontColor;
						var brandFontFamily=bRes[0].BrandFontFamily;
						}
						titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?title="+locationtitile+"&id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton' style='background-color:#"+brandButtonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";'>"+dirtitle[i]+"</button></a></span></div>";	
					    titletotval=titletotval+titleval;
				}
				 }
			}
			$("#titledir").html(titletotval);
		  event.stopPropagation();
	
}	

  

  
	