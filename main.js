// const name = "Dave"
// const greeting = `Hello, my name is ${name}`
// console.log(greeting)

// makeGreeting = (name) => {
//     return `Hello, my name is ${name}`
// }
// const name = "Dave"
// const greeting = makeGreeting(name)
// console.log(greeting)


// const MAX_PRIME = 1000000;

// isPrime = (n) => {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return n > 1;
// }
// const random = (max) => Math.floor(Math.random() * max);

// generatePrimes = (quota) => {
//     const primes = [];
//     while (primes.length < quota) {
//         const candidate = random(MAX_PRIME);
//         if (isPrime(candidate)) {
//             primes.push(candidate);
//         }
//     }
//     return primes;
// }

// const quota = document.querySelector("#quota");
// const output = document.querySelector("#output");


// document.querySelector("#generate").addEventListener("click", () => {
//     const primes = generatePrimes(quota.value);
//     output.textContent = `Finished generating ${quota.value} primes`;
// });

// document.querySelector("#reload").addEventListener("click", () => {
//     document.location.reload();
// });

// console.log("Started request...");


// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// const fetchPromise = fetch(
//     "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//   );

// fetchPromise
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data[0].name);
//     });

// fetchPromise
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data[0].name);
//     });




// fetchPromise
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data[0].name);
//     })
//     .catch((error) => {
//         console.log(`Could not get products: ${error}`)
//     });


// const fetchPromise1 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//   );
// const fetchPromise2 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
//   );
// const fetchPromise3 = fetch(
//     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
//   );


// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then((responses) => {
//         for (const response of responses) {
//             console.log(`${response.url}: ${response.status}`);
//         }
//     })
//     .catch((error) => {
//         console.error(`Failed to fetch: ${error}`);
//     });

// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then((response) => {
//         console.log(`${response.url}: ${response.status}`);
//     })
//     .catch((error) => {
//         console.error(`Failed to fetch: ${error}`);
//     });

// async function fetchProducts() {
//     try {
//         const response = await fetch(
//             "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//         );
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`)
//         }
//         const data = await response.json();
//         return data;
//     }
//     catch (error) {
//         console.log(`Could not get products: ${error}`)
//     }
// }

// const promise = fetchProducts();
// promise.then((data) => console.log(data[0].name))

// const output = document.querySelector("#output")
// const button = document.querySelector("#set-alarm")

// setAlarm = () => {
//     setTimeout(() => {
//         output.textContent = "Wake up!"
//     }, 1000);
// }

// button.addEventListener("click", setAlarm);


// const name = document.querySelector("#name");
// const delay = document.querySelector("#delay");
// const button = document.querySelector("#set-alarm");
// const output = document.querySelector("#output");

// alarm = (person, delay) => {
//     return new Promise((resolve, reject) => {
//         if (delay < 0) {
//             throw new Error("Alarm delay must not be negative");
//         }
//         setTimeout(() => {
//             resolve(`Wake up, ${person}!`);
//         }, delay)
//     });
// }

// button.addEventListener("click", () => {
//     alarm(name.value, delay.value)
//         .then((message) => (output.textContent = message))
//         .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`))
// });

// button.addEventListener("click", async () => {
//     try {
//         const message = await alarm(name.value, delay.value);
//         output.textContent = message;
//     }
//     catch (error) {
//         output.textContent = `Couldn't set alarm: ${error}`;
//     }
// });

// generatePrimes = (quota) => {
//     isPrime = (n) => {
//         for (let c = 2; c <= Math.sqrt(n); ++c) {
//             if (n % c === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     const primes = [];
//     const maximum = 1000000;

//     while (primes.length < quota) {
//         const candidate = Math.floor(Math.random() * (maximum + 1));
//         if (isPrime(candidate)) {
//             primes.push(candidate);
//         }
//     }

//     return primes;
// }

// document.querySelector('#generate').addEventListener('click', () => {
//     const quota = document.querySelector('#quota').value;
//     const primes = generatePrimes(quota);
//     document.querySelector('#output').textContent = `Finished generating ${quota} primes!`;
// });

// document.querySelector('#reload').addEventListener('click', () => {
//     document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate Primes"';
//     document.location.reload();
// })


// const worker = new Worker("./generate.js");

// document.querySelector('#generate').addEventListener('click', () => {
//     const quota = document.querySelector('#quota').value;
//     worker.postMessage({
//         command: "generate",
//         quota
//     });
// });

// worker.addEventListener('message', (message) => {
//     document.querySelector('#output').textContent = `Finished generating ${message.data} primes!`;
// });

// document.querySelector('#reload').addEventListener('click', () => {
//     document.querySelector("#user-input").value = 'Try typing in here immediately after pressing "Generate primes"';
//     document.location.reload();
// });

const aliceTumbling = [
    {transform: 'rotate(0) scale(1)'},
    {transform: 'rotate(360deg) scale(0)'},
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards',
};

const alice1 = document.querySelector('#alice1');
const alice2 = document.querySelector('#alice2');
const alice3 = document.querySelector('#alice3');


startAnimation = (element, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(element.animate(aliceTumbling, aliceTiming))
        }, delay)
    })
}
async function playAnims() {
    alice1.animate(aliceTumbling, aliceTiming);
    await startAnimation(alice2, aliceTiming.duration)
    await startAnimation(alice3, aliceTiming.duration)
}



playAnims()