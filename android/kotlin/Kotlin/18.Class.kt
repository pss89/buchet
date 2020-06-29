package com.example.myapplication.Kotlin

// 18.Class

// OOP -> Object Oriented Programing (객체지향 프로그래밍)

// 객체란 뭘까?
// - 이름이 있는 모든 것


// 절차지향 프로그래밍
// - 코드를 위에서 부터 아래로 실행을 하면 문제가 해결된다!

// 객체지향 프로그래밍 문제 해결 방법
// - 객체를 만들어서, 객체에게 일을 시켜서 문제를 해결한다.
// - 선수, 심판, 경기장, 관중 -> 축구 게임

// 객체를 만드는 방법
// - 설명서가 있어야 합니다.

fun main(array: Array<String>) {
    // 클래스(설명서)를 통해서 실체를 만드는 방법
    // -> 인스턴스화 -> 인스턴스(객체)
    Car("v8 engine", "big")

    val bigCar = Car("v8 engine", "big")
    //우리가 만든 클래스(설명서)는 자료형이 된다
    val bigCar1: Car = Car("v8 engine", "big")
    val superCar: SuperCar = SuperCar("goot engine", "big", "white")

    val car1: Car1 = Car1("engine 2", "small")

    // 인스턴스가 가지고있는 기능을 사용하는 방법
    val runableCar: RunableCar = RunableCar("simple engine", "short body")

    // RunableCar.ride() -> 불가능
    // 클래스 내부에 있는 함수 호출
    runableCar.ride()
    runableCar.drive()
    runableCar.navi("부산")

    val runableCar2: RunableCar2 = RunableCar2("nice engine", "long body")
    // 클래스 내부에 있는 construct 안에 정의되어 있는 정보 가져오기
    println(runableCar2.body)
    println(runableCar2.engine)

    println()
    val testClass = TestClass()

    println(testClass.test(5))
//    println(testClass.test(5, 4))

}

// 클래스(설명서) 만드는 방법(1)
// 축약버전
class Car constructor(var engine: String, var body: String) {

}

// 클래스(설명서) 만드는 방법(2)
// 정석버전
class SuperCar {
    var engine: String
    var body: String
    var door: String

    constructor(engine: String, body: String, door: String) {
        // this = SuperCar
        this.engine = engine
        this.body = body
        this.door = door
    }
}

// 클래스(설명서) 만드는 방법(3) - 1번 방법의 확장
class Car1 constructor(var engine: String, var body: String) {
    var door: String = "default"

    // 생성자 ,필수값은 engine, body .. 추가 하면 좋은 항목은 door
    constructor(engine: String, body: String, door: String) : this(engine, body) {
        this.door = door
    }
}

// 클래스(설명서) 만드는 방법(4) - 2번 방법의 확장
class Car2 {
    var engine: String = ""
    var body: String = ""
    var door: String = ""

    constructor(engine: String, body: String) {
        this.engine = engine
        this.body = body
    }

    constructor(engine: String, body: String, door: String) {
        this.engine = engine
        this.body = body
        this.door = door
    }
}

class RunableCar(engine: String, body: String) {
    fun ride() {
        println("탑승 하였씁니다.")
    }

    fun drive() {
        println("달립니다.")
    }

    fun navi(destination: String) {
        println("$destination 으로 목적지가 설정되었습니다.")
    }
}

// RunableCar 클래스와 동일 한 이유
// 클래스 자체가 construct 이기 때문에 안에 정의해 놓은것과 같음
// 안에 표현 방식만 다를 뿐
class RunableCar2 {
    var engine: String
    var body: String

    constructor(engine: String, body: String) {
        this.engine = engine
        this.body = body
    }

    //객체를 만들때 가장 먼저 출력 되는 부분(가장 먼저 호출)
    //초기화 선언 할 떄 유용하다
    init {
        println("RunableCar2가 만들어 졌습니다.")
    }

    fun ride() {
        println("탑승 하였씁니다.")
    }

    fun drive() {
        println("달립니다.")
    }

    fun navi(destination: String) {
        println("$destination 으로 목적지가 설정되었습니다.")
    }
}

// 오버로딩
// 이름이 같아도 인자가 다르면 사용이 가능하다. (변수 X , 함수 O)
class TestClass() {

    fun test(a: Int) {
        println("up")
    }

    fun test(a: Int, b: Int) {
        println("down")
    }
}