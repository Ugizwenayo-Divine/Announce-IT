var status=['accepted','declined','active','deactive'];
function hide(id){
    document.getElementById(id).remove();
}
function details(id){
    document.getElementById(id).style.visibility='visible';
}
function closed(){
        document.getElementById('hold').style.visibility="hidden";
     
}
function login(){
    if((document.getElementById('email').value === "ugizwenayodiny@gmail.com") && (document.getElementById('psswd').value==="JULIA")){
        
        
        location.replace("../HTML/view-all-announcements-page.html")
    }
    else if(document.getElementById('email').value === "" && document.getElementById('psswd').value===""){
        location.replace("../HTML/login-page.html")
    }
    else{
        location.replace("../HTML/create-announcement-page.html")
        
    }}
    function otherInfo(id){
        var elmnt=document.getElementById(id);
        if(elmnt.style.visibility=="hidden"){
        elmnt.style.visibility="visible";
        }
        else{
        elmnt.style.visibility="hidden";
        }
    }