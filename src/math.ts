
export class MathOperations {

  constructor() { 

  }

  user = {
    name: "Jack",
    age: 35
  }
  
  async devide(first, second) { 
    return first / second;
  }
  
  async changeName(nameToChange) { 
    this.user.name = nameToChange;
  }
}

