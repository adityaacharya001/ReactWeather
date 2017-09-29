var names=['aditya', 'namrata', 'shashank', 'priyanka'];
//names.forEach( function(names){
//    console.log(names);
//})

//name.forEach((names)=>console.log(names));

var person={
    name: 'Aditya',
    greet: function(){
        names.forEach((name)=>{console.log(this.name + ' says hi to ' + name)});
    }
};

person.greet();