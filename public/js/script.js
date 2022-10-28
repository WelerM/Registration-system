//=============== PAGINA DE CADASTRO ========================//
const main_container = document.querySelector('.main-container')
const left_menu = document.querySelector('.left-menu')
const input_nome = document.querySelector('#input-nome')
const input_documento = document.querySelector('#input-documento')
const input_andar = document.querySelector('#input-andar')
const btn_cadastrar = document.querySelector('#btn_cadastrar')
const tipo_visita = document.querySelectorAll('#tipo-visita')

//===================  PAGINA BUSCA ========================//
const pesquisar_por_nome = document.querySelector('#pesquisar-por-nome')
const anterior = document.querySelector('#anterior')
const proximo = document.querySelector('#proximo')
const dias = document.querySelectorAll('.dia')
const procurar = document.querySelector('#procurar')
const nada_encontrado = document.querySelector('.nada-encontrado')

//==================== COLUNAS =================================
const colunas_container = document.querySelector('.colunas-container')
const col = document.querySelectorAll('#col')
const col_data = document.querySelector('.output-col-data')
const col_hora = document.querySelector('.output-col-hora')
const col_nome = document.querySelector('.output-col-nome')
const col_doc = document.querySelector('.output-col-documento')
const col_andar = document.querySelector('.output-col-andar')
const col_visita = document.querySelector('.output-col-visita')
const col_dia = document.querySelector('.output-col-dia')

//======================= DATAS =========================
const date = new Date()
const date_year = date.getFullYear()
const date_month = date.getMonth()
const date_month_edited = date.getMonth() + 1
const date_day = date.getDate()
const date_hour = date.getHours()
const date_min = date.getMinutes()
const hora_atual = date_hour + ':' + date_min
const data_atual = date_day + '/' + date_month_edited + '/' + date_year
const dp_mes = document.querySelector('#dp_mes')
const array_meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']


const pagina_cadastro = document.querySelector('.pagina-cadastro')
const btn_buscar_visitante = document.querySelector('#btn-buscar-visitante')
const pagina_busca = document.querySelector('.pagina-busca')


//                       (  EVENTOS )            
//====================================================================

var x = true
var text = ''

pesquisar_por_nome.addEventListener('keydown', (e) => {
    nada_encontrado.style.display = 'none'
    if (e.key == "Backspace") {
        text = ''
        pesquisar_por_nome.textContent = ''
        limpaColunas()
    } else {
        text += e.key
        limpaColunas()// cada vez que digitar letra
        pesquisaPorNome()
        pesquisaPorNomeRetorno()
    }

})

//Esconde tela de cadastro e abre tela de busca
btn_buscar_visitante.addEventListener('click', () => {
    pagina_cadastro.classList.toggle('pagina-cadastro-hide')
    pagina_busca.classList.toggle('pagina-busca-on')
})



function validacao_input() {
    if (input_andar.value <= 0 || input_andar.value > 9) {
        console.log('erro');
    } else if (input_andar.value > 0 && input_andar.value <= 9) {
        console.log('ok');
    }
}

//Cadastrar usuáriuo

btn_cadastrar.addEventListener('click', () => {

    //Validação de formulário aqui   

    async function postData() {
        const name = input_nome.value
        const document = input_documento.value
        const floor = input_andar.value
        //Atribui a string do mês para ser salva no banco de dados
        if (date_month == 0) {
            month = "janeiro"
        } else if (date_month == 1) {
            month = "fevereiro"
        } else if (date_month == 2) {
            month = "março"
        } else if (date_month == 3) {
            month = "abril"
        } else if (date_month == 4) {
            month = "maio"
        } else if (date_month == 5) {
            month = "junho"
        } else if (date_month == 6) {
            month = "julho"
        } else if (date_month == 7) {
            month = "agosto"
        } else if (date_month == 8) {
            month = "setembro"
        } else if (date_month == 9) {
            month = 'outubro'
        } else if (date_month == 10) {
            month = "novembro"
        } else if (date_month == 11) {
            month = "dezembro"
        }
        dp_mes.textContent = month

        const data = {
            data: data_atual,
            hora: hora_atual,
            name: name,
            documento: document,
            andar: floor,
            tipo_visita: visita_selecionada,
            mês: month,
            dia: date_day
        }
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('/api', options)
    }
    postData()
})

//Procurar
var mes_value = date_month_edited

