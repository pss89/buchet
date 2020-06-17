package com.example.myapplication.Kotlin

//11 .제어흐름 실습

fun main(args: Array<String>) {
    val value: Int? = null

    when (value) {
        null -> println("value is null")
        else -> println("value is not null")
    }

    // null 을 가질 수 있는 boolean
    val value2: Boolean? = null

    // when 구문은 조건으로 갖는 값의 모든 경우에 대응 해주는것이 좋다
    when (value2) {
        true -> {
            println("true")
        }
        false -> {
            println("false")
        }
        null -> {
            println("null")
        }
    }

    // val 변수에 when, if 등을 사용하여 저장 할 경우 모든 예외처리를 해서 담아야 한다.
    val value3 = when (value2) {
        true -> 1
        false -> 3
        null -> 4
    }
    println()
    println(value3)

    println()
    // when의 다양한 조건식
    val value4: Int = 10
    when (value4) {
        is Int -> {
            println("value4 is Int")
        }
        else -> {
            println("value4 is not Int")
        }
    }

    println()
    // when의 다양한 조건식(2)
    val value5: Int = 87
    when (value5){
        in 60..70 ->println("value is in 60-70")
        in 70..80 ->println("value is in 70-80")
        in 80..90 ->println("value is in 80-90")
    }
}
