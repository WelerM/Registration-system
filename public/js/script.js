//================= LOGIN INTERFACE VARIABLES========================//
const login_screen = document.querySelector('.login-screen')
const login_container = document.querySelector('.login-container')
const login_btn_guest = document.querySelector('.visitante')
const login_btn_service = document.querySelector('.funcionario')
const login_user = document.querySelector('#login_user').value
const login_password = document.querySelector('#login_password').value
const header_login_btn = document.querySelector('.header-login-container')
const header_login_user_name = document.querySelector('.header_login_user_name')

//===============MAIN INTERFACE ========================//
const main_interface = document.querySelector('.main-interface')

//===============REGISTRATION INTERFACE VARIABLES ========================//
const main_container = document.querySelector('.main-container')
const left_menu = document.querySelector('.left-menu')
const input_nome = document.querySelector('#input-nome')
const input_documento = document.querySelector('#input-documento')
const input_andar = document.querySelector('#input-andar')
const tipo_visita = document.querySelectorAll('#tipo-visita')
const cadastro_warning = document.querySelector('.cadastro-warning-hide')
const btn_register = document.querySelector('#btn_cadastrar')
const btn_unavailable = document.querySelector('.btn_unavailable')
const clear_inputs = document.querySelector('#limpar-dados')
const pagina_cadastro = document.querySelector('.pagina-cadastro')
const btn_buscar_visitante = document.querySelector('#btn-buscar-visitante')
const icon_buscar_visitante = document.querySelector('.icon-buscar-visitante')
const btn_buscar_visitante_text = document.querySelector('.btn-buscar-visitante-text')
const pop_up_confirmation = document.querySelector('.confirm-registration-screen')
const pop_up_btn_confirm = document.querySelector('#btn-confirmar')
const pop_up_btn_cancel = document.querySelector('#btn-cancelar')
const confirm_name = document.querySelector('#confirm_name')
const confirm_doc = document.querySelector('#confirm_doc')
const confirm_floor = document.querySelector('#confirm_floor')

//===================  SEARCH INTERFACE VARIABLES ======================//
//'QUICK SEARCH'
const search_by_name = document.querySelector('#pesquisar-por-nome')
const search_by_doc = document.querySelector('#pesquisar-por-documento')
const previous_month = document.querySelector('#anterior')
const next_month = document.querySelector('#proximo')
const dias = document.querySelectorAll('.dia')
const search = document.querySelector('#procurar')
const nada_encontrado = document.querySelector('.nada-encontrado')
const array_meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

//'TABLE TO BE SHOWN WITH DATA'
const colunas_container = document.querySelector('.colunas-container')
const col = document.querySelectorAll('#col')
const col_data = document.querySelector('.output-col-data')
const col_hora = document.querySelector('.output-col-hora')
const col_nome = document.querySelector('.output-col-nome')
const col_doc = document.querySelector('.output-col-documento')
const col_andar = document.querySelector('.output-col-andar')
const col_visita = document.querySelector('.output-col-visita')
const col_dia = document.querySelector('.output-col-dia')
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
const re_pop_up_confirmation = document.querySelector('.confirm-re-registration-screen')
const re_confirm_name = document.querySelector('#re_confirm_name')
const re_confirm_doc = document.querySelector('#re_confirm_doc')
const re_confirm_floor = document.querySelector('#re_confirm_floor')
const re_pop_up_btn_confirm = document.querySelector('#re_btn_confirmar')
const re_pop_up_btn_cancel = document.querySelector('#re_btn_cancelar')
//STATISTIC INTERFACE variables
const statistic_today = document.querySelector('#statistic_today')
const statistic_month = document.querySelector('#statistic_month')
const statistic_total = document.querySelector('#statistic_total')
const statistic_line = document.querySelectorAll('.statistic_line')

var mes_value = date_month_edited
var m = date_month
var text = ''
var month = ''
var x = true
var row_id = 0//deletar
var row_total = ''
var row_array_filter = []
var row_cols_data = []
var obj_re_entry = {
    data: '',
    hora: '',
    name: '',
    documento: '',
    andar: '',
    tipo_visita: '',
    mês: '',
    dia: ''
}
var guest_control = false


