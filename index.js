function introduction(name){
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguage("Samip", "React");
introductionWithLanguage("Aki", "Ember.js");
introductionWithLanguage("Aki", "Ember.js");
introductionWithLanguage("Samip", "React");
introductionWithLanguageOptional("Gracie");
introductionWithLanguageOptional("Gracie", "Python");
  
