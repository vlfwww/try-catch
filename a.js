// 1.
//  На входе значение. Необходимо его обработать. Если это число и оно не является четным,
//  бросить исключение

// try {
//     const a = 5;
//     if(!isNaN(a) && a%2!=0) throw new Error('число и оно не является четным');
//     else return true;
// }
// catch(error){
//     console.log(error.message);
// }

//  2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя бы 1
//  строка, бросить исключение.

// try {
//     const a = [1, 2, 3];
//     for (let el of a) {
//         if (typeof el === 'string') {
//             throw new Error('В массиве есть хотя бы 1 строка');
//         }
//     }
//     console.log('В массиве нет строк.'); 
// } catch (error) {
//     console.log(error.message);
// }

//  3. Дан массив. Вывести те элементы массива, id которых– четное значение. Добавить
//  проверки

//  const arr = [{ "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//  { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//  { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//  { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
//  { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }]
//  const arr1=[];

// try{
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i].id%2==0) arr1.push(arr[i]);
//     }
//     if(arr1.length==0) throw new Error('нет четных id')
// }
// catch(error){
//     console.log(error.message);
// }
// console.log(arr1);

//  4. На вход подается число n– количество элементов массива. Необходимо заполнить массив
//  случайными элементами вдиапазоне 0<n<100. Добавить проверки наввод n.

// let n = 10; 

// try {
//     if (isNaN(n) || n <= 0 || n >= 100) {
//         throw new Error("Ошибка: n должно быть числом в диапазоне от 1 до 99.");
//     }
//     const randomArray = Array.from({ length: n }, () => Math.floor(Math.random() * 100));

//     console.log("Сгенерированный массив:", randomArray);
// } catch (error) {
//     console.log(error.message);
// }

//  5. Реализуйте функцию, которая принимает число и возвращает возвенную в квадрат каждую
//  цифручисласоединяя их. Добавить проверки навводчисла
//  9119-> 811181 (92 === 81, 12=== 1)

// function edit(n) {
//     let result = '';
    
//     try {
//         if (isNaN(n)) throw new Error('Это не число');
//         const str = String(n).split('');
//         result = str.map(el => Math.pow(Number(el), 2)).join('');
        
//     } catch (error) {
//         console.log(error.message);
//         return; 
//     }
//     console.log(result);
// }

// edit(9119);

// 6. Реализуйте функцию, которая принимает массив чисел и возвращает индекс наибольшего
//  числа. Если таких чисел несколько, вернуть индекс первого найденного.
//  Добавить проверки наввод
//  [1, 3, 7, 7, 5]-> 2

// function maxIndex(arr){
//     try{
//         if(arr.length==0) throw new Error('Пустой массив');
//         let maxInd = 0;
//         let maxEl = arr[0];
//         for(let i=0;i<arr.length;i++)
//         {
//             if(isNaN(arr[i])) throw new Error('В массиве есть не число')
//             else if(arr[i]>maxEl) {
//                 maxEl=arr[i];
//                 maxInd=i;
//             }
//         }
//         console.log(maxInd);
        
//     } catch (error) {
//             console.log(error.message);
//         }
// }
// maxIndex( [1, 'nn', 7, 7, 5]);

//  7. Навходподается строка. Необходимо удалить все гласные из строки. Добавить проверки на
//  ввод строки (ввод должен быть строкой).
//  "hello"-> "hll",
//  "world"-> "wrld"

// let str=5;
// let arr=[];
// try{
//     if(typeof(str)!=='string') throw new Error('некорректный ввод');
//     for(let i=0;i<str.length;i++){
//         if(!'aeoui'.includes(str[i])) arr.push(str[i]);
//     }
//     console.log(arr.join(''));
// }
// catch (error) {
//                 console.log(error.message);
//             }

//  8. Реализуйте функцию, которая находит наибольшее общее кратное (НОК) двух чисел.
//  Добавить проверку наввод (вводимые значениядолжныбытьцелымичислами).
//  Пример:
//  НОК(6, 8)-> 24

