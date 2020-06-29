package com.example.myapplication.Kotlin

fun main(array: Array<String>) {
    val night = Night(10,5)
    val monster = Monster(5,3)

    night.attack(monster)
    monster.attack(night)
}

class Night(private var hp: Int, private var power: Int) {
    fun attack(monster: Monster) {
        monster.defence(power)
    }

    fun defence(damage: Int) {
        hp -= damage
        if (hp > 0) {
            heal()
            println("기사 현재 체력은 $hp 이다")
        } else {
            println("기사가 죽었습니다.")
        }
    }

    private fun heal() {
        hp += 3
    }
}

class Monster(private var hp: Int, private var power: Int) {
    fun attack(night: Night) {
        night.defence(power)
    }

    fun defence(damage: Int) {
        hp -= damage
        if (hp > 0) println("몬스터 현재 체력은 $hp 이다")
        else println("몬스터가 죽었습니다.")
    }
}