function(){
  const doc = document;
  let div = doc.queryselector("div");
  div.AddEventListener("mouseOver",function(){
    if(div.className=="banner"){
      div.style.border = '5px' solid green;
    }
  })
}
