class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static register(username, email) {
    return new User(username, email);

  }

get foo() {
  return 'foo';
}
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let user = User.resgister('ThijsKraakman', 'thijskraakman@otutweofnf.com');

console.dir(user.foo);
//////////////////////////////

function log(strategy) {
  strategy.handle();
}
class consoleLogger {
  handle(){
    alert('using the alert strat to log');
  }}

log(new consoleLogger);
