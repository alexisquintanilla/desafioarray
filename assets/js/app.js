const radiologiaArray = [
    {
        HORA: '11:00',
        ESPECIALISTA: 'IGNACIO SCHULZ',
        PACIENTE: 'FRANCISCA ROJAS',
        RUT: '9878782-1',
        PREVISION: 'FONASA'
    },
    {
        HORA: '11:30',
        ESPECIALISTA: 'FEDERICO SUBERCASEAUX',
        PACIENTE: 'PAMELA ESTRADA',
        RUT: '15345241-3',
        PREVISION: 'ISAPRE'
    },
    {
        HORA: '15:00',
        ESPECIALISTA: 'FERNANDO WURTHZ',
        PACIENTE: 'ARMANDO LUNA',
        RUT: '16445345-9',
        PREVISION: 'ISAPRE'
    },
    {
        HORA: '15:30',
        ESPECIALISTA: 'ANA MARIA GODOY',
        PACIENTE: 'MANUEL GODOY',
        RUT: '17666419-0',
        PREVISION: 'FONASA'
    },
    {
        HORA: '16:00',
        ESPECIALISTA: 'PATRICIA SUAZO',
        PACIENTE: 'RAMON ULLOA',
        RUT: '14989389-K',
        PREVISION: 'FONASA'
    }
];

const traumatologiaArray = [
    {
        HORA: '8:00',
        ESPECIALISTA: 'MARIA PAZ ALTUZARRA',
        PACIENTE: 'PAULA SANCHEZ',
        RUT: '15554774-5',
        PREVISION: 'FONASA'
    },
    {
        HORA: '10:00',
        ESPECIALISTA: 'RAUL ARAYA',
        PACIENTE: 'ANGÉLICA NAVAS',
        RUT: '15444147-9',
        PREVISION: 'ISAPRE'
    },
    {
        HORA: '10:30',
        ESPECIALISTA: 'MARIA ARRIAGADA',
        PACIENTE: 'ANA KLAPP',
        RUT: '17879423-9',
        PREVISION: 'ISAPRE'
    },
    {
        HORA: '11:00',
        ESPECIALISTA: 'ALEJANDRO BADILLA',
        PACIENTE: 'FELIPE MARDONES',
        RUT: '1547423-6',
        PREVISION: 'ISAPRE'
    },
    {
        HORA: '11:30',
        ESPECIALISTA: 'CECILIA BUDNIK',
        PACIENTE: 'DIEGO MARRE',
        RUT: '16554741-K',
        PREVISION: 'FONASA'
    },
    {
        HORA: '12:00',
        ESPECIALISTA: 'ARTURO CAVAGNARO',
        PACIENTE: 'CECILIA MENDEZ',
        RUT: '9747535-8',
        PREVISION: 'ISAPRE'
    },
    {
        HORA: '12:30',
        ESPECIALISTA: 'ANDRES KANACRI',
        PACIENTE: 'MARCIAL SUAZO',
        RUT: '11254785-5',
        PREVISION: 'ISAPRE'
    }
];

const dentalArray = [
    {
        HORA: '8:30',
        ESPECIALISTA: 'ANDREA ZUÑIGA',
        PACIENTE: 'MARCELA RETAMAL',
        RUT: '11123425-6',
        PREVISION: 'ISAPRE'
    },
    {
        HORA: '11:00',
        ESPECIALISTA: 'MARIA PIA ZAÑARTU',
        PACIENTE: 'ANGEL MUÑOZ',
        RUT: '9878789-2',
        PREVISION: 'ISAPRE'
    },
    {
        HORA: '11:30',
        ESPECIALISTA: 'SCARLETT WITTING',
        PACIENTE: 'MARIO KAST',
        RUT: '7998789-5',
        PREVISION: 'FONASA'
    },
    {
        HORA: '13:00',
        ESPECIALISTA: 'FRANCISCO VON TEUBER',
        PACIENTE: 'KARIN FERNANDEZ',
        RUT: '18887662-K',
        PREVISION: 'FONASA'
    },
    {
        HORA: '13:30',
        ESPECIALISTA: 'EDUARDO VIÑUELA',
        PACIENTE: 'HUGO SANCHEZ',
        RUT: '17665461-4',
        PREVISION: 'FONASA'
    },
    {
        HORA: '14:00',
        ESPECIALISTA: 'RAQUEL VILLASECA',
        PACIENTE: 'ANA SEPULVEDA',
        RUT: '14441281-0',
        PREVISION: 'ISAPRE'
    }
];




const radiologia = document.getElementById("radiologia")

radiologia.textContent = `El primer Pacientes es : ${radiologiaArray[0].PACIENTE} - ${radiologiaArray[0].PREVISION} | última Atención fue : ${radiologiaArray[radiologiaArray.length - 1].PACIENTE} - ${radiologiaArray[radiologiaArray.length - 1].PREVISION} `




const traumatologia = document.getElementById("traumatologia")

traumatologia.textContent = `El primer Pacientes es : ${traumatologiaArray[0].PACIENTE} - ${traumatologiaArray[0].PREVISION} | última Atención fue : ${traumatologiaArray[radiologiaArray.length - 1].PACIENTE} - ${traumatologiaArray[radiologiaArray.length - 1].PREVISION} `


const dental = document.getElementById("dental")

dental.textContent = `El primer Pacientes es : ${dentalArray[0].PACIENTE} - ${dentalArray[0].PREVISION} | última Atención fue : ${dentalArray[dentalArray.length - 1].PACIENTE} - ${dentalArray[dentalArray.length - 1].PREVISION} `


const tablaRadio = document.getElementById("tableRadiologia")
tablaRadio.innerHTML = ""

radiologiaArray.forEach((item) => {


    tablaRadio.innerHTML += `
    <tr>
    <td>${item.HORA}</td>
    <td>${item.ESPECIALISTA}</td>
    <td>${item.PACIENTE}</td>
    <td>${item.RUT}</td>
    <td>${item.PREVISION}</td>
    </tr>`
})

const tablaTrauma = document.getElementById("tableTrauma")
tablaTrauma.innerHTML = ""

traumatologiaArray.forEach((item) => {


    tablaTrauma.innerHTML += `
    <tr>
    <td>${item.HORA}</td>
    <td>${item.ESPECIALISTA}</td>
    <td>${item.PACIENTE}</td>
    <td>${item.RUT}</td>
    <td>${item.PREVISION}</td>
    </tr>`
})
const tablaDental = document.getElementById("tableDental")
tablaDental.innerHTML = ""

dentalArray.forEach((item) => {


    tablaDental.innerHTML += `
    <tr>
    <td>${item.HORA}</td>
    <td>${item.ESPECIALISTA}</td>
    <td>${item.PACIENTE}</td>
    <td>${item.RUT}</td>
    <td>${item.PREVISION}</td>
    </tr>`
})