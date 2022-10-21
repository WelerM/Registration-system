const menu_lateral_li = document.querySelectorAll('.menu-lateral-li')
const conteudo_preview = document.querySelector('.conteudo-preview')
const informacoes_edificio = document.querySelector('.informacoes-edificio')
const informacoes_andares = document.querySelector('.informacoes-andares')
const informacoes_limpeza = document.querySelector('.informacoes-limpeza')
const manual_portaria = document.querySelector('.manual-portaria')
const contatos = document.querySelector('.contatos')
const input_container_left = document.querySelector('.input-container-left')
const slider_amarelo = document.querySelector('.slider-amarelo')
const pagina_cadastro = document.querySelector('.pagina-cadastro')
const pagina_ajuda = document.querySelector('.pagina-ajuda')
const ajuda = document.querySelector('.ajuda')


ajuda.addEventListener('click', () => {
    input_container_left.classList.toggle('input-container-left-hide')
    pagina_cadastro.classList.toggle('pagina-cadastro-hide')
    slider_amarelo.classList.toggle('slider-amarelo-on')
    ajuda.classList.toggle('buscar-visitante-on')
    if (x == true) {
        setTimeout(() => {
            pagina_ajuda.classList.toggle('pagina-ajuda-on')
            ajuda.textContent = "voltar"
        }, 600)
        x = false
    } else if (x == false) {
        pagina_ajuda.classList.toggle('pagina-ajuda-on')
        ajuda.textContent = "ajuda"
        x = true
    }
})

function clean_background() {
    for (i of menu_lateral_li) {
        i.style.backgroundColor = '#2E2E2E'
    }
}
function limpa_conteudo(){
    conteudo_preview.style.display='none'
    informacoes_edificio.style.display='none'
    informacoes_andares.style.display='none'
    informacoes_limpeza.style.display='none'
    manual_portaria.style.display='none'
    contatos.style.display='none'
}
for (let i = 0; i < menu_lateral_li.length; i++) {
    menu_lateral_li[i].addEventListener('click', () => {
        clean_background()
        menu_lateral_li[i].style.backgroundColor = '#414141'
        if(menu_lateral_li[i].value == 1){
           limpa_conteudo()
            informacoes_edificio.style.display='block'
        }else if(menu_lateral_li[i].value == 2){
            limpa_conteudo()
            informacoes_andares.style.display='block'
        }else if(menu_lateral_li[i].value == 3){
            limpa_conteudo()
            informacoes_limpeza.style.display='block'
        }else if(menu_lateral_li[i].value == 4){
            limpa_conteudo()
            manual_portaria.style.display='block'
        }else if(menu_lateral_li[i].value == 5){
            limpa_conteudo()
            contatos.style.display='block'
        }
    })
}
