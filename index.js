let id={};
for(let i of document.all){if(i.id){id[i.id]=i}}
function log(e){console.log(e);return}
function dir(e){console.dir(e);return}

function name(e){
	if(!e)e=16;
	let string="";
let base=["obama","yogurt","pineapple","eric","sam","hui","gopa","barebuh",];
for(let i=0;i<e;i++){string+=base[Math.floor(Math.random()*base.length)]}
return(string);
}

let ids=new Map();



function start(){
log(1)
	if(document.location.href.indexOf("list")==-1){return}
for(let i in id){
if(id[i].localName=="span"){
id[i].append(newButton(id[i]))
}
}
return;
}
start();



function newButton(object){
	if(object.id=="blacklist-count")return
	let style="cursor:pointer;opacity:0.4;position:absolute;width:20px;height:20px;border-radius:30%;background-color:#a9ffa0;font-size:16px;text-align:center;border-style:solid;border-width:1px;border-color:black;user-select:none;";
    
if(object){
style+="left:"+(object.children[0].children[0].offsetLeft+object.children[0].children[0].offsetWidth-22)+"px;";
style+="top:"+(object.offsetTop+object.children[0].children[0].offsetHeight-22)+"px;";
}else{

}




let idd=name(8);

let div=document.createElement("div");

id[idd]=div;
div.style=style;
div.id=idd;
div.innerText="L";
div.alt="qwe";

div.addEventListener("mouseover",(e)=>{e.target.style.opacity=1});

div.addEventListener("mouseleave",(e)=>{e.target.style.opacity=0.4});

div.addEventListener("click",(e)=>{localStorage.setItem("manual",true);window.open(e.target.parentNode.children[0].href,"","_blank,width=100,height=100");});

window.addEventListener("resize",()=>{
div.style.top=(object.children[0].children[0].offsetTop+object.children[0].children[0].offsetHeight-22)+"px";
div.style.left=(object.children[0].children[0].offsetLeft+object.children[0].children[0].offsetWidth-22)+"px";
});


return(div)
}



if(document.location.href.indexOf("view")!=-1){//script works if you at preview page
	//document.append(newButton);
	//id.body.style.display="none";
	//save(id.image);window.close();

	let a=document.createElement("a");
	a.innerText="  Download";
	a.style="color:#009;cursor:pointer;position:absolute";
	a.id=name(8);


	a.onclick=()=>{save(id.image)};
	document.getElementById("right-col").append(a);
	

	let style="position:absolute;top:"+(3+id.image.offsetTop)+"px;left:"+(3+id.image.offsetLeft)+"px;cursor:pointer;user-select:none;height:30px;font-size:25px;text-align:center;background-color:rgb(170,229,164);box-sizing:border-box;border-style:solid;border-width:1px"
	window.addEventListener("resize",()=>{a.style.top=(3+id.image.offsetTop)+"px";a.style.left=(3+id.image.offsetLeft)+"px";});
	a.style=style;
	id.body.append(a);

} //script works if you at preview page




if(document.location.href.indexOf("images")!=-1||document.location.href.indexOf("sample")!=-1){//script works if you at source page
for(let i of document.all){if(i.tagName=="IMG"){save(i);window.history.back();window.close()}}
}


function save(obj){
	let format="";
let a=document.createElement("a");
if(obj.src.indexOf(".png")!=-1){format=".png"}
if(obj.src.indexOf(".jpg")!=-1){format=".jpg"}
if(obj.src.indexOf(".jpeg")!=-1){format=".jpeg"}
if(obj.src.indexOf(".gif")!=-1){format=".gif"}

a.download=name(10)+format;

if(obj.src.indexOf("?")!=-1){a.href=obj.src.slice(0,obj.src.indexOf("?"));}
else{a.href=obj.src}

log(format);
log(a.href);
log(a.download);

a.click();
return;
}
if(!localStorage.getItem("manual")){localStorage.setItem("manual",false)}

if(localStorage.getItem("manual")=="true"){
localStorage.setItem("manual",false);
if(document.location.href.indexOf("view")!=-1){
save(id.image);window.close();
}
}




