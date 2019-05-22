function getListOfTasks(){
    var ret = [];
    var tasks = document.getElementsByClassName("text-left");
    for(var i = 0; i < tasks.length; i++){
      ret.push(tasks[i].innerText);
    }
    return ret;
  }

  function printTasks(){
    var content = getListOfTasks();
    var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    pri.document.open();
    for(var i = 0; i < content.length; i++){
      pri.document.write(content[i] + "<br>");
    }
    pri.document.close();
    pri.focus();
    pri.print();
  }