let randomIndex;

 function setup() {
   createCanvas(600, 600);
   background(200);
   textSize(32);

   text("click to randomize",250,300)

 }
 //hello
 //hi
 function draw() {
 }

 function mousePressed(){

if (students[0]){
   //this displays random name and splices it out of array
   background(247, 235, 173);
   randomIndex = int(random(students.length));
   text(students[randomIndex].lastName, 250, 300);
   students.splice(randomIndex,1);
}  else{
  background(247, 235, 173);
  text("nothing left", 250,300);
}
}