var m = date_month_edited
anterior.addEventListener('click', () => {
    if (m == 0) {
        m = m
        dp_mes.textContent = array_meses[m]
    } else {
        m -= 1
        dp_mes.textContent = array_meses[m]
        mes_value = m
        console.log(mes_value);
    }
})
proximo.addEventListener('click', () => {
    if (m == 11) {
        m = m
        dp_mes.textContent = array_meses[m]
    } else {
        m = m + 1
        dp_mes.textContent = array_meses[m]
        mes_value = m
        console.log(mes_value);
    }
})
function inserreMesAtual(){
    if (date_month == 0) {
        month = "janeiro"
    } else if (date_month == 1) {
        month = "fevereiro"
    } else if (date_month == 2) {
        month = "março"
    } else if (date_month == 3) {
        month = "abril"
    } else if (date_month == 4) {
        month = "maio"
    } else if (date_month == 5) {
        month = "junho"
    } else if (date_month == 6) {
        month = "julho"
    } else if (date_month == 7) {
        month = "agosto"
    } else if (date_month == 8) {
        month = "setembro"
    } else if (date_month == 9) {
        month = 'outubro'
    } else if (date_month == 10) {
        month = "novembro"
    } else if (date_month == 11) {
        month = "dezembro"
    }
    dp_mes.textContent = month
}
inserreMesAtual()

procurar.addEventListener('click', () => {
    nada_encontrado.style.display = 'none'
    //Janeiro
    if (mes_value == 0) {
        async function getJaneiro() {
            const response = await fetch('/janeiro')
            const data = await response.json()
            if (dia_selecionado == "todos dias") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                todosDias(data)
            } else {
                const data_filtrada = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                console.log(data_filtrada);
                limpaColunas()
                insereDadosColunas(data_filtrada)
            }
        }
        getJaneiro()
        //Fevereiro
    } else if (mes_value == 1) {
        async function getFevereiro() {
            const response = await fetch('/fevereiro')
            const data = await response.json()

            if (dia_selecionado == "todos dias") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                todosDias(data)
            } else {
                const data_filtrada = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                insereDadosColunas(data_filtrada)
            }
        }
        getFevereiro()
        //Março
    } else if (mes_value == 2) {
        async function getMarço() {
            const response = await fetch('/marco')
            const data = await response.json()

            if (dia_selecionado == "todos dias") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                todosDias(data)

            } else {
                const data_filtrada = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                insereDadosColunas(data_filtrada)
            }
        }
        getMarço()
        //Abril
    } else if (mes_value == 3) {
        async function getAbril() {
            const response = await fetch('/abril')
            const data = await response.json()

            if (dia_selecionado == "todos dias") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                todosDias(data)

            } else {
                const data_filtrada = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                insereDadosColunas(data_filtrada)
            }
        }
        getAbril()
        //Maio
    } else if (mes_value == 4) {
        async function getMaio() {
            const response = await fetch('/maio')
            const data = await response.json()

            if (dia_selecionado == "todos dias") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                todosDias(data)

            } else {
                const data_filtrada = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                insereDadosColunas(data_filtrada)
            }
        }
        getMaio()
        //Junho
    } else if (mes_value == 5) {
        async function getJunho() {
            const response = await fetch('/junho')
            const data = await response.json()

            if (dia_selecionado == "todos dias") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                todosDias(data)

            } else {
                const data_filtrada = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                insereDadosColunas(data_filtrada)
            }
        }
        getJunho()
        //Julho
    } else if (mes_value == 6) {
        async function getJulho() {
            const response = await fetch('/julho')
            const data = await response.json()

            if (dia_selecionado == "todos dias") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                todosDias(data)

            } else {
                const data_filtrada = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                insereDadosColunas(data_filtrada)
            }
        }
        getJulho()
        //Agosto
    } else if (mes_value == 7) {
        async function getAgosto() {
            const response = await fetch('/agosto')
            const data = await response.json()

            if (dia_selecionado == "todos dias") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                todosDias(data)

            } else {
                const data_filtrada = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                insereDadosColunas(data_filtrada)
            }
        }
        getAgosto()
        //Setembro
    } else if (mes_value == 8) {
        async function getSetembro() {
            const response = await fetch('/setembro')
            const data = await response.json()

            if (dia_selecionado == "todos dias") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                todosDias(data)

            } else {
                const data_filtrada = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                insereDadosColunas(data_filtrada)
            }
        }
        getSetembro()
        //Outubro
    } else if (mes_value == 9) {
        async function getOutubro() {
            const response = await fetch('/outubro')
            const data = await response.json()

            if (dia_selecionado == "todos dias") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                todosDias(data)

            } else {
                const data_filtrada = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                insereDadosColunas(data_filtrada)
            }
        }
        getOutubro()
        //Novembro
    } else if (mes_value == 10) {
        async function getNovembro() {
            const response = await fetch('Novembro')
            const data = await response.json()

            if (dia_selecionado == "todos dias") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                todosDias(data)

            } else {
                const data_filtrada = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                insereDadosColunas(data_filtrada)
            }
        }
        getNovembro()
        //Dezembro
    } else if (mes_value == 11) {
        async function getDezembro() {
            const response = await fetch('/dezembro')
            const data = await response.json()

            if (dia_selecionado == "todos dias") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                todosDias(data)

            } else {
                const data_filtrada = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                insereDadosColunas(data_filtrada)
            }
        }
        getDezembro()
    }
})


