var name="Maru";
console.log("First::",name);
function sayName(){
    var name="Mr. H";
    console.log("Second::",name);
    sayNameTwo();
        function sayNameTwo(){
            var name="Maddela";
            console.log("Third::",name);
        }
}
sayName();
