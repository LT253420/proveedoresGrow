/**
 * FALLAS.TS - BASE DE DATOS DE FALLAS Y SOLUCIONES
 * ===============================================
 *
 * Este archivo contiene TODAS las fallas y sus soluciones.
 * Es el corazon del sistema de diagnostico.
 *
 * COMO ESTA ORGANIZADO:
 * --------------------
 * 1. Interfaces (tipos de datos)
 * 2. Array de fallas (fallasData)
 * 3. Funciones de busqueda
 *
 * COMO AGREGAR UNA NUEVA FALLA:
 * -----------------------------
 * 1. Ve al array fallasData
 * 2. Copia una falla existente como plantilla
 * 3. Cambia el id, nombre y soluciones
 * 4. Guarda el archivo
 *
 * EJEMPLO DE UNA FALLA:
 * --------------------
 * {
 *   id: 'no-enciende',           // Identificador unico
 *   nombre: 'No enciende',        // Texto que ve el usuario
 *   soluciones: [                // Lista de soluciones posibles
 *     {
 *       titulo: 'Revisar bateria',
 *       descripcion: 'Medir bateria para saber si funciona.'
 *     }
 *   ]
 * }
 */

// ============================================
// INTERFACES (TIPOS DE DATOS)
// ============================================

/**
 * INTERFACE: Solucion
 * ===================
 *
 * Define como se ve UNA solucion para una falla.
 *
 * titulo: El nombre corto de la solucion
 * descripcion: La explicacion detallada de que hacer
 */

/**
 * INTERFACE: Falla
 * ================
 *
 * Define como se ve UNA falla en el sistema.
 *
 * id: Identificador unico (usado internamente, no visible)
 * nombre: Lo que ve el usuario en la lista
 * soluciones: Array de posibles soluciones para esa falla
 */
export interface Falla {
  id: number;
  nombre: string;
  ubicacion: string;
  descripcion: string;
  telefono?: string;
  direccion?: string;
  mapa?: string;
  pagina?: string;
}

// ============================================
// DATOS DE FALLAS
// ============================================

/**
 * fallasData: Array con TODAS las fallas
 * ======================================
 *
 * Este es el array principal con todas las fallas del sistema.
 * CADA FALLA tiene:
 * - ID unico (sin espacios, minusculas, con guiones)
 * - Nombre descriptivo (lo que ve el usuario)
 * - Array de soluciones (puede ser 1 o varias)
 *
 * COMO AGREGAR UNA FALLA NUEVA:
 * -----------------------------
 * Copia este formato y agregalo al final del array:
 *
 * {
 *   id: 'id-de-tu-falla',       // Sin espacios, minusculas
 *   nombre: 'Nombre de la falla', // Texto visible
 *   soluciones: [
 *     {
 *       titulo: 'Titulo de solucion',
 *       descripcion: 'Descripcion detallada...'
 *     }
 *   ]
 * },
 */
