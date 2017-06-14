function getTempCallback(location, callback){
  callback("city not found", 78);
//  callback("city not found");
}

getTempCallback('Philadelphia', function (err, temp){
  if (err){
    console.log('error', err);
  } else {
    console.log('success', temp)
  }
});

function getTempPromise(location){
  return new Promise(function (resolve, reject){
    setTimeout(function(){
      resolve(79);
      reject('city not found');
    }, 1000);

  });
}

getTempPromise('Philadelphia').then(function(temp){
  console.log('promise success', temp);
}, function (err){
  console.log('promise error', err);
})
