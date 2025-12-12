//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #_open;
  #_balance;
  constructor() {
    this._open = false
  }

  open() {
    if(!this._open){
    this._open = true
    this._balance = 0
    }
    else{
      throw new ValueError();
    }
  }

  close() {
    if(this._open){
    this._open = false
    }
    else{
      throw new ValueError();
    }
  }

  deposit(_deposit) {
    if(_deposit<0){
      throw new ValueError();
    }
    else if(this._open){
    this._balance += _deposit
    }
    else{
      throw new ValueError();
    }
  }

  withdraw(_withdraw) {
    if(_withdraw<0){
      throw new ValueError();
    }
    else if(_withdraw>this._balance){
      throw new ValueError();
    }
    else if(this._open){
      this._balance -= _withdraw
    }
    else{
      throw new ValueError();
    }
  }

  get balance() {
    if(this._open){
    return this._balance
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