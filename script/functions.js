jQuery(document).ready(function($) {

  'use strict';

  //***************************
    // Sticky Header Function
    //***************************
	  jQuery(window).scroll(function() {
	      if (jQuery(this).scrollTop() > 70){  
	          jQuery('body').addClass("folio-sticky");
	      }
	      else{
	          jQuery('body').removeClass("folio-sticky");
	      }
	  });


 $(".js-video-button").modalVideo({
      youtube:{
        controls:0,
        nocookie: true
      }
    });


// End
});
    function emoji_function_display_block_1(value){
       
            var section_name="pop_up_emoji_section_"+value;
            document.getElementById(section_name).style.display = "block";
    }
    function emoji_function_display_none_1(value) {
        var section_name="pop_up_emoji_section_"+value;
        document.getElementById(section_name).style.display = "none";
    }
        function emoji_function_display_block_1(value){
       
            var section_name="pop_up_emoji_section_"+value;
            document.getElementById(section_name).style.display = "block";
    }
    function emoji_function_display_none_1(value) {
        var section_name="pop_up_emoji_section_"+value;
        document.getElementById(section_name).style.display = "none";
    }
    function Theme_change_index_page()
    {
      if(document.getElementById("theme_change").checked === true){
        // Dark Theme
        if (x.matches) { // If media query matches
        document.getElementById("navbarSupportedContent").classList.add("nav_bar_menu_dark_theme");
        document.getElementById("menu_item1").classList.add("navbar_menu_item");
        document.getElementById("menu_item2").classList.add("navbar_menu_item");
        document.getElementById("menu_item3").classList.add("navbar_menu_item");
        document.getElementById("menu_item4").classList.add("navbar_menu_item");
        document.getElementById("menu_item5").classList.add("navbar_menu_item");
        document.getElementById("search_bar").classList.add("navbar_menu_item_search");
        document.getElementById("search_bar").classList.add('search_place_holder_dark_theme');
        document.getElementById("search_icon").classList.add('search_icon');
        } 
        else {
        document.getElementById("navbarSupportedContent").classList.remove("nav_bar_menu_dark_theme");
        document.getElementById("menu_item1").classList.remove("navbar_menu_item");
        document.getElementById("menu_item2").classList.remove("navbar_menu_item");
        document.getElementById("menu_item3").classList.remove("navbar_menu_item");
        document.getElementById("menu_item4").classList.remove("navbar_menu_item");
        document.getElementById("menu_item5").classList.remove("navbar_menu_item");
        document.getElementById("search_bar").classList.remove("navbar_menu_item_search");
        document.getElementById("search_icon").classList.remove('search_icon');
        // document.getElementById("search_bar").classList.add('search_place_holder_light_theme');
        }

        document.getElementById("upper_logo").src="images/dark_tittle_logo1.png";
        document.getElementById("bottom_logo").src="images/dark_tittle_logo2.png";
        document.getElementById("side_image_1").src="images/dark_theme_app1.png";
        document.getElementById("side_image_2").src="images/dark_theme_app2.png";
        document.getElementById("side_logo").src="images/dark_tittle_logo2.png";
        document.getElementById("side_logo_2").src="images/dark_tittle_logo2.png";
        // document.getElementById("signs").style.background="#252636";
        // document.getElementById("author_wrap_image").backgroundImage ="url('images/dark_tittle_logo2.png')";
        // document.getElementById("author_wrap_image").border="#6E708C";
        document.getElementById("main_section").style.background="#252636";
        document.getElementById("main_footer").style.background="#252636";
        document.getElementById("lower_footer").style.background="black";
        document.getElementById("main_footer_1").style.background="#252636";
        // document.getElementById("author_top_section").style.background="#252636";
        // document.getElementById("author_list").style.background="#252636";
        // document.getElementById("author_social").style.background="#252636";
        // document.getElementById("author_profil_wrap").style.background="#252636";
        // document.getElementById("author_profile").style.background="#252636";
        // document.getElementById("dark_theme_men").src="images/dark_theme_man.png";
        // document.getElementById("description").style.borderColor="#6E708C";

        // document.getElementsByClassName("white2")[0].style.background="#252636";
        // document.getElementsByClassName("white2")[0].style.color="#48495E";
        // document.getElementsByClassName("white3")[0].style.color="white";
        // document.getElementById("submit").style.background="#738bd7";
             elements = document.getElementsByClassName("checking");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                } 
             elements = document.getElementsByClassName("button_hover");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
                elements = document.getElementsByClassName("pop_up_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#6E708C";
                    elements[i].style.background="#6E708C";
                }
             elements = document.getElementsByClassName("button_hover2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }  
             elements = document.getElementsByClassName("border_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#6E708C";
                }
            elements = document.getElementsByClassName("side_tab");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="transparent";
                    elements[i].style.color="white";
                }
                elements = document.getElementsByClassName("post_sub_title_grey");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }   
             elements = document.getElementsByClassName("author_wrap_image");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("author_wrap_image_styling")
                }
             elements = document.getElementsByClassName("border_color_2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#6E708C";
                }
             elements = document.getElementsByClassName("no_action");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                }
             elements = document.getElementsByClassName("no_action2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                }
             elements = document.getElementsByClassName("dropdown_menu_background");
                for (var i = 0; i < elements.length; i++) {
                    // elements[i].style.background="#4B6ACC";
                    elements[i].style.background="transparent";
                }
             elements = document.getElementsByClassName("dropdown_menu");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="#252636";
                }
             elements = document.getElementsByClassName("dropdown_menu_item");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
             elements = document.getElementsByClassName("dropdown_menu_item_hover");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                }  
             elements = document.getElementsByClassName("vl");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="rgba(0,0,0,.07)";
                }

             elements = document.getElementsByClassName("white1");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
             elements = document.getElementsByClassName("icons_white");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
            elements = document.getElementsByClassName("pink");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#f23da4";
                }
            elements = document.getElementsByClassName("app_store_google");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("filter");
                }
            elements = document.getElementsByClassName("input_field");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="rgba(0,0,0,.07)";
                    elements[i].style.border = "thin solid #6e708c";
                    elements[i].style.borderRadius="2px";
                }
            elements = document.getElementsByClassName("btc_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
            elements = document.getElementsByClassName("post_title");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
            elements = document.getElementsByClassName("dark_button_border");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("dark_button_border_styling");               
                }
            elements = document.getElementsByClassName("dark_button_border_full");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("dark_button_border_full_styling");               
                }
            elements = document.getElementsByClassName("post_title_2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }  
            // elements = document.getElementsByClassName("post_sub_title_grey");
            //     for (var i = 0; i < elements.length; i++) {
            //         elements[i].style.color="#A5A4A4";
            //     }   
             
            elements = document.getElementsByClassName("horizontal_bar");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("filter");
                }
           $(document).ready(function(){

              $(".input_field").hover(function(){
                $(this).css("border-color", "#40A9FF");
                // alert("hii");
                }, function(){
                $(this).css("border-color", "#6e708c");
              });
               $(".checking").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#6E708C");
              }); 
              $(".dark_hover_a").hover(function(){
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("color", "white");
              });
               $(".white3").hover(function(){
                $(this).css("color", "#03aeed");
                }, function(){
                $(this).css("color", "white");
              });
               $(".submit").hover(function(){
                $(this).css("background-color", "#4B6ACC");
                }, function(){
                $(this).css("background-color", "#738bd7");
              });
               $(".post_title").hover(function(){
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("color", "white");
              });
               $(".post_title_2").hover(function(){
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("color", "white");
              });
                $(".button_hover").hover(function(){
                $(this).css("color", "#2C97EE");
                $(this).css("borderColor", "#2C97EE");
                $(this).css("background-color", "transparent");

                }, function(){
                $(this).css("color", "white");
                $(this).css("borderColor", "white");
                $(this).css("background-color", "transparent");
              });
                 $(".post_sub_title_grey").hover(function(){
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("color", "white");
              });
                 $(".button_hover2").hover(function(){
                $(this).css("color", "#2C97EE");
                $(this).css("borderColor", "#2C97EE");
                $(this).css("background-color", "#252636");

                }, function(){
                $(this).css("color", "white");
                $(this).css("borderColor", "white");
                $(this).css("background-color", "transparent");
              });
               $(".dropdown_menu_item_hover").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#6E708C");
              });   
            });
               
        } 
      else {
        if (x.matches) { // If media query matches
        document.getElementById("navbarSupportedContent").classList.remove("nav_bar_menu_dark_theme");
        document.getElementById("menu_item1").classList.remove("navbar_menu_item");
        document.getElementById("menu_item2").classList.remove("navbar_menu_item");
        document.getElementById("menu_item3").classList.remove("navbar_menu_item");
        document.getElementById("menu_item4").classList.remove("navbar_menu_item");
        document.getElementById("menu_item5").classList.remove("navbar_menu_item");
        document.getElementById("search_bar").classList.remove("navbar_menu_item_search");
        document.getElementById("search_bar").classList.remove('search_place_holder_dark_theme');
        document.getElementById("search_icon").classList.remove('search_icon');
        
        } 
         document.getElementById("upper_logo").src="images/logo1.png";
         document.getElementById("bottom_logo").src="images/footer-logo.png";
         document.getElementById("side_logo").src="images/footer-logo.png";
         document.getElementById("side_logo_2").src="images/footer-logo.png";

         document.getElementById("main_section").style.background="white";
         document.getElementById("main_footer").style.background="#f5f5f5";
         document.getElementById("main_footer_1").style.background="white";
         
         document.getElementById("side_image_1").src="images/app1.png";
         document.getElementById("side_image_2").src="images/app2.png";
         
         document.getElementById("lower_footer").style.background="#161e2b";
         
            elements = document.getElementsByClassName("button_hover");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
            elements = document.getElementsByClassName("button_hover2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("checking");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("author_wrap_image");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.remove("author_wrap_image_styling")
                }
            elements = document.getElementsByClassName("side_tab");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="white";
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("dark_button_border_full");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.remove("dark_button_border_full_styling");               
                }
            
            elements = document.getElementsByClassName("dark_button_border");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.remove("dark_button_border_styling");               
                }
            elements = document.getElementsByClassName("border_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#c2c2c2";
                }
            elements = document.getElementsByClassName("border_color_2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#03aeed";
                }
            elements = document.getElementsByClassName("dropdown_menu_background");
                for (var i = 0; i < elements.length; i++) {
                    // elements[i].style.background="#03AEED";
                    elements[i].style.background="transparent";
                }
            elements = document.getElementsByClassName("dropdown_menu");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="white";
                }
              elements = document.getElementsByClassName("dropdown_menu_item");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("post_sub_title_grey");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#A5A4A4";
                }
                 elements = document.getElementsByClassName("pop_up_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="white";
                    elements[i].style.background="white";
                }
            elements = document.getElementsByClassName("post_title");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
            elements = document.getElementsByClassName("post_title_2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("white1");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("no_action");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("no_action2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#a4a3a3";
                }
             elements = document.getElementsByClassName("pink");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="red";
                }
             elements = document.getElementsByClassName("app_store_google");
                for (var i = 0; i < elements.length; i++) {
                     elements[i].classList.remove("filter");
                }
             elements = document.getElementsByClassName("input_field");
                for (var i = 0; i < elements.length; i++) {
                    
                    elements[i].style.boxShadow="0px -2px 2px rgba(0, 0, 0, 0.1)";
                    elements[i].style.border ="1px solid #ebe7e7";
                    elements[i].style.background ="#ffffff";
                    elements[i].style.bordeRadius = "3px";
                }
             elements = document.getElementsByClassName("vl");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#555 ";
                }
             elements = document.getElementsByClassName("btc_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }

             $(document).ready(function(){
              $(".dark_hover_a").hover(function(){
                $(this).css("color", "#ff911e");
                }, function(){
                $(this).css("color", "black");
              });
               $(".white3").hover(function(){
                $(this).css("color", "#03aeed");
                }, function(){
                $(this).css("color", "#03aeed");
              });
              
               $(".checking").hover(function(){
                $(this).css("background-color", "#ff7825");
                $(this).css("color", "white");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "black");
              });
             $(".submit").hover(function(){
                $(this).css("background-color", "#1c95c5");
                }, function(){
                $(this).css("background-color", "#1c95c5");
              });
             $(".input_field").hover(function(){
                $(this).css("box-shadow", "0px -2px 2px rgba(0, 0, 0, 0.1)");
                $(this).css("border", "1px solid #ebe7e7");
                // alert("hii");
                }, function(){
                $(this).css("box-shadow", "0px -2px 2px rgba(0, 0, 0, 0.1)");
                $(this).css("border", "1px solid #ebe7e7");
              });
             $(".post_title").hover(function(){
                // #ff7825
                $(this).css("color", "orange"); 
                }, function(){
                $(this).css("color", "white");
              });
              $(".button_hover").hover(function(){
                $(this).css("color", "orange");
                $(this).css("borderColor", "orange");
                $(this).css("background-color", "transparent");
                }, function(){
                $(this).css("color", "white");
                $(this).css("borderColor", "white");
                $(this).css("background-color", "transparent");
              });
              $(".button_hover2").hover(function(){
                $(this).css("color", "orange");
                $(this).css("borderColor", "orange");
                $(this).css("background-color", "transparent");
                }, function(){
                $(this).css("color", "white");
                $(this).css("borderColor", "white");
                $(this).css("background-color", "transparent");
              });
              $(".post_title_2").hover(function(){
                // #ff7825
                $(this).css("color", "orange"); 
                }, function(){
                $(this).css("color", "black");
              });
             $(".post_sub_title_grey").hover(function(){
                // #ff7825
                $(this).css("color", "orange"); 
                }, function(){
                $(this).css("color", "#A5A4A4");
              });
             $(".dropdown_menu_item_hover").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#ff7825");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "black");
              });   
            });
      }
}
    function Theme_change_contact_us_page()
    {
      if(document.getElementById("theme_change").checked === true){
        // Dark Theme
        if (x.matches) { // If media query matches
        document.getElementById("navbarSupportedContent").classList.add("nav_bar_menu_dark_theme");
        document.getElementById("menu_item1").classList.add("navbar_menu_item");
        document.getElementById("menu_item2").classList.add("navbar_menu_item");
        document.getElementById("menu_item3").classList.add("navbar_menu_item");
        document.getElementById("menu_item4").classList.add("navbar_menu_item");
        document.getElementById("menu_item5").classList.add("navbar_menu_item");
        document.getElementById("search_bar").classList.add("navbar_menu_item_search");
        document.getElementById("search_bar").classList.add('search_place_holder_dark_theme');
        document.getElementById("search_icon").classList.add('search_icon');
        } 
        else {
        document.getElementById("navbarSupportedContent").classList.remove("nav_bar_menu_dark_theme");
        document.getElementById("menu_item1").classList.remove("navbar_menu_item");
        document.getElementById("menu_item2").classList.remove("navbar_menu_item");
        document.getElementById("menu_item3").classList.remove("navbar_menu_item");
        document.getElementById("menu_item4").classList.remove("navbar_menu_item");
        document.getElementById("menu_item5").classList.remove("navbar_menu_item");
        document.getElementById("search_bar").classList.remove("navbar_menu_item_search");
        document.getElementById("search_icon").classList.remove('search_icon');
        // document.getElementById("search_bar").classList.add('search_place_holder_light_theme');
        }

        document.getElementById("upper_logo").src="images/dark_tittle_logo1.png";
        document.getElementById("bottom_logo").src="images/dark_tittle_logo2.png";
        document.getElementById("main_section").style.background="#252636";
        document.getElementById("main_footer").style.background="#252636";
        document.getElementById("lower_footer").style.background="black";
        document.getElementsByClassName("white2")[0].style.background="#252636";
        document.getElementsByClassName("white2")[0].style.color="#48495E";
        document.getElementsByClassName("white3")[0].style.color="white";
        document.getElementById("submit").style.background="#738bd7";

             elements = document.getElementsByClassName("no_action");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                }
            elements = document.getElementsByClassName("dropdown_menu_background");
                for (var i = 0; i < elements.length; i++) {
                    // elements[i].style.background="#4B6ACC";
                    elements[i].style.background="transparent";
                }
             elements = document.getElementsByClassName("dropdown_menu");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="#252636";
                }
             elements = document.getElementsByClassName("dropdown_menu_item");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
             elements = document.getElementsByClassName("dropdown_menu_item_hover");
                for (var i = 0; i < elements.length; i++) {
                  }
             elements = document.getElementsByClassName("vl");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="rgba(0,0,0,.07)";
                }

             elements = document.getElementsByClassName("white");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
             elements = document.getElementsByClassName("icons_white");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
            elements = document.getElementsByClassName("pink");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#f23da4";
                }
            elements = document.getElementsByClassName("app_store_google");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("filter");
                }
            elements = document.getElementsByClassName("input_field");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="rgba(0,0,0,.07)";
                    elements[i].style.border = "thin solid #6e708c";
                    elements[i].style.borderRadius="2px";
                }
            elements = document.getElementsByClassName("btc_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
                
             
            elements = document.getElementsByClassName("horizontal_bar");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("filter");
                }
           $(document).ready(function(){

              $(".input_field").hover(function(){
                $(this).css("border-color", "#40A9FF");
                // alert("hii");
                }, function(){
                $(this).css("border-color", "#6e708c");
              });
              $(".dark_hover_a").hover(function(){
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("color", "white");
              });
               $(".white3").hover(function(){
                $(this).css("color", "#03aeed");
                }, function(){
                $(this).css("color", "white");
              });
               $(".submit").hover(function(){
                $(this).css("background-color", "#4B6ACC");
                }, function(){
                $(this).css("background-color", "#738bd7");
              });
            $(".dropdown_menu_item_hover").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#6E708C");
              });  
            });
               
        } 
      else {
        if (x.matches) { // If media query matches
        document.getElementById("navbarSupportedContent").classList.remove("nav_bar_menu_dark_theme");
        document.getElementById("menu_item1").classList.remove("navbar_menu_item");
        document.getElementById("menu_item2").classList.remove("navbar_menu_item");
        document.getElementById("menu_item3").classList.remove("navbar_menu_item");
        document.getElementById("menu_item4").classList.remove("navbar_menu_item");
        document.getElementById("menu_item5").classList.remove("navbar_menu_item");
        document.getElementById("search_bar").classList.remove("navbar_menu_item_search");
        document.getElementById("search_bar").classList.remove('search_place_holder_dark_theme');
        document.getElementById("search_icon").classList.remove('search_icon');
        
        } 
         document.getElementById("upper_logo").src="images/logo1.png";
         document.getElementById("bottom_logo").src="images/footer-logo.png";
         document.getElementById("main_section").style.background="white";
         document.getElementById("main_footer").style.background="#f5f5f5";
         document.getElementsByClassName("white2")[0].style.background="white";
         document.getElementsByClassName("white2")[0].style.color="#03aeed";
         document.getElementsByClassName("white3")[0].style.color="#03aeed";
         document.getElementById("lower_footer").style.background="#161e2b";
         document.getElementById("submit").style.background="#1c95c5";


            elements = document.getElementsByClassName("dropdown_menu_background");
                for (var i = 0; i < elements.length; i++) {
                    // elements[i].style.background="#03AEED";
                    elements[i].style.background="transparent";
                }
            elements = document.getElementsByClassName("dropdown_menu");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="white";
                }
              elements = document.getElementsByClassName("dropdown_menu_item");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("white");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("no_action");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("no_action2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
             elements = document.getElementsByClassName("pink");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="red";
                }
             elements = document.getElementsByClassName("app_store_google");
                for (var i = 0; i < elements.length; i++) {
                     elements[i].classList.remove("filter");
                }
             elements = document.getElementsByClassName("input_field");
                for (var i = 0; i < elements.length; i++) {
                    // elements[i].style.background="white";
                    // elements[i].style.border="none";
                    // elements[i].classList.add("input_field_class");
                    elements[i].style.boxShadow="0px -2px 2px rgba(0, 0, 0, 0.1)";
                    elements[i].style.border ="1px solid #ebe7e7";
                    elements[i].style.background ="#ffffff";
                    elements[i].style.bordeRadius = "3px";
                }
             elements = document.getElementsByClassName("vl");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#555 ";
                }
             elements = document.getElementsByClassName("btc_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }

             $(document).ready(function(){
              $(".dark_hover_a").hover(function(){
                $(this).css("color", "#ff911e");
                }, function(){
                $(this).css("color", "black");
              });
               $(".white3").hover(function(){
                $(this).css("color", "#03aeed");
                }, function(){
                $(this).css("color", "#03aeed");
              });
             $(".submit").hover(function(){
                $(this).css("background-color", "#1c95c5");
                }, function(){
                $(this).css("background-color", "#1c95c5");
              });
             $(".input_field").hover(function(){
                $(this).css("box-shadow", "0px -2px 2px rgba(0, 0, 0, 0.1)");
                $(this).css("border", "1px solid #ebe7e7");
                // alert("hii");
                }, function(){
                $(this).css("box-shadow", "0px -2px 2px rgba(0, 0, 0, 0.1)");
                $(this).css("border", "1px solid #ebe7e7");
              });
                $(".dropdown_menu_item_hover").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#ff7825");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "black");
              }); 
            });
      }
}
function Cryptocurreny_function()
{
  document.getElementById('Cryptocurreny_section').style.display="block";
  document.getElementById('Exchange_section').style.display="none";
  document.getElementById('Cryptocurreny_button').style.borderBottom = "1px solid #0080FF";
  document.getElementById('Exchange_button').style.borderBottom = "none";
}
function Exchange_function()
{
  document.getElementById('Cryptocurreny_section').style.display="none";
  document.getElementById('Exchange_section').style.display="block";
  document.getElementById('Cryptocurreny_button').style.borderBottom = "none"; 
  document.getElementById('Exchange_button').style.borderBottom = "1px solid #0080FF";

}
window.onload = function() {
   var totalRowCount = 0;
        var rowCount = 0;
        var table = document.getElementById("table_body");
        var rows = table.getElementsByTagName("tr")
        for (var i = 0; i < rows.length; i++) {
            totalRowCount++;
            if (rows[i].getElementsByTagName("td").length > 0) {
                rowCount++;
            }
        }
       
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[3].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[3].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[3].style.color="red";;
          }
      }
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[4].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[4].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[4].style.color="red";;
          }
      }
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[5].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[5].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[5].style.color="red";;
          }
      }
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[6].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[6].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[6].style.color="red";;
          }
      }
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[7].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[7].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[7].style.color="red";;
          }
      }
}
function change_color_to_red()
{
  var totalRowCount = 0;
        var rowCount = 0;
        var table = document.getElementById("table_body");
        var rows = table.getElementsByTagName("tr")
        for (var i = 0; i < rows.length; i++) {
            totalRowCount++;
            if (rows[i].getElementsByTagName("td").length > 0) {
                rowCount++;
            }
        }
       
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[3].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[3].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[3].style.color="red";;
          }
      }
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[4].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[4].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[4].style.color="red";;
          }
      }
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[5].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[5].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[5].style.color="red";;
          }
      }
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[6].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[6].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[6].style.color="red";;
          }
      }
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[7].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[7].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[7].style.color="red";;
          }
      }
}
function change_color_to_pink()
{
  var totalRowCount = 0;
        var rowCount = 0;
        var table = document.getElementById("table_body");
        var rows = table.getElementsByTagName("tr")
        for (var i = 0; i < rows.length; i++) {
            totalRowCount++;
            if (rows[i].getElementsByTagName("td").length > 0) {
                rowCount++;
            }
        }
       
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[3].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[3].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[3].style.color="#f23da4";
          }
      }
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[4].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[4].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[4].style.color="#f23da4";
          }
      }
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[5].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[5].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[5].style.color="#f23da4";
          }
      }
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[6].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[6].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[6].style.color="#f23da4";
          }
      }
      for (var i =1; i <=rowCount; i++) {
          var a=document.getElementById("table_body").rows[i].cells[7].innerHTML;
          var newStr = a.substring(0, a.length - 1);
          if(newStr>0)
          {
            var x = document.getElementById("table_body").rows[i].cells[7].style.color="green";
          }
          else if(newStr<0)
          {
          var x = document.getElementById("table_body").rows[i].cells[7].style.color="#f23da4";
          }
      }
}
// document.ontouchmove = function(event){
//     event.preventDefault();
// }
function icon_hover(value)
{
  if(document.getElementById("theme_change").checked === true){
              if(value==1)
              {
                document.getElementById("icon_1").style.color="#2C97EE";
              }
              else if(value==2)
              {
                document.getElementById("icon_2").style.color="#2C97EE";
              }
              else if(value==3)
              {
                document.getElementById("icon_3").style.color="#2C97EE";
              }
            }
    else{
      if(value==1)
              {
                document.getElementById("icon_1").style.color="white";
              }
              else if(value==2)
              {
                document.getElementById("icon_2").style.color="white";
              }
              else if(value==3)
              {
                document.getElementById("icon_3").style.color="white";
              }
    }
}
function icon_hover_reverse(value)
{
  if(document.getElementById("theme_change").checked === true){
              if(value==1)
              {
                // alert("hi");
                document.getElementById("icon_1").style.color="#6E708C";
              }
              else if(value==2)
              {
                document.getElementById("icon_2").style.color="#6E708C";
              }
              else if(value==3)
              {
                document.getElementById("icon_3").style.color="#6E708C";
              }
            }
    else{
      if(value==1)
              {
                // alert("hi");
                document.getElementById("icon_1").style.color="black";
              }
              else if(value==2)
              {
                document.getElementById("icon_2").style.color="black";
              }
              else if(value==3)
              {
                document.getElementById("icon_3").style.color="black";
              }
    }

}

    function Theme_change_pricing_page()
    {
         
      change_color_to_pink();
      if(document.getElementById("theme_change").checked === true){
        // Dark Theme
        if (x.matches) { // If media query matches
        document.getElementById("navbarSupportedContent").classList.add("nav_bar_menu_dark_theme");
        document.getElementById("menu_item1").classList.add("navbar_menu_item");
        document.getElementById("menu_item2").classList.add("navbar_menu_item");
        document.getElementById("menu_item3").classList.add("navbar_menu_item");
        document.getElementById("menu_item4").classList.add("navbar_menu_item");
        document.getElementById("menu_item5").classList.add("navbar_menu_item");
        document.getElementById("search_bar").classList.add("navbar_menu_item_search");
        document.getElementById("search_bar").classList.add('search_place_holder_dark_theme');
        document.getElementById("search_icon").classList.add('search_icon');
        } 
        else {
      document.getElementById("navbarSupportedContent").classList.remove("nav_bar_menu_dark_theme");
        document.getElementById("menu_item1").classList.remove("navbar_menu_item");
        document.getElementById("menu_item2").classList.remove("navbar_menu_item");
        document.getElementById("menu_item3").classList.remove("navbar_menu_item");
        document.getElementById("menu_item4").classList.remove("navbar_menu_item");
        document.getElementById("menu_item5").classList.remove("navbar_menu_item");
        document.getElementById("search_bar").classList.remove("navbar_menu_item_search");
        document.getElementById("search_icon").classList.remove('search_icon');
        }
        document.getElementById("upper_logo").src="images/dark_tittle_logo1.png";
        document.getElementById("bottom_logo").src="images/dark_tittle_logo2.png";
        document.getElementById("main_section").style.background="#252636";
        document.getElementById("main_footer").style.background="#252636";
        document.getElementById("lower_footer").style.background="black";
        // document.getElementById("top_dropdown_menu").style.background="#252636";
        document.getElementById("thead_class").classList.add("thead_class_styling");
        document.getElementById("pricing_table").classList.add("pricing_table_styling");
        document.getElementById("current_page").style.background="transparent";
        document.getElementById("icon_1").style.color="#6E708C";
        document.getElementById("icon_2").style.color="#6E708C";
        document.getElementById("icon_3").style.color="#6E708C";
             

             // elements = document.getElementsByClassName("top_dropdown_menu");
             //    for (var i = 0; i < elements.length; i++) {
             //        elements[i].style.background="#252636";
             //    }
             elements = document.getElementsByClassName("dropdown_menu_background");
                for (var i = 0; i < elements.length; i++) {
                    // elements[i].style.background="#4B6ACC";
                    elements[i].style.background="transparent";
                }
             elements = document.getElementsByClassName("dropdown_menu");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="#252636";
                }
                
             elements =document.getElementsByClassName("icon_color");
             for (var i = 0; i <elements.length; i++) {
                  elements[i].classList.add("icon_color_styling");
             }
              elements = document.getElementsByClassName("dropdown_menu_item");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
             elements = document.getElementsByClassName("no_action");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                }
             elements = document.getElementsByClassName("button_action");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                }
             elements = document.getElementsByClassName("checking");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                } 
              elements = document.getElementsByClassName("checking_2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                }
              elements = document.getElementsByClassName("dropdown_menu_item_hover");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                }   
             elements = document.getElementsByClassName("button_action_2");
                for (var i = 0; i < elements.length; i++) {
                  elements[i].style.color="#6E708C";
                }
             elements = document.getElementsByClassName("dark_button_border");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("dark_button_border_styling");               
                }
             elements = document.getElementsByClassName("dark_button_border_full");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("dark_button_border_full_styling");               
                }
              elements = document.getElementsByClassName("dark_button_border_full_2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("dark_button_border_full_2_styling");               
                } 
             elements = document.getElementsByClassName("vl");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="rgba(0,0,0,.07)";
                } 
             elements = document.getElementsByClassName("white");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
             elements = document.getElementsByClassName("grey_class");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                }
             elements = document.getElementsByClassName("icons_white");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
            elements = document.getElementsByClassName("pink");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#f23da4";
                }
            elements = document.getElementsByClassName("app_store_google");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("filter");
                }
            elements = document.getElementsByClassName("input_field");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="rgba(0,0,0,.07)";
                    elements[i].style.border = "thin solid #6e708c";
                    elements[i].style.borderRadius="2px";
                }
            elements = document.getElementsByClassName("btc_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
                
             
            elements = document.getElementsByClassName("horizontal_bar");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("filter");
                }
           $(document).ready(function(){

              $(".input_field").hover(function(){
                $(this).css("border-color", "#40A9FF");
                // alert("hii");
                }, function(){
                $(this).css("border-color", "#6e708c");
              });
              $(".dark_hover_a").hover(function(){
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("color", "white");
              });
               $(".white3").hover(function(){
                $(this).css("color", "#03aeed");
                }, function(){
                $(this).css("color", "white");
              });
               $(".submit").hover(function(){
                $(this).css("background-color", "#4B6ACC");
                }, function(){
                $(this).css("background-color", "#738bd7");
              });
               $(".button_hover").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color","white");
                }, function(){
                $(this).css("background-color", "transparent");
                $(".button_hover").css("color","#6E708C");
              });
               $(".button_hover_2").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color","#2C97EE");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color","#6E708C");
              });
              $(".checking").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#6E708C");
              });  
              $(".checking_2").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#6E708C");
              });    
              $(".dropdown_menu_item_hover").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#6E708C");
              });   
            }); 
        } 
      else {
        change_color_to_red();
        if (x.matches) { // If media query matches
        document.getElementById("navbarSupportedContent").classList.remove("nav_bar_menu_dark_theme");
        document.getElementById("menu_item1").classList.remove("navbar_menu_item");
        document.getElementById("menu_item2").classList.remove("navbar_menu_item");
        document.getElementById("menu_item3").classList.remove("navbar_menu_item");
        document.getElementById("menu_item4").classList.remove("navbar_menu_item");
        document.getElementById("menu_item5").classList.remove("navbar_menu_item");
        document.getElementById("search_bar").classList.remove("navbar_menu_item_search");
        document.getElementById("search_bar").classList.remove('search_place_holder_dark_theme');
        document.getElementById("search_icon").classList.remove('search_icon');
        
        } 
         document.getElementById("upper_logo").src="images/logo1.png";
         document.getElementById("bottom_logo").src="images/footer-logo.png";
         document.getElementById("main_section").style.background="white";
         document.getElementById("main_footer").style.background="#f5f5f5";
         document.getElementById("lower_footer").style.background="#161e2b";
         document.getElementById("thead_class").classList.remove("thead_class_styling");
         document.getElementById("pricing_table").classList.remove("pricing_table_styling");
         document.getElementById("current_page").style.background="transparent";
         document.getElementById("icon_1").style.color="black";
         document.getElementById("icon_2").style.color="black";
         document.getElementById("icon_3").style.color="black";

            elements = document.getElementsByClassName("dropdown_menu_background");
                for (var i = 0; i < elements.length; i++) {
                    // elements[i].style.background="#03AEED";
                    elements[i].style.background="transparent";
                }
            elements =document.getElementsByClassName("icon_color");
             for (var i = 0; i <elements.length; i++) {
                  elements[i].classList.remove("icon_color_styling");
             }
             elements = document.getElementsByClassName("checking");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
             elements = document.getElementsByClassName("checking_2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                } 
            elements = document.getElementsByClassName("dropdown_menu");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="white";
                }
              elements = document.getElementsByClassName("dropdown_menu_item");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("dark_button_border");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.remove("dark_button_border_styling");               
                }
             elements = document.getElementsByClassName("dark_button_border_full");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.remove("dark_button_border_full_styling");               
                }
             elements = document.getElementsByClassName("dark_button_border_full_2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("dark_button_border_full_2_styling");               
                } 
            elements = document.getElementsByClassName("white");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
             elements = document.getElementsByClassName("grey_class");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
                
            elements = document.getElementsByClassName("button_action");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                } 
            elements = document.getElementsByClassName("button_action_2");
                for (var i = 0; i < elements.length; i++) {
                  elements[i].style.color="white";
                  elements[i].style.background="#03aeed";
                }
            elements = document.getElementsByClassName("no_action");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("no_action2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
             elements = document.getElementsByClassName("pink");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="red";
                }
             elements = document.getElementsByClassName("app_store_google");
                for (var i = 0; i < elements.length; i++) {
                     elements[i].classList.remove("filter");
                }
             elements = document.getElementsByClassName("input_field");
                for (var i = 0; i < elements.length; i++) {
                    // elements[i].style.background="white";
                    // elements[i].style.border="none";
                    // elements[i].classList.add("input_field_class");
                    elements[i].style.boxShadow="0px -2px 2px rgba(0, 0, 0, 0.1)";
                    elements[i].style.border ="1px solid #ebe7e7";
                    elements[i].style.background ="#ffffff";
                    elements[i].style.bordeRadius = "3px";
                }
             elements = document.getElementsByClassName("vl");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#555 ";
                }
             elements = document.getElementsByClassName("btc_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }

             $(document).ready(function(){
              $(".dark_hover_a").hover(function(){
                $(this).css("color", "#ff911e");
                }, function(){
                $(this).css("color", "black");
              });
               $(".white3").hover(function(){
                $(this).css("color", "#03aeed");
                }, function(){
                $(this).css("color", "#03aeed");
              });
             $(".submit").hover(function(){
                $(this).css("background-color", "#1c95c5");
                }, function(){
                $(this).css("background-color", "#1c95c5");
              });
             $(".input_field").hover(function(){
                $(this).css("box-shadow", "0px -2px 2px rgba(0, 0, 0, 0.1)");
                $(this).css("border", "1px solid #ebe7e7");
                // alert("hii");
                }, function(){
                $(this).css("box-shadow", "0px -2px 2px rgba(0, 0, 0, 0.1)");
                $(this).css("border", "1px solid #ebe7e7");
              });
              $(".button_hover").hover(function(){
                $(this).css("background-color", "#ff7825");
                $(this).css("color", "white");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "black");

              });
               $(".button_hover_2").hover(function(){
                $(this).css("background-color", "#03aeed");
                $(this).css("color","white");
                }, function(){
                $(this).css("background-color", "#03aeed");
                $(this).css("color","white");
                });
              // $(".checking").hover(function(){
              //   $(this).css("background-color", "red");
              //   $(this).css("color", "white");
              //   }, function(){
              //   $(this).css("background-color", "transparent");
              //   $(this).css("color", "black");
              // });    
              // });   
              $(".checking").hover(function(){
                $(this).css("background-color", "#ff7825");
                $(this).css("color", "white");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "black");
              });
               $(".checking_2").hover(function(){
                $(this).css("background-color", "#ff7825");
                $(this).css("color", "white");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "black");
              });
              $(".dropdown_menu_item_hover").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#ff7825");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "black");
              });   
            });
      }
}

    function emoji_function_display_block_author_page(value){
       
            var section_name="pop_up_emoji_section_"+value;
            document.getElementById(section_name).style.display = "block";
    }
    function emoji_function_display_none_author_page(value) {
        var section_name="pop_up_emoji_section_"+value;
        document.getElementById(section_name).style.display = "none";
    }
   function Theme_change_author_page()
    {
      if(document.getElementById("theme_change").checked === true){
        // Dark Theme
        if (x.matches) { // If media query matches
        document.getElementById("navbarSupportedContent").classList.add("nav_bar_menu_dark_theme");
        document.getElementById("menu_item1").classList.add("navbar_menu_item");
        document.getElementById("menu_item2").classList.add("navbar_menu_item");
        document.getElementById("menu_item3").classList.add("navbar_menu_item");
        document.getElementById("menu_item4").classList.add("navbar_menu_item");
        document.getElementById("menu_item5").classList.add("navbar_menu_item");
        document.getElementById("search_bar").classList.add("navbar_menu_item_search");
        document.getElementById("search_bar").classList.add('search_place_holder_dark_theme');
        document.getElementById("search_icon").classList.add('search_icon');
        } 
        else {
        document.getElementById("navbarSupportedContent").classList.remove("nav_bar_menu_dark_theme");
        document.getElementById("menu_item1").classList.remove("navbar_menu_item");
        document.getElementById("menu_item2").classList.remove("navbar_menu_item");
        document.getElementById("menu_item3").classList.remove("navbar_menu_item");
        document.getElementById("menu_item4").classList.remove("navbar_menu_item");
        document.getElementById("menu_item5").classList.remove("navbar_menu_item");
        document.getElementById("search_bar").classList.remove("navbar_menu_item_search");
        document.getElementById("search_icon").classList.remove('search_icon');
        // document.getElementById("search_bar").classList.add('search_place_holder_light_theme');
        }

        document.getElementById("upper_logo").src="images/dark_tittle_logo1.png";
        document.getElementById("bottom_logo").src="images/dark_tittle_logo2.png";
        document.getElementById("side_image_1").src="images/dark_theme_app1.png";
        document.getElementById("side_image_2").src="images/dark_theme_app2.png";
        document.getElementById("side_logo").src="images/dark_tittle_logo2.png";
        // document.getElementById("author_wrap_image").backgroundImage ="url('images/dark_tittle_logo2.png')";
        // document.getElementById("author_wrap_image").border="#6E708C";
        document.getElementById("main_section").style.background="#252636";
        document.getElementById("main_footer").style.background="#252636";
        document.getElementById("lower_footer").style.background="black";
        document.getElementById("author_top_section").style.background="#252636";
        document.getElementById("author_list").style.background="#252636";
        document.getElementById("author_social").style.background="#252636";
        document.getElementById("author_profil_wrap").style.background="#252636";
        document.getElementById("author_profile").style.background="#252636";
        document.getElementById("dark_theme_men").src="images/dark_theme_man.png";
        // document.getElementById("description").style.borderColor="#6E708C";

        // document.getElementsByClassName("white2")[0].style.background="#252636";
        // document.getElementsByClassName("white2")[0].style.color="#48495E";
        // document.getElementsByClassName("white3")[0].style.color="white";
        // document.getElementById("submit").style.background="#738bd7";
             
             elements = document.getElementsByClassName("button_border");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#6E708C";
                    elements[i].style.color="white";
                }
             elements = document.getElementsByClassName("pop_up_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#6E708C";
                    elements[i].style.background="#6E708C";
                }
                
             elements = document.getElementsByClassName("border_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#6E708C";
                }
             elements = document.getElementsByClassName("author_wrap_image");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("author_wrap_image_styling")
                }
             elements = document.getElementsByClassName("border_color_2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#6E708C";
                }
             elements = document.getElementsByClassName("no_action");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                }
                elements = document.getElementsByClassName("button_border_2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#6E708C";
                }
             elements = document.getElementsByClassName("dropdown_menu_background");
                for (var i = 0; i < elements.length; i++) {
                    // elements[i].style.background="#4B6ACC";
                    elements[i].style.background="transparent";
                }
             elements = document.getElementsByClassName("dropdown_menu");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="#252636";
                }
             elements = document.getElementsByClassName("dropdown_menu_item");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
             elements = document.getElementsByClassName("dropdown_menu_item_hover");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#6E708C";
                }  
             elements = document.getElementsByClassName("vl");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="rgba(0,0,0,.07)";
                }

             elements = document.getElementsByClassName("white");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
             elements = document.getElementsByClassName("icons_white");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
            elements = document.getElementsByClassName("pink");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#f23da4";
                }
            elements = document.getElementsByClassName("app_store_google");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("filter");
                }
            elements = document.getElementsByClassName("input_field");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="rgba(0,0,0,.07)";
                    elements[i].style.border = "thin solid #6e708c";
                    elements[i].style.borderRadius="2px";
                }
            elements = document.getElementsByClassName("btc_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }
            elements = document.getElementsByClassName("post_title");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }  
            elements = document.getElementsByClassName("post_sub_title_grey");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="white";
                }   
             
            elements = document.getElementsByClassName("horizontal_bar");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.add("filter");
                }
           $(document).ready(function(){

              $(".input_field").hover(function(){
                $(this).css("border-color", "#40A9FF");
                // alert("hii");
                }, function(){
                $(this).css("border-color", "#6e708c");
              });
              
               $(".button_border").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("border-color", "#03aeed");
                $(this).css("color","#03aeed");
                // alert("hii");
                }, function(){
                $(this).css("border-color", "#6E708C");
                $(this).css("color","white");
              });
              $(".dark_hover_a").hover(function(){
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("color", "white");
              });
               $(".white3").hover(function(){
                $(this).css("color", "#03aeed");
                }, function(){
                $(this).css("color", "white");
              });
               $(".submit").hover(function(){
                $(this).css("background-color", "#4B6ACC");
                }, function(){
                $(this).css("background-color", "#738bd7");
              });
               $(".post_title").hover(function(){
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("color", "white");
              });
                
               $(".post_sub_title_grey").hover(function(){
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("color", "white");
              });
               $(".dropdown_menu_item_hover").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#2C97EE");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#6E708C");
              });   
            });
               
        } 
      else {
        if (x.matches) { // If media query matches
        document.getElementById("navbarSupportedContent").classList.remove("nav_bar_menu_dark_theme");
        document.getElementById("menu_item1").classList.remove("navbar_menu_item");
        document.getElementById("menu_item2").classList.remove("navbar_menu_item");
        document.getElementById("menu_item3").classList.remove("navbar_menu_item");
        document.getElementById("menu_item4").classList.remove("navbar_menu_item");
        document.getElementById("menu_item5").classList.remove("navbar_menu_item");
        document.getElementById("search_bar").classList.remove("navbar_menu_item_search");
        document.getElementById("search_bar").classList.remove('search_place_holder_dark_theme');
        document.getElementById("search_icon").classList.remove('search_icon');
        
        } 
        // else {
        // // document.getElementById("navbarSupportedContent").classList.remove("nav_bar_menu_dark_theme");
        // // document.getElementById("navbarSupportedContent").classList.add("navbar-collapse");
        // // document.getElementById("menu_item1").classList.remove("navbar_menu_item");
        // // document.getElementById("menu_item2").classList.remove("navbar_menu_item");
        // // document.getElementById("menu_item3").classList.remove("navbar_menu_item");
        // // document.getElementById("menu_item4").classList.remove("navbar_menu_item");
        // // document.getElementById("menu_item5").classList.remove("navbar_menu_item");
        // // document.getElementById("search_bar").classList.remove("navbar_menu_item_search");
        // }

         document.getElementById("upper_logo").src="images/logo1.png";
         document.getElementById("bottom_logo").src="images/footer-logo.png";
         document.getElementById("side_logo").src="images/footer-logo.png";
         document.getElementById("main_section").style.background="white";
         document.getElementById("main_footer").style.background="#f5f5f5";
         document.getElementById("author_top_section").style.background="white";
         document.getElementById("author_list").style.background="white";
         document.getElementById("author_social").style.background="white";
         document.getElementById("author_profil_wrap").style.background="white";
         document.getElementById("author_profile").style.background="white";
         document.getElementById("side_image_1").src="images/app1.png";
         document.getElementById("side_image_2").src="images/app2.png";
         document.getElementById("dark_theme_men").src="images/man.png";
         // document.getElementById("description").style.borderColor="#eee";
         // document.getElementsByClassName("white2")[0].style.background="white";
         // document.getElementsByClassName("white2")[0].style.color="#03aeed";
         // document.getElementsByClassName("white3")[0].style.color="#03aeed";
         document.getElementById("lower_footer").style.background="#161e2b";
         // document.getElementById("submit").style.background="#1c95c5";
            elements = document.getElementsByClassName("button_border");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#03aeed";
                    elements[i].style.color="rgb(20, 88, 171)";
                }
             elements = document.getElementsByClassName("button_border_2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#03aeed";
                }
             elements = document.getElementsByClassName("pop_up_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="white";
                    elements[i].style.background="white";
                }
            elements = document.getElementsByClassName("author_wrap_image");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.remove("author_wrap_image_styling")
                }
            elements = document.getElementsByClassName("border_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#eee";
                }
            elements = document.getElementsByClassName("border_color_2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#c2c2c2";
                }
            elements = document.getElementsByClassName("dropdown_menu_background");
                for (var i = 0; i < elements.length; i++) {
                    // elements[i].style.background="#03AEED";
                    elements[i].style.background="transparent";
                }
            elements = document.getElementsByClassName("dropdown_menu");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.background="white";
                }
              elements = document.getElementsByClassName("dropdown_menu_item");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("post_sub_title_grey");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="#A5A4A4";
                }
            elements = document.getElementsByClassName("post_title");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("white");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("no_action");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
            elements = document.getElementsByClassName("no_action2");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }
             elements = document.getElementsByClassName("pink");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="red";
                }
             elements = document.getElementsByClassName("app_store_google");
                for (var i = 0; i < elements.length; i++) {
                     elements[i].classList.remove("filter");
                }
             elements = document.getElementsByClassName("input_field");
                for (var i = 0; i < elements.length; i++) {
                    // elements[i].style.background="white";
                    // elements[i].style.border="none";
                    // elements[i].classList.add("input_field_class");
                    elements[i].style.boxShadow="0px -2px 2px rgba(0, 0, 0, 0.1)";
                    elements[i].style.border ="1px solid #ebe7e7";
                    elements[i].style.background ="#ffffff";
                    elements[i].style.bordeRadius = "3px";
                }
             elements = document.getElementsByClassName("vl");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.borderColor="#555 ";
                }
             elements = document.getElementsByClassName("btc_color");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color="black";
                }

             $(document).ready(function(){
              $(".dark_hover_a").hover(function(){
                $(this).css("color", "#ff911e");
                }, function(){
                $(this).css("color", "black");
              });
               $(".white3").hover(function(){
                $(this).css("color", "#03aeed");
                }, function(){
                $(this).css("color", "#03aeed");
              });
             $(".submit").hover(function(){
                $(this).css("background-color", "#1c95c5");
                }, function(){
                $(this).css("background-color", "#1c95c5");
              });
             $(".input_field").hover(function(){
                $(this).css("box-shadow", "0px -2px 2px rgba(0, 0, 0, 0.1)");
                $(this).css("border", "1px solid #ebe7e7");
                // alert("hii");
                }, function(){
                $(this).css("box-shadow", "0px -2px 2px rgba(0, 0, 0, 0.1)");
                $(this).css("border", "1px solid #ebe7e7");
              });
              $(".button_border").hover(function(){
                $(this).css("background-color", "#03aeed");
                $(this).css("border-color", "#03aeed");
                $(this).css("color","white")                
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("border-color", "#03aeed");
                $(this).css("color","rgb(20, 88, 171)"); 
              });
             $(".post_title").hover(function(){
                // #ff7825
                $(this).css("color", "orange"); 
                }, function(){
                $(this).css("color", "black");
              });
             $(".post_sub_title_grey").hover(function(){
                // #ff7825
                $(this).css("color", "orange"); 
                }, function(){
                $(this).css("color", "#A5A4A4");
              });
             $(".dropdown_menu_item_hover").hover(function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "#ff7825");
                }, function(){
                $(this).css("background-color", "transparent");
                $(this).css("color", "black");
              });   
            });
      }
}