// function NOK(a,b){
//     let nok='';
//     try{
//         if(!Number.isInteger(a)||!Number.isInteger(b)) throw new Error('нецелочисленный ввод');
//         for(let i=1;i<a*b;i++){
//             if(i%a==0 && i%b==0 )  {
//                 nok=i; break;
//             }
//         }
//         console.log(nok);
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }
// NOK(6,8)

//  9. На вход подается массив чисел. Вернуть массив, в котором все отрицательные числа
//  замененына0.Добавить проверку наввод(всеэлементы массива должныбытьчислами).
//  [-1, 2,-3, 4]-> [0, 2, 0, 4]

// const arr=[-1, 2,-3, 4];
// try{
//     for(let i=0;i<arr.length;i++)
//     {
//         if(isNaN(arr[i])) throw new Error('есть не числа');
//         else if(arr[i]<0) arr[i]=0;
//     }
//     console.log(arr);
    
// }
// catch (error) {
//             console.log(error.message);
//         }

//  10. На вход подается массив чисел. Найти количество уникальных элементов в массиве.
//  Добавить проверку наввод (всеэлементы должныбыть числами).
//  [1, 2, 2, 3, 4, 4, 5]-> 5
//  (уникальные элементы: 1, 2, 3, 4, 5)

// const arr=[1, 2, 2, 3, 4, 4, 5];
// try{
//     const arr1=[];
//     for(let i=0;i<arr.length;i++)
//     {
//         if(isNaN(arr[i])) throw new Error('есть не числа');
//        else if(!arr1.includes(arr[i])) arr1.push(arr[i]);
//     }
//     console.log(arr1.length);
    
// }
// catch (error) {
//             console.log(error.message);
//         }

// 11. Вычислить сумму последовательности целых чисел до первого встреченного нуля. 
// Гарантируется наличие хотя бы одного нуля в последовательности. Дополнительное 
// условие - убедиться, что все элементы последовательности являются числами.
//  [5, 1, 2, 3, 0, 1, 5, 0, 2] –> 11 (5 + 1 + 2 + 3 = 11)

// const arr= [5, 1, 2, 3, 0, 1, 5, 0, 2];
// function sum(arr){
//     let sum=0;
//     try{
//         const arr1=[];
//         for(let i=0;i<arr.length;i++)
//         {
//             if(isNaN(arr[i])) throw new Error('есть не числа');
//             else if(arr[i]==0)break;
//             else sum+=arr[i];
//         }
//         console.log(sum);
        
//     }
//     catch (error) {
//                 console.log(error.message);
//             }
// }
// sum(arr);

//  12. На вход подается строка в виде электронной почты пользователя. Необходимо найти в 
// данной почте “@”. Если же есть, то вывести булевое true, в противном случае бросить 
// исключение и его обработать

// function checkEmail(str){
//     try{
//         if(str.includes('@')) return true;
//         else throw new Error('нету @')
//     }
//     catch (error) {
//         return error.message;
//     }
// }
// console.log(checkEmail('dfghjk.com'));


//  13. *Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция 
// должна возвращать true, если можно построить треугольник со сторонами заданной длины, 
// и false в любом другом случае. 
// Треугольник существует только тогда, когда сумма двух его сторон больше третьей. 
// Требуется сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае 
// сторона окажется больше либо равна сумме двух других, то треугольника с такими 
// сторонами не существует.

// function func(a,b,c) {
//     try{
//         if((a+b)>c &&(c+b)>a && (a+c)>b) return true;
//         else throw new Error('нельзя')
//     }
//     catch (error) {
//          return error.message;
//     }
// }
// console.log(func(5,100,5));


//  14. *Реализуйте функцию, которая принимает массив последовательных (возрастающих) букв и 
// возвращает отсутствующую в массиве. Добавить проверки на элементы массива
//  ["a","b","c","d","f"] -> "e" 
// ["O","Q","R","S"] -> "P "

function find(arr) {
    const alp = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const start = alp.indexOf(arr[0]);
    const slice = alp.slice(start, start + arr.length + 1);
    for (let char of slice) {
        if (!arr.includes(char)) {
            return char;
        }
    }
    return null; 
}
console.log(find(["a", "b", "c", "d", "f"])); 
console.log(find(["O", "Q", "R", "S"]));      
