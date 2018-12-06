class BankAccount{
    constructor(Accountnum , AccountHolderName , AccountBalance){
        this.Accountnum = Accountnum;
        this.AccountHolderName = AccountHolderName;
        this.AccountBalance = AccountBalance;
        this.print=function(){                              
            console.log(this.Accountnum , this.AccountHolderName , this.AccountBalance);
        }
    }
    deposit(amount){
        this.AccountBalance += amount;
    }
}
    class Savings extends BankAccount{                                           //savings inherited bankaccount
        constructor(Accountnum , AccountHolderName , AccountBalance , IsSalary){
         super(Accountnum , AccountHolderName , AccountBalance);
         this.IsSalary = IsSalary;
         this.print=function(){
            console.log(this.Accountnum , this.AccountHolderName , this.AccountBalance , this.IsSalary);
        }
    }
    withdraw(amount){
        if(this.AccountBalance < parseInt(amount))
        {
            console.log("Insufficient Funds");
        }
        else
        {
            this.AccountBalance -= amount;
        }
    }
        getAccountBalance(){
            console.log(this.AccountBalance);
        }
    }
    class Current extends BankAccount{
        constructor(Accountnum , AccountHolderName , AccountBalance , Odlimit){
            super(Accountnum , AccountHolderName , AccountBalance);
            this.Odlimit = Odlimit;
            this.print=function(){
                console.log(this.Accountnum , this.AccountHolderName , this.AccountBalance , this.Odlimit);
            }
    } 
         withdraw(amount){
             if(this.AccountBalance + this.Odlimit < parseInt(amount)){
                 console.log("cannot withdraw");
             }
             else{
                 this.AccountBalance -= amount;    
             }
             }
             getAccountBalance(){
                 console.log(this.AccountBalance);

             }
         }

var savings = new Savings(101 , "shabzan" , 15000 , true);
var current = new Current(105 , "shaik" , 20200 , 20000);
savings.deposit(4567);
savings.getAccountBalance();
current.getAccountBalance();
savings.withdraw(3000);
savings.withdraw(3000);
savings.getAccountBalance();
savings.withdraw(10000);