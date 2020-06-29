package com.example.myapplication.Kotlin

// 23. 접근 제어자

fun main(array: Array<String>) {
    val testaccess :TestAccess = TestAccess("아무개")
//    아래 주석처리 된 내용은 private 으로 설정되어있기 때문에 호출해도 사용 불가(error 노출)
//    testaccess.test()
//    println(testaccess.name)
//    testaccess.name = "아무개얍"
//    println(testaccess.name)

    println()

    val reward :Reward = Reward()
    println(reward.change_name(5000))
}

class Reward(){
    // 같은 클래스내에서만 접근 가능하다, 외부에서는 변경 불가
    // 내부에서만 사용하기 위해 private 함수 및 변수 사용
    private var rewardAmount:Int = 1000

    fun change_name(newName:Int):Int{
        rewardAmount = newName
        return rewardAmount
    }
}

class TestAccess() {
    private var name: String = "홍길동"

    constructor(name: String) : this() {
        this.name = name
    }

    private fun test(){
        println("테스트")
    }
}