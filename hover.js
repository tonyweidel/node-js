function(){
  const doc = document;
  let div = doc.queryselector("div");
  div.AddEventListener("click",function(){
    if(div.className=="banner"){
      div.style.border = solid green;
    }
  })
}
