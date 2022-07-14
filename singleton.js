/**
 * Singletons are classes which can be instantiated once, and can be accessed globally. 
 * This single instance can be shared throughout our application, which makes Singletons great for 
 * managing global state in an application.
 * 
 * Source: https://www.patterns.dev/posts/singleton-pattern/
 */

 class MyClass {
    constructor() {
      if (MyClass._instance) {
        throw new Error("Singleton classes can't be instantiated more than once.")
      }
      MyClass._instance = this;
  
      // ... Your rest of the constructor code goes after this
    }
  }
  
  var instanceOne = new MyClass() // Executes succesfully
  var instanceTwo = new MyClass() // Throws error

