package com.example.myapplication.Kotlin

// 27. Interface
// - 인터페이스는 약속 !
// 상속 : 상속 받을 경우 상속 받은 클래스의 함수를 사용
// 인터페이스 : 다른 클래스를 구현하게 되면 무조건 안에있는 함수를 반드시 구현해줘야 한다
// -> 생성자가 없다, 인스턴스화 할 수 없다
// -> 지침서, 이것을 구현하고 싶다면 반드시 아래 기능을 구현해야 한다
// -> interface를 사용하면 interface 안에 있는 함수를 반드시 사용해야만 한다

// 상속과 다른점
// - 상속은 조상을 찾아가는 느낌
// - 인터페이스는 종의 특징

fun main(array:Array<String>){
    val student_ : Student_ = Student_()
    val soccerplay : SoccerPlay = SoccerPlay()
    student_.eat()
    student_.sleep()

    println()

    soccerplay.eat()
    soccerplay.sleep()
}

interface Person_ {
    fun eat()
    fun sleep()
}

// 인터페이시를 구현하기 위한 클래스
class Student_() : Person_ {
    // 아래 오버라이드 부분을 추가하지 않으면 에러
    override fun eat() {
        println("학생이 먹다")
    }

    override fun sleep() {
        println("학생이 자다")
    }
}

// 인터페이시를 구현하기 위한 클래스
class SoccerPlay : Person_{
    // 아래 오버라이드 부분을 추가하지 않으면 에러
    override fun eat() {
        println("축구선수가 먹다")
    }

    override fun sleep() {
        println("축구선수가 자다")
    }
}

open class Person(){
    open fun eat(){

    }

    fun sleep(){

    }
}

class Student() : Person(){
    override fun eat() {
        super.eat()
    }
}

class Teacher() : Person(){

}