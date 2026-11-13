/* Meowslim landing-page illustrations: independent placeholders for the full avatar engine. */
const tones=['#F3C7A8','#C98E68','#84543F','#D8A17C','#F1D3B8','#694638'];
const fabrics=['#0E6B56','#7955A0','#C98165','#D4A855','#426B88','#546A53','#AC6A88','#315C4B','#B78A63'];
const styles=['hijab','kufi','niqab','turban','khimar','kufi','burqa','tagelmust','hijab'];
const seedNames=['Amina','Yusuf','Hafsa','Ibrahim','Maryam','Bilal','Zainab','Idris','Fatima'];
function hash(str){let h=2166136261;for(let i=0;i<str.length;i++){h=Math.imul(h^str.charCodeAt(i),16777619)}return h>>>0}
function pick(arr,n){return arr[n%arr.length]}
function avatarSVG({style='hijab',skin='#F3C7A8',cloth='#0E6B56',variant=0}){
const face='<ellipse cx="110" cy="114" rx="47" ry="59" fill="'+skin+'"/>';
const eyes=variant%4===0?'<path d="M81 120q7-7 14 0M125 120q7-7 14 0" stroke="#2B302C" stroke-width="3" fill="none" stroke-linecap="round"/>':'<ellipse cx="88" cy="122" rx="3.4" ry="4.2" fill="#2B302C"/><ellipse cx="131" cy="122" rx="3.4" ry="4.2" fill="#2B302C"/>';
const smile=variant%3===0?'<path d="M102 151q9 10 19 0" fill="none" stroke="#945B51" stroke-width="3" stroke-linecap="round"/>':'<path d="M104 150q7 5 14 0" fill="none" stroke="#945B51" stroke-width="2.7" stroke-linecap="round"/>';
const body='<path d="M23 220q7-60 87-60t87 60" fill="'+(variant%2?'#F8E9D8':'#F8F0E7')+'"/><path d="M65 182q45 23 91 0" stroke="#E4D3C6" stroke-width="3" fill="none"/>';
let parts='';
if(style==='hijab'||style==='khimar'){
 parts='<path d="M47 110Q44 26 110 26q69 0 66 84l-10 57q17 21 30 53H24q13-37 31-53z" fill="'+cloth+'"/>'+face+'<path d="M62 106Q61 40 112 40q34 2 47 45-31-17-62-4-24 10-35 25" fill="'+cloth+'"/>'+eyes+smile+'<path d="M61 145q12 35 49 36 36-1 49-36l18 29-17 46H60l-17-46z" fill="'+cloth+'"/><path d="M80 179q29 15 60 0" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="3"/>';
 if(style==='khimar')parts+='<path d="M52 162q59 38 116 0l30 58H22z" fill="'+cloth+'"/><path d="M65 181q45 25 90 0" stroke="#fff" stroke-opacity=".2" stroke-width="3" fill="none"/>';
}else if(style==='niqab'||style==='burqa'||style==='tagelmust'){
 parts='<path d="M44 100Q42 23 110 25q68 0 68 75l20 120H22z" fill="'+cloth+'"/>';
 if(style==='burqa')parts+='<rect x="64" y="107" width="92" height="33" rx="4" fill="#132821" fill-opacity=".22"/><path d="M65 116h90M65 124h90M65 132h90M79 107v33M95 107v33M111 107v33M127 107v33M143 107v33" stroke="#fff" stroke-opacity=".54" stroke-width="1.6"/>';
 else parts+='<path d="M62 110q47-17 96 0v23q-49 12-96 0z" fill="'+skin+'"/>'+eyes+'<path d="M56 138q52 14 108 0l11 82H45z" fill="'+cloth+'"/><path d="M70 148q41 9 82 0" stroke="#fff" stroke-opacity=".25" stroke-width="3" fill="none"/>';
}else{
 parts=face+eyes+smile+'<path d="M73 139q5 42 37 49 35-9 38-49-12 23-25 18-15 13-30 0-12 4-20-18z" fill="'+(variant%2?'#4B3029':'#2D3030')+'"/>';
 if(style==='turban')parts+='<path d="M57 93Q53 38 111 33q62-2 64 50-54-17-118 10z" fill="'+cloth+'"/><path d="M59 76q61-34 112 0M63 88q52-23 105-5M81 46q-7 15 14 33" fill="none" stroke="#fff" stroke-opacity=".42" stroke-width="8" stroke-linecap="round"/>';
 else parts+='<path d="M59 92Q59 46 110 46q53 0 52 46-53-12-103 0z" fill="'+cloth+'"/><path d="M65 84q47-11 91 0" stroke="#fff" stroke-opacity=".45" stroke-width="3" fill="none"/>';
}
return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" role="img" aria-label="'+style+' avatar illustration">'+body+parts+'</svg>';
}
function itemFor(name,i){const n=hash(name+'|'+i);return {style:styles[i%styles.length],skin:pick(tones,n>>>3),cloth:pick(fabrics,n>>>9),variant:n>>>17}}
function drawMosaic(seed){document.querySelectorAll('[data-position]').forEach((el)=>{const i=Number(el.dataset.position);const name=i===4?seed:seedNames[i];const item=itemFor(name,i);el.innerHTML=(i===4?'<span class="you-tag">You</span>':'')+avatarSVG(item);el.style.background=['#E3F0E9','#F3E8D7','#EDE4F4','#F2E3DB','#DCEFE7','#E7ECF3','#E5EED9','#F5E3CE','#EBE8F2'][i]})}
const presets={hijab:{style:'hijab',skin:'#D69A74',cloth:'#9272AA',variant:4},niqab:{style:'niqab',skin:'#84543F',cloth:'#305D51',variant:2},turban:{style:'turban',skin:'#C98E68',cloth:'#C98165',variant:1},kufi:{style:'kufi',skin:'#84543F',cloth:'#426B88',variant:5},khimar:{style:'khimar',skin:'#84543F',cloth:'#CE9A5E',variant:0}};
document.querySelectorAll('[data-character]').forEach((el)=>{const p=presets[el.dataset.character];if(p)el.innerHTML=avatarSVG(p)});
const field=document.getElementById('seed');const form=document.getElementById('seed-form');
form?.addEventListener('submit',e=>{e.preventDefault();drawMosaic(field.value.trim()||'Meowslim')});
document.getElementById('shuffle')?.addEventListener('click',()=>{const val='Avatar-'+Math.random().toString(36).slice(2,8);field.value=val;drawMosaic(val)});
let timer;field?.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>drawMosaic(field.value.trim()||'Meowslim'),220)});
drawMosaic(field?.value||'Amina');
const toggle=document.querySelector('.mobile-toggle');const nav=document.getElementById('main-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
const year=document.getElementById('year');if(year)year.textContent=String(new Date().getFullYear());
