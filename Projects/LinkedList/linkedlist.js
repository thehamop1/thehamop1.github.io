class linkedList{
  constructor(anum){
    this.firstNode = new nodeType(anum);
  }
  print(aNode){
    var self = this;
    if(aNode == undefined){
	return self.print(this.firstNode);
    }
    console.log(aNode.x);
    if(aNode.anotherNode != null)
      return self.print(aNode.anotherNode);
  }
  addNewNode(num, aNode){
    var self = this;
    if(aNode == undefined){
    	self.addNewNode(num, this.firstNode);
	return;
    }
    if(aNode.anotherNode == null){
      aNode.anotherNode = new nodeType(num);
      return;
    }else{
      self.addNewNode(num, aNode.anotherNode);
      return;
    }
  }
  find(aNode, num){
    var self = this;
    if (aNode.anotherNode == null) {
      return false;
    }
    if(aNode.anotherNode.x != num ){
      return self.find(aNode.anotherNode, num);
    }else if (aNode.anotherNode.x == num) {
      return true;
    }
  }
  del(aNode, num, previous){
    var self=this;
    if(aNode == null || aNode == undefined)
      return false;
    if(aNode.x == num){
      previous.anotherNode = aNode.anotherNode;
      return true;
    }else if(aNode.x != num){
        return self.del(aNode.anotherNode, num, aNode);
    }
  }
  search(aNode, num){
    var self = this;
	  if(aNode == undefined)
		return self.search(this.firstNode, num);
	  if(aNode == null)
		return false;
	  if(aNode.x == num){
	  	return true;
	  }else{
	  	return self.search(aNode.anotherNode, num);
	  }
  }
  deleteHead(aNode){
    this.firstNode = this.firstNode.anotherNode;
  }
  deleteTail(aNode){
    var self = this;
    if(aNode == undefined){
      return self.deleteTail(this.firstNode);
    }
    if(aNode.anotherNode.anotherNode != null){
	return self.deleteTail(aNode.anotherNode);
    }else{
        aNode.anotherNode = null;
        return;
    }
  }
}

class nodeType{
  constructor(anum){
    if(anum == undefined){
      this.x = 0;
      this.anotherNode = null;
      return;
    }
    this.x = anum;
    this.anotherNode = null;
    return;
  }

  pointTo(aNode){
    this.anotherNode = aNode;
  }
}

var ourLinkedList = new linkedList(5);
ourLinkedList.addNewNode(7);
ourLinkedList.addNewNode(9);
ourLinkedList.addNewNode(55);
ourLinkedList.addNewNode(77);
ourLinkedList.addNewNode(55);
// ourLinkedList.print();
// console.log("---------------------------------------------");
// ourLinkedList.deleteHead();
// ourLinkedList.print();
// console.log("---------------------------------------------");
// ourLinkedList.deleteTail();
// ourLinkedList.print();
