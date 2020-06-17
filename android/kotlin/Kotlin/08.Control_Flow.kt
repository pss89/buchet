package com.example.myapplication.Kotlin

//08. 제어흐름

fun main(args: Array<String>) {
    val a: Int = 10
    val b: Int = 5

    // if else 방법 1
    if (a > b) {
        println("a 가 b 보다 크다")
    } else {
        println("a 가 b 보다 작다")
    }

    // if else 방법 2
    if (a > b) {
        println("a가 b보다 크다")
    }

    // if else else if 방법 1
    if (a > b) {
        println("a 가 b 보다 크다")
    } else if (a < b) {
        println("a 가 b 보다 작다")
    } else {
        println("둘이 같아")
    }

    // 값을 리턴하는 if 사용 방법
//    var max = if (a > b) {
//        a
//    } else {
//        b
//    }

    var max = if (a > b) a else b
    println()
    println(max)
}