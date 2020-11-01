var name=prompt("Enter your name");
if(name!=null&&name!=""&&Cookies.get('name')!=name){
  Cookies.set('name',name{ expires: 1 })
  alert("Welcome "+Cookies.get('name'));
}else{
  alert("Welcome again "+Cookies.get('name'))
}
