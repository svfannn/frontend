let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//GO
programming.languages.push("GO")
console.log(programming.languages)

//difficulty
programming["difficulty"] = 7;
console.log(programming.difficulty);

//deleting
delete programming.jokes
console.log(programming)

//isFUn
programming.isFun = true;
console.log(programming)

//map()
let updatedLanguages = programming.languages.map((language, index) => `${index} - ${language}`);

updatedLanguages.forEach(updatedLanguage => {
    console.log(updatedLanguage);
});
