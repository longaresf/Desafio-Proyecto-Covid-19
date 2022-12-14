const getDatosConfirmed = async (jwt) => {
    try {
        const response = await fetch('http://localhost:3000/api/confirmed',
        {
            method:'GET',
            headers: {
                Authorization: `Bearer ${jwt}` 
            }
        });
        const { data }  = await response.json();
        return data;
    }
    catch (err) {
        console.log(`Error: ${err}`)
    }
}

const getDatosDeaths = async (jwt) => {
    try {
        const response = await fetch('http://localhost:3000/api/deaths',
        {
            method:'GET',
            headers: {
                Authorization: `Bearer ${jwt}` 
            }
        });
        const { data } = await response.json();
        return data;
    }
    catch (err) {
        console.log(`Error: ${err}`)
    }
}

const getDatosRecovered = async (jwt) => {
    try {
        const response = await fetch('http://localhost:3000/api/recovered',
        {
            method:'GET',
            headers: {
                Authorization: `Bearer ${jwt}` 
            }
        });
        const { data } = await response.json();
        return data;
    }
    catch (err) {
        console.log(`Error: ${err}`)
    }
}

const mostrarGrafico = (datos1,datos2,datos3) => {

    let confirmadosArreglo = [];
    datos1.forEach(elemento => {
        confirmadosArreglo.push({ x: new Date(elemento.date), y: elemento.total})
    })

    let muertosArreglo = [];
    datos2.forEach(elemento => {
        muertosArreglo.push({ x: new Date(elemento.date), y: elemento.total})
    })

    let recuperadosArreglo = [];
    datos3.forEach(elemento => {
        recuperadosArreglo.push({ x: new Date(elemento.date), y: elemento.total})
    })

    var chart = new CanvasJS.Chart("chartContainer",
    {

      title:{
      text: "Situación del COVID-19 en Chile"
      },
       data: [
      {
        type: "line",
        name: "Confirmados",
        showInLegend: true,
        dataPoints: confirmadosArreglo,
      },
      {
        type: "line",
        name: "Muertos",
        showInLegend: true,
        dataPoints: muertosArreglo,
      },
      {
        type: "line",
        name: "Recuperados",
        showInLegend: true,
        dataPoints: recuperadosArreglo,
      }
      ],
    });

    chart.render();
}

const initSituacionChile = ( async () => {

    const token = localStorage.getItem('jwt-token');

    const confirmados = await getDatosConfirmed(token);
    const muertos = await getDatosDeaths(token);
    const recuperados = await getDatosRecovered(token);

    mostrarGrafico(confirmados,muertos,recuperados);
})();