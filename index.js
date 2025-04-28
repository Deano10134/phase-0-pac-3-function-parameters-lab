function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  console.log(introduction('Aki')); // Output: "Hello, Aki!"
  
    function introductionWithLanguage(name, language) {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    }   
    console.log(introductionWithLanguage('Aki', 'JavaScript')); // Output: "Hello, Aki! I am learning to program in JavaScript!"

    function introductionWithLanguageOptional(name, language = "JavaScript") {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    }
    console.log(introductionWithLanguageOptional('Aki')); // Output: "Hello, Aki! I am learning to program in JavaScript!"

    