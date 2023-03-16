import { NAMEKEY } from "./constants"

export function outSesion(){
   localStorage.removeItem(NAMEKEY)
   location.reload()
}

export function parsetData(data) {
   if (Object.keys(data).length > 0) {
      return Object.entries(data)[0][1]
   } 
   return null
}

export function currentDate() {
   let today = new Date();
   let dd = ("0" + (today.getDate())).slice(-2);
   let mm = ("0" + (today.getMonth() + 1)).slice(-2);
   let yyyy = today.getFullYear();
   return yyyy + '-' + mm + '-' + dd
}

export function currentYear(){
   let date = new Date()
   return date.getFullYear()
}