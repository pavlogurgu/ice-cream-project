jQuery(window).scroll((function(){$("section").each((function(t,o){var a=$(o).offset().top-100,e=a+$(o).height(),n=$(window).scrollTop(),c=$(o).attr("id");n>a&&n<e&&($("a.active").removeClass("active"),$('a[href="#'+c+'"]').addClass("active"))}))})),$(document).ready((function(){$(".nav").on("click","a",(function(t){t.preventDefault();var o=$(this).attr("href"),a=$(o).offset().top;$("body,html").animate({scrollTop:a},800)}))}));
//# sourceMappingURL=index.5c5bd003.js.map