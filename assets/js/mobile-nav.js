 var menuOpen = false;
        $(".nav-button").on("click", function(){
          
          if(menuOpen){
            $(document.body).removeClass("show-menu");
            //$(".content-wrap").css('overflow-y', 'visible');
          }
          else{
            $(document.body).addClass("show-menu");  
            //$(".content-wrap").css('overflow-y', 'scroll');
          }
          menuOpen = !menuOpen;
          
        });

        $(window).on('load resize', function(){
          if (Modernizr.mq('(min-width: 650px)')) {
            //$(".content-wrap").css('overflow-y', 'visible');
          }
        });

  
        $(".close-button").on("click", function(){
            $(document.body).removeClass("show-menu");
        });


        
        var hasDropdown = $('.mobile-menu .nav li:has(ul)');

          hasDropdown.addClass('parent');
          $(".mobile-menu .nav li.parent > a").click(function(e){
            e.preventDefault();
            $('~ ul',this).slideToggle(200, function() {
                $(this).siblings('a').toggleClass('open');
            });
          });
          
          // var parentLink = hasDropdown.find('a').attr('href');
          // console.log(parentLink);
          // hasDropdown.find('ul').prepend('navItem'){
          //   $(this).attr('href', parentLink);
          // });
          //$("hasDropdown>ul").prepend(navItem);
          
          hasDropdown.each(function(){

            
            var link = $(this).find('a').attr('href');
            $('ul',this).prepend("<li><a href='#'>Overview</a></li>");
            $('ul>li:first>a',this).attr('href', link);


            
            
          });


var navItem = "<li><a href="/"> + "Overview" + /a></li>";

<li><a href="/">Overview</a></li>




          // $("hasDropdown>ul").prepend(navItem, function(){
          //    $(this).attr('href', parentLink);
          // });


        //var parentLink = $('.mobile-menu .nav li:has(ul) a').attr('href');
        //console.log(parentLink);
        //var navItem = "<li><a href="/">Overview</a></li>";
        //$(".mobile-menu .nav li.parent>ul").prepend(navItem);


        

        



var hasDropdown = $('.mobile-menu .nav li:has(ul)');

          hasDropdown.addClass('parent');
          $(".mobile-menu .nav li.parent > a").click(function(e){
            e.preventDefault();
            $('~ ul',this).slideToggle(200, function() {
                $(this).siblings('a').toggleClass('open');
            });
          });
          var navItem = "<li><a href="/">Overview</a></li>";
          var parentLink = hasDropdown.find('a').attr('href');
          console.log(parentLink);
          
          $("hasDropdown>ul").prepend('navItem');