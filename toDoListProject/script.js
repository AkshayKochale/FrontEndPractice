var mainColour = "blueviolet";

function toggle(id) {
  var gridviewcontainer = document.getElementById("gridviewcontainer");
  var listviewContainer = document.getElementById("listviewcontainer");
  var op = document.getElementById(id);
  op.style.backgroundColor = mainColour;
  op.style.color = "white";

  var toggleSec;
  if (id == "gridview") {
    toggleSec = "listview";
    listviewContainer.style.display = "none";
    gridviewcontainer.style.display = "grid";
  } else {
    toggleSec = "gridview";
    listviewContainer.style.display = "grid";
    gridviewcontainer.style.display = "none";
  }

  var op1 = document.getElementById(toggleSec);
  op1.style.backgroundColor = "white";
  op1.style.color = mainColour;
}

var pending = [];
var completed = [];

function addData() {
  var context = document.getElementById("addcontext");
  context.style.display = "none";
  var info = document.getElementById("gridtextbox");
  var title = document.getElementById("gridtext");

  var cur = { title: title.value, task: info.value };
  pending.push(cur);
  renderPending();
  info.value = "";
  title.value = "";
}

render();

function render() {
  renderPending();
  renderCom();
}

function renderPending() {
  var pendingDiv = document.getElementById("pendingData");
  pendingDiv.innerHTML = "";
  for (let i = 0; i < pending.length; i++) {
    let ele = pending[i];
    pendingDiv.innerHTML += createEle(ele.title, ele.task, i);
  }
}

function renderCom() {
  var completedDiv = document.getElementById("compData");
  completedDiv.innerHTML = "";
  completed.forEach((ele) => {
    completedDiv.innerHTML += createCompEle(ele.title, ele.task);
  });
}

function createEle(title, info, id) {
  var temp =
    "<div class='data-box' id='" +
    id +
    "'>" +
    "<div class='data-title'>" +
    title +
    " <i class='fa-solid fa-circle-xmark' onclick=rm(" +
    id +
    ")>" +
    "</i>  <i class='fa-solid fa-circle-check' onclick=done(" +
    id +
    ")></i> </div>" +
    "<div class='data-task'>" +
    info +
    "</div>" +
    "</div>";

  return temp;
}

function createCompEle(title, info) {
  var temp =
    "<div class='data-box-com'>" +
    "<div class='data-title comBac'>" +
    title +
    "</div>" +
    "<div class='data-task comBac'>" +
    info +
    "</div>" +
    "</div>";

  return temp;
}

function rm(id) {
  var temp = [];
  var rmv;
  for (let i = 0; i < pending.length; i++) {
    if (i != id) temp.push(pending[i]);
    else rmv = pending[i];
  }
  pending = temp;

  renderPending();
  renderList('pendingheading');
  return rmv;
}

function done(id) {
  var rmv = rm(id);
  completed.push(rmv);
  renderCom();
//   renderList('comheading');
}

function show() {
  var context = document.getElementById("addcontext");
  context.style.display = "inline";
}

function renderList(id) {
  var addDiv = document.getElementById("addheading");
  var penDiv = document.getElementById("pendingheading");
  var comDiv = document.getElementById("comheading");
  var dataDiv = document.getElementById("list-Data");
  var addBtn = document.querySelector(".addIconList");

  if (id == "addheading") {
    addBtn.style.display = "inline";
    dataDiv.style.display = "none";
  }
  else if(id=='pendingheading')
  {
    addBtn.style.display = "none";
    dataDiv.innerHTML="";
    dataDiv.style.display = "flex";

    for (let i = 0; i < pending.length; i++) {
        let ele = pending[i];
        dataDiv.innerHTML += createEle(ele.title, ele.task, i);
      }
    
  }
  else
  {
    addBtn.style.display = "none";
    dataDiv.innerHTML="";
    dataDiv.style.display = "flex";
    completed.forEach((ele) => {
        dataDiv.innerHTML += createCompEle(ele.title, ele.task);
      });
  }
}


function showContext()
{
    var btn=document.getElementById("addIconList");
    btn.style.display='none';

    var contex=document.getElementById("addcontextList");
    contex.style.display='flex';

}

function addDataList()
{

    var info = document.getElementById("gridtextbox1");
    var title = document.getElementById("gridtext1");
  
    var cur = { title: title.value, task: info.value };
    pending.push(cur);
    info.value = "";
    title.value = "";
    
    var btn=document.getElementById("addIconList");
    btn.style.display='inline';

    var contex=document.getElementById("addcontextList");
    contex.style.display='none';

}