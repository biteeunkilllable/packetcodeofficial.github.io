const body = document.getElementById("body")
const ulbl2 = document.getElementById("ulbl2")
const bdy = document.getElementById("bdy")
const txtbx1 = document.getElementById("txtbx1")
const txtbx2 = document.getElementById("txtbx2")
const passbx1 = document.getElementById("passbx1")
const passbx2 = document.getElementById("passbx2")
const srchbx1 = document.getElementById("txtbx3")
const lbl7 = document.getElementById("lbl7")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const ubtn1 = document.getElementById("ubtn1")
const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const div0n = document.getElementsByClassName("note")
const info_windows = document.getElementById("info_windows")
let b1 = [true]
let notes =[document.getElementById("div01")]
let elemnts_1 = [document.getElementById("canv01")]
let elemnts_2 = [document.getElementById("lbl01")]
let elemnts_3 = [document.getElementById("icon01")]
let elemnts_4 = [document.getElementById("txtarea01")]
let elemnts_5 = [document.getElementById("div02")]
let elemnts_51 = [document.getElementById("div021")]
let elemnts_52 = [document.getElementById("div022")]
let elemnts_53 = [document.getElementById("div023")]
let lblarr = [document.getElementById("lbl01").innerText.toLowerCase()]
let date =[new Date]
let counter = 1
let tt = new Date
//ulbl2.innerText = "Last note date:"+tt.toDateString()
dnd(notes[0])
options(elemnts_3[0],elemnts_5[0])
elemnts_5[0].style.visibility = "hidden"
remove(elemnts_53[0],notes[0],elemnts_5[0],0)
info(elemnts_52[0],elemnts_5[0])
let username = "cats"
let password = "dogs"
let dd = new Date
ulbl2.innerText = "Last note date: "+String(dd.toLocaleString())
//.let t = new date
//ulbl2.innerText = `Last note date:${t.toLocaleDateString()}`
btn6.onclick = ()=>{
    //for(let j=0;i<srchbx1.value.length;j++)
    for(let i = 0; i<elemnts_2.length;i++){
        notes[i].style.visibility= "visible"
        notes[i].style.opacity= "0%"
    }

    for(let j = 0; j<elemnts_2.length;j++){
        for(let i = 0; i<elemnts_2.length;i++){
        if(srchbx1.value.toLowerCase().substring(srchbx1.value.indexOf(j),srchbx1.value.length) == elemnts_2[i].innerText.toLowerCase().substring(elemnts_2[i].innerText.toLowerCase().indexOf(j),srchbx1.value.length) && b1[i]){
            notes[i].style.opacity= "100%"
            notes[i].style.visibility= "visible"
        }
        else{
            notes[i].style.opacity= "100%"
            notes[i].style.visibility = "hidden"
        }

    }}
}
ubtn1.onclick = ()=>{
    div1.style.visibility = "hidden"
    info_windows.style.visibility = "hidden"
}
btn5.onclick = ()=>{
    date.push(new Date)
    ulbl2.innerText = "Last note date: "+String(date[counter].toLocaleString())
    notes.push(document.createElement("div"))
    notes[counter].setAttribute("class","note")
    notes[counter].setAttribute("draggable","true")
    bdy.append(notes[counter])
    elemnts_1.push(document.createElement("canvas"))
    elemnts_1[counter].setAttribute("class","note_elm1")
    notes[counter].append(elemnts_1[counter])
    elemnts_2.push(document.createElement("label"))
    elemnts_2[counter].setAttribute("class","note_elm2")
    elemnts_2[counter].setAttribute("contenteditable",'true')
    lblarr.push(elemnts_2[counter].innerText.toLowerCase())
    notes[counter].append(elemnts_2[counter])
    elemnts_3.push(document.createElement("i"))
    elemnts_3[counter].setAttribute("class","fa-solid fa-ellipsis-vertical fa-2xl note_elm3")
    elemnts_3[counter].setAttribute("id","icon01")
    notes[counter].append(elemnts_3[counter])
    elemnts_4.push(document.createElement("textarea"))
    elemnts_4[counter].setAttribute("class","note_elm4")
    notes[counter].append(elemnts_4[counter])
    elemnts_5.push(document.createElement("div"))
    elemnts_5[counter].setAttribute("class","note_elm5")
    elemnts_5[counter].setAttribute("id","div02")
    notes[counter].append(elemnts_5[counter])
    elemnts_5[counter].style.visibility = "hidden"
    elemnts_51.push(document.createElement("div"))
    elemnts_51[counter].setAttribute("class","elm5_1")
    elemnts_5[counter].append(elemnts_51[counter])
    elemnts_52.push(document.createElement("button"))
    elemnts_52[counter].setAttribute("class","elm5_2")
    elemnts_5[counter].append(elemnts_52[counter])
    elemnts_52[counter].innerText = "info"
    elemnts_53.push(document.createElement("button"))
    elemnts_53[counter].setAttribute("class","elm5_3")
    elemnts_5[counter].append(elemnts_53[counter])
    elemnts_53[counter].innerText = "Delete"
    b1.push(true)
    setTimeout(() => {
        for(let i = 0; i < counter; i++)
        info(elemnts_52[i],elemnts_5[i])
        for(let i = 0; i < counter; i++){
            remove(elemnts_53[i],notes[i],elemnts_5[i],i)
        }
        for(let i = 0; i < counter; i++){
            
            options(elemnts_3[i],elemnts_5[i])
        }
        for(let i = 0; i < counter; i++){
            dnd(notes[i])
        }
    }, 100);
    //elemnts[counter].setAttribute("id",`div0${counter}`)
   // dndarr.push(dnd(notes[counter])) //the note looper
//   ulbl2.innerText = `Last note date:${date[counter].toLocaleDateString()}`
    counter += 1
}
btn4.onclick = () => {
    div3.style.visibility = "hidden"
}
btn3.onclick = ()=>{
    if(txtbx2.value.length < 3 || passbx2.value.length < 3){
        window.alert("minimum of 3 letters")
        return;
    }
     username = txtbx2.value
     password = passbx2.value
    //console.log(password,"",username)
    div2.style.visibility = "visible"
    div3.style.visibility = "hidden"
}
btn2.onclick = () => {
    div2.style.visibility = "hidden"
    div3.style.visibility = "visible"
}
btn1.onclick = () => {
    if(txtbx1.value == username && passbx1.value == password){
        div1.style.visibility = "hidden"
        div2.style.visibility = "hidden"
    }
}
function dnd(note){
    let x
    let y
    note.addEventListener('dragstart',(e)=>{
        x = e.clientX
        y = e.clientY
    e.dataTransfer.setDragImage(e.target, window.outerWidth, window.outerHeight);
    note.addEventListener('drag',(e)=>{
        note.style.top = `${e.clientY - 20}px`
        note.style.left = `${e.clientX - 150}px`
        if(e.clientX != 0 && e.clientY != 0){
        x = e.clientX
        y = e.clientY
    }
})})
note.addEventListener('dragend',(e)=>{
    note.style.top = `${e.clientY - 20}px`
    note.style.left = `${e.clientX - 150}px`
    //console.log(div6x,"   ",div6y)
})
}
function options (icon,div){
    icon.onclick = ()=>{
    if(div.style.visibility == "hidden"){div.style.visibility = "visible"}
    else{div.style.visibility = "hidden"}
    }
}
function remove (btn,div,wind,num){
    btn.onclick = ()=>{
        elemnts_2.splice(num,1)
        div.style.visibility = "hidden"
        wind.style.visibility = "hidden"
        b1[num] = false
    }
}
function info (btn,wind,infowindow){
    btn.onclick = ()=>{
        info_windows.style.visibility = "visible"
        div1.style.visibility = "visible"
    wind.style.visibility = "hidden"
    }
}
function firstName(elemnt,count){
    let b11 = true
    if(b11){
    elemnt.innerText = "new note "+ String(count)
    }
    b11 = false
}

