//                          ( Funções )
//====================================================================

async function pesquisaPorNome() {
    var jso = { name: text }
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jso)
    }
    fetch('/porNome', options)
}

async function pesquisaPorNomeRetorno() {
    const response = await fetch('/porNome')
    const data = await response.json()
    todosDias(data)

}

//Limpar colunas
var verifica_child = 0
function todosDias(data) {
    for (i of data) {
        const visitante_data = i.data
        const visitante_hora = i.hora
        const visitante_nome = i.name
        const visitante_doc = i.documento
        const visitante_andar = i.andar
        const tipoVisita = i.tipo_visita

        data_div = document.createElement('div')
        hora_div = document.createElement('div')
        nome_div = document.createElement('div')
        doc_div = document.createElement('div')
        andar_div = document.createElement('div')
        tipo_visita_div = document.createElement('div')

        data_div.textContent = visitante_data
        hora_div.textContent = visitante_hora
        nome_div.textContent = visitante_nome
        doc_div.textContent = visitante_doc
        andar_div.textContent = visitante_andar
        tipo_visita_div.textContent = tipoVisita

        col_data.appendChild(data_div)
        col_hora.appendChild(hora_div)
        col_nome.appendChild(nome_div)
        col_doc.appendChild(doc_div)
        col_andar.appendChild(andar_div)
        col_visita.appendChild(tipo_visita_div)
        verifica_child = 1
    }

}

//Limpa colunas
function limpaColunas() {
    if (verifica_child != 0) {
        col_data.innerHTML = ''
        col_andar.innerHTML = ''
        col_nome.innerHTML = ''
        col_doc.innerHTML = ''
        col_hora.innerHTML = ''
        col_visita.innerHTML = ''
        verifica_child = 0
    }
}

//Insere dados
function insereDadosColunas(data_filtrada) {
    if (data_filtrada.length == 0) {
        nada_encontrado.style.display = 'flex'
    } else {
        nada_encontrado.style.display = 'none'
        for (i of data_filtrada) {
            const visitante_data = i.data
            const visitante_hora = i.hora
            const visitante_nome = i.name
            const visitante_doc = i.documento
            const visitante_andar = i.andar
            const tipoVisita = i.tipo_visita
            data_div = document.createElement('div')
            hora_div = document.createElement('div')
            nome_div = document.createElement('div')
            doc_div = document.createElement('div')
            andar_div = document.createElement('div')
            tipo_visita_div = document.createElement('div')

            data_div.textContent = visitante_data
            hora_div.textContent = visitante_hora
            nome_div.textContent = visitante_nome
            doc_div.textContent = visitante_doc
            andar_div.textContent = visitante_andar
            tipo_visita_div.textContent = tipoVisita

            col_data.appendChild(data_div)
            col_hora.appendChild(hora_div)
            col_nome.appendChild(nome_div)
            col_doc.appendChild(doc_div)
            col_andar.appendChild(andar_div)
            col_visita.appendChild(tipo_visita_div)
            verifica_child = 1
        }
    }
}

var month = ''


//                       ( SELECTS )            
//====================================================================


function clean_backgroundd() {
    for (i of dias) {
        i.style.backgroundColor = '#666666'
    }
}
//Dia //estilo botoes pesquisa
var dia_selecionado = 0
for (let i = 0; i < dias.length; i++) {
    dias[i].addEventListener('click', (e) => {
        dia_selecionado = e.target.innerHTML
        clean_backgroundd()
        dias[i].style.backgroundColor = '#1ABDA6'
        dias[i].style.color = 'white'
    })
}

//Tipo visita
var visita_selecionada = ''
for (let i = 0; i < tipo_visita.length; i++) {
    tipo_visita[i].addEventListener('click', (e) => {
        if (e.target.value == 'horário agendado') {
            visita_selecionada = e.target.value
        } else if (e.target.value == 'prestação de serviços') {
            visita_selecionada = e.target.value
        } else if (e.target.value == 'entrega no andar') {
            visita_selecionada = e.target.value
        } else if (e.target.value == 'falar com funcionários') {
            visita_selecionada = e.target.value
        } else if (e.target.value == 'outro') {
            visita_selecionada = e.target.value
        }
    })
}
