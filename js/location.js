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
	  
	  if(result[0]=="undefined"||result[0]==null)
	  {
			  var locTitleColor,locTitleFont,locTitleFontFamily,locCaptionColor,locCaptionFont,locCaptionFontFamily,locBackground,locFooterBackground,locFooterTextColor,locFooterTextFont,locFooterTextFontfamily
			var tempItem = Parse.Object.extend("Template");
		   var tempQuery = new Parse.Query(tempItem);
		   tempQuery.equalTo('objectId',id);
			tempQuery.find({
			 success: function(Tresult){
				 localStorage.setItem( 'Hotel',JSON.stringify(Tresult));
			      locationtitile=Tresult[0].get("Name");
				   locationcaption=Tresult[0].get("hotelCaption")
			      locationaddress1=Tresult[0].get("Address1");
				  locationaddress2=Tresult[0].get("Address2");
				  locationstreet=Tresult[0].get("Street");
				  locationtown=Tresult[0].get("Town");
				  locationzip=Tresult[0].get("zipcode");
				  locationcountry=Tresult[0].get("Country");
				  locationgeo=Tresult[0].get("Geopoints");
				  locationLogo=Tresult[0].get("Logo");
				  locationHotelLogo=Tresult[0].get("HotelLogo");
				  locationMessage=Tresult[0].get("description");
				   locationfooterText=Tresult[0].get("footerText");
				locationstyle=Tresult[0].get("StyleId");
			     var parentid=Tresult[0].id;
			   
				localStorage.setItem( 'parentid',JSON.stringify(parentid));
				/*  localStorage.setItem( 'HotelTitle',JSON.stringify(locationtitile)); */
				 if(locationstyle!=undefined){
					/*  StyleQuery(); */
				/* function StyleQuery(){ */
				 var loationStyleid=locationstyle.id 
			   var locStyle = Parse.Object.extend("Style");
			   var StyleQuery = new Parse.Query(locStyle);
			   StyleQuery.equalTo('objectId',loationStyleid);
			   StyleQuery.find({
				   success: function(Sresult){
					  
					   var brandresult=localStorage.getItem('locationBrandstyle');
		                var bRes=JSON.parse(brandresult);
					
				 localStorage.setItem('locationBrandstyle',JSON.stringify(Sresult));
				    locTitleColor=Sresult[0].get("hotelTitleColor");
				    locTitleFont=Sresult[0].get("hotelTitleFont");
					locTitleFontFamily=Sresult[0].get("hotelTitleFontFamily");
				    locCaptionColor=Sresult[0].get("hotelCaptionColor")
				    locCaptionFont=Sresult[0].get("hotelCaptionFont")
					locCaptionFontFamily=Sresult[0].get("hotelCaptionFontFamily")
				    locBackground=Sresult[0].get("LocationBackground")
                    locFooterBackground=Sresult[0].get("LocationFooterBackground")
					locFooterTextFont=Sresult[0].get("footerFont");
					locFooterTextFontfamily=Sresult[0].get("footerCaptionFamily");
					locFooterTextColor=Sresult[0].get("FooterTextColor");
					ShowTemplate()
					}     
					
		       });
			}   
			else{
				ShowTemplate()
			}function ShowTemplate(){
							if(locationtitile==undefined){
								locTitleStyle="display:none"
								$(".titlestyle").attr("style",locTitlestyle);
								
							}else{
								 locTitle="<text style='color:#"+locTitleColor+";font-size:"+locTitleFont+";font-family:"+locTitleFontFamily+"'>"+locationtitile+"</text>"
								  localStorage.setItem( 'HotelTitle',JSON.stringify(locTitle));
								 // console.log(locTitle)
								   	$("#location").html(locTitle);
								 
							}
							if(locationcaption==undefined){
									locCaptionstyle="display:none";
									$(".captionstyle").attr("style",locCaptionstyle);
							 }
							else{
								  
								   locCaption="<text style='color:#"+locCaptionColor+";font-size:"+locCaptionFont+";font-family:"+locCaptionFontFamily+"'>"+locationcaption+"</text>"
								   localStorage.setItem( 'HotelCaption',JSON.stringify(locCaption));
								  // console.log(locCaption)
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
										locationMsg="<div class='section'><div class='container'><div class='row' ><div class='col-md-12 '>"+locationMessage+"</div></div></div></div>"
									  $('#locationmessage').html(locationMsg)
									}
                           									 
							
						   if(locationfooterText!=undefined){
							   
							   footerText="<div style='background-color:#"+locFooterBackground+";margin-top:5px;' ><center><text style='font-size:"+
						      locFooterTextFont+";font-family:"+locFooterTextFontfamily+";color:#"+locFooterTextColor+";'>"+locationfooterText+"</text></center></div>"	
									localStorage.setItem( 'HotelfooterText',JSON.stringify(footerText));
									  $('#footerText').html(footerText)
							   
						   }else{
							   footerText='display:none';
							   $('#footerText').attr("styles",footerText)
						   }
						
			   
				 
			   
		  
				/* $("#location").html(locationtitile); */
				if((locationaddress1==undefined)&&(locationaddress2==undefined)&&(locationstreet==undefined)&&(locationtown==undefined)&&(locationzip==undefined)&&(locationcountry==undefined)){
						locationgeopoints="display:none;";
						$('.mapfun').attr("style",locationgeopoints)
		            }
					if((locationaddress1==undefined)&&(locationaddress2==undefined)&&(locationstreet==undefined)&&(locationtown==undefined)&&(locationzip==undefined)&&(locationcountry==undefined)&&(locationLogo==undefined)&&(locationHotelLogo==undefined)&&(locationMessage==undefined)){
						locationcontent="display:none;";
						$('.locationcontent').attr("style",locationcontent)
		            }
					
				 }//end of function
				 }
			   });
		   
	  }
	  else{
		 localStorage.setItem( 'Hotel',JSON.stringify(result));
		 var locationimg,locationhotelimg,loctionBackground,locTextFont,locationMsg,locFooterBackground,footerimg,locCaptionstyle;
		 locationtitile=result[0].get("Name");
		 locationcaption=result[0].get("hotelCaption")
		 locationLogo=result[0].get("Logo");
		 locationHotelLogo=result[0].get("hotelLogo");
		 locationMessage=result[0].get("description");
		 locationfooterimg=result[0].get("footerImage");
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
					 locationadd1='display:none;';
		          }else{
					  locationadd1="";
				  }

		if(locationaddress2==undefined){
					 locationadd2="display:none;";
		          }else{
					  locationadd2="";
				  }
				  
        if(locationstreet==undefined){
					 locationst="display:none;";
		          }
				  else{
					  locationst="";
				  }
				  	
		if(locationtown==undefined){
					 locationtwn="display:none;";
		          }
				  else{
					  locationtwn="";
				  }
		if(locationzip==undefined){
					 locationzipcode="display:none;";
		          }else{
					  locationzipcode="";
				  }
		if(locationcountry==undefined){
					 locationctry="display:none;";
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
					 addbr="<br>"
					 styleclass="text-center"
					 /* locationadd1="margin-right:60px;" */
					 $('.geocss').attr("class",style)
					 
		          }
				  else{
					  addbr=""
					  locationlat=locationgeo.latitude;
					  locationlang=locationgeo.longitude;
					  locationgeopoints="display:show;";
					  styleclass="text-left"
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
					locAddressFontFamily=result[0].get("LocationAddressFontFamily")
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
										locationMsg="<div class='section'><div class='container'><div class='row' ><div class='col-md-12 '>"+locationMessage+"</div></div></div></div>"
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
									footerimg="<div style='background-color:#"+locFooterBackground+";margin-top:5px;' ><center><img class='footer'style='width:100%;height:auto' src='"+footerimage+"'></center></div>"
									localStorage.setItem( 'Hotelfooter',JSON.stringify(footerimg));
									  $('#footerimage').html(footerimg)
								 }
								 else{
									 
									  footerimage='display:none';
									    $('#footerimage').attr("styles",footerimage)
								 }
						 
						   if(locationfooterText!=undefined){
							   
							   footerText="<div style='background-color:#"+locFooterBackground+";' ><center><text style='font-size:"+
						      locFooterTextFont+";font-family:"+locFooterTextFontfamily+";color:#"+locFooterTextColor+";'>"+locationfooterText+"</text></center></div>"	
									localStorage.setItem( 'HotelfooterText',JSON.stringify(footerText));
									  $('#footerText').html(footerText)
							   
						   }else{
							   footerText='display:none';
							   $('#footerText').attr("styles",footerText)
						   }
					   
						 var dirlocationdetails="<address class='"+styleclass+"' style='color:#"+locAddressFontColor+";font-size:"+locAddressFont+";font-family:"+locAddressFontFamily+"'>"+
						 addbr+
						 "<text style='"+locationadd1+"'>"+locationaddress1+"</text><br>"+
						 "<text style='"+locationadd2+"'>"+locationaddress2+"</text><br>"+
						 "<text style='"+locationst+"'>"+locationstreet+"<text style='"+locationtwn+"'>, "+locationtown+"</text></text><br>"+
						 "<text style='"+locationzipcode+"'>"+locationzip+"</text><br>"+"<text style='"+locationctry+"'>"+locationcountry+"</text></address>"
						 	$("#dirlocationdetails").html(dirlocationdetails);
		       });
			   
		  }
        
		  
		
		 var geomap="<a style='"+locationgeopoints+"' onclick='myNavFunc(this.id,this.lang)' id='"+locationlat+"' lang='"+locationlang+"' class='mapPadding'>"+
		 "<img class = 'imgaspects map-logo' style='cursor:pointer' src='./images/map.jpg'  alt = '' >"+
		 "<p  class='mapPadding text-center' > Map</p><a>"
		
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
		setTimeout(function(){
	    var dItem = Parse.Object.extend("DirectoryItem");
		var dItemQuery = new Parse.Query(dItem);
		dItemQuery.limit(1000);
		dItemQuery.include("StyleId")
		dItemQuery.equalTo('LocationId', id);
		dItemQuery.ascending("CustomizedOrder");
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
						/* console.log(bRes) */
						if(bRes!=null){
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
		});
	},1000)		//end for directory items
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
		  var menuActionType=new Array();
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
			menuActionType[i]=menuRes[i].get("ActionType");
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
						  "menuAction":menuAction[i],
						  "menuActionType":menuActionType[i]
						  };
					menuOrder.push(json);
			}
			if((menuIconSeq[i]!=undefined))
			{
				var json={"menuDesc":menuDesc[i],
				          "menuIconSeq":menuIconSeq[i],
				          "menuIcon":menuUrl[i],
						  "menuAction":menuAction[i],
						  "menuActionType":menuActionType[i]
						  };
					iconOrder.push(json);
			}
			
		}
					//menuicons
					menuOrder.sort(function(a, b) {
				return parseInt(a.menuSequence) - parseInt(b.menuSequence);
				  });
		
				for(var i=0;i<menuOrder.length;i++){
					var mlink="";
					//console.log(menuOrder[i].menuActionType);
					if(menuOrder[i].menuActionType=="Phone Number"){
						mlink="href='tel:"+menuOrder[i].menuAction+"'";
					}
					else if(menuOrder[i].menuActionType=="URL"){
						mlink="href='http://"+menuOrder[i].menuAction+"' target='_blank'";
					}
					else{
					    mlink="id='"+menuOrder[i].menuAction+"'  onclick='searchField(this.id)'";
					}
					
					
					menulist="<a "+mlink+" style='cursor:pointer'>"+menuOrder[i].menuDesc+"</a>"
					
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
				    if(iconOrder[i].menuActionType=="Phone Number"){
						alink="href='tel:"+iconOrder[i].menuAction+"'";
					}
					else if(iconOrder[i].menuActionType=="URL"){
						alink="href='http://"+iconOrder[i].menuAction+"' target='_blank'";
					}
					else{
					    alink="id='"+iconOrder[i].menuAction+"' onclick='searchField(this.id)'";
					}
					
					
					
						 
					
					iconlist="<a "+alink+" style='cursor:pointer'><img src='"+iconOrder[i].menuIcon+"' class='iconimg' title='"+iconOrder[i].menuDesc+"'></a>"
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
						//console.log(bRes)
						if(bRes!=null){
						var brandButtonColor=bRes[0].BrandButtonColor;
						var brandFontColor=bRes[0].BrandFontColor;
						var brandFontFamily=bRes[0].BrandFontFamily;
						}
						 titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton' style='background-color:#"+brandButtonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";'>"+dirtitle[i]+"</button></a></span></div>";	
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
/* function searchField(field){
	
	var resfield = new RegExp(field,"i")
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
				
				
				if(dRes.length==0){
					titledis='display:none';
				}
	            for(var i=0;i<dRes.length;i++){
					
					
						
						if(resfield.test(dRes[i].Title))
						{
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
	
}	 */

function searchField(field){
	
	
			
		 var dirresult=localStorage.getItem('directory');
		 var dRes=JSON.parse(dirresult);
		 
		        
				
				if(dRes.length==0){
					titledis='display:none';
				}
	            for(var i=0;i<dRes.length;i++){
					
					var dtitle=(dRes[i].Title).toUpperCase();
					var sfield=field.toUpperCase();
						
						if(dtitle==sfield)
						{
							
							
							//console.log(field);
							window.open("description.html?id="+dRes[i].objectId,"_self");
							i=dRes.length
				        }
						
				 }
			
			
		  event.stopPropagation();
	
}	

  

  
	