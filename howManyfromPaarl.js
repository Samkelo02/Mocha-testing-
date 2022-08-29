function countAllPaarl(regNumber)  {
    var regNum = regNumber.split(",")
    let arrReg = []
    for (var i=0; i<regNum.length; i++)  {
      var firstReg = regNum[i].trim()
      if(firstReg.startsWith("CJ"))  {
        arrReg.push(firstReg)
        console.log(arrReg)
      }
    }  return arrReg.length
  }