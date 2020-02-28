//* WeakSet: 객체만 포함할 수 있으며, 이 객체들은 가비지 콜렉터의 대상이 됨.

const naughty = new WeakSet();

const children = [
  { name: "Suzy" },
  { name: "Derek" }
]

naughty.add(children[1])
for (let child of children) {
  if (naughty.has(child)) {
    console.log(`Coal for ${child.name}!`)
  }
  else {
    console.log(`Presents for ${child.name}!`)
  }
}