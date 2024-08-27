console.log("hello  dev")
const d1=document.querySelector(".nav-design1");
const d2=document.querySelector(".nav-design2");
const BIcon=document.querySelector(".burger-icon"); BIcon.addEventListener("mouseover",function(){ d1.style.opacity="1";d1.style.marginLeft="90vw"; 
                                                                                                   d2.style.opacity="1";d2.style.marginLeft="93vw";});
      BIcon.addEventListener("mouseout",function(){ d1.style.opacity="0.1"; d1.style.marginLeft="30vw";
	                                                d2.style.opacity="0.1";d2.style.marginLeft="35vw";});
													
 const im1=document.querySelector(".img1");
  const im2=document.querySelector(".img2");
   const im3=document.querySelector(".img3");
   im1.addEventListener("mouseover",function(){im1.style.backgroundImage="url('l.png')";});im1.addEventListener("mouseout",function(){im1.style.backgroundImage="url('01.png')";});
   im2.addEventListener("mouseover",function(){im2.style.backgroundImage="url('c.png')";});im2.addEventListener("mouseout",function(){im2.style.backgroundImage="url('03.png')";});
   im3.addEventListener("mouseover",function(){im3.style.backgroundImage="url('r.png')";});im3.addEventListener("mouseout",function(){im3.style.backgroundImage="url('02.png')";});
   
   const hlp1=document.querySelector(".help1"); const dtl1=document.querySelector(".detail1");
    const hlp2=document.querySelector(".help2");const dtl2=document.querySelector(".detail2");
	 const hlp3=document.querySelector(".help3");const dtl3=document.querySelector(".detail3");
	  
	  hlp1.addEventListener("mouseover",function(){dtl1.style.height="15vh"});hlp1.addEventListener("mouseout",function(){dtl1.style.height="0vh"});
       hlp2.addEventListener("mouseover",function(){dtl2.style.height="15vh"});hlp2.addEventListener("mouseout",function(){dtl2.style.height="0vh"});
        hlp3.addEventListener("mouseover",function(){dtl3.style.height="15vh"});hlp3.addEventListener("mouseout",function(){dtl3.style.height="0vh"});	   
		
		dtl1.addEventListener("mouseover",function(){dtl1.style.height="15vh"});dtl1.addEventListener("mouseout",function(){dtl1.style.height="0vh"});
		dtl2.addEventListener("mouseover",function(){dtl2.style.height="15vh"});dtl2.addEventListener("mouseout",function(){dtl2.style.height="0vh"});
		dtl3.addEventListener("mouseover",function(){dtl3.style.height="15vh"});dtl3.addEventListener("mouseout",function(){dtl3.style.height="0vh"});


const HeadVisual=document.querySelector(".header-visual");	
const btn1=document.querySelector(".button1");btn1.addEventListener("click",buttonOne);
const btn2=document.querySelector(".button2");btn2.addEventListener("click",buttonTwo);
const btn3=document.querySelector(".button3");btn3.addEventListener("click",buttonThree);
		function buttonOne(){HeadVisual.style.backgroundImage="url('fashion.png')"};
		function buttonTwo(){HeadVisual.style.backgroundImage="url('gadgets.png')"
		                     HeadVisual.style.width="70vw;"};
		function buttonThree(){HeadVisual.style.backgroundImage="url('lifestyle.png')"}
		
		const  shwcse=document.querySelector(".showcase");
const  prdctOption1=document.querySelector(".product-option1");prdctOption1.addEventListener("mouseover",function(){shwcse.style.backgroundImage="url('shoe.jpeg')"});
const  prdctOption2=document.querySelector(".product-option2");prdctOption2.addEventListener("mouseover",function(){shwcse.style.backgroundImage="url('jacketsample.jpeg')"});
const  prdctOption3=document.querySelector(".product-option3");prdctOption3.addEventListener("mouseover",function(){shwcse.style.backgroundImage="url('jkt222.jpeg')"});

