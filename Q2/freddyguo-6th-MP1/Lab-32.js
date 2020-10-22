console.log("\nTrim Noise\n");
const readline = require('readline-sync');




function trimNoise(samples, amplitude){
    for(let i = 0; i < samples.length; i++){
        if(samples[i] > amplitude){
            samples[i] = amplitude;
        }
        if(samples[i] < (-1) * amplitude){
            samples[i] = (-1) * amplitude;
        }
    }
    return samples;
}

function printMusic (samples){    
    console.log(samples.join(' '));
}

let samples = [40,2532,17,-2300,-17,-4000,2000,1048,-420,33,15,-32,2030,3223]

console.log(`The original list of numbers are: ${printMusic(samples)}\n`)

samples = trimNoise(samples,2000)

console.log(`The trimmed list of numbers are: ${printMusic(samples)}\n`)