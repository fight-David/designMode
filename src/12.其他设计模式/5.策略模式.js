class User {
    constructor(type) {
        this.type = type
    }

    buy() {
        if (this.type === 'ordinary') {
            console.log('普通用户购买');
        } else if (this.type === 'member') {
            console.log('会员用户购买');
        } else if (this.type === 'vip') {
            console.log('vip 用户购买');
        }
    }
}

// test
let u1 = new User('ordinary')
u1.buy()
let u2 = new User('member')
u2.buy()
let u3 = new User('vip')
u3.buy()



class OrdinaryUser {
    buy() {
        console.log('普通用户购买');
    }
}
class Member {
    buy() {
        console.log('会员用户购买');
    }
}
class VipUser {
    buy() {
        console.log('vip 用户购买');
    }
}

let us1 = new OrdinaryUser()
us1.buy()
let us2 = new Member()
us2.buy()
let us3 = new VipUser()
us3.buy()