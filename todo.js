 

 var addlist=document.getElementById("submitbtn");

 addlist.addEventListener('click',additem);
  
 function additem(e)
 {
   let parentlist=document.getElementById('ordered-list');
   if(parentlist.children[0].classList=="preview")
   {
     parentlist.children[0].remove();
   }
   var newlist=e.currentTarget.previousElementSibling;
    
   let newli=document.createElement('li');
 
   newli.innerHTML=`   <h4> ${newlist.value}  </h4> <button onclick="editfun(this)">edit</button>
    <button class="rmbtn" onclick="removebtn(this)" >remove`

        
   parentlist.appendChild(newli);

 }

 function removebtn(e)
 {
     
     let parentitem=e.parentElement;
     parentitem.remove();  
     let parentlist=document.getElementById('ordered-list');
     if(parentlist.children.length==0)
     {
       let show=document.createElement('h4');
       show.innerHTML="please add an element";
       show.classList.add("preview");
       parentlist.appendChild(show);
     }
 }

 function editfun(e){
    
    let updateelement=e.previousElementSibling;
     let write=document.createElement('input');
    write.type="text";
    write.placeholder=updateelement.innerHTML;
 
    let parentlist=e.parentElement;
    if(e.innerHTML==="edit")
    {
      parentlist.replaceChild(write,updateelement);
      e.innerHTML="enter";
    }
    else{
      let newval=e.previousElementSibling;
      let assign=document.createElement('h4');
      assign.innerHTML=newval.value;
      
      parentlist.replaceChild(assign,newval);
      e.innerHTML="edit";
      
    }

 }


 function  clearallElements(e){
    
 
  let parentitem= document.getElementById('ordered-list');

   parentitem.innerHTML="";
   let newchild=document.createElement('h4');
   newchild.innerHTML="add elements";
       newchild.classList.add("preview");
   parentitem.appendChild(newchild);

 
 }

