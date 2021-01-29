const buttonStart = document.querySelector('.button-start-js');
const buttonStop = document.querySelector('.button-stop-js');
const buttonReset = document.querySelector('.button-reset-js');
let horas = document.querySelector('.countdown__horas-js');
let minutos = document.querySelector('.countdown__minutos-js');
let segundos = document.querySelector('.countdown__segundos-js');
let resultado = document.querySelector('.finish--active ');
let buttonInactive = document.querySelector('.finish__button--inactive-js');
let emptyInputs = document.querySelector('.empty--active');
let buttonInputs = document.querySelector('.empty__button--inactive-js');
let temporizador;

buttonStart.addEventListener('click', () => {
  if (segundos.value == '' && minutos.value == '' && horas.value == '') {
    emptyInputs.classList.remove('empty--inactive');
    return console.log('hola');
  }
  temporizador = setInterval(() => {
    if (segundos.value > 0) {
      --segundos.value;
      console.log(segundos.value);
    } else if (segundos.value == 0 && minutos.value > 0) {
      --minutos.value;
      console.log(`${minutos.value} minutos`);
      segundos.value = 59;
      console.log(segundos.value);
    } else if (segundos.value == 0 && minutos.value == 0 && horas.value > 0) {
      --horas.value;
      segundos.value = 59;
      minutos.value = 59;
      console.log(`hola`);
    } else if (segundos.value == 0 && minutos.value == 0 && horas.value == 0) {
      console.log(`finish`);
      clearInterval(temporizador);
      resultado.classList.remove('finish--inactive');

      buttonStart.disabled = false;
    }
  }, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
});

buttonStop.addEventListener('click', () => {
  console.log('parar');
  clearInterval(temporizador);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
});

buttonReset.addEventListener('click', () => {
  clearInterval(temporizador);
  segundos.value = '';
  minutos.value = '';
  horas.value = '';
  buttonStart.disabled = false;
  buttonStop.disabled = false;
});

buttonInactive.addEventListener('click', () => {
  console.log('hola');
  resultado.classList.add('finish--inactive');
});

buttonInputs.addEventListener('click', () => {
  emptyInputs.classList.add('empty--inactive');
});
