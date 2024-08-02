const e=JSON.parse('{"key":"v-b019e2e8","path":"/Java/jvm/part1/3.%E8%BF%90%E8%A1%8C%E6%97%B6%E6%95%B0%E6%8D%AE%E5%8C%BA.html","title":"运行时数据区","lang":"zh-CN","frontmatter":{"order":3,"title":"运行时数据区","category":["JVM"],"tag":["JVM上篇"],"description":"[toc] 【重点内容】虚拟机栈、堆、方法区 内存 内存是非常重要的系统资源，是硬盘和CPU的中间仓库及桥梁，承载着操作系统和应用程序的实时运行。JVM内存布局规定了Java在运行过程中内存申请、分配、管理的策略，保证了JVM的高效稳定运行。不同的JVM对于内存的划分方式和管理机制存在着部分差异。结合JVM虚拟机规范，来探讨一下经典的JVM内存布局 i...","head":[["meta",{"property":"og:url","content":"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/Java/jvm/part1/3.%E8%BF%90%E8%A1%8C%E6%97%B6%E6%95%B0%E6%8D%AE%E5%8C%BA.html"}],["meta",{"property":"og:site_name","content":"CSLN"}],["meta",{"property":"og:title","content":"运行时数据区"}],["meta",{"property":"og:description","content":"[toc] 【重点内容】虚拟机栈、堆、方法区 内存 内存是非常重要的系统资源，是硬盘和CPU的中间仓库及桥梁，承载着操作系统和应用程序的实时运行。JVM内存布局规定了Java在运行过程中内存申请、分配、管理的策略，保证了JVM的高效稳定运行。不同的JVM对于内存的划分方式和管理机制存在着部分差异。结合JVM虚拟机规范，来探讨一下经典的JVM内存布局 i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-02T07:02:59.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"运行时数据区"}],["meta",{"property":"article:author","content":"zhiyu1998"}],["meta",{"property":"article:tag","content":"JVM上篇"}],["meta",{"property":"article:modified_time","content":"2023-07-02T07:02:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"运行时数据区\\",\\"image\\":[\\"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/\\"],\\"dateModified\\":\\"2023-07-02T07:02:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zhiyu1998\\",\\"url\\":\\"https://github.com/zhiyu1998\\"}]}"]]},"headers":[{"level":2,"title":"内存","slug":"内存","link":"#内存","children":[]},{"level":2,"title":"内存空间","slug":"内存空间","link":"#内存空间","children":[]},{"level":2,"title":"Runtime类","slug":"runtime类","link":"#runtime类","children":[]},{"level":2,"title":"线程","slug":"线程","link":"#线程","children":[{"level":3,"title":"JVM线程","slug":"jvm线程","link":"#jvm线程","children":[]},{"level":3,"title":"【了解】JVM系统线程","slug":"【了解】jvm系统线程","link":"#【了解】jvm系统线程","children":[]}]}],"git":{"createdTime":1680621124000,"updatedTime":1688281379000,"contributors":[{"name":"RrOrange","email":"542716863@qq.com","commits":2}]},"readingTime":{"minutes":3.18,"words":953},"filePathRelative":"Java/jvm/part1/3.运行时数据区.md","localizedDate":"2023年4月4日","autoDesc":true,"excerpt":""}');export{e as data};
