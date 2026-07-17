// Initialize AOS
AOS.init({duration:800,easing:'ease-out-cubic',once:true});

// Typed.js for roles
if(window.Typed){
  new Typed('#typed',{strings:["AutoCAD","Revit BIM Modeler","Civil Engineer","Tekla Modular"],typeSpeed:60,backSpeed:30,backDelay:1600,loop:true});
}

// Particles.js simple config
if(window.particlesJS){
  particlesJS('particles-js',{
    particles:{number:{value:40,density:{enable:true,value_area:800}},color:{value:"#6366F1"},shape:{type:'circle'},opacity:{value:0.12},size:{value:3},line_linked:{enable:true,opacity:0.06}},
    interactivity:{detect_on:'canvas',events:{onhover:{enable:true,mode:'repulse'}}},retina_detect:true
  });
}

// Skill circles animation — use data-percent
document.addEventListener('DOMContentLoaded',function(){
  const skills = document.querySelectorAll('.skill');
  skills.forEach(s => {
    const pct = parseInt(s.getAttribute('data-percent')||0,10);
    const circle = s.querySelector('.skill-circle');
    const deg = pct * 3.6; // 360deg = 100%
    circle.style.background = `conic-gradient(var(--primary) ${deg}deg, rgba(255,255,255,0.06) ${deg}deg)`;
    const percLabel = s.querySelector('.skill-percent');
    let cur = 0;
    const id = setInterval(()=>{
      cur++; if(cur>pct) {clearInterval(id);}
      percLabel.textContent = cur + '%';
    },12);
  });
});
