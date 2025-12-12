//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #isopen;
  #balance;
  constructor() {
    this.isopen = false
  }

  open() {
    if(!this.isopen){
    this.isopen = true
    this.balance = 0
    }
    else{
      throw new ValueError();
    }
  }

  close() {
    if(this.isopen){
    this.isopen = false
    }
    else{
      throw new ValueError();
    }
  }

  deposit(_deposit) {
    if(_deposit<0){
      throw new ValueError();
    }
    else if(this.isopen){
    this.balance += _deposit
    }
    else{
      throw new ValueError();
    }
  }

  withdraw(_withdraw) {
    if(_withdraw<0){
      throw new ValueError();
    }
    else if(_withdraw>this.balance){
      throw new ValueError();
    }
    else if(this.isopen){
      this.balance -= _withdraw
    }
    else{
      throw new ValueError();
    }
  }

  get balance() {
    if(this.isopen){
    return this.balance
    }
    else{
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}