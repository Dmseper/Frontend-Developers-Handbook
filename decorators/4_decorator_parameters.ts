function logParameter(target: any, key : string, index : number) {
  let metadataKey = `__log_${key}_parameters`;

  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(index);
  }
  else {
    target[metadataKey] = [index];
  }
}


class User {

  private name: string;
  constructor(name: string){
    this.name = name;
  }

  setName(@logParameter name: string){
    this.name = name;
  }
  print():void{
    console.log(this.name);
  }
}
let tom = new User("Tom");
tom.setName("Bob");
tom.setName("Sam");