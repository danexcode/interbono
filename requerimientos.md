### Global

- El sistema debe tener un saldo global, dicho saldo se podrá actualizar, bien sea adicionar o restar

- Se debe mostrar la informacion del precio del dolar actual, (monitor, promedio y bcv)

### Clientes

- El sistema debe poder ingresar una base de datos de clientes

- Por cada cliente se debe registrar el nombre completo, la cedula, la fecha de nacimiento, el sexo, el rif, una breve descripcion, una foto.

### Ordenes

- Se debe poder registrar un "prestamo" a cada "cliente" donde dicho cliente me traerá retorno de capital, dicho retorno de capital debo calcularlo y registrarlo

- Cada transaccion tendra un estado "abierta"/"cerrada" 

- Cada cliente tendra un estado "Transacciones Abiertas"




armar esto:

- interbono: sistema de gestion financiero.
    - datos guardardos:
        - pagos:
            # por cobrar (transacciones abiertas):  
                - tabla por cobrar (informativa).
                    - orden = 
                    (id, fecha, cliente, base, beneficio, //estado)
                        - cerrar orden => (edicion de la orden).
            - por pagar:
                - tabla por pagar (informativa).
                    - cerrar orden.

        - clientes:
            - lista de clientes:
                - info explicita. => (editar).´
                - añadir, eliminar.

    - calculos (juegos de dinero) (emision de proyecciones => abro orden):
        - (importe, clientes, % por cliente) =>
        
        - tabla de proyeccion. (como aplica a cada caso?)
            - formato (largo plazo).
            - formato (corto plazo).
                - temporalidad.
                - interes compuesto.
        - calculadora de tasas (automatica = promedio).

        - calulo de prestamo:
            - prestamos largos (intereses a plazos).
                (importe, interes, plazo_cobro, finaliza) 
                => tabla de proyeccion. => abrir orde.

            - prestamos cortos (tigrito) 
                -(importe, +%) => tabla de proyeccion.  

        # calculo de circutos.
            - (pasos= 4) => (importe, tasa, comision pagada) => proyeccion del ejercicio (beneficio).
                - abrir orden (cliente). 

        - lo primero que hicismos.
            - (importe, clientes % )


 
    # proyeccion de la orden.
        lo que tengo.

    orden
    - dinero que sale.
    - dinero que entra.
    - la diferencia = resultado del ejercicio.