/*const txtbx1 = document.getElementById("txtbx1")
const passbx1 = document.getElementById("passbx1")
const btn1 = document.getElementById("btn1")

btn1.onclick = ()=>{
    console.log(document.getElementById("txtbx1").value)
    const st1 = txtbx1.value,st2 = passbx1.value
    console.log(st1,"--",st2)
    if(st1 == "cats" && st2 == "dogs")
    {
        document.getElementById("lbl1").setAttribute("style","color: green;")
        document.getElementById("lbl1").innerText = "Login sucssesfully"
        document.location = "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjYxcvM0oj-AhVUTqQEHX5BCqYQPAgIqq"
    }
    else{
        document.getElementById("lbl1").setAttribute("style","color: red;")
        document.getElementById("lbl1").innerText = "invalid username or password"
    }
}*/

/*bool1 = true
const timer = setInterval(()=>{
let date = new Date()
let hours = date.getHours()
let st1
if(hours >= 12)
st1 = "PM"
else
st1 = 'AM'
    document.getElementById('lbl1').innerText = `${hours % 12}:${date.getMinutes() < 10 ? "0"+date.getMinutes():date.getMinutes()}:${date.getSeconds() < 10 ? "0"+date.getSeconds():date.getSeconds()}  ${st1}`
},1000)*/

