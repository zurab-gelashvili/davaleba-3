function copyObject(obj) {
    return { ...obj };
  }
  
   const obj = {
    name: "giorgi",
    age: 32,
    address: {
      country: "sakartvelo",
      city: "Tbilisi",
      contacts: {
        mail: "123@gmail.su",
        nom: "532232343355"
      }
      
    }
  };
  
  const copiedObj = copyObject(obj);
  console.log(copiedObj);