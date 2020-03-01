// * 제너레이터는 원래 동기적인 성격을 가졌지만, 프라미스와 결합하면 비동기 코드를 효율적으로 관리할 수 있다.

function nfcall(f, ...args) {
  return new Promise(function (resolve, reject) {
    f.call(null, ...args, function (err, ...args) {
      if (err) return reject(err);
      resolve(args.length < 2 ? args[0] : args);
    })
  })
}

function ptimeout(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, delay)
  })
}
// 1) 동시에 실행 X
function* theFutureIsNow() {
  const dataA = yield nfcall(fs.readFile, 'a.txt');
  const dataB = yield nfcall(fs.readFile, 'b.txt');
  const dataC = yield nfcall(fs.readFile, 'c.txt');
  yield ptimeout(60 * 1000);
  yield nfcall(fs.wirte, 'd.txt', dataA + dataB + dataC);
}




// 2) 동시에 실행
function* theFutureIsNow() {
  const data = yield Promise.all([
    nfcall(fs.readFile, 'a.txt'),
    nfcall(fs.readFile, 'b.txt'),
    nfcall(fs.readFile, 'c.txt')
  ])
  yield ptimeout(60 * 1000);
  yield nfcall(fs.wirte, 'd.txt', data[0] + data[1] + data[2]);
}

// - try...catch 문과 함께
function* theFutureIsNow() {
  let data;
  try {
    data = yield Promise.all([
      nfcall(fs.readFile, 'a.txt'),
      nfcall(fs.readFile, 'b.txt'),
      nfcall(fs.readFile, 'c.txt')
    ])
  } catch (err) {
    console.error("Unable to read one or more input files: " + err.message)
    throw err;
  }
  yield ptimeout(60 * 1000);
  try {
    yield nfcall(fs.wirte, 'd.txt', data[0] + data[1] + data[2]);
  } catch (err) {
    console.error("Unable to write output file: " + err.message)
    throw err;
  }
}