//========== LOGIN INTERFACE ===============================//
//Guest
login_btn_guest.addEventListener('click', () => {
    main_interface.style.display = 'flex'
    login_screen.style.display = 'none'
    login_container.classList.add('login-container-hide')
    btn_register.style.display = 'none'
    header_login_user_name.textContent = 'Logar'
})
//Service
login_btn_service.addEventListener('click', () => {
    const login_user = document.querySelector('#login_user').value
    const login_password = document.querySelector('#login_password').value
    if (login_user == 'User' && login_password == '123') {
        main_interface.style.display = 'flex'
        guest_control = true
        btn_register.style.display = 'flex'
        login_screen.style.display = 'none'
        login_container.style.display = 'none'
        btn_unavailable.style.display = 'none'
        header_login_user_name.textContent = 'User'
    } else {
        main_interface.style.display = 'flex'
        guest_control = false
        btn_unavailable.classList.add('btn_unavailable')
        alert('tente novamente')
    }
})
//Header btn login 
//Reloads page for a new login
header_login_btn.addEventListener('click', () => {
    window.location.reload()

})




//=============== HEADER ==============================================//
const header_hour = document.querySelector('#header-hour')
setInterval(() => {
    header_hour.textContent = `${date_hour}:${date_min}`
}, 1000)


//=============== REGISTRATION INTERFACE ================================//

//Clears input values
clear_inputs.addEventListener('click', () => {
    input_nome.value = ''
    input_documento.value = ''
    input_andar.value = ''

})
//If inputs are filled, opens up screen for registration
btn_register.addEventListener('click', () => {
    //Validação do formulário
    if (input_nome.value && input_documento.value && input_andar.value != '') {
        cadastro_warning.classList.remove('cadastro-warning-show')

        //Shows confirm registration screen
        pop_up_confirmation.classList.remove('confirm-registration-screen')
        pop_up_confirmation.classList.add('confirm-registration-screen-on')

        //Adds info to confim registration screen
        confirm_name.textContent = input_nome.value
        confirm_doc.textContent = input_documento.value
        confirm_floor.textContent = input_andar.value
    } else {
        cadastro_warning.classList.add('cadastro-warning-show')
    }

})
//Confirm btn
pop_up_btn_confirm.addEventListener('click', () => {
    pop_up_confirmation.classList.remove('confirm-registration-screen-on')
    pop_up_confirmation.classList.add('confirm-registration-screen')
    saveToDatabase()
})

//Cancel btn
pop_up_btn_cancel.addEventListener('click', () => {
    pop_up_confirmation.classList.remove('confirm-registration-screen-on')
    pop_up_confirmation.classList.add('confirm-registration-screen')
})

//This function creates an object with guest data
//and saves it in the database
async function saveToDatabase() {
    const name = input_nome.value
    const document = input_documento.value
    const floor = input_andar.value
    let month
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
    fetch('/insertToDatabase', options)

    setTimeout(reloadStatistics, 1000)
}

//HTML - select 'tipo de visita'
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



//=============== SEARCH INTERFACE ================================//
//HTML - 'Quick search'

//Quick search by name
search_by_name.addEventListener('keydown', (e) => {
    nada_encontrado.style.display = 'none'
    if (e.key == "Backspace") {
        text = ''
        search_by_name.value = ''
        limpaColunas()
    } else {
        text += e.key
        limpaColunas()// cada vez que digitar letra
        search_byName_saveData()
        search_byName_dataReturn()
    }

})
async function search_byName_saveData() {
    let obj = { name: text }
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }
    fetch('/porNome', options)
}
async function search_byName_dataReturn() {
    const response = await fetch('/porNome')
    const data = await response.json()
    returnDataFromMonth(data)
}

//Quick search by doc
search_by_doc.addEventListener('keydown', (e) => {
    nada_encontrado.style.display = 'none'
    if (e.key == "Backspace") {
        text = ''
        search_by_doc.textContent = ''
        limpaColunas()
    } else {
        text += e.key
        limpaColunas()// cada vez que digitar letra
        search_byDoc_saveData()
        search_byDoc_dataReturn()
    }
})
//Sends
async function search_byDoc_saveData() {
    let obj = { documento: text }
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }
    fetch('/porDoc', options)
}
//Returns
async function search_byDoc_dataReturn() {
    const response = await fetch('/porDoc')
    const data = await response.json()
    returnDataFromMonth(data)
}

//HTML - 'Search by date ( Date Picker )'

