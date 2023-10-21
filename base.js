$(document).ready( function() {

	/* SHRINK NAV*/
	$(document).on("scroll",function(){
	  if ($(document).scrollTop() > 200){
		$("#main_nav").addClass("pt-lg-0"); $("#main_nav .nav-link").removeClass("pb-lg-3"); $(".navbar-brand").addClass("pt-lg-2").removeClass("pt-0");
		$("#Comscore_logo").attr("width",135);
	  } else if ($(document).scrollTop() < 100){
		$("#main_nav").removeClass("pt-lg-0"); $("#main_nav .nav-link").addClass("pb-lg-3"); $(".navbar-brand").removeClass("pt-lg-2").addClass("pt-0"); $("#Comscore_logo").attr("width",170);
	  }
	});


	/* SCROLL TO AND FOCUS ON SEARCH INPUT UPON OPENING */
	$('#search_collapse').on('shown.bs.collapse', function (e) {
		$("html, body").animate({scrollTop:0}, 800);
		$("#search_input").focus();});

	
	
	/* FALLBACK FOR BROWSERS NOT SUPPORTING MIXBLENDMODE*/
	if(typeof window.getComputedStyle(document.body).backgroundBlendMode == 'undefined'){document.documentElement.className += " no-background-blend-mode";}

    /* POPUP WINDOWS */
    $('a.popup').click(function() {
        if ($(this).attr('href').length > 0) {
            // LEAD SOURCE FROM NS_MCHANNEL
            var title=$(this).attr('title');
            var url=$(this).attr('href');
            var url= url + ((url.indexOf('?') == -1) ? '?logo=' : '&logo=')+0;
            var ptrn = /^[-_a-zA-Z0-9]+$/;

            if(getUrlVars()['ns_mchannel'])
            {
                var chan = getUrlVars()['ns_mchannel'].match(ptrn);
                if (chan != null)
                {var url= url + ((url.indexOf('?') == -1) ? '?ns_mchannel=' : '&ns_mchannel=')+ chan;}
            }
            if(getUrlVars()['utm_medium'])
            {
                var chan = getUrlVars()['utm_medium'].match(ptrn);
                if (chan != null)
                {var url= url + ((url.indexOf('?') == -1) ? '?ns_mchannel=' : '&ns_mchannel=')+ chan;}
            }
            if(getUrlVars()['elqCampaignId'])
            {
                var elqcid = getUrlVars()['elqCampaignId'].match(ptrn);
                if (elqcid!= null)
                {var url= url + ((url.indexOf('?') == -1) ? '?elqCampaignId=' : '&elqCampaignId=')+ elqcid;}
            }

            if(getUrlVars()['elqCampaignID'])
            {
                var elqcid = getUrlVars()['elqCampaignID'].match(ptrn);
                if (elqcid!= null)
                {var url= url + ((url.indexOf('?') == -1) ? '?elqCampaignId=' : '&elqCampaignId=')+ elqcid;}
            }

            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (isIE () && isIE () < 10)) {
                var url=url.replace('layout/set/popup/','');
                window.open(url,'_blank','');
            } else  {
                let altTitle = $('meta[property="og:site_name"]');
                if (altTitle) {
                    $('#page_modal_title').html(altTitle.attr('content'));
                } else {
                    $('#page_modal_title').html(title);
                }

                $('#page_modal').on('shown.bs.modal', function() {
                    iframe_obj=$(this).find('iframe');
                    iframe_obj.attr('src',url);
                    iframe_obj.height($(window).height()-150);
                })
                $('#page_modal').modal();

                var myModal = document.getElementById('page_modal');
                if (myModal.dataset.site && myModal.dataset.site === 'proximic') {
                    var modal = bootstrap.Modal.getOrCreateInstance(myModal);
                    modal.show();
                } else {
                    $('#page_modal').modal();
                }
            }
            return false;
        }
    });
    /* RESET THE FORM IFRAME ON CLOSE OF THE MODAL */
    $('#page_modal').on('hidden.bs.modal', function(){
        $(this).find('iframe').attr('src','');
        $('#page_modal_title').html('');
    });

    // Fix urls
    let siteaccess = $('meta[name="siteaccess"]');
    if (siteaccess) {
        siteaccess = siteaccess.attr('content');
    }

    $('a.popup').attr('href', function(i, val) {
        if (val.indexOf('layout/set/popup') !== -1) {
            return val;
        }

        val = '/layout/set/popup' + val;
        if (siteaccess && siteaccess !== 'eng') {
            val = val.replace(siteaccess + '/', '');
            val = '/' + siteaccess + val;
        }

        return val;
    });
});    


// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


/**  Detect whether the current browser is on IOS - Used for globe */
var testOS = testOS || {};

