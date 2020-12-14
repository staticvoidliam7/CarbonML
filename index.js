const fs = require("fs"), ELT = [
	"H1",
	"H2",
	"H3",
	"H4",
	"H5",
	"H6",
	"P"
]
let html = ""

function parse(string) {
  string.split(/\r?\n/).forEach(line => {
    let match;
    if (match = line.match(/\(!(\w+)\)\(([\w\s\S]+)\)$/)) {
			html += `<${match[1]}>${match[2]}</${match[1]}>`
    } else if (match = line.match(/\(!A\)/)) {
			
		}
  });
  return html
}

const express = require('express')
const app = express()
const port = 9090
const file = fs.readFileSync('index.crb', 'utf-8')

app.get('/', (req,res)=>{
	res.send(parse(file))
	html = ""
})

app.listen(port, ()=>{
	console.log(port)
})