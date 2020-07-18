values = ["bash","bar","foo"]

function reversed(list) {
  reversed_list = ""

  for(i = list.length - 1; i >=0 ; i--) {
    i > 0 ? reversed_list = reversed_list + list[i] + "," : reversed_list = reversed_list + list[i]
    //console.log(list[i])
  }
  
  return reversed_list
}