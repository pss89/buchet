package com.example.myapplication.Kotlin

// 변수의 접근 범위
// 1. 전역변수
// 아래에서는 number100이 전역변수
// 2. 지역변수
// 아래에서는 name이 지역변수
// 지역변수는 클래스, 함수 내부에서 활용하는것에 따라 다르게 사용 된다
var number100: Int = 10

fun main(array:Array<String>){
    println(number100)

    val test = Test("얍")
    test.testFun()
    println(test.name)
    println(number100)
}

class Test(var name:String){
    fun testFun(){
        val birth:String = "2000/3/1"
        name = "홍길동"
        number100 = 100
    }
    
    fun testFun2(){
        name = "얍얍이"
        
    }
}