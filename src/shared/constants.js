export const ENDPOINT = process.env.VUE_APP_API_LOCAL
export const NAMEKEY = process.env.VUE_APP_NAME_KEY
export const TOKEN = localStorage.getItem(NAMEKEY)
export const URL_FILES = process.env.VUE_APP_DOMINIO + '/files/'
export const WEB_SOPORTE = 'https://90horasporsemana.com';
export const URL_WHATSAPP = 'https://api.whatsapp.com/send?phone=591'
export const URL_GOOGLEMAPS = 'https://www.google.com/maps/search/?api=1&query='

export const NIVEL_ACCESO = {
   ADM: 'Administrador',
   JFP: 'Jefe de Planta',
   OPE: 'Operador',
   PLA: 'Operador de planta',
   SUC: 'Operador de Sucursal'
}

export const CATEGORIA_PRENDAS = {
   DOM: 'Domestica',
   HOT: 'Hotelera',
   IND: 'Industrial',
   HOS: 'Hospitalaria',
}

export const TIPO_COTIZACION = {
   PESO: 'Peso',
   UNIDAD: 'Unidad'
}

export const TIPO_COTIZACION_PRENDA = {
   PESO: 'Peso',
   UNIDAD: 'Unidad',
   AMBOS: 'Ambos'
}

export const TIPO_HORARIO = {
   RECOJO: 'Recojo',
   ENTREGA: 'Entrega',
}

export const MESES = [
   '',
   'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

export const ESTADOS_SOLICITUD = {
   PEN: 'Pendiente',
   CON: 'Confirmada',
   CAN: 'Cancelada',
   REC: 'Recogida',
   AL1: 'En almacen 1',
   AL2: 'En almacen 2',
   ENT: 'Entregada'
}

export const TIPO_ENTREGA = {
   SUC1: 'En Sucursal 1',
   SUC2: 'En Sucursal 2',
   DOM: 'En el domicilio',
}

export const LUGAR_LAVADO = {
   PLANTA: 'Planta',
   SUCURSAL: 'Sucursal'
}


// export const MESES_SHORT = ['','Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun','Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']