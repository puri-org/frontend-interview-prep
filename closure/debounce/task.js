//  Напиши функцию debounce(fn, delay), которая возвращает новую функцию,
//  которая будет вызывать переданную функцию fn, но только после того,
//  как прекратится последовательность вызовов на протяжении указанного интервала времени (в миллисекундах).
//  Это полезно, например, для ограничения частоты вызова функции при скроллинге или нажатии кнопки.

const debouncedFunction = debounce(() => console.log('Hello!'), 2000);
debouncedFunction(); // вызовется через 2 секунды
debouncedFunction(); // предыдущее выполнение отменяется, и будет вызвана новая через 2 секунды
