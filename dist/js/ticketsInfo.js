const policy=document.querySelector(".policy input"),next_btn=document.querySelector(".next_btn"),buttons=(policy.onclick=function(t){console.log(t.target.checked);let e=[];ticketsInput.forEach(t=>{console.log(typeof t.value),"0"!==t.value?e.push(!0):e.push(!1)}),t.target.checked?(next_btn.disabled=!1,next_btn.style.cursor="pointer"):(next_btn.disabled=!0,next_btn.style.cursor="not-allowed")},document.querySelectorAll(".content span:nth-of-type(3)")),ticketsInput=document.querySelectorAll(".content input");let allCount={one:"",two:"",three:""},tkType={one:"",two:"",three:""};buttons.forEach((t,o)=>{let l=0;t.addEventListener("click",t=>{let n=t.target.parentNode.parentNode.firstElementChild.textContent;switch(n){case"預售票":tkType.one=n;break;case"早鳥票":tkType.two=n;break;case"愛心票":tkType.three=n}"plus"===t.target.className&&ticketsInput.forEach((t,e)=>{if(e===o)switch(l++,t.value=l,n){case"預售票":allCount.one=l;break;case"早鳥票":allCount.two=l;break;case"愛心票":allCount.three=l}}),"minus"===t.target.className&&ticketsInput.forEach((t,e)=>{if(e===o&&0!==l)switch(l--,t.value=l,n){case"預售票":allCount.one=l;break;case"早鳥票":allCount.two=l;break;case"愛心票":allCount.three=l}}),0!==l&&(document.querySelector(".warn_txt").textContent=""),console.log(allCount),localStorage.setItem("allCount",JSON.stringify(allCount)),localStorage.setItem("ticketType",JSON.stringify(tkType))})}),next_btn.onclick=function(){console.log(123);let e=[];ticketsInput.forEach(t=>{console.log(typeof t.value),"0"!==t.value?e.push(!0):e.push(!1)}),e[0]||e[1]||e[2]?(ticketsInput.forEach(t=>{t.value="0"}),document.querySelector(".warn_txt").textContent="",policy.checked=!1,next_btn.textContent="查詢空位中...",setTimeout(function(){location.href="ticketsForm.html"},1e3)):document.querySelector(".warn_txt").textContent="請選擇票券數量"};