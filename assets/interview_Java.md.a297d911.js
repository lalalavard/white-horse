import{_ as e,o as a,c as t,d as r}from"./app.319e7c98.js";const p=JSON.parse('{"title":"Java","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Java \u6570\u636E\u7C7B\u578B","slug":"_1-java-\u6570\u636E\u7C7B\u578B"},{"level":2,"title":"2. \u7C7B\u578B\u8F6C\u6362","slug":"_2-\u7C7B\u578B\u8F6C\u6362"},{"level":2,"title":"3. equal \u548C == \u7684\u533A\u522B","slug":"_3-equal-\u548C-\u7684\u533A\u522B"},{"level":2,"title":"4. \u7C7B\u578B\u8F6C\u6362","slug":"_4-\u7C7B\u578B\u8F6C\u6362"},{"level":2,"title":"5. IO \u64CD\u4F5C","slug":"_5-io-\u64CD\u4F5C"},{"level":2,"title":"6. \u6CDB\u578B","slug":"_6-\u6CDB\u578B"},{"level":2,"title":"7. \u4EC0\u4E48\u662F\u6CE8\u89E3","slug":"_7-\u4EC0\u4E48\u662F\u6CE8\u89E3"},{"level":2,"title":"8. \u4EC0\u4E48\u662F\u53CD\u5C04","slug":"_8-\u4EC0\u4E48\u662F\u53CD\u5C04"},{"level":2,"title":"9. \u4EC0\u4E48\u662F\u539F\u6279","slug":"_9-\u4EC0\u4E48\u662F\u539F\u6279"},{"level":2,"title":"\u672A\u5B8C\u5F85\u7EED...","slug":"\u672A\u5B8C\u5F85\u7EED"}],"relativePath":"interview/Java.md"}'),i={name:"interview/Java.md"},s=r('<h1 id="java" tabindex="-1">Java <a class="header-anchor" href="#java" aria-hidden="true">#</a></h1><blockquote><p>\u8FD8\u672A\u5B8C\u6210~ \u5F85\u5F52\u7EB3\u603B\u7ED3</p></blockquote><h2 id="_1-java-\u6570\u636E\u7C7B\u578B" tabindex="-1">1. Java \u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#_1-java-\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><h2 id="_2-\u7C7B\u578B\u8F6C\u6362" tabindex="-1">2. \u7C7B\u578B\u8F6C\u6362 <a class="header-anchor" href="#_2-\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a></h2><h2 id="_3-equal-\u548C-\u7684\u533A\u522B" tabindex="-1">3. <code>equal</code> \u548C == \u7684\u533A\u522B <a class="header-anchor" href="#_3-equal-\u548C-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><h2 id="_4-\u7C7B\u578B\u8F6C\u6362" tabindex="-1">4. \u7C7B\u578B\u8F6C\u6362 <a class="header-anchor" href="#_4-\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a></h2><h2 id="_5-io-\u64CD\u4F5C" tabindex="-1">5. IO \u64CD\u4F5C <a class="header-anchor" href="#_5-io-\u64CD\u4F5C" aria-hidden="true">#</a></h2><h2 id="_6-\u6CDB\u578B" tabindex="-1">6. \u6CDB\u578B <a class="header-anchor" href="#_6-\u6CDB\u578B" aria-hidden="true">#</a></h2><h2 id="_7-\u4EC0\u4E48\u662F\u6CE8\u89E3" tabindex="-1">7. \u4EC0\u4E48\u662F\u6CE8\u89E3 <a class="header-anchor" href="#_7-\u4EC0\u4E48\u662F\u6CE8\u89E3" aria-hidden="true">#</a></h2><h2 id="_8-\u4EC0\u4E48\u662F\u53CD\u5C04" tabindex="-1">8. \u4EC0\u4E48\u662F\u53CD\u5C04 <a class="header-anchor" href="#_8-\u4EC0\u4E48\u662F\u53CD\u5C04" aria-hidden="true">#</a></h2><h2 id="_9-\u4EC0\u4E48\u662F\u539F\u6279" tabindex="-1">9. \u4EC0\u4E48\u662F\u539F\u6279 <a class="header-anchor" href="#_9-\u4EC0\u4E48\u662F\u539F\u6279" aria-hidden="true">#</a></h2><hr><hr><p>1.\u4E00\u4E2A&quot;.java&quot;\u6E90\u6587\u4EF6\u4E2D\u662F\u5426\u53EF\u4EE5\u5305\u62EC\u591A\u4E2A\u7C7B\uFF08\u4E0D\u662F\u5185\u90E8\u7C7B\uFF09\uFF1F\u6709\u4EC0\u4E48\u9650\u5236\uFF1F 2.Java \u6709\u6CA1\u6709 goto? 3.\u8BF4\u8BF4&amp;\u548C&amp;&amp;\u7684\u533A\u522B 4.\u5728 JAVA \u4E2D\u5982\u4F55\u8DF3\u51FA\u5F53\u524D\u7684\u591A\u91CD\u5D4C\u5957\u5FAA\u73AF\uFF1F 5.switch \u8BED\u53E5\u80FD\u5426\u4F5C\u7528\u5728 byte \u4E0A\uFF0C\u80FD\u5426\u4F5C\u7528\u5728 long \u4E0A\uFF0C\u80FD\u5426\u4F5C\u7528\u5728 String \u4E0A? 6.short s1 = 1; s1 = s1 + 1;\u6709\u4EC0\u4E48\u9519? short s1 = 1; s1 += 1;\u6709\u4EC0\u4E48\u9519? 7.char \u578B\u53D8\u91CF\u4E2D\u80FD\u4E0D\u80FD\u5B58\u8D2E\u4E00\u4E2A\u4E2D\u6587\u6C49\u5B57?\u4E3A\u4EC0\u4E48? 8.\u7528\u6700\u6709\u6548\u7387\u7684\u65B9\u6CD5\u7B97\u51FA 2 \u4E58\u4EE5 8 \u7B49\u4E8E\u51E0? 9.\u8BF7\u8BBE\u8BA1\u4E00\u4E2A\u4E00\u767E\u4EBF\u7684\u8BA1\u7B97\u5668 10.\u4F7F\u7528 final \u5173\u952E\u5B57\u4FEE\u9970\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u662F\u5F15\u7528\u4E0D\u80FD\u53D8\uFF0C\u8FD8\u662F\u5F15\u7528\u7684\u5BF9\u8C61\u4E0D\u80FD\u53D8\uFF1F 11.&quot;==&quot;\u548C equals \u65B9\u6CD5\u7A76\u7ADF\u6709\u4EC0\u4E48\u533A\u522B\uFF1F 12.\u9759\u6001\u53D8\u91CF\u548C\u5B9E\u4F8B\u53D8\u91CF\u7684\u533A\u522B\uFF1F 13.\u662F\u5426\u53EF\u4EE5\u4ECE\u4E00\u4E2A static \u65B9\u6CD5\u5185\u90E8\u53D1\u51FA\u5BF9\u975E static \u65B9\u6CD5\u7684\u8C03\u7528\uFF1F 14.Integer \u4E0E int \u7684\u533A\u522B 15.Math.round(11.5)\u7B49\u4E8E\u591A\u5C11? Math.round(-11.5)\u7B49\u4E8E\u591A\u5C11? 16.\u8BF7\u8BF4\u51FA\u4F5C\u7528\u57DF public\uFF0Cprivate\uFF0Cprotected\uFF0C\u4EE5\u53CA\u4E0D\u5199\u65F6\u7684\u533A\u522B 17.Overload \u548C Override \u7684\u533A\u522B\u3002Overloaded \u7684\u65B9\u6CD5\u662F\u5426\u53EF\u4EE5\u6539\u53D8\u8FD4\u56DE\u503C\u7684\u7C7B\u578B? 18.\u6784\u9020\u5668 Constructor \u662F\u5426\u53EF\u88AB override? 19.\u63A5\u53E3\u662F\u5426\u53EF\u7EE7\u627F\u63A5\u53E3? \u62BD\u8C61\u7C7B\u662F\u5426\u53EF\u5B9E\u73B0(implements)\u63A5\u53E3? \u62BD\u8C61\u7C7B\u662F\u5426\u53EF\u7EE7\u627F\u5177\u4F53\u7C7B(concrete class)? \u62BD\u8C61\u7C7B\u4E2D\u662F\u5426\u53EF\u4EE5\u6709\u9759\u6001\u7684 main \u65B9\u6CD5\uFF1F 20.\u5199 clone()\u65B9\u6CD5\u65F6\uFF0C\u901A\u5E38\u90FD\u6709\u4E00\u884C\u4EE3\u7801\uFF0C\u662F\u4EC0\u4E48\uFF1F 21.\u9762\u5411\u5BF9\u8C61\u7684\u7279\u5F81\u6709\u54EA\u4E9B\u65B9\u9762 22.java \u4E2D\u5B9E\u73B0\u591A\u6001\u7684\u673A\u5236\u662F\u4EC0\u4E48\uFF1F 23.abstract class \u548C interface \u6709\u4EC0\u4E48\u533A\u522B? 24.abstract \u7684 method \u662F\u5426\u53EF\u540C\u65F6\u662F static,\u662F\u5426\u53EF\u540C\u65F6\u662F native\uFF0C\u662F\u5426\u53EF\u540C\u65F6\u662F synchronized? 25.\u4EC0\u4E48\u662F\u5185\u90E8\u7C7B\uFF1FStatic Nested Class \u548C Inner Class \u7684\u4E0D\u540C\u3002 26.\u5185\u90E8\u7C7B\u53EF\u4EE5\u5F15\u7528\u5B83\u7684\u5305\u542B\u7C7B\u7684\u6210\u5458\u5417\uFF1F\u6709\u6CA1\u6709\u4EC0\u4E48\u9650\u5236\uFF1F 27.Anonymous Inner Class (\u533F\u540D\u5185\u90E8\u7C7B) \u662F\u5426\u53EF\u4EE5 extends(\u7EE7\u627F)\u5176\u5B83\u7C7B\uFF0C\u662F\u5426\u53EF\u4EE5 implements(\u5B9E\u73B0)interface(\u63A5\u53E3)? 28.super.getClass()\u65B9\u6CD5\u8C03\u7528 29.String \u662F\u6700\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\u5417? 30.String s = &quot;Hello&quot;;s = s + &quot; world!&quot;;\u8FD9\u4E24\u884C\u4EE3\u7801\u6267\u884C\u540E\uFF0C\u539F\u59CB\u7684 String \u5BF9\u8C61\u4E2D\u7684\u5185\u5BB9\u5230\u5E95\u53D8\u4E86\u6CA1\u6709\uFF1F 31.\u662F\u5426\u53EF\u4EE5\u7EE7\u627F String \u7C7B? 32.String s = new String(&quot;xyz&quot;);\u521B\u5EFA\u4E86\u51E0\u4E2A String Object? \u4E8C\u8005\u4E4B\u95F4\u6709\u4EC0\u4E48\u533A\u522B\uFF1F 33.String \u548C StringBuffer \u7684\u533A\u522B 34.\u5982\u4F55\u628A\u4E00\u6BB5\u9017\u53F7\u5206\u5272\u7684\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u4E00\u4E2A\u6570\u7EC4? 35.\u6570\u7EC4\u6709\u6CA1\u6709 length()\u8FD9\u4E2A\u65B9\u6CD5? String \u6709\u6CA1\u6709 length()\u8FD9\u4E2A\u65B9\u6CD5\uFF1F 36.\u4E0B\u9762\u8FD9\u6761\u8BED\u53E5\u4E00\u5171\u521B\u5EFA\u4E86\u591A\u5C11\u4E2A\u5BF9\u8C61? String s=&quot;a&quot;+&quot;b&quot;+&quot;c&quot;+&quot;d&quot;; 37.try {}\u91CC\u6709\u4E00\u4E2A return \u8BED\u53E5\uFF0C\u90A3\u4E48\u7D27\u8DDF\u5728\u8FD9\u4E2A try \u540E\u7684 finally {}\u91CC\u7684 code \u4F1A\u4E0D\u4F1A\u88AB\u6267\u884C\uFF0C\u4EC0\u4E48\u65F6\u5019\u88AB\u6267\u884C\uFF0C\u5728 return \u524D\u8FD8\u662F\u540E? 38.\u4E0B\u9762\u7684\u7A0B\u5E8F\u4EE3\u7801\u8F93\u51FA\u7684\u7ED3\u679C\u662F\u591A\u5C11\uFF1F 39.final, finally, finalize \u7684\u533A\u522B\u3002 40.\u8FD0\u884C\u65F6\u5F02\u5E38\u4E0E\u4E00\u822C\u5F02\u5E38\u6709\u4F55\u5F02\u540C\uFF1F 41.error \u548C exception \u6709\u4EC0\u4E48\u533A\u522B? 42.Java \u4E2D\u7684\u5F02\u5E38\u5904\u7406\u673A\u5236\u7684\u7B80\u5355\u539F\u7406\u548C\u5E94\u7528\u3002 43.\u8BF7\u5199\u51FA\u4F60\u6700\u5E38\u89C1\u5230\u7684 5 \u4E2A runtime exception\u3002 44.java \u4E2D\u6709\u51E0\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u7EBF\u7A0B\uFF1F\u7528\u4EC0\u4E48\u5173\u952E\u5B57\u4FEE\u9970\u540C\u6B65\u65B9\u6CD5? stop()\u548C suspend()\u65B9\u6CD5\u4E3A\u4F55\u4E0D\u63A8\u8350\u4F7F\u7528\uFF1F 45.sleep() \u548C wait() \u6709\u4EC0\u4E48\u533A\u522B? 46.\u540C\u6B65\u548C\u5F02\u6B65\u6709\u4F55\u5F02\u540C\uFF0C\u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B\u5206\u522B\u4F7F\u7528\u4ED6\u4EEC\uFF1F\u4E3E\u4F8B\u8BF4\u660E\u3002 47.\u591A\u7EBF\u7A0B\u6709\u51E0\u79CD\u5B9E\u73B0\u65B9\u6CD5?\u540C\u6B65\u6709\u51E0\u79CD\u5B9E\u73B0\u65B9\u6CD5? 48.\u542F\u52A8\u4E00\u4E2A\u7EBF\u7A0B\u662F\u7528 run()\u8FD8\u662F start()\uFF1F 49.\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u8FDB\u5165\u4E00\u4E2A\u5BF9\u8C61\u7684\u4E00\u4E2A synchronized \u65B9\u6CD5\u540E\uFF0C\u5176\u5B83\u7EBF\u7A0B\u662F\u5426\u53EF\u8FDB\u5165\u6B64\u5BF9\u8C61\u7684\u5176\u5B83\u65B9\u6CD5? 50.\u7EBF\u7A0B\u7684\u57FA\u672C\u6982\u5FF5\u3001\u7EBF\u7A0B\u7684\u57FA\u672C\u72B6\u6001\u4EE5\u53CA\u72B6\u6001\u4E4B\u95F4\u7684\u5173\u7CFB\u3002 51.\u7B80\u8FF0 synchronized \u548C java.util.concurrent.locks.Lock \u7684\u5F02\u540C \uFF1F 52.\u8BBE\u8BA1 4 \u4E2A\u7EBF\u7A0B\uFF0C\u5176\u4E2D\u4E24\u4E2A\u7EBF\u7A0B\u6BCF\u6B21\u5BF9 j \u589E\u52A0 1\uFF0C\u53E6\u5916\u4E24\u4E2A\u7EBF\u7A0B\u5BF9 j \u6BCF\u6B21\u51CF\u5C11 1\u3002\u5199\u51FA\u7A0B\u5E8F\u3002 53.\u5B50\u7EBF\u7A0B\u5FAA\u73AF 10 \u6B21\uFF0C\u63A5\u7740\u4E3B\u7EBF\u7A0B\u5FAA\u73AF 100\uFF0C\u63A5\u7740\u53C8\u56DE\u5230\u5B50\u7EBF\u7A0B\u5FAA\u73AF 10 \u6B21\uFF0C\u63A5\u7740\u518D\u56DE\u5230\u4E3B\u7EBF\u7A0B\u53C8\u5FAA\u73AF 100\uFF0C\u5982\u6B64\u5FAA\u73AF 50 \u6B21\uFF0C\u8BF7\u5199\u51FA\u7A0B\u5E8F\u3002 54.Collection \u6846\u67B6\u4E2D\u5B9E\u73B0\u6BD4\u8F83\u8981\u5B9E\u73B0\u4EC0\u4E48\u63A5\u53E3 55.ArrayList \u548C Vector \u7684\u533A\u522B 56.HashMap \u548C Hashtable \u7684\u533A\u522B 57.List \u548C Map \u533A\u522B? 58.List, Set, Map \u662F\u5426\u7EE7\u627F\u81EA Collection \u63A5\u53E3? 59.List\u3001Map\u3001Set \u4E09\u4E2A\u63A5\u53E3\uFF0C\u5B58\u53D6\u5143\u7D20\u65F6\uFF0C\u5404\u6709\u4EC0\u4E48\u7279\u70B9\uFF1F 60.\u8BF4\u51FA ArrayList,Vector, LinkedList \u7684\u5B58\u50A8\u6027\u80FD\u548C\u7279\u6027 61.\u53BB\u6389\u4E00\u4E2A Vector \u96C6\u5408\u4E2D\u91CD\u590D\u7684\u5143\u7D20 62.Collection \u548C Collections \u7684\u533A\u522B\u3002 63.Set \u91CC\u7684\u5143\u7D20\u662F\u4E0D\u80FD\u91CD\u590D\u7684\uFF0C\u90A3\u4E48\u7528\u4EC0\u4E48\u65B9\u6CD5\u6765\u533A\u5206\u91CD\u590D\u4E0E\u5426\u5462? \u662F\u7528==\u8FD8\u662F equals()? \u5B83\u4EEC\u6709\u4F55\u533A\u522B? 64.\u4F60\u6240\u77E5\u9053\u7684\u96C6\u5408\u7C7B\u90FD\u6709\u54EA\u4E9B\uFF1F\u4E3B\u8981\u65B9\u6CD5\uFF1F 65.\u4E24\u4E2A\u5BF9\u8C61\u503C\u76F8\u540C(x.equals(y) == true)\uFF0C\u4F46\u5374\u53EF\u6709\u4E0D\u540C\u7684 hash code\uFF0C\u8FD9\u53E5\u8BDD\u5BF9\u4E0D\u5BF9? 66.TreeSet \u91CC\u9762\u653E\u5BF9\u8C61\uFF0C\u5982\u679C\u540C\u65F6\u653E\u5165\u4E86\u7236\u7C7B\u548C\u5B50\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u90A3\u6BD4\u8F83\u65F6\u4F7F\u7528\u7684\u662F\u7236\u7C7B\u7684 compareTo \u65B9\u6CD5\uFF0C\u8FD8\u662F\u4F7F\u7528\u7684\u5B50\u7C7B\u7684 compareTo \u65B9\u6CD5\uFF0C\u8FD8\u662F\u629B\u5F02\u5E38\uFF01 67.\u8BF4\u51FA\u4E00\u4E9B\u5E38\u7528\u7684\u7C7B\uFF0C\u5305\uFF0C\u63A5\u53E3\uFF0C\u8BF7\u5404\u4E3E 5 \u4E2A\u3002 68.java \u4E2D\u6709\u51E0\u79CD\u7C7B\u578B\u7684\u6D41\uFF1FJDK \u4E3A\u6BCF\u79CD\u7C7B\u578B\u7684\u6D41\u63D0\u4F9B\u4E86\u4E00\u4E9B\u62BD\u8C61\u7C7B\u4EE5\u4F9B\u7EE7\u627F\uFF0C\u8BF7\u8BF4\u51FA\u4ED6\u4EEC\u5206\u522B\u662F\u54EA\u4E9B\u7C7B\uFF1F 69.\u5B57\u8282\u6D41\u4E0E\u5B57\u7B26\u6D41\u7684\u533A\u522B 70.\u4EC0\u4E48\u662F java \u5E8F\u5217\u5316\uFF0C\u5982\u4F55\u5B9E\u73B0 java \u5E8F\u5217\u5316\uFF1F\u6216\u8005\u8BF7\u89E3\u91CA Serializable \u63A5\u53E3\u7684\u4F5C\u7528\u3002 71.\u63CF\u8FF0\u4E00\u4E0B JVM \u52A0\u8F7D class \u6587\u4EF6\u7684\u539F\u7406\u673A\u5236? 72.heap \u548C stack \u6709\u4EC0\u4E48\u533A\u522B\u3002 73.GC \u662F\u4EC0\u4E48? \u4E3A\u4EC0\u4E48\u8981\u6709 GC? 74.\u5783\u573E\u56DE\u6536\u7684\u4F18\u70B9\u548C\u539F\u7406\u3002\u5E76\u8003\u8651 2 \u79CD\u56DE\u6536\u673A\u5236\u3002 75.\u5783\u573E\u56DE\u6536\u5668\u7684\u57FA\u672C\u539F\u7406\u662F\u4EC0\u4E48\uFF1F\u5783\u573E\u56DE\u6536\u5668\u53EF\u4EE5\u9A6C\u4E0A\u56DE\u6536\u5185\u5B58\u5417\uFF1F\u6709\u4EC0\u4E48\u529E\u6CD5\u4E3B\u52A8\u901A\u77E5\u865A\u62DF\u673A\u8FDB\u884C\u5783\u573E\u56DE\u6536\uFF1F 76.\u4EC0\u4E48\u65F6\u5019\u7528 assert\u3002 77.java \u4E2D\u4F1A\u5B58\u5728\u5185\u5B58\u6CC4\u6F0F\u5417\uFF0C\u8BF7\u7B80\u5355\u63CF\u8FF0\u3002 78.\u80FD\u4E0D\u80FD\u81EA\u5DF1\u5199\u4E2A\u7C7B\uFF0C\u4E5F\u53EB java.lang.String\uFF1F 79.\u83B7\u5F97\u4E00\u4E2A\u7C7B\u7684\u7C7B\u5BF9\u8C61\u6709\u54EA\u4E9B\u65B9\u5F0F\uFF1F 80.Java \u4EE3\u7801\u67E5\u9519</p><h2 id="\u672A\u5B8C\u5F85\u7EED" tabindex="-1">\u672A\u5B8C\u5F85\u7EED... <a class="header-anchor" href="#\u672A\u5B8C\u5F85\u7EED" aria-hidden="true">#</a></h2>',15),n=[s];function l(o,d,h,c,u,_){return a(),t("div",null,n)}var g=e(i,[["render",l]]);export{p as __pageData,g as default};
