console.log('Mulai bekerja');  // Synchronous code, langsung dieksekusi

setTimeout(() => {
  console.log('Tugas setelah 2 detik');  // Web API, timer callback
}, 2000);

Promise.resolve().then(() => {
  console.log('Tugas prioritas');  // Microtask 1
}).then(() => {
  console.log('Tugas prioritas 2'); // Microtask 2 (bersyarat)
});

Promise.resolve().then(() => {
  console.log('Tugas prioritas 3');  // Microtask 3
});

console.log('Lanjut bekerja');  // Synchronous code, langsung dieksekusi

