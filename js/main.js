'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;

  function countUp(){
    const d = new Date(Date.now() - startTime);
    const m = d.getMinutes();
    const s = d.getSeconds();
    const ms = d.getMilliseconds();
    timer.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2,
       '0')}.${String(ms).padStart(3, '0')}`;

    timeoutId = setTimeout(() =>{
      countUp();
    }, 10);
  }

  start.addEventListener('click', ()=> {
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', ()=> {
    clearTimeout(timeoutId);
  });

  reset.addEventListener('click', ()=> {
    timer.textContent = '00:00.000';
  });

}