const iconOptionB4=["url('ic1.png')",
                    "url('ic2.png')",
					"url('ic3.png')",
					"url('ic4.png')"]

const iconsB4=document.querySelectorAll(".bdes");

for(let i=0;i<iconsB4.length;i++){ iconsB4[i].style.backgroundImage=iconOptionB4[i];}

const cntntImg=["url('bg1.jpeg')",
                "url('bg2.png')",
			    "url('bg3.png')",
			    "url('bg4.jpeg')",
				"url('bg5.png')",
				"url('bg6.png')"]
const contntItms=document.querySelectorAll("#content-items");
 for(let i=0;i<contntItms.length;i++){contntItms[i].style.backgroundImage=cntntImg[i];}
 
 const xt=document.querySelector(".exit");
 const  contentBx=document.querySelector(".content-box");
 const hoverIcon=document.querySelector(".hover-icon");
 hoverIcon.addEventListener("mouseover",function(){contentBx.style.overflow="visible",
                                                   contentBx.style.height="40vh",
												   contentBx.style.top="20vh"});
   xt.addEventListener("click",function(){contentBx.style.overflow="hidden",
                                                   contentBx.style.height="0vh",
												   contentBx.style.top="40vh"});
												   
												  



const sitemapWrapper=document.querySelector(".sitemap-wrapper");


const siteMap=document.querySelector(".sitemap")
siteMap.addEventListener("mouseover",function(){sitemapWrapper.style.display="block";})
                                                                                         
siteMap.addEventListener("mouseout",function(){sitemapWrapper.style.display="none";})	


const galbtn=document.querySelector(".galery-btn");
const xt3=document.querySelector(".exit3");		
const galcont=document.querySelector(".galery-container");	
galbtn.addEventListener("click",function(){galcont.style.display="block"})	
xt3.addEventListener("click",function(){galcont.style.display="none"})	


const helpDetails=document.querySelector(".help-details");
const pageSevenHelp=document.querySelector(".help7");
pageSevenHelp.addEventListener("mouseover",function(){helpDetails.style.width="50vw",
                                                   helpDetails.style.height="30vh"})
pageSevenHelp.addEventListener("mouseout",function(){helpDetails.style.width="0vw",
                                                   helpDetails.style.height="0vh"})												   
helpDetails.addEventListener("mouseover",function(){helpDetails.style.width="50vw",
                                                   helpDetails.style.height="30vh"})												   
helpDetails.addEventListener("mouseout",function(){helpDetails.style.width="0vw",
                                                   helpDetails.style.height="0vh"})


const imagez=document.querySelectorAll(".imagz");	
const imgz=[//'url("wow.png")',
            ]	;// this  is  the galery  content link dump		

for(let i=0;i<imagez.length;i++){imagez[i].style.backgroundImage=imgz[i];
console.log(imagez.length);}			
/*---------------------------------------------------*/
/*-const galeryButton=document.querySelectorAll(".galery");
const galeryOne=document.querySelector(".galery1");
const galeryTwo=document.querySelector(".galery2");
const galeryThree=document.querySelector(".galery3");----*/
const galery=document.querySelectorAll(".galery-items");

const galeryStrip=['url("w01.png")','url("w02.png")','url("w03.png")','url("w04.png")',
                   'url("b01.png")', 'url("b02.png")', 'url("b03.png")','url( "b04.png")',
				   'url("r01.png")', 'url("r02.png")', 'url("r03.png")', 'url("r04.png")',
				   ]
				   
for (let i = 0; i < galery.length; i++) {
    galery[i].style.backgroundImage=galeryStrip[i]
		      };
			  
			  
        window.onload = function() {
            setTimeout(function() {
                document.querySelector('.loader').style.display = 'none';
				 if (loader.style.display !== 'none') { alert('The loader is taking longer than expected. Please restart your browser.');}
            }, 1000); // Hide after 5 seconds (5000 milliseconds)
			console.log("loader closed")
        };/*-----code from copilot---------*/
			  

			  
			  
