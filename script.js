    alert("This site uses Cookies")
    let top_button=document.getElementById('top_button');
    window.onscroll=function(){
        scroll();
    }
    function scroll(){
        if (document.documentElement.scrollTop>500|document.body.scrollTop>500){
            top_button.style.display='block'
        }
        else{
            top_button.style.display='none'
        }
    }
    function topfunction(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }
