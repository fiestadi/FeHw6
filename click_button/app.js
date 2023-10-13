// Реализовать переключение кнопок:


// Создать четыре кнопки с одинаковыми стилями

// Добавить на каждую онклик который будет менять цвет только кнопки по который нажали

// Если пользователь нажал на другую кнопку стили должны обнулиться у кнопок, но у кнопки по которой кликнули измениться. 

// Реализовать обнуление с помощью обращение к parentElement.children который возвращает HTMLCollection, у которого нет forEach

// Добавить к прототипу HTMLCollection свой forEach, map, filter, reduce. И воспользоваться одним из этих методов чтобы решить задачу.

const buttons = document.querySelectorAll('.toggle-button');

function changeColor(event) {
    // sbros cveta
    buttons.forEach(button => {
        button.style.backgroundColor = 'rgb(115, 84, 6)';
    });
    
    // novij cvet
    event.target.style.backgroundColor = 'rgb(70, 32, 32)';
}

 // obrabotka dli kazdoj knopki
buttons.forEach(button => {
    button.addEventListener('click', changeColor);
});
HTMLCollection.prototype.forEach = function(callback) {
   for (let i = 0; i < this.length; i++) {
       callback(this[i], i, this);
   }
};
 // prototype map
HTMLCollection.prototype.map = function(callback) {
   const result = [];
   for (let i = 0; i < this.length; i++) {
       result.push(callback(this[i], i, this));
   }
   return result;
};

// prototype filter
HTMLCollection.prototype.filter = function(callback) {
   const result = [];
   for (let i = 0; i < this.length; i++) {
       if (callback(this[i], i, this)) {
           result.push(this[i]);
       }
   }
   return result;
};
// prototype reduce
HTMLCollection.prototype.reduce = function(callback, initialValue) {
   let acc = initialValue !== undefined ? initialValue : this[0];
   for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
       acc = callback(acc, this[i], i, this);
   }
   return acc;
};