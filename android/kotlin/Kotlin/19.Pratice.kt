package com.example.myapplication.Kotlin

fun main(array: Array<String>) {
    val calc1 = Calc1()

    println(calc1.plus(20, 20))
    println(calc1.minus(5, 1))
    println(calc1.multiply(10, 10))
    println(calc1.divide(50, 5))

    println()

    val calc2 = Calc2()

    println(calc2.plus(1, 2, 3, 4, 5))
    println(calc2.minus(10, 1, 2, 3))
    println(calc2.multiply(1, 2, 3))
    println(calc2.divide(10, 2, 3))

    println()

    // 처음에는 3, 그 이후에는 3+5가 되었기 떄문에 다음에 호출 하는 함수는 8 - 5 이런식으로 처리 됨
    // Chaining (체이닝)
    val calc3 = Calc3(3)
    println(calc3.plus(5).minus(5).multiply(7).divide(2).initialValue)
    println(calc3.plus(5).initialValue)
    println(calc3.minus(5).initialValue)
    println(calc3.multiply(7).initialValue)
    println(calc3.divide(2).initialValue)

}

// 사칙 연산 클래스 1
class Calc1() {
    fun plus(first_num: Int, second_num: Int): Int {
//        var result = first_num + second_num
//
//        println("$first_num + $second_num = $result")
        return first_num + second_num
    }

    fun multiply(first_num: Int, second_num: Int): Int {
//        var result = first_num * second_num
//
//        println("$first_num * $second_num = $result")
        return first_num * second_num
    }

    fun divide(first_num: Int, second_num: Int): Int {
//        var result = first_num / second_num
//
//        println("$first_num / $second_num = $result")
        return first_num / second_num
    }

    fun minus(first_num: Int, second_num: Int): Int {
//        var result = first_num - second_num
//
//        println("$first_num - $second_num = $result")
        return first_num - second_num
    }
}

// 사칙연산 클래스 2
class Calc2 {
    fun plus(vararg numbers: Int): Int { //1,2,3
        var result: Int = 0
        numbers.forEach {
            result = result + it
        }
        return result
    }

    fun minus(vararg numbers: Int): Int {
        var result: Int = numbers[0]
        for (i in 0 until numbers.size) {
            if (i != 0) {
                result = result - numbers[i]
            }
        }
        return result
    }

    fun multiply(vararg numbers: Int): Int {
        var result: Int = 1
        numbers.forEach {
            if (it != 0) {
                result = result * it
            }
        }
        return result
    }

    fun divide(vararg numbers: Int): Int {
        var result: Int = numbers[0]
        numbers.forEachIndexed { index, value ->
            if (index != 0 && value != 0) {
                result = result / value
            }
        }
        return result
    }
}

// 사칙연산 클래스 3
class Calc3(val initialValue: Int) {

    fun plus(number: Int): Calc3 {
        val result = this.initialValue + number

        return Calc3(result)
    }

    fun minus(number: Int): Calc3 {
        val result = this.initialValue - number
        return Calc3(result)
    }

    fun multiply(number: Int): Calc3 {
        val result = this.initialValue * number
        return Calc3(result)
    }

    fun divide(number: Int): Calc3 {
        val result = this.initialValue / number
        return Calc3(result)
    }
}