testOS.IsIOS = function() {
  var userAgent = navigator.userAgent;
  var ios = userAgent.match(/iPhone/i)
    || userAgent.match(/iPad/i)
    || userAgent.match(/iPod/i);
  return ios;
}();


/** TEST FOR IEs**/
function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}


	/* WRITE LEAD SOURCE */
	/* CHECK IF COOKIE WAS SET */
	if(getCookie('elqls')===false){
		// NO COOKIE YET, LOOK FOR SOURCE IN ORDER: LABEL, REFERRER
		// OVERWRITE THE LEAD SOURCE DETAIL IF IT EXISTS
		var patt1 = /^[-_a-zA-Z0-9]+$/;
		if(getUrlVars()['ns_mchannel'])
			{
				var chan = getUrlVars()['ns_mchannel'].match(patt1); setCookie('elqls',chan); 
				// CHECK IF SOURCE IS ALSO SET - FOR LEAD SOURCE DETAIL
				if(getUrlVars()['ns_source']){var lsdetail = getUrlVars()['ns_source']; setCookie('elqlsd',lsdetail);}else{setCookie('elqlsd','');}
			}
		else if(getUrlVars()['utm_medium'])
			{
				var chan = getUrlVars()['utm_medium'].match(patt1); setCookie('elqls',chan); 
				// CHECK IF SOURCE IS ALSO SET - FOR LEAD SOURCE DETAIL
				if(getUrlVars()['utm_source']){var lsdetail = getUrlVars()['utm_source']; setCookie('elqlsd',lsdetail);}else{setCookie('elqlsd','');}
			}			
		else if(document.referrer.length>0 && document.referrer!="undefined")
			{
				var url = document.referrer; 
				var ref = url.match(/:\/\/(.[^/]+)/)[1];

				// CHECK IF REF IS NOT THE SAME AS HOSTNAME
				if(ref.indexOf(window.location.hostname)<=0)
					{
						// CHECK IF REFERRER IS NATURAL SEARCH, SOCIAL OR REGULAR EXTERNAL REFERRER
						$.ajax({
							type : "POST",
							url : "/cmr/pardot/act_check_referrer.php",
										dataType : "html",
										data: {ref:ref},				
										success : function(data){
										var chan=data;
										setCookie('elqls',chan);
										setCookie('elqlsd',ref);
										},
										error:function(XMLHttpRequest, textStatus, errorThrown) {}
									});	
					}
			}
		else{setCookie('elqls','Web: Direct Entry'); setCookie('elqlsd','');}
	} // if cookie is set

	/* WRITE CAMPAIGN ID */
	/* CHECK IF COOKIE WITH CAMPAIGN ID WAS SET */
	if(getCookie('elqcid')===false){
		// NO COOKIE YET, LOOK FOR LABEL
		if(getUrlVars()['elqCampaignId']){var elqcid = getUrlVars()['elqCampaignId']; }
		else if(getUrlVars()['elqCampaignID']){var elqcid = getUrlVars()['elqCampaignID'];}
		if(isNaN(elqcid)===false){setCookie('elqcid',elqcid);}
	} // if cookie is set


// SET COOKIE - if exdays not set, expire in 1 hour
function setCookie(c_name,value,exdays)
    {
      var exdate=new Date();
	  if(exdays){exdate.setTime(exdate.getTime()+(exdays*24*60*60*1000));}
	  else{exdate.setTime(exdate.getTime()+(1*60*60*1000));} 
      var c_value=encodeURIComponent(value) + "; path=/; expires="+exdate.toUTCString();
      document.cookie=c_name+"="+c_value;
    }
// READ COOKIE
function getCookie(c_name)
    {
     var i,x,y,ARRcookies=document.cookie.split(";");
     for (i=0;i<ARRcookies.length;i++)
     {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name){return decodeURIComponent(y);}
     }
	 return false
    }

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

!function($){
  
  var defaults = {
		animation: "dissolve",
		separator: ",",
		speed: 2000
	};
	
	$.fx.step.textShadowBlur = function(fx) {
    $(fx.elem).prop('textShadowBlur', fx.now).css({textShadow: '0 0 ' + Math.floor(fx.now) + 'px black'});
  };
	
  $.fn.textrotator = function(options){
    var settings = $.extend({}, defaults, options);
    
    return this.each(function(){
      var el = $(this)
      var array = [];
      $.each(el.text().split(settings.separator), function(key, value) { 
        array.push(value); 
      });
      el.text(array[0]);
      
      // animation option
      var rotate = function() {
        switch (settings.animation) { 
          
          case 'fade':
            el.fadeOut(2,function() {
              index = $.inArray(el.text(), array)
              if((index + 1) == array.length) index = -1
              el.text(array[index + 1]).fadeIn();
            });
          break;
        }
      };
      setInterval(rotate, settings.speed);
    });
  }
  
}(window.jQuery);	