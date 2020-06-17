package com.example.myapplication.Kotlin

// 10 제어 흐름

// when

fun main(args: Array<String>) {
    val value: Int = 3

    when (value) {
        1 -> println("1 일때 사용")
        2 -> println("2 일때 사용")
        3 -> println("3 일때 사용")
        else -> println("예외처리")
    }

    println()

    if (value == 1) println("1 일때 사용")
    else if (value == 2) println("2 일때 사용")
    else if (value == 3) println("3 일때 사용")
    else println("예외처리")

    val value2 = when (value) {
        1 -> 10
        2 -> 20
        3 -> 30
        else -> 100
    }

    println()
    println(value2)
}