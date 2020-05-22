Answers to non code related exerices:

#1. Var is reserved keyword so we can't name a variable after it. We get a SyntaxError.

#2. We init a string variable. Than call a self invoking a function and change the variable name.
#The result is:
#Original person was John Malkovich
#New person Drew Barrymore

#3. Once we add ';' behind the console.logs we get:
#outer func: this.fruit = undefined
#outer func: self.fruit = undefined
#inner func: this.fruit = undefined
#inner func: self.fruit = undefined
because of the arrow function --> 'this' is not scoped to the object, but to the global object and fruit is undefined

#10. We will get '5' because of hoisting. 'i' declared with var is a global variable and since the loop ends at 5, we get the last index --> 5.
