function addItem()
{
    var l = document.getElementById("todo")
    var li = document.createElement("li");
    var text = document.createTextNode(l.value)
    li.setAttribute("class","lidec")
    li.appendChild(text)
    var ul = document.getElementById("list")
    l.value = ""
    //Delete Button
    var DelBtn = document.createElement("button");
    var text = document.createTextNode("Delete");
    DelBtn.appendChild(text)
    // Delete Button Attribute
    DelBtn.setAttribute("class","Btn");
    DelBtn.setAttribute("onclick","Del(this)");
    li.appendChild(DelBtn)    
     //Edit Button
     var DelBtn = document.createElement("button");
     var text = document.createTextNode("Edit");
     DelBtn.appendChild(text)
     // Edit Button Attribute
     DelBtn.setAttribute("class","Btn");
     DelBtn.setAttribute("onclick","Edit(this)");
     li.appendChild(DelBtn)    

    
     ul.appendChild(li)
    console.log(li)
}


function DelAll()
{
    var ul = document.getElementById("list")
    ul.innerHTML="";
}


function Del(e)
{
e.parentNode.remove()
}


function Edit(e)
{
   console.log( e.parentNode.firstChild.nodeValue)
  var j =  prompt(" Enter new value or edit ",e.parentNode.firstChild.nodeValue);
   e.parentNode.firstChild.nodeValue =j; 
}