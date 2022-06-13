import os from 'os'
console.log(os.homedir())
console.log(os.hostname())
console.log(os.version())
console.log(os.type())

function userOs () {
  return `привет юзер. Вижу ты защел с ${os.type()}`
}
export {userOs}