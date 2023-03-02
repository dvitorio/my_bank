//INICIALIZAÇÃO DE VARIÁVEIS
const btnCloseConfirm = document.getElementById('btnCloseConfirm');
const btnCloseMenu = document.getElementById('btnCloseMenu');
const confirmacaoSaque = document.querySelector('.confirmacaoSaque');
const options = document.querySelector('.options');
const login = document.querySelector('.login');
const saque = document.getElementById('saque');
const btnSaque = document.getElementById('btnSaque');
const btnAcessarConta = document.getElementById('btnAcessarConta');
const btnConfirmarSaque = document.getElementById('btnConfirmarSaque');
const btnConfirmaFechamentoModalSaque = document.getElementById('btnConfirmaFechamentoModalSaque');


//Realiza o login e abre o menu de opções
btnAcessarConta.onclick = ()=>{
     let numeroAgencia = document.getElementById('numeroAgencia').value;
     let numeroConta = document.getElementById('numeroConta').value;
     let senha = document.getElementById('senha').value;
     if(senha === '123456'){
          login.classList.add('d-none');
          options.classList.remove('d-none');
     }
};

//Fecha o modal de confirmação e volta ao menu de Opções
btnCloseConfirm.addEventListener('click', ()=>{
     confirmacao.classList.add('d-none');
     options.classList.remove('d-none');
});

//Abre modal de saque
btnSaque.addEventListener('click', ()=>{
     options.classList.add('d-none');
     saque.classList.remove('d-none');
});

//Confirma saque e conclui o processo
btnConfirmarSaque.addEventListener('click', ()=>{
     let valorSaque = document.getElementById('valorDesejado').value;
     saque.classList.add('d-none');
     login.classList.add('d-none');
     confirmacaoSaque.classList.remove('d-none');
});

//Fecha o menu de opções e volta à tela de login
btnCloseMenu.addEventListener('click', ()=>{
     login.classList.remove('d-none');
     options.classList.add('d-none');
});