package com.example.myapplication.Kotlin

fun main(array: Array<String>) {
    // 산술 연산자
    var a = 10 + 1 // 11
    var b = 10 - 1 // 9
    var c = 1 * 9 // 9
    var d = 20 / 3 // 6
    var e = 20 % 3 // 2

    println(a)
    println(b)
    println(c)
    println(d)
    println(e)

    // 대입 연산자
    val f = 5
//    val 5 = f

    println()

    // 복합 대입 연산자
    a += 10 // 21
    b -= 10 // -1
    c *= 3 // 27
    d /= 4 // 1
    e %= 2 // 0
    println(a)
    println(b)
    println(c)
    println(d)
    println(e)

    println()
    // 증감 연산자
    a++
    b--
    println(a) // 22
    println(b) // -2

    println()
    // 비교 연산자
    var g = a > b // 22 > -2 = true
    var h = a >= b // 22 >= -2 = true
    var i = a == b // 22 == -2 = false
    var l = i != h // false != true = true

    println(g)
    println(h)
    println(i)
    println(l)

    println()
    // 논리 연산자
    var j = h && i // false
    var k = h || i // true
    //    var j = !i // !{변수} 는 boolean만 반대로 변경해주는 것 ex)true일 때 false로
    println(j)
    println(k)
}