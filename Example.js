/*function getTempCallback(location, callback){
    callback(undefined, 78);
    callback('city not found');
};

getTempCallback('lucknow', function (err, temp){
    if(err){
        console.log('error', err);
    }
    else{
        console.log('success', temp);
    }
});

function getTempPromise(location){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(79);
            reject('City not found');
        },1000);
    });
};

getTempPromise('lucknow').then(function(temp){
    console.log('promise success', temp);
}, function(err){
    console.log('promise error', err);
});
*/
function addPromise(a,b){
    return new Promise(function(resolve,reject){
        if(typeof a === 'number' && typeof b==='number')
        resolve(a+b);
        else
        reject( 'a and b need to be numbers');
    })

};

addPromise(2,3).then(function(add){
        console.log('success', add);
    },
    function (err){
        console.log('error', err);
    }
);

addPromise('aditya','namrata').then(function(add){
    console.log('success', add);
},
    function(err){
    console.log('they need to get married', err);
    })