export const fallasData: Falla[] = [
  {
    id: 1,
    nombre: "Repuestos FEM",
    ubicacion: "Jose C. Paz",
    descripcion: "",
    telefono: "https://wa.me/5491161213890",
    direccion: "Galería de al lado",
    mapa: "https://maps.app.goo.gl/D8qXCbVG9A8nmL469",
  },

  {
    id: 2,
    nombre: "GYD",
    ubicacion: "Jose C. Paz",
    descripcion: "",
    telefono: "https://wa.me/5491167370880",
    direccion: "Segundo local después del cotillón",
    mapa: "https://maps.app.goo.gl/m47ZFxdW4mcMcMnb9",
  },

  {
    id: 3,
    nombre: "Libres Ventas",
    ubicacion: "Jose C. Paz",
    descripcion: "",
    telefono: "https://wa.me/5491160525272",
    direccion: "Cerca de la estación de servicio Puma",
    mapa: "https://maps.app.goo.gl/D8SKmy6CQAWdCMgh9?g_st=ic",
  },

  {
    id: 4,
    nombre: "German Repara",
    ubicacion: "Jose C. Paz",
    descripcion: "Repuestos Calidad Original, Mecánico y más.",
    telefono: "https://wa.me/5491126445777",
    direccion: "Juana Manuela Gorriti 350",
    mapa: "https://maps.app.goo.gl/RHxBfd3oy49VYK8a8",
    pagina: "http://mkaitechnology.empretienda.com.ar",
  },

  {
    id: 5,
    nombre: "Tecnokin",
    ubicacion: "San Miguel",
    descripcion: "",
    telefono: "https://wa.me/5491150001234",
    direccion: "Al lado del Santander",
    mapa: "https://maps.app.goo.gl/JA8sGejon4m1YfvN7",
  },

  {
    id: 6,
    nombre: "BX CELL",
    ubicacion: "San Miguel",
    descripcion: "",
    telefono: "https://wa.me/5491132961905",
    direccion: "",
    mapa: "https://maps.app.goo.gl/gB16ZsuHmYq1Ck4dA?g_st=ic",
  },

  {
    id: 7,
    nombre: "TecnoTake",
    ubicacion: "San Miguel",
    descripcion: "",
    telefono: "https://wa.me/5491158954824",
    direccion: "",
    mapa: "https://maps.app.goo.gl/ur62PWngevU5Rn6z8?g_st=ic",
  },

  {
    id: 8,
    nombre: "Técnico Cerca",
    ubicacion: "San Miguel",
    descripcion: "",
    telefono: "https://wa.me/5491153335654",
    direccion: "Frente a los Bomberos",
    mapa: "https://maps.app.goo.gl/Hwe4XixgYRAukYWM8?g_st=ic",
  },

  {
    id: 9,
    nombre: "GYF Repuestos",
    ubicacion: "San Miguel",
    descripcion: "",
    telefono: "https://wa.me/5491124085323",
    direccion: "",
    mapa: "https://maps.app.goo.gl/XSqJTBVjjkxG6Trp6?g_st=ic",
  },

  {
    id: 10,
    nombre: "Libres Ventas",
    ubicacion: "Muñiz",
    descripcion: "",
    telefono: "https://wa.me/5491123875571",
    direccion: "",
    mapa: "https://maps.app.goo.gl/hR7eqvw8xBs2v3hU9",
  },

  {
    id: 11,
    nombre: "Shamy Repuestos",
    ubicacion: "Moreno",
    descripcion: "",
    telefono: "https://wa.me/5491132539264",
    direccion: "",
    mapa: "https://maps.app.goo.gl/rd7ZbZKay8puATgX9?g_st=ic",
  },

  {
    id: 12,
    nombre: "UNV Moreno Repuestos",
    ubicacion: "Moreno",
    descripcion: "",
    telefono: "https://wa.me/5491150632255",
    direccion: "Av. Intendente Pagano 2773",
    mapa: "https://maps.app.goo.gl/wYYFRjcd1LFG5JuJA",
  },
  {
  id: 13,
  nombre: "Shamy Repuestos",
  ubicacion: "Grand Bourg",
  descripcion: "",
  telefono: "http://Wa.me/5491128059216",
},

{
  id: 14,
  nombre: "Fabritech",
  ubicacion: "San Martín",
  descripcion: "",
  telefono: "http://Wa.me/5491135743269",
  mapa: "https://maps.app.goo.gl/LabQYM59DBVfRj1fA?g_st=ic",
},

{
  id: 15,
  nombre: "Veeltec Ex Yaxun Oficial",
  ubicacion: "San Isidro",
  descripcion: "",
  pagina: "https://www.veeltec.com.ar/",
  telefono: "http://wa.me/5491151192465",
  direccion: "Martin y Omar 129, 3er piso, Oficina 316, San Isidro, Buenos Aires",
  mapa: "https://maps.app.goo.gl/u3ZcraeS2sRvuWhW7",
},

{
  id: 16,
  nombre: "MECHANIC Argentina OFICIAL",
  ubicacion: "Belgrano",
  descripcion: "",
  pagina: "https://www.mercadolibre.com.ar/pagina/mechanicstore",
  telefono: "http://wa.me/5491127468923",
  direccion: "Cabildo 2280 Local 96 (Galería Rio de la Plata), Buenos aires",
  mapa: "https://maps.app.goo.gl/4CrxArUhZvjqhCEM9",
},

{
  id: 17,
  nombre: "Celulares Merlo",
  ubicacion: "Merlo",
  descripcion: "",
  telefono: "http://wa.me/5491149742391",
  mapa: "https://maps.app.goo.gl/CKZ1YmKY61GQj2XD6",
},

{
  id: 18,
  nombre: "Quality CELL PARTS",
  ubicacion: "Merlo",
  descripcion: "Repuestos para celulares",
  telefono: "http://wa.me/5491166112060",
  mapa: "https://maps.app.goo.gl/eHYgP9aWppnT5b4n7",
  pagina: "https://www.qualitycellparts.com.ar/",
},

{
  id: 19,
  nombre: "J Y C",
  ubicacion: "Merlo",
  descripcion: "",
  telefono: "http://wa.me/5491135362262",
  mapa: "https://maps.app.goo.gl/be1TpNvyikSPY95h7",
},

{
  id: 20,
  nombre: "Quick Electro:",
  ubicacion: "Merlo",
  descripcion: "",
  telefono: "http://wa.me/5491124982072",
  mapa: "https://maps.app.goo.gl/uoWaPnDgNCKWbgi37",
},

{
  id: 21,
  nombre: "Teknoplay",
  ubicacion: "Merlo",
  descripcion: "Repuestos para celulares y Consolas",
  telefono: "http://wa.me/5491127510088",
  mapa: "https://maps.app.goo.gl/Mauni1m78Y4RAvL3A",
  pagina: "http://teknoplay.com.ar",
},

{
  id: 22,
  nombre: "PGVJ Importaciones",
  ubicacion: "Caballito",
  descripcion: "Importaciones de Accesorios, Repuestos y más",
  telefono: "http://wa.me/5491125948959",
  pagina: "http://www.pgvjimportaciones.com.ar",
},

{
  id: 23,
  nombre: "Celular Parts",
  ubicacion: "Once",
  descripcion: "",
  telefono: "http://wa.me/5491124606309",
  pagina: "https://celularparts.com.ar/",
},

{
  id: 24,
  nombre: "Repuestos ELEVEN",
  ubicacion: "Once",
  descripcion: "ENVIOS A TODO EL PAÍS\nVENTAS X MAYOR Y MENOR.\nLED , TOUCH, MODULOS, CONECTORES",
  telefono: "",
  direccion: "PERÓN 2450/90. LOCAL 55. ONCE",
  pagina: "info@repuestoseleven.com.ar",
},
{
  id: 25,
  nombre: "Buenos aires Celular:",
  ubicacion: "Once",
  descripcion: "ACCESORIOS y repuestos PARA TELEFONIA CELULAR LABORATORIO DIGITAL, ELECTRÓNICA, TABLETS Y PCs",
  direccion: "LARREA 181, CAPITAL FEDERAL.",
  pagina: "INFO@BACELULARES.COM.AR",
},

{
  id: 26,
  nombre: "Lucc Cell:",
  ubicacion: "Once",
  descripcion: "",
  telefono: "http://wa.me/5491155268275",
  mapa: "https://maps.app.goo.gl/khFmYs4gxhAYQNSAA",
},

{
  id: 27,
  nombre: "Oudit:",
  ubicacion: "Once",
  descripcion: "",
  telefono: "http://wa.me/5491164097993",
  mapa: "https://maps.app.goo.gl/osxh6RVtRpjKgBR26",
},

{
  id: 28,
  nombre: "MyPhone:",
  ubicacion: "Once",
  descripcion: "",
  telefono: "http://wa.me/5491131535526",
  mapa: "https://maps.app.goo.gl/ticXPtZAqTecnUdw9",
},

{
  id: 29,
  nombre: "Alpha Once",
  ubicacion: "Once",
  descripcion: "",
  telefono: "http://wa.me/5491140954791",
},

{
  id: 30,
  nombre: "Macacell",
  ubicacion: "Once",
  descripcion: "",
  telefono: "http://wa.me/5491168770545",
},

{
  id: 31,
  nombre: "Darcell",
  ubicacion: "Once",
  descripcion: "Accesorios",
  telefono: "http://wa.me/5491530102970\nhttp://wa.me/5491540959902",
  mapa: "https://maps.app.goo.gl/PkVnN5mSMomtdiQj8",
},

{
  id: 32,
  nombre: "Saracell",
  ubicacion: "Once",
  descripcion: "",
  telefono: "http://wa.me/5491127744463",
},

{
  id: 33,
  nombre: "SILIHARD TOUCH",
  ubicacion: "Once",
  descripcion: "Touch de tablets, Herramientas, Insumos, y Más",
  pagina: "https://silihard.mercadoshops.com.ar/",
  mapa: "https://maps.app.goo.gl/m34PFp7tzPk1sxWEA",
},

{
  id: 34,
  nombre: "TecnoLand",
  ubicacion: "Once",
  descripcion: "Repuestos,Herramientas,Insumos y más",
  telefono: "http://wa.me/5491170794040",
  pagina: "http://www.tecnoland.com.ar",
  mapa: "https://maps.app.goo.gl/nEJU3svVR17Dm3WN8",
},

{
  id: 35,
  nombre: "Mundo Accesorios",
  ubicacion: "Once",
  descripcion: "Computación Y Electrónica, Venta por MAYOR Y MENOR",
  telefono: "http://Wa.me/5491127354317",
  mapa: "https://maps.app.goo.gl/JhRxQY9uSwwpVHHz9",
},

{
  id: 36,
  nombre: "Buenos Aires CELULAR",
  ubicacion: "Once",
  descripcion: "Repuestos Original,OLED,ServicePack, Herramientas, Insumos, Parlantes y Microfonos,Cargadores,Auriculares y más",
  telefono: "http://wa.me/5491154818151",
  mapa: "https://maps.app.goo.gl/ke6e8BfUh2cFUZTd7",
},

{
  id: 37,
  nombre: "Nisha CELL",
  ubicacion: "Once",
  descripcion: "Módulos,Baterías,Tactil,Display,Cargadores,Pines de Carga y más\nCON ENVIOS AL INTERIOR, VENTAS POR MAYOR Y MENOR",
  telefono: "http://wa.me/5491127222126",
},
{
  id: 38,
  nombre: "TODO CELU REPUESTOS",
  ubicacion: "Sucursales en varias Zonas, la principal en ONCE",
  descripcion: "Repuestos,Máquinas,Herramientas,Insumos y Más",
  pagina: "http://todocelurepuestos.com.ar",
  telefono: "https://wa.me/5491124061487",
  direccion: "Número: (Venta Mayorista) | Número SAN JUSTO: https://wa.me/5491140386242 | Numero ONCE: https://wa.me/5491168730952 | Numero LOMAS DE ZAMORA: https://wa.me/5491159045913 | Numero LINIERS: https://wa.me/5491165675497 | Numero LA PLATA: https://wa.me/5491153452394 | Numero LAFERRERE: https://wa.me/5491131008995 | Numero LANÚS: https://wa.me/5491130120087"
},
{
  id: 39,
  nombre: "Brandon Store",
  ubicacion: "Once",
  descripcion: "Accesorios y Repuestos para celulares",
  telefono: "https://wa.me/5491160323658",
  direccion: "Larrea 133"
},
{
  id: 40,
  nombre: "Oncell Repuestos",
  ubicacion: "Once",
  descripcion: "Repuestos,Herramientas e Insumos",
  telefono: "https://wa.me/5491132818546",
  direccion: "Dirección: (Local 11) | Peron 2450",
  pagina: "http://onceltelefonia.com.ar"
},
{
  id: 41,
  nombre: "Mashaallah Tecno SRL",
  ubicacion: "Once",
  descripcion: "",
  telefono: "https://wa.me/5491127553170",
  direccion: "Perón 2524"
},
{
  id: 42,
  nombre: "New Cell",
  ubicacion: "Once",
  descripcion: "Cargadores,Parlantes,Auriculares,Cables USB,Regalería,Indumentaria",
  telefono: "https://wa.me/5491139347499",
  direccion: "Larrea 309\nPerón 2650"
},
{
  id: 43,
  nombre: "Bell Cell J",
  ubicacion: "Once",
  descripcion: "Repuestos,Insumos,herramientas y más\nVENTAS POR MAYOR, ENVIOS A TODO EL PAIS",
  telefono: "Belu: https://wa.me/5491150407959 | Victor: https://wa.me/5491141906448 | Fabi: https://wa.me/5491128552959 | Fredy: https://wa.me/5491128653565",
  direccion: "Larrea 183"
},
{
  id: 44,
  nombre: "Star MAYORISTA",
  ubicacion: "Once",
  descripcion: "Accesorios para Celulares,Computación y Electronica\nVENTAS POR MAYOR Y MENOR, ENVIOS AL INTERIOR",
  telefono: "https://wa.me/5491149489690",
  direccion: "Larrea 148"
},
{
  id: 45,
  nombre: "AbulCell",
  ubicacion: "Once",
  descripcion: "Accesorios para celulares\nVENTAS POR MAYOR",
  telefono: "https://wa.me/5491164276566",
  direccion: "Azcuenaga 185"
},
{
  id: 46,
  nombre: "VALE CELL",
  ubicacion: "Once",
  descripcion: "Accesorios para celulares\nVENTAS POR MAYOR",
  telefono: "https://wa.me/5491131017220",
  direccion: "Larrea 22",
  pagina: "http://valecellcelulares.com"
},
{
  id: 47,
  nombre: "World CELL",
  ubicacion: "Once",
  descripcion: "Repuestos de Celulares",
  telefono: "https://wa.me/5491121624953",
  mapa: "https://maps.app.goo.gl/dKKHeZdgkkgWcbh28"
},
{
  id: 48,
  nombre: "Distribuidora LARREA",
  ubicacion: "Once",
  descripcion: "Articulos de libreria, Jugueteria, Kiosko, Insumos de computacion, Art de Temporada\nENVIOS AL INTERIOR",
  telefono: "https://wa.me/5491168310149",
  direccion: "Larrea 154"
},
{
  id: 49,
  nombre: "Vanacell - Gaston vanadia",
  ubicacion: "Once",
  descripcion: "Importador de herramientas, insumos y más",
  telefono: "https://wa.me/5491156065594",
  direccion: "Larrea 747",
  pagina: "http://Vanacell.empretienda.com.ar"
},
{
  id: 50,
  nombre: "ONE SEVEN",
  ubicacion: "Once",
  descripcion: "",
  telefono: "https://wa.me/5491138132995",
  pagina: "http://oneseven.mercadoshops.com.ar",
  direccion: "Paso 191"
},
{
  id: 51,
  nombre: "Orshicell",
  ubicacion: "Once",
  descripcion: "",
  telefono: "https://wa.me/5491164876715",
  pagina: "http://orshicellba.mercadoshops.com.ar"
},
{
  id: 52,
  nombre: "RITU CELL",
  ubicacion: "Once",
  descripcion: "Accesorios para celulares\nENVIOS AL INTERIOR",
  telefono: "https://wa.me/5491139392379"
},
{
  id: 53,
  nombre: "Euge Cell",
  ubicacion: "Once",
  descripcion: "Microfonos,Parlantes,Fundas,Glass,Accesorios para celulares y más\nENVIOS AL INTERIOR",
  telefono: "https://wa.me/5491566609573",
  direccion: "Peron 2450, Local 45 BIS"
},
{
  id: 54,
  nombre: "DyD",
  ubicacion: "Once",
  descripcion: "Accesorios para celulares",
  telefono: "https://wa.me/5491158800870"
},
{
  id: 55,
  nombre: "Mobile Mania",
  ubicacion: "Once",
  descripcion: "ENVIOS AL INTERIOR",
  telefono: "https://wa.me/5491138070995",
  direccion: "Peron 2450, Local 48"
},
{
  id: 56,
  nombre: "Shahrasti Cell",
  ubicacion: "Once",
  descripcion: "Accesorios para celulares y Computación",
  telefono: "https://wa.me/5491162001568",
  direccion: "Peron 2450, Local 53"
},
{
  id: 57,
  nombre: "SM CELL",
  ubicacion: "once",
  descripcion: "Repuestos para celulares",
  telefono: "https://wa.me/5491167526652",
  direccion: "Azcuenaga 193"
},
{
  id: 58,
  nombre: "MONIR",
  ubicacion: "Once",
  descripcion: "Accesorios generales\nVENTAS POR MAYOR",
  telefono: "https://wa.me/5491136635888",
  direccion: "Azcuenaga 183"
},
{
  id: 59,
  nombre: "Zombie Electronics",
  ubicacion: "Once",
  descripcion: "Electronica General",
  telefono: "https://wa.me/5491144092849",
  direccion: "Azcuenaga 179",
  pagina: "http://zombieelectronics.com.ar"
},
{
  id: 60,
  nombre: "Casa de Iluminacion",
  ubicacion: "Once",
  descripcion: "Ferretería, Herramientas e Iluminación",
  telefono: "https://wa.me/5491537888858",
  direccion: "Azcuenaga 58"
},
{
  id: 61,
  nombre: "TecnoFundas",
  ubicacion: "Once",
  descripcion: "Fundas,Glass,Accesorios y Electronica",
  telefono: "https://wa.me/5491162416643",
  direccion: "Larrea 125"
},
{
  id: 62,
  nombre: "LH ACCESORIOS",
  ubicacion: "Once",
  descripcion: "Fundas y accesorios para celulares",
  telefono: "https://wa.me/5491132062827",
  direccion: "Larrea 121",
  pagina: "http://lhaccesoriosok.com"
},
{
  id: 63,
  nombre: "UnderTec",
  ubicacion: "Once",
  descripcion: "Accesorios para celulares,Auriculares,Cargadores y más",
  telefono: "https://wa.me/5491127162973"
},
{
  id: 64,
  nombre: "Premiumcell",
  ubicacion: "Once",
  descripcion: "",
  telefono: "https://wa.me/541162158548",
  pagina: "https://premiumcell.com.ar/"
},
{
  id: 65,
  nombre: "EL CELU",
  ubicacion: "Once",
  descripcion: "",
  telefono: "https://wa.me/5491124726899",
  pagina: "https://www.elcelu.com.ar/"
},
{
  id: 66,
  nombre: "SilihardTouch",
  ubicacion: "Once",
  descripcion: "",
  telefono: "https://wa.me/5491150209922",
  pagina: "https://silihardtouch.com/"
},
{
  id: 67,
  nombre: "Xavis Cell",
  ubicacion: "Banfield",
  descripcion: "Repuestos,Licencias,Herramientas y Más",
  direccion: "https://maps.app.goo.gl/bpc93WNN7RvdwjTW7",
  telefono: "https://wa.me/5491157688873",
  pagina: "http://xaviscell.com.ar"
},
{
  id: 68,
  nombre: "Criye",
  ubicacion: "Florencio Varela",
  descripcion: "Herramientas, Bandeja porta sim, Pines de carga,Accesorios PC, Baterías para celulares y más",
  telefono: "https://wa.me/5491131582274",
  direccion: "https://maps.app.goo.gl/xcX7xaaVfrCXA7HG6",
  pagina: "http://Criye.ar"
},
{
  id: 69,
  nombre: "ALLHARD",
  ubicacion: "Burzaco",
  descripcion: "Computación,Repuestos,Accesorios,Electronica y más",
  telefono: "https://wa.me/5491144399817",
  pagina: "http://allhardargentina.mercadoshops.com.ar"
},
{
  id: 70,
  nombre: "Boston Advance OFICIAL",
  ubicacion: "Villa Del Parque",
  descripcion: "Repuestos OFICIALES y 100% originales MOTOROLA. PROVEEDOR OFICIAL. Herramientas, accesorios y más",
  telefono: "https://wa.me/5491161656785",
  direccion: "https://maps.app.goo.gl/5tN1YhxVQs65soAt6",
  pagina: "https://bostoncelulartech.com/"
},
{
  id: 71,
  nombre: "ROYAL CELL OFICIAL",
  ubicacion: "Once",
  descripcion: "",
  telefono: "https://wa.me/5491120881447",
  pagina: "https://www.royalcell.com.ar/"
},
{
  id: 72,
  nombre: "Hobby Electronica",
  ubicacion: "Villa Crespo",
  descripcion: "Arduinos,Electronica,Herramientas y Más",
  telefono: "https://wa.me/5491135133874",
  direccion: "Av Warnes 127",
  pagina: "http://hobbytronica.com.ar"
},
{
  id: 73,
  nombre: "PandaShop",
  ubicacion: "Villa Crespo",
  descripcion: "Repuestos de Celulares,Computación,Electronica y más\nMódulos,Insumos",
  telefono: "https://wa.me/5491133805700",
  pagina: "http://pandashop.ar"
},
{
  id: 74,
  nombre: "RudderCel",
  ubicacion: "Monte Grande",
  descripcion: "",
  telefono: "https://wa.me/5491123912903",
  pagina: "http://ruddercel.com"
},
{
  id: 75,
  nombre: "TecnoPompeya",
  ubicacion: "Nueva Pompeya",
  descripcion: "",
  telefono: "https://wa.me/5491121544843",
  direccion: "https://maps.app.goo.gl/ZNKu5FrorNBYU28Y9",
  pagina: "http://tecnopompeya.mercadoshops.com.ar"
},
{
  id: 76,
  nombre: "Punto Alfa",
  ubicacion: "San Martin",
  descripcion: "",
  telefono: "https://wa.me/5491134722201",
  direccion: "Avellaneda 2769",
  pagina: "http://puntoalfa.empretienda.com.ar"
},
{
  id: 77,
  nombre: "JV Telefonia CELULAR",
  ubicacion: "Villa Marteli",
  descripcion: "",
  telefono: "https://wa.me/5491124626735",
  pagina: "http://jvtelefoniacelular.com.ar"
},
{
  id: 78,
  nombre: "Drihm",
  ubicacion: "Ciudad Madero",
  descripcion: "",
  telefono: "https://wa.me/5491145847200",
  pagina: "http://drihm.com.ar"
},
{
  id: 79,
  nombre: "CeluRepuestos",
  ubicacion: "Morón",
  descripcion: "",
  telefono: "https://wa.me/5491158621224",
  direccion: "Av Rivadavia 18482 (Piso 4)",
  pagina: "http://celurepuestos.com"
},
{
  id: 80,
  nombre: "Checkpoint",
  ubicacion: "Morón",
  descripcion: "Repuestos de Celulares",
  telefono: "https://wa.me/5491125021813",
  direccion: "25 de mayo 251",
  pagina: "http://checkpointmoron.mitiendanube.com"
},
{
  id: 81,
  nombre: "J y D",
  ubicacion: "Morón",
  descripcion: "",
  telefono: "https://wa.me/5491122460575",
  direccion: "https://maps.app.goo.gl/DpnLw9xXxaLeA2TD9"
},
{
  id: 82,
  nombre: "Nuevas Ondas 2",
  ubicacion: "Mataderos",
  descripcion: "Importador de Repuestos de celulares, Auriculares y Smartwatch",
  telefono: "https://wa.me/5491126440661",
  direccion: "Juan Bautista Alberdi 7070",
  pagina: "http://nuevasondas2.com.ar"
},
{
  id: 83,
  nombre: "Punto Android",
  ubicacion: "",
  descripcion: "",
  telefono: "https://wa.me/5491167208767"
},
{
  id: 84,
  nombre: "Punto Cell",
  ubicacion: "",
  descripcion: "Venta de accesorios y repuestos",
  telefono: "https://wa.me/5491165713564"
},
{
  id: 85,
  nombre: "TECH AND THINGS",
  ubicacion: "",
  descripcion: "",
  telefono: "https://wa.me/5491134372792",
  pagina: "http://www.techandthings.com.ar"
},
{
  id: 86,
  nombre: "LUCKY ELECTRONICA",
  ubicacion: "",
  descripcion: "Distribuidor mayorista de electronica",
  telefono: "https://wa.me/5491149916224",
  pagina: "http://www.luckyelectronica.com"
},
{
  id: 87,
  nombre: "MARYLAND",
  ubicacion: "",
  descripcion: "Tienda de suministros y mayorista de electronica",
  telefono: "https://wa.me/5491135778444",
  pagina: "http://www.maryland.com.ar"
},
{
  id: 88,
  nombre: "SUPER POWER",
  ubicacion: "",
  descripcion: "Venta de accesorios para celulares",
  telefono: "https://wa.me/5491138218883 / https://wa.me/5491150620000",
  pagina: "http://www.e-max-store.com",
  direccion: "Pasteur 288, Capital Federal"
},
{
  id: 89,
  nombre: "FARID ELECTRONICA",
  ubicacion: "",
  descripcion: "Venta de accesorios para celulares",
  telefono: "https://wa.me/5491132162682 / https://wa.me/5491154138882",
  pagina: "http://www.electronicafarid.com.ar"
},
{
  id: 90,
  nombre: "SAN JULIAN",
  ubicacion: "",
  descripcion: "Electronica - regaleria - parlantes",
  telefono: "https://wa.me/5491132661418",
  direccion: "Pasteur 104 CABA"
},
{
  id: 91,
  nombre: "Mundo Mobile",
  ubicacion: "Retiro",
  descripcion: "Repuestos de Celulares, Modulos, Baterías, Placa de carga, etc.",
  telefono: "https://wa.me/5491167958427",
  direccion: "https://maps.app.goo.gl/y9EJLVyaRMLwTjYWA"
},
{
  id: 92,
  nombre: "EcoFix",
  ubicacion: "Retiro",
  descripcion: "Mayorista y venta de Repuestos,Telefonos y articulos de electronica",
  telefono: "https://wa.me/5491154552934",
  direccion: "https://maps.app.goo.gl/S8gRKnxMUSk7ehUx8"
},
{
  id: 93,
  nombre: "Premium Parts",
  ubicacion: "Retiro",
  descripcion: "Importadores de repuestos para celulares y computación",
  telefono: "https://wa.me/5491125197976",
  direccion: "https://maps.app.goo.gl/awyVchfpYXQcdQwr6"
},
{
  id: 94,
  nombre: "TreeTecno",
  ubicacion: "Devoto",
  descripcion: "Importador de Repuestos, Herramientas, Telefonía y articulos electronicos",
  telefono: "https://wa.me/5491150330409"
},
{
  id: 95,
  nombre: "SFK Parts Store",
  ubicacion: "",
  descripcion: "Venta de módulos, Insumos, Herramientas, etc.",
  telefono: "https://wa.me/5491127929977"
},
{
  id: 96,
  nombre: "Todo Celu Repuestos",
  ubicacion: "Liniers",
  descripcion: "",
  telefono: "https://wa.me/5491165675497",
  direccion: "https://maps.app.goo.gl/zofJgKa31njHfRZQ6"
},
{
  id: 97,
  nombre: "LYL cell",
  ubicacion: "Liniers",
  descripcion: "Insumos para tecnicos,Repuestos y Mas",
  telefono: "https://wa.me/5491150940812",
  direccion: "https://maps.app.goo.gl/2L5Ao9mu9Bi5k9rD6?g_st=com.google.maps.preview.copy",
  pagina: "https://lylcell.mercadoshops.com.ar"
},
{
  id: 98,
  nombre: "System TN",
  ubicacion: "Liniers",
  descripcion: "Repuestos varios",
  telefono: "https://wa.me/5491151447092",
  direccion: "https://maps.app.goo.gl/ecBCZBAW3TzL8uQu6"
},
{
  id: 99,
  nombre: "Todo Celu Repuestos",
  ubicacion: "San Justo",
  descripcion: "",
  telefono: "https://wa.me/5491140386242"
},
{
  id: 100,
  nombre: "LP REPUESTOS",
  ubicacion: "San Justo",
  descripcion: "Venta de módulos y repuestos para celulares",
  telefono: "https://wa.me/5491139166369",
  direccion: "https://maps.app.goo.gl/H8mVDTbuMyeje5e16"
},
{
  id: 101,
  nombre: "ADRI CELL",
  ubicacion: "",
  descripcion: "Accesorios para celulares",
  telefono: "https://wa.me/5491155929573",
  direccion: "AV. Corrientes 2278"
},
{
  id: 102,
  nombre: "LUCY CELL",
  ubicacion: "",
  descripcion: "Accesorios para celulares",
  telefono: "https://wa.me/5491155815614",
  direccion: "Azcuénaga 394, CABA"
},
{
  id: 103,
  nombre: "KACEL SRL",
  ubicacion: "Once",
  descripcion: "Venta de accesorios",
  telefono: "https://wa.me/5491130882193",
  direccion: "Peròn 2494/2496"
},
{
  id: 104,
  nombre: "IMPOTEKNO",
  ubicacion: "",
  descripcion: "Mayorista de electrónica",
  telefono: "https://wa.me/5491157075710",
  pagina: "http://www.impotekno.com"
},
{
  id: 105,
  nombre: "ACCESORIOS FR",
  ubicacion: "",
  descripcion: "Venta de accesorios para celulares\nParlantes bluethoot - electronica",
  pagina: "http://www.accesoriosfr.com.ar"
},
{
  id: 106,
  nombre: "Netcell Mayorista y Minorista",
  ubicacion: "Paraná, Entre Rios",
  descripcion: "Repuestos, Accesorios, Art Varios y más",
  telefono: "https://wa.me/5493434690662 / https://wa.me/5493434627778",
  pagina: "https://netcellstore.com.ar/"
},
{
  id: 107,
  nombre: "BG Mayorista",
  ubicacion: "Pinamar, Buenos Aires",
  descripcion: "Repuestos para Celulares, accesorios, etc. Distribuidor de WUZIP",
  telefono: "wa.me/54902254513484",
  mapa: "https://maps.app.goo.gl/G9RCFpUQbjiTSu5q8"
},
{
  id: 108,
  nombre: "EB Electronica",
  ubicacion: "Santa Fe",
  descripcion: "Repuestos para celulares,Electronica,y más",
  telefono: "wa.me/5493424683836",
  pagina: "Ebelectronica.com.ar"
},
{
  id: 109,
  nombre: "Exabyte tools",
  ubicacion: "Venado Tuerto,Santa Fe",
  descripcion: "Repuestos WUZIP,Insumos,Repuestos para Celulares",
  telefono: "wa.me/5493462641059",
  pagina: "exabytetools.com"
},
{
  id: 110,
  nombre: "IT&T",
  ubicacion: "Mendoza",
  descripcion: "",
  pagina: "tienda.ityt.com.ar"
},
{
  id: 111,
  nombre: "El REPA",
  ubicacion: "Rosario",
  descripcion: "Insumos,Repuestos, Insumos para Remanufactura, y más",
  pagina: "https://elreparadordepc.com/"
},
{
  id: 112,
  nombre: "Evophone",
  ubicacion: "Rosario",
  descripcion: "Repuestos,Herramientas,Electronica y Más",
  telefono: "wa.me/5493416800467",
  direccion: "Ocampo 521",
  pagina: "evophone.com.ar"
},
{
  id: 113,
  nombre: "Celuphone",
  ubicacion: "Distrito Centro,Rosario",
  descripcion: "",
  telefono: "wa.me/5493417487593",
  direccion: "Mendoza 1468",
  pagina: "celuphone.com.ar"
},
{
  id: 114,
  nombre: "UnionTools",
  ubicacion: "Cordoba",
  descripcion: "Baterías,Modulos,Programadoras,Insumos, y Más",
  telefono: "wa.me/5493518583860",
  pagina: "https://www.uniontools.com.ar/"
},
{
  id: 115,
  nombre: "Goetech",
  ubicacion: "Cordoba",
  descripcion: "Celulares,Accesorios de PC y más",
  telefono: "wa.me/5493541626430",
  pagina: "goetech.ar"
},
{
  id: 116,
  nombre: "I2C Mayorista",
  ubicacion: "Cordoba",
  descripcion: "Accesorios,Herramientas,Remanufactura,Repuestos y más",
  telefono: "wa.me/5493516439317",
  pagina: "https://www.i2cmayorista.com/"
},
{
  id: 117,
  nombre: "Ezequiel Ferreyra — EZEFERREYRA",
  ubicacion: "Buenos Aires",
  descripcion: "Repuestos,Herramientas,Insumos y Más. distribuidor oficial de rf4, kailiwei, etc.",
  telefono: "wa.me/5491154590175",
  pagina: "https://www.ezeferreyra.com/"
},
{
  id: 118,
  nombre: "WIFIX Argentina By Edgar YO REPARO",
  ubicacion: "Rosario",
  descripcion: "Repuestos,Herramientas,Insumos y Más",
  pagina: "https://Wifixargentina.com.ar"
},
{
  id: 119,
  nombre: "Soul FIX",
  ubicacion: "La plata",
  descripcion: "variedad,blindajes,Switchs,microfonos,speakers, tornillos",
  pagina: "https://soulfix.com.ar/"
},
{
  id: 120,
  nombre: "Carmel Importaciones",
  ubicacion: "Montevideo, Uruguay",
  descripcion: "Repuestos de Celulares, Informatica, Audio, Herramientas, etc.",
  telefono: "wa.me/59894711555",
  mapa: "https://maps.app.goo.gl/4fci2kRGSTZvs22f8",
  pagina: "carmelimportaciones.com"
},
{
  id: 121,
  nombre: "Impextrom",
  ubicacion: "Vigo,ESPAÑA",
  descripcion: "",
  telefono: "wa.me/34693808088",
  pagina: "Impextrom.com"
},
{
  id: 122,
  nombre: "MovilRepuestos",
  ubicacion: "Fuenlabrada,ESPAÑA",
  descripcion: "Repuestos para celulares",
  telefono: "wa.me/34658228780",
  pagina: "movilrepuestos.es"
},
{
  id: 123,
  nombre: "Sunjoy Store",
  ubicacion: "Fuenlabrada,ESPAÑA",
  descripcion: "",
  pagina: "sunjoystore.es"
},
{
  id: 124,
  nombre: "PreciosAdictos",
  ubicacion: "Madrid,ESPAÑA",
  descripcion: "Repuestos para celulares",
  telefono: "wa.me/34912477744",
  pagina: "preciosadictos.com"
},
{
  id: 125,
  nombre: "Movilcrack",
  ubicacion: "Islas Canarias,ESPAÑA",
  descripcion: "Repuestos para celulares",
  telefono: "wa.me/34928493795",
  pagina: "movilcrack.com"
},
{
  id: 126,
  nombre: "IPhoREPA",
  ubicacion: "Islas Canarias,ESPAÑA",
  descripcion: "Repuestos para celulares",
  pagina: "iphorepa.com"
},
{
  id: 127,
  nombre: "Imatica Los Palacios",
  ubicacion: "Sevilla,ESPAÑA",
  descripcion: "Herramientas,Insumos,Repuestos,Microelectronica y más",
  pagina: "imaticalospalacios.com"
},
{
  id: 128,
  nombre: "CeluInfo",
  ubicacion: "ESPAÑA",
  descripcion: "",
  telefono: "wa.me/34688175789",
  pagina: "https://www.celuinfo.com/"
},
{
  id: 129,
  nombre: "ShopTronica",
  ubicacion: "La Nucia,ESPAÑA",
  descripcion: "",
  telefono: "wa.me/34672691648",
  pagina: "shoptronica.com"
},
{
  id: 130,
  nombre: "Itouch",
  ubicacion: "Cajamarca/Lima/Piura,Perú",
  descripcion: "Repuestos de celulares",
  telefono: "wa.me/5117481658",
  pagina: "itouchperu.pe"
},
{
  id: 131,
  nombre: "Grupo LEOR",
  ubicacion: "Puebla,Mexico",
  descripcion: "",
  telefono: "wa.me/522214135220",
  pagina: "grupoleor.com"
}


  //acá termina la lista//
];

