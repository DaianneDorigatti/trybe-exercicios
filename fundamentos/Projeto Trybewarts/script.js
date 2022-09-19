// função para logar no formulário
const email = document.getElementById('input-email');
const senha = document.getElementById('input-senha');
const botaoEntrar = document.getElementById('botao-entrar');

function validaFormulario(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botaoEntrar.addEventListener('click', validaFormulario);
