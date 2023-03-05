console.log("+---------------------------------------------------+");
console.log("                Cajero Automatico                    ");
console.log("+---------------------------------------------------+");

const users = [
  {
    name: "Juan",
    document: 1,
    password: "123",
    userType: 1,
  },
  {
    name: "Sara",
    document: 123123,
    password: "abc",
    userType: 2,
  },
  {
    name: "Pepito",
    document: 0000,
    password: "111",
    userType: 2,
  },
];

const billetes = [
  {
    billete: 100000,
    cantidad: 0,
  },

  {
    billete: 50000,
    cantidad: 10,
  },
  {
    billete: 20000,
    cantidad: 10,
  },

  {
    billete: 10000,
    cantidad: 10,
  },
  {
    billete: 5000,
    cantidad: 10,
  },
];

let documentInput = parseInt(prompt("Ingrese su documento: "));
let passwordInput = prompt("Ingrese su contrasena: ");

function login(documentInput, passwordInput) {
  while (true) {
    var resultado = users.find(
      (usuario) =>
        usuario.document === documentInput && usuario.password === passwordInput
    );
    if (resultado != undefined) {
      window.alert("Bienvenido");
      console.log(
        "+----------  Bienvenido al cajero",
        resultado.name,
        " ----------+"
      );
      if (resultado.userType === 1) {
        console.log("Eres administrador ");
        recargarBilletes();
        let response = confirm("Quieres agregar otro valor? ");
        // console.log(response);
        while (response === true) {
          recargarBilletes();
          response = confirm("Quieres agregar otro valor? ");
        }
        // multiplicarBilletes(billetes, 1);
        alert("Cajero Cargado!");
        login();
        return;
      } else {
        if (multiplicarBilletes(billetes) < 5000) {
          alert("FUERA DE SERVICIO - CONTACTE CON EL BANCO");
          login();
        } else {
          retirarBilletes();
        }
      }
      return;
    } else {
      alert("El Usuario no existe");

      documentInput = parseInt(prompt("Ingrese su documento: "));
      passwordInput = prompt("Ingrese su contrasena: ");
    }
  }
}

const multiplicarBilletes = (billetes) => {
  let total = 0;

  billetes.forEach((element) => {
    const totalBilletes = element.billete * element.cantidad;
    console.log(
      `Hay un total de ${totalBilletes} en billetes de ${element.billete}`
    );
    total += totalBilletes;
  });

  if (total < 5000) {
    alert("FUERA DE SERVICIO - CONTACTE CON EL BANCO");
    login();
  }
  console.log("+----------  Total disponible de: ", total, "----------+");
};

function recargarBilletes() {
  let cantidadRecargar;
  let recargarBillete = parseInt(
    prompt("Que billete deseas recargar: (Ejm: 5000)")
  );
  switch (recargarBillete) {
    case 5000: {
      cantidadRecargar = parseInt(prompt("Cantidad a recacrgar: "));
      billetes[4].cantidad += cantidadRecargar;
      console.log(billetes);
      break;
    }
    case 10000: {
      cantidadRecargar = parseInt(prompt("Cantidad a recacrgar: "));
      billetes[3].cantidad += cantidadRecargar;
      break;
    }
    case 20000: {
      cantidadRecargar = parseInt(prompt("Cantidad a recacrgar: "));
      billetes[2].cantidad += cantidadRecargar;
      break;
    }
    case 50000: {
      cantidadRecargar = parseInt(prompt("Cantidad a recacrgar: "));
      billetes[1].cantidad += cantidadRecargar;
      break;
    }
    case 100000: {
      cantidadRecargar = parseInt(prompt("Cantidad a recacrgar: "));
      billetes[0].cantidad += cantidadRecargar;
      break;
    }
    default:
      alert("No has seleccionado una opcion correcta");
      break;
  }
}

const retirarBilletes = () => {
  let cantidadRetirar;
  let total = 0;

  cantidadRetirar = parseInt(prompt("Cantidad que desea retirar: "));

  billetes.forEach((cantidad) => {
    const totalBilletes = cantidad.billete * cantidad.cantidad;
    total += totalBilletes;
  });

  if (cantidadRetirar >= total) {
    alert(
      "La cantidad solicitada es mayor que la cantidad disponible en el cajero. Por favor, ingrese una cantidad válida."
    );
    retirarBilletes();
  } else if (cantidadRetirar >= 5000) {
    billetes.forEach((element) => {
      const billetesNecesarios = Math.floor(cantidadRetirar / element.billete);
      if (billetesNecesarios > 0) {
        if (billetesNecesarios <= element.cantidad) {
          const billetesRetirados = {
            billete: element.billete,
            cantidad: billetesNecesarios,
          };
          console.log(
            `+---------- Se han retirado ${billetesRetirados.cantidad} de ${billetesRetirados.billete} ----------+ `
          );
          element.cantidad -= billetesNecesarios;
          cantidadRetirar -= element.billete * billetesNecesarios; // cantida de dinero a restar
        } else {
          const billetesRetirados = {
            billete: element.billete,
            cantidad: element.cantidad,
          };

          console.log(
            `+---------- Se han retirado ${billetesRetirados.cantidad} de ${billetesRetirados.billete} ----------+ `
          );

          cantidadRetirar -= element.billete * element.cantidad;
          element.cantidad = 0;
        }
      }
      return;
    });

    multiplicarBilletes(billetes);
    alert("Gracias por usar el cajero!");
    login();
  } else {
    alert("El cajero no puede retirar esta cantidad");
    retirarBilletes();
  }
};

login(documentInput, passwordInput);