/*This function inserts the current month in the Date Picker*/
function insertCurrentMonth() {
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
insertCurrentMonth()

// Date picker arrow previus month
previous_month.addEventListener('click', () => {
    if (m == 0) {
        m = m
        dp_mes.textContent = array_meses[m]
    } else {
        m = m - 1
        dp_mes.textContent = array_meses[m]
        mes_value = m
    }
})

// Date picker arrow next month
next_month.addEventListener('click', () => {
    if (m == 11) {
        m = m
        dp_mes.textContent = array_meses[m]
    } else {
        m = m + 1
        dp_mes.textContent = array_meses[m]
        mes_value = m
    }
})

//HTML - 'Search button'
search.addEventListener('click', () => {
    nada_encontrado.style.display = 'none'
    if (dia_selecionado == "todos") {
        async function pesquisaPorNomeRetorno() {
            const response = await fetch('/porNome')
            const data = await response.json()
            limpaColunas()
            returnDataFromMonth(data)
        }
        pesquisaPorNomeRetorno()
    }

    //Janeiro
    if (m == 0) {
        async function getJaneiro() {
            const response = await fetch('/janeiro')
            const data = await response.json()

            const filtered_data = data.filter(x => {
                return x.dia == dia_selecionado
            })
            console.log(filtered_data);
            limpaColunas()
            returnDataFromDay(filtered_data)// ?

        }
        getJaneiro()
        //Fevereiro
    } else if (m == 1) {
        async function getFevereiro() {
            const response = await fetch('/fevereiro')
            const data = await response.json()
            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                returnDataFromMonth(data)
            } else {
                const filtered_data = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(filtered_data)
            }
        }
        getFevereiro()
        //Março
    } else if (m == 2) {
        async function getMarço() {
            const response = await fetch('/marco')
            const data = await response.json()

            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                returnDataFromMonth(data)

            } else {
                const filtered_data = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(filtered_data)
            }
        }
        getMarço()
        //Abril
    } else if (m == 3) {
        async function getAbril() {
            const response = await fetch('/abril')
            const data = await response.json()

            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                returnDataFromMonth(data)

            } else {
                const filtered_data = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(filtered_data)
            }
        }
        getAbril()
        //Maio
    } else if (m == 4) {
        async function getMaio() {
            const response = await fetch('/maio')
            const data = await response.json()

            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                returnDataFromMonth(data)

            } else {
                const filtered_data = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(filtered_data)
            }
        }
        getMaio()
        //Junho
    } else if (m == 5) {
        async function getJunho() {
            const response = await fetch('/junho')
            const data = await response.json()

            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                returnDataFromMonth(data)

            } else {
                const filtered_data = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(filtered_data)
            }
        }
        getJunho()
        //Julho
    } else if (m == 6) {
        async function getJulho() {
            const response = await fetch('/julho')
            const data = await response.json()

            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                returnDataFromMonth(data)

            } else {
                const filtered_data = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(filtered_data)
            }
        }
        getJulho()
        //Agosto
    } else if (m == 7) {
        async function getAgosto() {
            const response = await fetch('/agosto')
            const data = await response.json()

            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                returnDataFromMonth(data)

            } else {
                const filtered_data = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(filtered_data)
            }
        }
        getAgosto()
        //Setembro
    } else if (m == 8) {
        async function getSetembro() {
            const response = await fetch('/setembro')
            const data = await response.json()

            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                returnDataFromMonth(data)

            } else {
                const filtered_data = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(filtered_data)
            }
        }
        getSetembro()
        //Outubro
    } else if (m == 9) {
        async function getOutubro() {
            const response = await fetch('/outubro')
            const data = await response.json()

            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                returnDataFromMonth(data)

            } else {
                const filtered_data = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(filtered_data)
            }
        }
        getOutubro()
        //Novembro
    } else if (m == 10) {
        async function getNovembro() {
            const response = await fetch('Novembro')
            const data = await response.json()

            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                returnDataFromMonth(data)

            } else {
                const filtered_data = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(filtered_data)
            }
        }
        getNovembro()
        //Dezembro
    } else if (m == 11) {
        async function getDezembro() {
            const response = await fetch('/dezembro')
            const data = await response.json()

            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                returnDataFromMonth(data)

            } else {
                const filtered_data = data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(filtered_data)
            }
        }
        getDezembro()
    }
})

//HTML - This forloop runs through every day buttons
// and controls their style when user clicks over them
var dia_selecionado = 0
for (let i = 0; i < dias.length; i++) {
    dias[i].addEventListener('click', (e) => {
        dia_selecionado = e.target.innerHTML
        clean_backgroundd()
        dias[i].style.backgroundColor = '#19B19D'
        dias[i].style.color = 'black'
    })
}

//This function cleans up previous button clicked
// and restores it to its original style
function clean_backgroundd() {
    for (i of dias) {
        i.style.backgroundColor = '#2C2C2C'
        i.style.color = 'white'
    }
}




