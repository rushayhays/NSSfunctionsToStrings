// practice in formatting an object into an HTML
//section

//This is the object provided in the exercise
const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

//This needs to be turned into this
{/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */}

//This code tests that each item can be
//accessed individually
// function convertToHTML(obj) {
//     computerArr = Object.entries(obj);
//     console.log(computerArr[0][0])
//     console.log(computerArr[0][1])
//     console.log(computerArr[1][0])
//     console.log(computerArr[1][1])
//     console.log(computerArr[2][0])
//     console.log(computerArr[2][1])
//     console.log(computerArr[3][0])
//     console.log(computerArr[3][1])
//     console.log(computerArr[4][0])
//     specsArr = Object.entries(computer.specs)
//     console.log(specsArr[0][0])
//     console.log(specsArr[0][1])
//     console.log(specsArr[1][0])
//     console.log(specsArr[1][1])
//     console.log(specsArr[2][0])
//     console.log(specsArr[2][1])
// }

function convertToHTML(obj) {
    computerArr = Object.entries(obj);
    specsArr = Object.entries(computer.specs)
    const objectToString =`<section id="computer--${computerArr[0][1]}">
	<h1>${computerArr[1][1]} ${computerArr[2][1]}</h1>
	<div>Model: ${computerArr[3][1]}</div>
	<div>Memory: ${specsArr[0][1]} GB</div>
	<div>Hard drive space: ${specsArr[1][1]}</div>
	<div>Processor speed: ${specsArr[2][1]} Ghz</div>
</section>`
    return objectToString;
}

console.log(convertToHTML(computer));