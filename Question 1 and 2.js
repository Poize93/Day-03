//resume data in JSON format

var Resume=[ { name: "Rahul",
            lastname:"Sharma",
            dob:"01June1993",
            age:28,
            qualification:"B.Tech(EE)",
            passingYear:"2016",
            residence:"Delhi",
            Family:{
                siblings:2,
                homeTown:"Mathua"
            } 
}]


console.log("for Each Loop")
Resume.forEach(ele=>{console.log(ele)})
console.log("...........//////////.........//////////...........//////////")


console.log("for in loop")
for(var key in Resume){
    console.log(Resume)
}
console.log("...........//////////.........//////////...........//////////")



console.log("for loop ")
for(var i=0;i<Resume.length;i++){
    console.log(Resume[i])
}
console.log("...........//////////.........//////////...........//////////")


console.log("for of loop")
for(key of Resume){
    console.log(Resume)
}