//================== STATISTIC INTERFACE =======================//
//HTML - 'Statistics screen'

//Filters and fetches entries of current month in the database
//By sending to the server an object
//that matches what i'm looking for
async function dayEntriesRequest() {
    let obj = { data: `${date_day}/${date_month_edited}/${date_year}` }
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }
    fetch('/statistic_day', options)

    //Returns data from server
    async function returnDayEntries() {
        const response = await fetch('/statistic_day')
        const data = await response.json()
        const entriesToday = data.length
        statistic_today.textContent = entriesToday
    }
    returnDayEntries()
}

//Filters and fetches entries of current month in the database
async function monthEntriesRequest() {
    let obj = { mês: array_meses[m] }
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }
    fetch('/statistic_month', options)
    async function returnMonthEntries() {
        const response = await fetch('/statistic_month')
        const data = await response.json()
        const month_entries = data.length
        statistic_month.textContent = month_entries
    }
    returnMonthEntries()
}

//Fetches total entries in the database
async function returnTotalMonth() {
    const response = await fetch('/statistic_total')
    const data = await response.json()
    const all_entries = data.length
    statistic_total.textContent = all_entries
}

//Loads statistics in the inicialization
function loadStatistics() {
    setTimeout(() => {
        dayEntriesRequest()
        monthEntriesRequest()
        returnTotalMonth()
    }, 1000)

}
loadStatistics()

//Provides animation to statistic screen when succesful registration
function reloadStatistics() {
    for (let i = 0; i < statistic_line.length; i++) {
        statistic_line[i].style.backgroundColor = 'green'
        setTimeout(() => {
            statistic_line[i].style.backgroundColor = 'transparent'
            setTimeout(() => {
                dayEntriesRequest()
                monthEntriesRequest()
                returnTotalMonth()
            }, 500)
        }, 1300)
    }

}






//When called, creates table and inserts data within it
//from a single day of the month
function returnDataFromDay(filtered_data) {
    if (filtered_data.length == 0) {
        nada_encontrado.style.display = 'flex'
    } else {
        nada_encontrado.style.display = 'none'
        for (i of filtered_data) {
            const visitante_data = i.data
            const visitante_hora = i.hora
            const visitante_nome = i.name
            const visitante_doc = i.documento
            const visitante_andar = i.andar
            const tipoVisita = i.tipo_visita
            row = document.createElement('div')
            row.classList.add('row')
            data_div = document.createElement('div')
            data_div.classList.add('row-col')
            hora_div = document.createElement('div')
            hora_div.classList.add('row-col')
            nome_div = document.createElement('div')
            nome_div.classList.add('row-col')
            doc_div = document.createElement('div')
            doc_div.classList.add('row-col')
            andar_div = document.createElement('div')
            andar_div.classList.add('row-col')
            tipo_visita_div = document.createElement('div')
            tipo_visita_div.classList.add('row-col')
            tipo_visita_div.style.width = '180px'
            cadastrar_novamente = document.createElement('div')
            if (guest_control == true) {
                cadastrar_novamente.textContent = 'NOVO CADASTRO'
                cadastrar_novamente.classList.add('cadastrar-novamente')
            }
            cadastrar_novamente.setAttribute('id', row_id)
            data_div.textContent = visitante_data
            hora_div.textContent = visitante_hora
            nome_div.textContent = visitante_nome
            doc_div.textContent = visitante_doc
            andar_div.textContent = visitante_andar
            tipo_visita_div.textContent = tipoVisita
            row.appendChild(data_div)
            row.appendChild(hora_div)
            row.appendChild(nome_div)
            row.appendChild(doc_div)
            row.appendChild(andar_div)
            row.appendChild(tipo_visita_div)
            row.appendChild(cadastrar_novamente)
            colunas_container.appendChild(row)
            colunas_container.appendChild(row)
            limpa_colunas_control = false
        }

        //Green 'new register' btn on tables for re registration
        let row_total = document.querySelectorAll('.row')
        for (let i = 0; i < row_total.length; i++) {
            row_total[i].addEventListener('click', () => {
                if (guest_control == true) {
                    row_array_filter = []
                    row_cols_data = []
                    row_array_filter.push(row_total[i].childNodes)
                    for (data of row_array_filter[0]) {
                        row_cols_data.push(data.innerHTML)
                    }
                    //fills re registration screen with choosen values
                    re_confirm_name.textContent = row_cols_data[2]
                    re_confirm_doc.textContent = row_cols_data[3]
                    re_confirm_floor.textContent = row_cols_data[4]
                    //Shows re registration confirm screen
                    re_pop_up_confirmation.classList.remove('confirm-re-registration-screen')
                    re_pop_up_confirmation.classList.add('confirm-re-registration-screen-on')
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                }
            })
        }
    }
}


