let data=document.getElementById("container");

let pageno=document.getElementById("pageno")

let pagenumber=1;

let URL=`https://api.github.com/repositories/1296269/issues?page=${pagenumber}&per_page=5 `



  fetch(URL).then((res)=>res.json()).then((result)=>{
    console.log(result)
  result.map((ele)=>{
      data.innerHTML+=`<p>${ele.title}</p>`
  })
  
  })
   




  
   function movenextpage(){
    data.innerHTML=""
    pagenumber=pagenumber+1
    if(pagenumber>=1){
      
    
    URL=`https://api.github.com/repositories/1296269/issues?page=${pagenumber}&per_page=5 `

    
         
    pageno.innerText=`Page No. ${pagenumber}`
    fetch(URL).then((res)=>res.json()).then((result)=>{
      console.log(result)
    result.map((ele)=>{
        data.innerHTML+=`<p>${ele.title}</p>`
    })
    
    })

    }
    
  }
  
  function moveprevpage(){
    data.innerHTML=""
    pagenumber=pagenumber-1
    if(pagenumber<=0){
      data.innerHTML+="page not found"
      pageno.innerText=`Page No. ${pagenumber}`
    }else if(pagenumber>0){
      URL=`https://api.github.com/repositories/1296269/issues?page=${pagenumber}&per_page=5 `

    
         
    pageno.innerText=`Page No. ${pagenumber}`
    fetch(URL).then((res)=>res.json()).then((result)=>{
      console.log(result)
    result.map((ele)=>{
        data.innerHTML+=`<p>${ele.title}</p>`
    })
    
    })

    }
    
    
  }

