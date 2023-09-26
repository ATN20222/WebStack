var nav = document.querySelector('nav');
var navItem= document.querySelectorAll('.RightNav ul li a');
    window.onscroll = function() {
    var scrollPosition = window.scrollY;
    var threshold = 10;
    
    if (scrollPosition > threshold) {
        nav.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px';
        nav.style.position = "sticky";
        navItem.forEach(e=>{
            e.style.color ="#607d8b";
        })
    } else {
        nav.style.boxShadow = 'none';
        nav.style.position = "revert";
        navItem.forEach(e=>{
            e.style.color ="white";
        })

    }
    };

    window.addEventListener('scroll', function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      
        var progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        document.querySelector('.barbar').style.width = progress + '%';
        
      });
