package com.example.myapplication.Kotlin

fun main(args:Array<String>){
    var a : Int? = null
    var b: Int = 10
    var c: Int = 100

    if (a == null){
        println("a is null")
    } else {
        println("a is not null")
    }

    if (b + 10 == 110){
        println("b plus c equal 110")
    } else {
        println("b plus c is not 110")
    }

    // 엘비스 연산자
    // 해당 변수가 null일 경우 예외처리 할 수 있는 연산자
    val number : Int? = null //null로 초기화
    val number2 = number ?: 10 //number 변수가 null일 경우 number2는 10으로 초기화

    println()
    println(number2)

    val num1 : Int = 10
    val num2 : Int = 20

    val max = if(num1 > num2){
        num1
    } else if(num1 == num2){
        num2
    } else {
        30
    }

    println()
    println(max)
}