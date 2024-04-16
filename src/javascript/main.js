let comillasDobles = "hola mundo"       //LA FORMA MAS FACIL DE HACER UN TEXTO
let comillasSimples = 'hola mundo'

const fullName = "alejandro castrillon gomez"
const cantidadDeCaracteres = fullName.length        //LENGTH CUENTA LOS CARACTERESz

console.info("la cantidad de caracteres es ",cantidadDeCaracteres)

//EXTRACCION DE LETRA LA NUMERO 1 ES LA MAS FACIL
// let extraccionDeLetraC= fullName[7]
// let extraccionDeLetraCV2= fullName.charAt(7)
// console.info(extraccionDeLetraCV2)
// console.info(extraccionDeLetraC)
// console.info(fullName[0])
// console.info(fullName[1])
// console.info(fullName[2])
// console.info(fullName[3])
// console.info(fullName[4])
// console.info(fullName[5])

// console.error("salto")

// console.info(fullName.charAt(0))
// console.info(fullName.charAt(1))
// console.info(fullName.charAt(2))
// console.info(fullName.charAt(3))
// console.info(fullName.charAt(4))
// console.info(fullName.charAt(5))            //formas de extraer una letra



// let nombre= (prompt ("ingresa tu nombre"))
// let apellido= "castrillon"
// let correo= "alejomi192005@gmail.com"
// let telefono= 3332482263
// let direccion="cll 59A #66/57"                           //ejercicos
// let edad= 18

// console.info("hola mundo, mi nombre es", nombre , apellido, "y mi correo es", correo)
// console.info("hola mundo, mi nombre es " + nombre + " " + apellido + " y mi correo es " + correo)
// // console.info(´hola mundo, mi nombre es ${nombre} ${apellido} y mi correo es ${correo}) //no me funciono 


// const header =`<header>
// <h1>CODERS</h1>
// <p>hola mundo, mi nombre es: <strong> ${nombre} </strong> ${apellido} tengo ${edad} años y mi correo es ${correo}</p>
// <p>me puedes contartar al ${telefono} mi direccion es ${direccion}</p>
// </header>`

// document.write(header)


//convertir textos a mayuscula o minusculas
// const mensaje= "HOLA MUNDO"                                                                     //si lo pongo en document, se muestra en el HTML
// const nombre= "alejoooo"                                                                        // si le pongo console, se me muestra en el inspector
// document.write(mensaje.toLocaleLowerCase(), nombre.toLocaleUpperCase())

// console.info(mensaje.toLocaleLowerCase())
// console.info(nombre.toLocaleUpperCase())



//buscar informacion  para que me lo tire como false o true

// const mensaje = "hola mundo"
// console. log(mensaje.startsWith("familia")) // false            //starsWith si esa variable inicia con alguna palabra o letra PERO SOLO AL INICIO
// console. log (mensaje.startsWith("hola")) // true               
// console. log(mensaje.endsWith("mundo")) // true
// console. log(mensaje. includes ("mundo")) // true               //me  va a decir si esa variable contiene alguna letra o palabra igual
// console. log(mensaje.includes("soy")) // false
// console.log(mensaje.endsWith("lo que sea")) // false            //me va a decir si alguna palabra esta  al final



// const palabra= "warzone"
// console.info(palabra)
// console.info(palabra.trimStart)             //para quitar los espacios
// console.info(palabra.trim)
// console.info(palabra.trimEnd)


// const mensaje= "soy un coder en riwi, y en riwi soy feliz"
// console.info(mensaje.replace("coder","programador"))        //coder lo reemplaza por programacion
// console.info(mensaje.replaceAll("riwi"," un centro de entrenamiento"))          // reemplaza todas las palabras riwi por ceentro de entrenamiento
// console.info(mensaje.replace(/[aeou]/g, "i"))           //AQUI TODAS LAS VOCALES LAS REEMPLAZA POR LA LETRA  i
// document.write(mensaje)

// console.info(mensaje.repeat(2)) //esto repite los mensajes el numero de veces que yo le ponga


