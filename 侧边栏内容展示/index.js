(function(){
  //立即执行函数
  var Sidebar = function(eId,closeBar){
    this.state = 'opened';
    this.el = document.getElementById(eId || 'sidebar')
    this.cloaseBarEl = document.getElementById(closeBar || 'closeBar')
  }
  Sidebar.prototype.close = function(){

  }
  Sidebar.prototype.open = function(){

  }
})()