const cesarCanoff = {
  firstName: "César",
  lastName: "Canoff",
  age: 18,
  course: "Software Engineering",
  skills: {
    frontEnd: "HTML5, CSS3, Javascript, ReactJS, Angular, jQuery, Gulp",
    backEnd: "NodeJS, MySQL, PHP",
  },
};

console.log(`Full Name: ${cesarCanoff.firstName} ${cesarCanoff.lastName}`); // César Canoff
console.log(`Age: ${cesarCanoff.age}`); // 18
console.log(`Course: ${cesarCanoff.course}`); // Software Engineering
console.log(`Skills: ${cesarCanoff.skills}`); // frontEnd Object, backEnd Object
console.log(`Front-End Skills: ${cesarCanoff.skills.frontEnd}`); // HTML5, CSS3, Javascript, ReactJS, Angular, jQuery, Gulp
console.log(`Back-End Skills: ${cesarCanoff.skills.backEnd}`); // NodeJS, MySQL, PHP