//When called, creates table and inserts data within it from
//all days of a choosen month
function returnDataFromMonth(data) {
    //async function para retornar banco completp com todos meses
    for (i of data) {
        row_id++//deletar
        const visitante_data = i.data
        const visitante_hora = i.hora
        const visitante_nome = i.name
        const visitante_doc = i.documento
        const visitante_andar = i.andar
        const tipoVisita = i.tipo_visita
        row = document.createElement('div')
        row.classList.add('row')
        data_div = document.createElement('div')
        data_div.classList.add('row-col')
        hora_div = document.createElement('div')
        hora_div.classList.add('row-col')
        nome_div = document.createElement('div')
        nome_div.classList.add('row-col')
        doc_div = document.createElement('div')
        doc_div.classList.add('row-col')
        andar_div = document.createElement('div')
        andar_div.classList.add('row-col')
        tipo_visita_div = document.createElement('div')
        tipo_visita_div.classList.add('row-col')
        tipo_visita_div.style.width = '180px'
        cadastrar_novamente = document.createElement('div')
        if (guest_control == true) {
            cadastrar_novamente.textContent = 'NOVO CADASTRO'
            cadastrar_novamente.classList.add('cadastrar-novamente')
        }
        cadastrar_novamente.setAttribute('id', row_id)
        data_div.textContent = visitante_data
        hora_div.textContent = visitante_hora
        nome_div.textContent = visitante_nome
        doc_div.textContent = visitante_doc
        andar_div.textContent = visitante_andar
        tipo_visita_div.textContent = tipoVisita
        row.appendChild(data_div)
        row.appendChild(hora_div)
        row.appendChild(nome_div)
        row.appendChild(doc_div)
        row.appendChild(andar_div)
        row.appendChild(tipo_visita_div)
        row.appendChild(cadastrar_novamente)
        colunas_container.appendChild(row)
        limpa_colunas_control = false
    }
    //Re entry of some chosen guest
    let row_total = document.querySelectorAll('.row')
    for (let i = 0; i < row_total.length; i++) {
        row_total[i].addEventListener('click', () => {
            if (guest_control == true) {
                row_array_filter = []
                row_cols_data = []
                row_array_filter.push(row_total[i].childNodes)

                for (data of row_array_filter[0]) {
                    row_cols_data.push(data.innerHTML)
                }
                //fills re registration screen with choosen values
                re_confirm_name.textContent = row_cols_data[2]
                re_confirm_doc.textContent = row_cols_data[3]
                re_confirm_floor.textContent = row_cols_data[4]

                //Shows re registration confirm screen
                re_pop_up_confirmation.classList.remove('confirm-re-registration-screen')
                re_pop_up_confirmation.classList.add('confirm-re-registration-screen-on')
                re_pop_up_confirmation.classList.remove('confirm-re-registration-screen')
                re_pop_up_confirmation.classList.add('confirm-re-registration-screen-on')
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }
        })
    }
}

//Registrar user again
re_pop_up_btn_confirm.addEventListener('click', () => {
    reAssignGuest()
})
//Cancels re registration
re_pop_up_btn_cancel.addEventListener('click', (e) => {
    re_pop_up_confirmation.classList.remove('confirm-re-registration-screen-on')
    re_pop_up_confirmation.classList.add('confirm-re-registration-screen')
})

// This function register again some user choosen in
// the table. It's useful if someone is already registered
// so they don't need to be registered again step by step
async function reAssignGuest() {
    re_pop_up_confirmation.classList.remove('confirm-re-registration-screen-on')
    re_pop_up_confirmation.classList.add('confirm-re-registration-screen')
    var reAssingData = {
        data: data_atual,
        hora: hora_atual,
        name: row_cols_data[2],
        documento: row_cols_data[3],
        andar: row_cols_data[4],
        tipo_visita: row_cols_data[5],
        mês: month,
        dia: date_day
    }
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reAssingData)
    }
    fetch('/ReAssignGuest', options)
    setTimeout(reloadStatistics, 1000)
}

//When called, clears cols data so a new search can be done
var limpa_colunas_control = true
function limpaColunas() {
    let row_total = document.querySelectorAll('.row')
    if (limpa_colunas_control != true) {
        for (let i = 0; i < row_total.length; i++) {
            colunas_container.removeChild(row_total[i])
        }
    }
}