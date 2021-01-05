//React posting
import React, {Component} from 'react';

//Components
import NavTop from './global/NavTop';
import Footer from './global/Footer';
import Banner from './global/Banner';
import ControllTabs from './Tabs/ControllTabs';
import Timeline from './global/Timeline';
import Buscado from './Tabs/Buscado';

class App extends Component {

	constructor(props){
    super(props)
    this.state = {
      data2020: 
      	{
      		IA: [
      				{
		      			name: "+Life",
						  type: 1,
						  web:"https://life.feriadesoftware.cl/",
						  fb:"https://www.facebook.com/PlusLifeChile/?view_public_for=101728168343574",
						  ig:"https://www.instagram.com/pluslifecl/?hl=es-la",
		      			categoria: "Inteligencia Artificial y Ciencia de Datos",
		      			code: "iB697qEKB2U",
		      			descripcion: "Sistema informático para la predicción de escasez sanguínea y la realización de tareas esenciales de los centros de transfusión de sangre."
		      		},
		      		{
								name: "Allegro Training",
								fb:"https://www.facebook.com/allegro.wings/",
								ig: "https://www.instagram.com/allegro.wings/",
								web:"https://allegrotraining.feriadesoftware.cl/",
		      			type: 1,
		      			categoria: "Inteligencia Artificial y Ciencia de Datos",
		      			code: "Qd3RmVLrAQg",
		      			descripcion: "Aplicación pensada para practicantes de guitarra y violín, ofreciendo varias herramientas útiles para una práctica efectiva."
		      		},
		      		{
								name: "Artificial Inventory",
								fb:"https://www.facebook.com/Artificial-Inventory-104720708057932",
								ig: "https://www.instagram.com/artificial_inventory/",
								web:"https://artificialinventory.feriadesoftware.cl/#/",
		      			type: 1,
		      			categoria: "Inteligencia Artificial y Ciencia de Datos",
		      			code: "L3-HR4Uq93w",
		      			descripcion: "Buscamos evitar quiebres de stock de productos, junto con contar y calcular la distancia social de las personas, haciendo uso de inteligencia artificial a través de las cámaras de seguridad de locales comerciales."
		      		},
		      		{
								name: "DressUAPP",
								fb:"https://www.facebook.com/DressUAPP/?ref=nf&hc_ref=ARQoLmgDo1z8IFfpwxkwhxVVmlg5R5sVpNXp9IoVp4GkxBzrjEzsHuHZDQuIOsJs87s",
								ig: "https://www.instagram.com/dressuapp/?utm_source=ig_embed",
								web:"https://dressuapp.feriadesoftware.cl/",
		      			type: 1,
		      			categoria: "Inteligencia Artificial y Ciencia de Datos",
		      			code: "r4rGf09XN7A",
		      			descripcion: "Aplicación móvil para Android donde interactuar entre usuarios mediante publicaciones de vestuario clasificadas por tipo y color con el uso de redes neuronales, para formar una comunidad que brinde asesoramiento de imagen vía celular, con el fin de disminuir la indecisión al momento de elegir qué vestir."
		      		},
		      		{
						  name: "Neurile",
						  web: "https://neurile.feriadesoftware.cl/",
						  fb:"https://www.facebook.com/NeurileApp",
						  ig:"https://www.instagram.com/neurile_app/",
		      			type: 1,
		      			categoria: "Inteligencia Artificial y Ciencia de Datos",
		      			code: "9duGKz3hjTs",
		      			descripcion: "App móvil para detección de síntomas de la Enfermedad de Parkinson mucho más rápida y de manera temprana mediante una suite de variados test científicamente validados, utilizando técnicas de clasificación usadas en redes profundas, obtenidas por medio de diagnósticos pioneros en el campo de la investigación de dicha enfermedad."
		      		},
		      		{
						  name: "dBarrio",
						  web:"https://dbarrio.feriadesoftware.cl",
						  fb:"https://www.facebook.com/dBarrio.cl",
						  ig:"https://www.instagram.com/dbarrio.cl/",
		      			type: 1,
		      			categoria: "Inteligencia Artificial y Ciencia de Datos",
		      			code: "K_c_7N2QIEs",
		      			descripcion: "Aplicación móvil para promocionar de forma fácil y rápida productos destacados de almacenes de barrio, ofreciendo al consumidor recomendaciones personalizadas y seguimiento de productos o locales cercanos a su ubicación basado en la opinión registrada por sus propios vecinos."
		      		}
      			],
      		
      		TD:	[
      				{
						  name: "Bookaro",
						  web:"https://bookaro.feriadesoftware.cl/",
						  fb:"https://www.facebook.com/Bookaro-107429517679536",
						  ig:"https://www.instagram.com/bookarocl/",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "Qf4aj-bZiXc",
		      			descripcion: "Sistema informático para la predicción de escasez sanguínea y la realización de tareas esenciales de los centros de transfusión de sangre."
		      		},
		      		{
						  name: "Dacot",
						  web:"https://dacot.feriadesoftware.cl/",
						  fb:"https://www.facebook.com/dacot.speedevs",
						  ig:"https://www.instagram.com/dacot.speedevs/",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "s9ZIrkZ9NDY",
		      			descripcion: "Aplicación pensada para practicantes de guitarra y violín, ofreciendo varias herramientas útiles para una práctica efectiva."
		      		},
		      		{
						  name: "Ecos",
						  web:"https://ecos.feriadesoftware.cl",
						  fb:"https://facebook.com/ecos.connect",
						  ig:"https://instagram.com/ecos.connect",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "GVqZVAu1rVg",
		      			descripcion: "Buscamos evitar quiebres de stock de productos, junto con contar y calcular la distancia social de las personas, haciendo uso de inteligencia artificial a través de las cámaras de seguridad de locales comerciales."
		      		},
		      		{
						  name: "Empaty",
						  web:"https://empaty.feriadesoftware.cl/",
						  fb:"https://www.facebook.com/Empaty-113393623843145",
						  ig:"https://www.instagram.com/empatyfsw",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "mTOwdkjogHw",
		      			descripcion: "Aplicación móvil para Android donde interactuar entre usuarios mediante publicaciones de vestuario clasificadas por tipo y color con el uso de redes neuronales, para formar una comunidad que brinde asesoramiento de imagen vía celular, con el fin de disminuir la indecisión al momento de elegir qué vestir."
		      		},
		      		{
						  name: "EufoniApp",
						  web:"https://eufoniapp.feriadesoftware.cl/",
						  fb:"https://www.facebook.com/EufoniApp/",
						  ig:"https://www.instagram.com/eufoniapp/",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "8SMLhoTa8Jw",
		      			descripcion: "App móvil para detección de síntomas de la Enfermedad de Parkinson mucho más rápida y de manera temprana mediante una suite de variados test científicamente validados, utilizando técnicas de clasificación usadas en redes profundas, obtenidas por medio de diagnósticos pioneros en el campo de la investigación de dicha enfermedad."
		      		},
		      		{
						  name: "TuRecliaje",
						  web:"https://tureciclaje.feriadesoftware.cl/",
						  fb:"https://www.facebook.com/TuReciclajeOficial",
						  ig:"https://www.instagram.com/tureciclajeapp/?hl=es",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "fIrRHBSlr5Y",
		      			descripcion: "Aplicación móvil para promocionar de forma fácil y rápida productos destacados de almacenes de barrio, ofreciendo al consumidor recomendaciones personalizadas y seguimiento de productos o locales cercanos a su ubicación basado en la opinión registrada por sus propios vecinos."
		      		}
		      	]
      	},
      data2019: 
      	{
      		IA: [
      				{
		      			name: "Beegilant",
						  type: 1,
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			categoria: "Inteligencia Artificial y Ciencia de Datos",
		      			code: "UsgO6vE7gf0",
		      			descripcion: "Beegilant es un sistema de vigilancia, que reconoce posibles actos de violencia lanzando una alerta usando algoritmos de machine learning, además de ofrecer un servicio de streaming."
		      		},
		      		{
						  name: "Cirkel",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "Inteligencia Artificial y Ciencia de Datos",
		      			code: "GdR4QyU0fUo",
		      			descripcion: "Cirkel es un proyecto conformado por una aplicación y un anillo inteligente que permite alertar a contactos previamente registrados, sobre situaciones de agresión, tales ccomo violencia intrafamiliar y/o ataques sexuales, compartiendo tu ubicación en tiempo real."
		      		},
		      		{
						  name: "DropoutForecast",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "Inteligencia Artificial y Ciencia de Datos",
		      			code: "ERnY9KKtgTc",
		      			descripcion: "Aplicación web que predice a través de modelos estadísticos la probabilidad de deserción de un alumno en base a su historial académico y perfil socioeconómico."
		      		},
		      		{
						  name: "Echo",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "Inteligencia Artificial y Ciencia de Datos",
		      			code: "anuQ_I2ETmY",
		      			descripcion: "Videojuego inclusivo para personas con discapacidad visual. Busca crear un juego que permita interactuar tanto a usuarios con discapacidad visual como a usuario sin problemas de visión"
		      		},
		      		{
						  name: "HappyCrops",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "Inteligencia Artificial y Ciencia de Datos",
		      			code: "t0WDXZ1-zOY",
		      			descripcion: "HappyCrops es un servicio de monitoreo periódico para los cultivos. Durante los monitoreos se capturan imágenes de los cultivos las cuales son posteriormente analizadas utilizando machine learning para detectar posibles enfermedades y en el caso de ser así generar un diagnóstico del estado actual y el tratamiento a seguir."
		      		},
		      		{
						  name: "Ley Transparente",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "Inteligencia Artificial y Ciencia de Datos",
		      			code: "eYGPpEoDiGI",
		      			descripcion: "Ley transparente es una plataforma web que centraliza la información de los parlamentarios y sus patrimonios, para detectar y visualizar posibles conflictos de interés en votaciones de proyectos de ley."
		      		}
      			],
      		
      		TD:	[
      				{
						  name: "Agendamus",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "51eh-3gWXHk",
		      			descripcion: "Agendamus, la agenda de la música en Chile, es una plataforma web para la difusión de músicos y eventos en nuestro país. Además ofrece un sistema de gestión para que el Estado pueda obtener información sobre la industria musical."
		      		},
		      		{
						  name: "AviaCage",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "bDa7ixUIMt0",
		      			descripcion: "Aviacage es un sistema inteligente de acceso remoto integrado dentro de la jaula, que realizará permitirá realizar las tareas necesarias para mantener el bienestar de la ave."
		      		},
		      		{
						  name: "Ejercita2",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "TE89eu1jaOM",
		      			descripcion: "Ejercita2, es un sistema enfocado en el entrenamiento físico, que, a través de cámaras especiales, logra analizar los movimientos realizados en un sesión de ejercicios, y así poder informar de una manera automatizada sobre la misma, y también advertir sobre ejercicios que se ejecutan de mala manera, a través de una App, los cuales pueden ser perjudiciales para la salud. "
		      		},
		      		{
						  name: "EsTuDiente",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "4FoGrXhUIeU",
		      			descripcion: "EsTuDiente, es una solución tecnológica que busca presentar un catálogo de tratamientos dentales a bajo costo, impartidos por estudiantes de odontología avalados por sus respectivas universidades y enfocados especialmente en pacientes de escasos recursos."
		      		},
		      		{
						  name: "MIP",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "ODQqvJ6eaMo",
		      			descripcion: "Servicio de registro, seguimiento y gestión de la información para reuniones presenciales"
		      		},
		      		{
						  name: "SENSO2R",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "Sym3EWpLPQM",
		      			descripcion: "Servicio de monitoreo de gases nocivos para la salud usados diariamente en el hogar, como el gas natural, gas licuado y monóxido de carbono"
					},
					{
						name: "USIZE",
						web:"https://www.google.com",
						fb:"https://www.google.com",
						ig:"https://www.google.com",
						type: 2,
						categoria:"Transformación Digital y Social",
						code: "W5hInCNbOIc", 
						descripcion:"Obtener las medidas del cuerpo para mejorar la compra online de distintas prendas de vestir que ofrezcan las PyMes o grandes empresas de comercio minorista."
					}

					  
		      	]
      	},
      data2018: 
      	{
      		IA: [
      				{
						  name: "BPOne",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "Educación y Salud",
		      			code: "1U-D26nFdcQ",
		      			descripcion: "Sistema médico personalizado de prevención activa contra lesiones por presión en personas hospitalizadas."
		      		},
		      		{
						  name: "BeePlus",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "Educación y Salud",
		      			code: "vgQjIgUKzlA",
		      			descripcion: "Corregir pruebas nunca fue tán fácil"
		      		},
		      		{
						  name: "Guide Grapher",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "Educación y Salud",
		      			code: "CN21th_n9h8",
		      			descripcion: "Guide Grapher te permite traspasar tus dibujos, gráficos y funciones matemáticas a una tabla de relieves para facilitar el aprendizaje de alumnos con discapacidad visual."
		      		},
		      		{
						  name: "MioSense",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "Educación y Salud",
		      			code: "9JZ-0xl1Eqs",
		      			descripcion: "Miosense es un dispositivo de electromiografía que se conecta al computador y permite realizar exámenes objetivos a nivel muscular de manera menos invasiva, portátil y económica."
		      		},
		      		{
						  name: "SignFinder",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "Educación y Salud",
		      			code: "yTLk82_WJX4",
		      			descripcion: "Reproduce tus videos favoritos de YouTube en Lengua de Señas Chilena"
		      		},
		      		{
						  name: "TuParlamentarioCLe",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "Educación y Salud",
		      			code: "ak6nXD-AeV0",
		      			descripcion: "Plataforma web de información y monitoreo legislativo que permitirá a los ciudadanos y a las organizaciones poder conocer el proceso legislativo y participar simbólicamente para encontrar parlamentarios que los representen."
		      		}
      			],
      		
      		TD:	[
      				{
						  name: "ARPI",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "5ljNv_j8E_5U",
		      			descripcion: "Herramienta Web que busca complementar pruebas de usabilidad realizando análisis automatizados sobre datos que se generan al usar la interfaz Web de un sitio ya lanzado al mercado."
		      		},
		      		{
						  name: "Aqualert",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "8vUKISjqjtE",
		      			descripcion: "Sistema de medición de calidad del agua y alertas de contaminación"
		      		},
		      		{
						  name: "Dracon",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "qFQubEb4BPQ",
		      			descripcion: "Transferencias bancarias sin intermediarios entre personas y/o comerciantes."
		      		},
		      		{
						  name: "EasyAccess",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "7XABxLq33oc",
		      			descripcion: "Sistema de seguridad para el control de acceso a edificios mediante reconocimiento facial."
		      		},
		      		{
						  name: "Kompaz",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "Lr8TEqPLSTg",
		      			descripcion: "Plataforma web que busca ayudar a PyMEs de base tecnológica a poder realizar un estudio acabado del mercado de manera sencilla y rápida para optimizar sus recursos."
		      		},
		      		{
						  name: "MyPalTime",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 2,
		      			categoria: "Transformación Digital y Social",
		      			code: "1wJ_qQfe22Y",
		      			descripcion: "Solución para Pymes, que hoy en día no cuentan con los recursos necesarios para integrar sistemas avanzados de gestión y control de asistencia."
					},
					{
						name:"UXpression",
						web:"https://www.google.com",
						fb:"https://www.google.com",
						ig:"https://www.google.com",
						type:2 ,
						categoria:"Transformación Digital y Social" ,
						code:"3R9nEL1EK2c" ,
						descripcion: "UXpression es una herramienta móvil que permite analizar emociones e interacciones de personas al usar una plataforma o sitio web, para aumentar la tasa de éxito y mejorar la experiencia del usuario."

					}
					  
		      	]
      	},
    	data2017: 
      	{
      		IA: [
      				{
						  name: "Appunta",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "",
		      			code: "Q52Mtvc8hns",
		      			descripcion: "Plataforma gratuita de ejercicios y materia construidos colaborativamente que apoya a estudiantes y profesores chilenos de educación media."
		      		},
		      		{
						  name: "D-TOX",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "",
		      			code: "83gFlMVuGtI",
		      			descripcion: "D-Tox es un sistema de alertas tempranas que permite identificar intoxicaciones masivas en Chile, y notificar a las autoridades pertinentes."
		      		},
		      		{
						  name: "HolSense",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "",
		      			code: "K9wIYN-2FF0",
		      			descripcion: "Sistema de proyecciones 3D educativas con las que podrás interactuar mediante gestos con tus manos, renovando así la forma de aprendizaje."
		      		},
		      		{
						  name: "Kamal",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "",
		      			code: "9JZ-0xl1Eqs",
		      			descripcion: "La aplicación para publicar y encontrar iniciativas que están a tu alrededor. Un mapa donde difundes lo que haces y buscas lo que necesitas."
		      		},
		      		{
						  name: "Pls",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "",
		      			code: "DEOY6_vH5sY",
		      			descripcion: "Pls permite a usuarios prestarse ayuda y pedir cosas de carácter urgente a través de una aplicación móvil con geolocalización."
		      		},
		      		{
						  name: "Zoome",
						  web:"https://www.google.com",
						  fb:"https://www.google.com",
						  ig:"https://www.google.com",
		      			type: 1,
		      			categoria: "",
		      			code: "dsEO5Q1UrkE",
		      			descripcion: "¡Aumenta tus ventas on-line dándole una apariencia profesional a las fotografías de tus productos de manera fácil y económica con Zoome! "
		      		}
      			],
      		
      		TD:	[]
      	}
    }
  }
  	onSearch = (info,name) => {
		let buscado = name.split("_").join(" ")
		let encontrado = "";
		let objeto;
		for (const object in info){
			if(info[object].name === buscado){
				
				encontrado = buscado
				objeto = info[object]
			}
		}
		
		return (encontrado === "") ? <h1>404 PAGE NOT FOUND</h1> : <Buscado xd={objeto}/>


	}
	render(){


		let url = window.location.href.split("/")
		url = url[url.length - 1]
		var data = [{anos:'2020', proyectos: this.state.data2020.IA.concat(this.state.data2020.TD)}, {anos:'2019', proyectos: this.state.data2019.IA.concat(this.state.data2019.TD)},
		{anos:'2018', proyectos: this.state.data2018.IA.concat(this.state.data2018.TD)}, {anos:'2017', proyectos: this.state.data2017.IA.concat(this.state.data2017.TD)}]
	  return (
	  	<>
		  
	      <NavTop actual= {data}/>
	      <div className="bg-dark">
	      {(url === "2019" || url === "2018" || url === "2017") ? 
	      	
	      	<Timeline year={url} data2019={this.state.data2019} data2018={this.state.data2018} data2017={this.state.data2017} actual = {data}/> 
			:
			(url === "")? 
				<>
				<Banner />
				<ControllTabs actual= {data}
				year = {url}
				catName1="Inteligencia Artificial y Ciencia de Datos"
				catName2="Transformación Digital y Social"
				cat1={this.state.data2020.IA} 
				cat2={this.state.data2020.TD}/> 
				</>
			: this.onSearch(data[0].proyectos.concat(data[1].proyectos.concat(data[2].proyectos.concat(data[3].proyectos))),url)


	      }
	      </div>
	      <Footer/>
		  <div id = "final" ></div>
	    </>
	  );
	}
}

export default App;
