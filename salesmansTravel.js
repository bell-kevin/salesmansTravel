 function travel(r, zipcode) {
    let arr = r.split(",");
    let letterArr = [];
    let numArr;
    
    let regex = /\d{5}/;
    
    if (!arr.find(item => item.includes(zipcode)) || !regex.test(zipcode)) {
      return zipcode + ":/";
    }
    
      arr = arr.filter(item => item.includes(zipcode));
      arr = arr.map(item => item.substr(0, item.indexOf(zipcode)));
      
      for (i = 0; i < arr.length; i++) {
        if (arr[i].match(/[a-z.]+/gi) !== null) {
          letterArr.push(arr[i].match(/[a-z.]+/gi).join(" "));
        }
      }

      numArr = arr.map(item => item.match(/[0-9]+/g)); 
    
      return zipcode + ":" + letterArr.join(",") + "/" + numArr.join(",");   
}
