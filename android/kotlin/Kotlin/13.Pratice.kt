package com.example.myapplication.Kotlin

fun main(array: Array<String>) {
    val array = arrayOf<Int>(1, 2, 3)

    // get, set
    val number = array.get(0)
    println(number)

    array.set(0, 100)
    val number2 = array.get(0)
    println(number2)

    // array 의 bounds
    // - 처음 만들 때 결정 된다

    // Array를 만드는 방법(3)
    // 명시적으로 배열을 생성하는 것이 좋다
    val a1 = intArrayOf(1, 2, 3)
    // Char -> '' , String -> ""
    val a2 = charArrayOf('B', 'C')
    val a3 = doubleArrayOf(1.2, 100.345)
    val a4 = booleanArrayOf(true, false, true)

    // Array를 만드는 방법(4) -> lambda 를 활용한 방법
    var a5 = Array(10, { 0 })
    var a6 = Array(5, { 1;2;3;4;5 })
}