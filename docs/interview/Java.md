# Java

> 还未完成~ 待归纳总结

## 1. Java 数据类型

## 2. 类型转换

## 3. `equal` 和 == 的区别

## 4. 类型转换

## 5. IO 操作

## 6. 泛型

## 7. 什么是注解

## 8. 什么是反射

## 9. 什么是原批

---

<!-- # 多线程

## 1 如何打破线程池先放队列再扩容的逻辑，有什么框架实现了

## 2.synchronized 和 ReentranLock 区别

## 3.synchronized 如何实现等待唤醒

## 4. ReentranLock 用了 Unsafe 类的哪个方法 -->

---

1.一个".java"源文件中是否可以包括多个类（不是内部类）？有什么限制？
2.Java 有没有 goto? 3.说说&和&&的区别 4.在 JAVA 中如何跳出当前的多重嵌套循环？
5.switch 语句能否作用在 byte 上，能否作用在 long 上，能否作用在 String 上?
6.short s1 = 1; s1 = s1 + 1;有什么错? short s1 = 1; s1 += 1;有什么错?
7.char 型变量中能不能存贮一个中文汉字?为什么? 8.用最有效率的方法算出 2 乘以 8 等于几? 9.请设计一个一百亿的计算器 10.使用 final 关键字修饰一个变量时，是引用不能变，还是引用的对象不能变？
11."=="和 equals 方法究竟有什么区别？ 12.静态变量和实例变量的区别？ 13.是否可以从一个 static 方法内部发出对非 static 方法的调用？
14.Integer 与 int 的区别
15.Math.round(11.5)等于多少? Math.round(-11.5)等于多少? 16.请说出作用域 public，private，protected，以及不写时的区别
17.Overload 和 Override 的区别。Overloaded 的方法是否可以改变返回值的类型? 18.构造器 Constructor 是否可被 override? 19.接口是否可继承接口? 抽象类是否可实现(implements)接口? 抽象类是否可继承具体类(concrete class)? 抽象类中是否可以有静态的 main 方法？ 20.写 clone()方法时，通常都有一行代码，是什么？ 21.面向对象的特征有哪些方面
22.java 中实现多态的机制是什么？
23.abstract class 和 interface 有什么区别?
24.abstract 的 method 是否可同时是 static,是否可同时是 native，是否可同时是 synchronized? 25.什么是内部类？Static Nested Class 和 Inner Class 的不同。 26.内部类可以引用它的包含类的成员吗？有没有什么限制？
27.Anonymous Inner Class (匿名内部类) 是否可以 extends(继承)其它类，是否可以 implements(实现)interface(接口)?
28.super.getClass()方法调用
29.String 是最基本的数据类型吗?
30.String s = "Hello";s = s + " world!";这两行代码执行后，原始的 String 对象中的内容到底变了没有？ 31.是否可以继承 String 类?
32.String s = new String("xyz");创建了几个 String Object? 二者之间有什么区别？
33.String 和 StringBuffer 的区别 34.如何把一段逗号分割的字符串转换成一个数组? 35.数组有没有 length()这个方法? String 有没有 length()这个方法？ 36.下面这条语句一共创建了多少个对象? String s="a"+"b"+"c"+"d";
37.try {}里有一个 return 语句，那么紧跟在这个 try 后的 finally {}里的 code 会不会被执行，什么时候被执行，在 return 前还是后? 38.下面的程序代码输出的结果是多少？
39.final, finally, finalize 的区别。 40.运行时异常与一般异常有何异同？
41.error 和 exception 有什么区别?
42.Java 中的异常处理机制的简单原理和应用。 43.请写出你最常见到的 5 个 runtime exception。
44.java 中有几种方法可以实现一个线程？用什么关键字修饰同步方法? stop()和 suspend()方法为何不推荐使用？
45.sleep() 和 wait() 有什么区别? 46.同步和异步有何异同，在什么情况下分别使用他们？举例说明。 47.多线程有几种实现方法?同步有几种实现方法? 48.启动一个线程是用 run()还是 start()？ 49.当一个线程进入一个对象的一个 synchronized 方法后，其它线程是否可进入此对象的其它方法? 50.线程的基本概念、线程的基本状态以及状态之间的关系。 51.简述 synchronized 和 java.util.concurrent.locks.Lock 的异同 ？ 52.设计 4 个线程，其中两个线程每次对 j 增加 1，另外两个线程对 j 每次减少 1。写出程序。 53.子线程循环 10 次，接着主线程循环 100，接着又回到子线程循环 10 次，接着再回到主线程又循环 100，如此循环 50 次，请写出程序。
54.Collection 框架中实现比较要实现什么接口
55.ArrayList 和 Vector 的区别
56.HashMap 和 Hashtable 的区别
57.List 和 Map 区别?
58.List, Set, Map 是否继承自 Collection 接口?
59.List、Map、Set 三个接口，存取元素时，各有什么特点？ 60.说出 ArrayList,Vector, LinkedList 的存储性能和特性 61.去掉一个 Vector 集合中重复的元素
62.Collection 和 Collections 的区别。
63.Set 里的元素是不能重复的，那么用什么方法来区分重复与否呢? 是用==还是 equals()? 它们有何区别? 64.你所知道的集合类都有哪些？主要方法？ 65.两个对象值相同(x.equals(y) == true)，但却可有不同的 hash code，这句话对不对?
66.TreeSet 里面放对象，如果同时放入了父类和子类的实例对象，那比较时使用的是父类的 compareTo 方法，还是使用的子类的 compareTo 方法，还是抛异常！ 67.说出一些常用的类，包，接口，请各举 5 个。
68.java 中有几种类型的流？JDK 为每种类型的流提供了一些抽象类以供继承，请说出他们分别是哪些类？ 69.字节流与字符流的区别 70.什么是 java 序列化，如何实现 java 序列化？或者请解释 Serializable 接口的作用。 71.描述一下 JVM 加载 class 文件的原理机制?
72.heap 和 stack 有什么区别。
73.GC 是什么? 为什么要有 GC? 74.垃圾回收的优点和原理。并考虑 2 种回收机制。 75.垃圾回收器的基本原理是什么？垃圾回收器可以马上回收内存吗？有什么办法主动通知虚拟机进行垃圾回收？ 76.什么时候用 assert。
77.java 中会存在内存泄漏吗，请简单描述。 78.能不能自己写个类，也叫 java.lang.String？ 79.获得一个类的类对象有哪些方式？
80.Java 代码查错

## 未完待续...
