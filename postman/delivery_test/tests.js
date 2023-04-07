pm.test("Status is correct", () => {
    pm.response.to.have.status(pm.iterationData.get("code_id"));
  });  // сверка статуса из файла
  
  pm.test("clientDeliveryCost", function () {
   var jsonObject = xml2Json(responseBody); // преобразовать ответ в json
    console.log(jsonObject); // вывести ответ в консоль
    pm.expect(jsonObject.response.$.clientDeliveryCost).to.eql(pm.iterationData.get("cost_client"));
  });   // сравнить ответ и данные из файла
  
  pm.test("hostDeliveryCost", function () {
   var jsonObject = xml2Json(responseBody);
    console.log(jsonObject);
    pm.expect(jsonObject.response.$.hostDeliveryCost).to.eql(pm.iterationData.get("cost_host"));
  });   
  
  pm.test( "Возможность Доставки" , function () {
  var jsonObject = xml2Json(responseBody);
    console.log(jsonObject);
  pm.expect(jsonObject.response.$.isItPossibleToDeliver).to.eql(pm.iterationData.get("del_poss"));
  
  });
  