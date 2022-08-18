
public class SingleObject {
    // 注意，私有化构造函数，外部不能new，只有内部能 new ！！！
    private SingleObject(){
    }
    // 唯一被 new 出来的对象
    private SingleObject instance = null
    // 唯一被 new 出来的对象
    public SingleObject getInstance(){
        if(instance == null){
            // 只 new 一次
            instance = new SingleObject()
        }
        return instance
    }

    // 对象方法
    public void login(username,password){
        System.out.printIn('login...')
    }
}

public class SingletonPatternDemo{
    public static void main(String[] args){
        // 不合法的构造函数
        // 编译时错误：构造 SingleObject() 是不可见的!!!
        // SingleObject object = new SingleObject()

        // 获取唯一可用的对象
        SingleObject object = SingleObject.getInstance()
        object.login()
    }
}