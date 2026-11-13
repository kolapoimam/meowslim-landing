/* Original vector placeholders for the upcoming Meowslim PNG assets. */
const skinColors={fair:"#F3C7A8",medium:"#C98E68",deep:"#84543F"};
function avatarSVG(gender,style,tone,color){
 const skin=skinColors[tone]||skinColors.fair;
 const cloth=/^#[0-9a-f]{6}$/i.test(color||"")?color:"#28694f";
 const eyes='<path d="M83 123q7-6 13 0M123 123q7-6 13 0" fill="none" stroke="#322D2D" stroke-linecap="round" stroke-width="3.5"/>';
 const smile='<path d="M103 149q9 9 18 0" fill="none" stroke="#935B54" stroke-width="3" stroke-linecap="round"/>';
 const body='<path d="M25 220q5-59 85-59 80 0 85 59" fill="#F9EEE0"/>';
 let art='';
 if(style==="hijab"||style==="khimar"){
  art='<path d="M47 109Q44 27 110 25q67 2 64 84l-9 59q18 25 30 52H25q14-33 31-52z" fill="'+cloth+'"/><ellipse cx="110" cy="112" rx="42" ry="55" fill="'+skin+'"/><path d="M63 111Q61 42 112 41q34 2 47 44Q120 69 93 82Q75 92 63 111z" fill="'+cloth+'"/>'+eyes+smile+'<path d="M61 147q12 33 49 35 37-2 49-35l17 29-16 44H60l-16-44z" fill="'+cloth+'"/><path d="M80 175q30 18 60 0" fill="none" stroke="#fff" stroke-opacity=".32" stroke-width="3"/>';
  if(style==="khimar")art+='<path d="M52 163q58 35 116 0l30 57H22z" fill="'+cloth+'"/><path d="M64 179q46 26 92 0" stroke="#fff" stroke-opacity=".23" stroke-width="4" fill="none"/>';
 }else if(style==="niqab"||style==="burqa"){
  art='<path d="M46 95Q44 24 110 26q68 1 65 69l20 125H25z" fill="'+cloth+'"/>';
  if(style==="niqab")art+='<path d="M64 110q46-15 92 0v24q-46 12-92 0z" fill="'+skin+'"/>'+eyes+'<path d="M56 136q54 12 108 0l9 84H47z" fill="'+cloth+'"/><path d="M73 146q38 10 75 0" fill="none" stroke="#fff" stroke-opacity=".27" stroke-width="2"/>';
  else art+='<rect x="65" y="107" width="90" height="31" rx="4" fill="#233b31" fill-opacity=".22"/><path d="M65 115h90M65 123h90M65 131h90M81 107v31M97 107v31M113 107v31M129 107v31M145 107v31" stroke="#fff" stroke-opacity=".5" stroke-width="1.3"/>';
 }else{
  art='<ellipse cx="110" cy="115" rx="49" ry="58" fill="'+skin+'"/>'+eyes+smile+'<path d="M74 137q5 42 36 51 35-9 37-51-8 17-20 19-17 16-36 0-11-2-17-19z" fill="#40302C"/>';
  if(style==="turban")art+='<path d="M59 90q-8-48 48-57 63-5 67 51-52-17-115 6z" fill="'+cloth+'"/><path d="M60 74q56-33 111 0M63 85q53-24 106-5M86 43q-6 16 12 36" fill="none" stroke="#fff" stroke-opacity=".43" stroke-width="8" stroke-linecap="round"/>';
  else art+='<path d="M59 92Q59 46 110 46q52 0 52 46-53-12-103 0z" fill="'+cloth+'"/><path d="M65 85q45-10 90 0" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="3"/>';
 }
 return '<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrative '+style+' avatar placeholder" viewBox="0 0 220 220">'+body+art+'</svg>';
}
document.querySelectorAll("[data-gender]").forEach(el=>{el.innerHTML=avatarSVG(el.dataset.gender,el.dataset.style,el.dataset.tone,el.dataset.color)});
const toggle=document.querySelector(".menu-button");
const nav=document.getElementById("nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open))});
nav?.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");toggle?.setAttribute("aria-expanded","false")}));
const year=document.getElementById("year");if(year)year.textContent=String(new Date().getFullYear());