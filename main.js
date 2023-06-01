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


const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

alarm = (person, delay) => {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay)
    });
}

// button.addEventListener("click", () => {
//     alarm(name.value, delay.value)
//         .then((message) => (output.textContent = message))
//         .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`))
// });

button.addEventListener("click", async () => {
    try {
        const message = await alarm(name.value, delay.value);
        output.textContent = message;
    }
    catch (error) {
        output.textContent = `Couldn't set alarm: ${error}`;
    }
});