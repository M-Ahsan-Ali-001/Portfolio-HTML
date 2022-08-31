function scroller( elem,button){
    const buttons=["hm" ,"abt" ,"rdsm","prt","sv","ct"];
    var obj=document.getElementById(elem);
    obj.scrollIntoView({behavior: 'smooth' });

    var i=0;
    while(i<6){
        if(buttons[i]==button){
            document.getElementById(buttons[i]).style.color= '#ffffff';
        }
        else{
            document.getElementById(buttons[i]).style.color= 'rgb(141, 139, 139)';
        }
        i++;
    }
    if(screen.width<=768){
        var width = document.getElementById('sdbr');
        width.style.width="0px";
        width.style.contentVisibility="hidden";

    }

}