// ============================================
// FUNCIONES DE BUSQUEDA
// ============================================

/**
 * getFallaNames: Obtiene todos los nombres de fallas
 * ===================================================
 *
 * Retorna un array con solo los nombres, usado en el buscador
 * para mostrar sugerencias mientras el usuario escribe.
 *
 * @returns Array de strings con los nombres
 */
export const getFallaNames = (): string[] => {
  // .map() extrae solo el campo 'nombre' de cada falla
  return fallasData.map((f) => f.nombre);
};

/**
 * getFallaById: Busca una falla por su ID
 * ======================================
 *
 * @param id - El ID de la falla a buscar
 * @returns La falla encontrada o undefined si no existe
 */
export const getFallaById = (id: string): Falla | undefined => {
  // .find() retorna el primer elemento que cumple la condicion
  return fallasData.find((f) => f.id === id);
};

/**
 * getFallaByName: Busca una falla por su nombre
 * =============================================
 *
 * @param nombre - El nombre de la falla a buscar (case insensitive)
 * @returns La falla encontrada o undefined si no existe
 */
export const getFallaByName = (nombre: string): Falla | undefined => {
  // Convertimos ambos a minusculas para buscar sin importar mayusculas
  return fallasData.find(
    (f) => f.nombre.toLowerCase() === nombre.toLowerCase()
  );
};

/**
 * searchFallas: Busca fallas que coincidan con un termino
 * =======================================================
 *
 * Busca en el nombre de la falla Y en sus soluciones.
 *
 * @param query - Termino de busqueda
 * @returns Array de fallas que coinciden
 */
export const searchFallas = (query: string): Falla[] => {
  // Convertimos a minusculas para buscar sin importar mayusculas
  const lowerQuery = query.toLowerCase();

  return fallasData.filter((f) =>
    // Buscar en el nombre de la falla
    f.nombre.toLowerCase().includes(lowerQuery) ||
    // O buscar en alguna solucion
    f.soluciones.some((s) =>
      s.titulo.toLowerCase().includes(lowerQuery) ||
      s.descripcion.toLowerCase().includes(lowerQuery)
    )
  );
};
