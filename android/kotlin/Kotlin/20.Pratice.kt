package com.example.myapplication.Kotlin

fun main(array: Array<String>) {
    val account: Account = Account("홍길동", "1990/3/1", 1000)

    // 현재 입금 된 금액 1000
    println(account.checkBalance())
    // 기존 입금 된 금액 1000 + 지금 추가 된 금액 1000 = 2000
    println(account.save(1000))
    // 위에 입금 된 총 금액 2000원 출금
    println(account.withdraw(2000))
    //다시 현재 금액 확인
    println(account.checkBalance())

    println()
    val account2 = Account("홍길동", "1990/3/1", 1000)
    // 현재 입금 된 금액 1000
    println(account2.checkBalance())
    // 기존 입금 된 금액 1000 + 지금 추가 된 금액 1000 = 2000
    println(account2.save(1000))
    // 위에 입금 된 총 금액 2000원 출금
    println(account2.withdraw(2000))
    //다시 현재 금액 확인
    println(account2.checkBalance())

    println()
//    val account3 = Account2("홍길동", "1990/3/1", 4000)
    val account3 = Account2("홍길동", "1990/3/1")
    // 현재 입금 된 금액 1000
    println(account3.checkBalance())
    // 기존 입금 된 금액 1000 + 지금 추가 된 금액 1000 = 2000
    println(account3.save(1000))
    // 위에 입금 된 총 금액 2000원 출금
    println(account3.withdraw(2000))
    //다시 현재 금액 확인
    println(account3.checkBalance())

}

// 이행 계좌 만들기
// 계좌 생성 기능 (이름, 생년월일, 초기금액)
// 잔고를 확인하는 기능
// 출금 기능
// 예금 기능

// val : 한번 선언하면 변경 못하는 변수
// var : 언제든지 변경 가능 한 변수

//class Account(val name: String, val birth: String, var balance: Int) {
class Account() {

    var name: String = ""
    var birth: String = ""
    var balance: Int = 0

    constructor(name: String, birth: String, balance: Int) : this() {
        this.name = name
        this.birth = birth
        // 미리 함수 호출 전 입금 금액이 음수일 경우 예외 처리
        if (balance >= 0) {
            this.balance = balance
        } else {
            this.balance = 0
        }
    }

    fun checkBalance(): Int {
        return balance
    }

    // 출금기능
    fun withdraw(amount: Int): Int {
        //초기 금액보다 들어오는 금액이 높은지 체크하여 출금해주기
        if (balance >= amount) {
            //현재 금액이 출금할려는 금액 이상일 경우 출금
            balance -= amount
            return balance
//            return true
        } else {
            // 그 외에는 그냥 0
//            return false
            return 0
        }
    }

    // 저축 기능
    fun save(amount: Int): Int {
        balance += amount

        return balance
    }
}

class Account2(val name: String, val birth: String, var balance: Int = 1000) {
    fun checkBalance(): Int {
        return balance
    }

    // 출금기능
//    fun withdraw(amount: Int): Boolean {
    fun withdraw(amount: Int): Int {
        //초기 금액보다 들어오는 금액이 높은지 체크하여 출금해주기
        if (balance >= amount) {
            //현재 금액이 출금할려는 금액 이상일 경우 출금
            balance -= amount
            return balance
//            return true
        } else {
            // 그 외에는 그냥 0
//            return false
            return 0
        }
    }

    // 저축 기능
    fun save(amount: Int): Int {
        balance += amount

        return balance
    }
}

class Account3(initialBalance: Int){

    val balance : Int = if(initialBalance >= 0) initialBalance else 0

    fun checkBalance():Int{
        return balance
    }
}