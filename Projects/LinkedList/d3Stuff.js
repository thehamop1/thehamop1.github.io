function drawLinkedList(container, list, num){
  if(list == null)
    return;
  if(num == undefined){
    num = 80;
  }else {
    num+=90;
  }
  circles.push(container.append("circle").attr("cx", num).attr("cy", 80).attr("r", 20).attr("class", 'node'));
  this.drawLinkedList(container, list.anotherNode, num);
}
function drawPointers(container, nodes){
  for(let x=0;x<nodes;x++){
    paths.push(container.append('path'));
  }
}
var circles = [];
var paths = [];
var linkedListContainer = d3.select("#linkedListContainer").append("svg")
  .attr("width", "100%")
  .attr("height", "100%")
.attr("class", "linkedList");

drawLinkedList(linkedListContainer, ourLinkedList.firstNode);
drawPointers(linkedListContainer, circles);