/*let card = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
console.log(card.length)

console.log(suffle(card))
function suffle(card)
{
    let count = card.length

    while(count != 0)
    {
        let randindex = Math.floor(Math.random()*13) 
        count -=1
        let temp = card[count]
        card[count] = card[randindex]
        card[randindex] = temp
    }
    return card
}*/

/*window.alert("press new task to add more notes and press submit to submit them and press on the checkbox to delete the completed tasks")
function tskdn(num)
{
    document.getElementById("ckbx"+String(num)).onclick = function(){
        if(document.getElementById("ckbx"+String(num)).checked){
        document.getElementById("lbl"+String(num)).innerHTML = "<del>"+document.getElementById("lbl"+String(num)).innerHTML+"</del>"
        }else{
            document.getElementById("lbl"+String(num)).innerHTML =   document.getElementById("lbl"+String(num)).innerHTML.substring(5,document.getElementById("lbl"+String(num)).innerHTML.length - 6)
    
        }   
 }
}
let counter = 1
document.getElementById("btn1").onclick = function()
{
    let txt = window.prompt("enter the new task")
    document.getElementById("div1").innerHTML += `<label id="lbl${counter}">${txt}</label><input type="checkbox"  id="ckbx${counter}" name="ckbx"><br>`
    counter+=1
}
document.getElementById("btn2").onclick = function()
{
    for(let i=1;i<counter;i+=1)
    tskdn(i)
}*/

/*let temp;
//console.log("test1")
document.getElementById("btn1").onclick = function()
{
  //  console.log("test2")
    temp = document.getElementById("txtbx1").value
    if(document.getElementById("rd1").checked)
    {
    //    console.log("test3")
        document.getElementById("lbl1").innerText = "the temp in celesus is"
        document.getElementById("lbl2").innerText = String(temp)
    }
    else if(document.getElementById("rd2").checked)
    {
      //  console.log("test4")
        document.getElementById("lbl1").innerText = "the temp in fehrenhiet is"
        document.getElementById("lbl2").innerText = String(temp * 9/5 +32)
    }
    //console.log("tes5")
}
//console.log("test6")*/

/*let bool = true
document.getElementById("lbl1").innerHTML = "<mark>cat</mark> a <strong>cat</strong> <del>not a cat</del><br>"
document.getElementById("lbl2").innerText = "<mark>dog</mark> a <strong>dog</strong> <del>not a dog</del>"
document.getElementById("btn1").onclick = function()
{
    if(bool)
        {document.getElementById("form1").innerHTML  ="<input type=\"color\"/> <input type=\"checkbox\"><input type=\"checkbox\"><input type=\"checkbox\">"
        document.getElementById("lbl3").attributes = "style=\"color: red;\""}
        else
        {document.getElementById("form1").innerHTML  =null
        document.getElementById("lbl3").attributes = "style=\"color: green;\""}
    bool = !(bool)
}*/

/*document.getElementById("btn1").onclick = function()
{
    if(document.getElementById("ck1").checked)
    {document.getElementById("lbl1").innerHTML = "you choose the first choice"}
    else if(document.getElementById("ck2").checked)
    {document.getElementById("lbl1").innerHTML = "you choose the second choice"}
    else if(document.getElementById("ck3").checked)
    {document.getElementById("lbl1").innerHTML = "you choose the third choice"}
    else if(document.getElementById("ck4").checked)
    {document.getElementById("lbl1").innerHTML = "you choose the fourth choice"}
}*/

/*let bool1;
document.getElementById("ckbx1").onclick = function()
{
    if(document.getElementById("ckbx1").checked)
    {
        document.getElementById("lbl1").innerHTML = "you are subscribed"
    }
    else
    {
        document.getElementById("lbl1").innerHTML = "you are not subscribed"
    }
}*/

/* 3 Dices (js)
let x,y,z
document.getElementById("btn1").onclick = function()
{
    3 dices program
    x = Math.floor(Math.random() * 7)
    y = Math.floor(Math.random() * 7)
    z = Math.floor(Math.random() * 7)
    document.getElementById("lbl1").innerHTML = String(x)
    document.getElementById("lbl2").innerHTML = String(y)
    document.getElementById("lbl3").innerHTML = String(z)
}*/