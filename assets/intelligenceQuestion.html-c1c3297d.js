import{_ as i,W as a,X as n,a0 as p,a1 as e,Z as o,$ as B,C as A}from"./framework-c8643d23.js";const s="/Computer-Science-Learn-Notes/assets/image-20220626130705310-6ff93fbf.webp",g="/Computer-Science-Learn-Notes/assets/image-20220626130716212-8539c8ca.webp",r="/Computer-Science-Learn-Notes/assets/image-20220626130732424-4aa69098.webp",c="/Computer-Science-Learn-Notes/assets/image-20220626130742122-89e12f0a.webp",C={},l=p("h2",{id:"🙇‍♂️智力题",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#🙇‍♂️智力题","aria-hidden":"true"},"#"),e(" 🙇‍♂️智力题")],-1),D=p("h3",{id:"赛马找最快的马匹-高频题",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#赛马找最快的马匹-高频题","aria-hidden":"true"},"#"),e(" 赛马找最快的马匹（高频题）")],-1),_=p("p",null,"一般有这么几种问法：",-1),d=p("p",null,"25匹马5条跑道找最快的3匹马，需要跑几次？参考回答：7",-1),m=p("p",null,"64匹马8条跑道找最快的4匹马，需要跑几次？参考回答：11",-1),f=p("p",null,"25匹马5条跑道找最快的5匹马，需要跑几次？参考回答：最少8次最多9次",-1),E={href:"https://www.bilibili.com/video/BV1KJ411g78y",target:"_blank",rel:"noopener noreferrer"},u=B('<p>详细解法：</p><p><strong>1、25匹马5条跑道找最快的3匹马，需要跑几次？</strong></p><figure><img src="'+s+'" alt="image-20220626130705310" tabindex="0" loading="lazy"><figcaption>image-20220626130705310</figcaption></figure><p>将25匹马分成ABCDE5组，假设每组的排名就是A1&gt;A2&gt;A3&gt;A4&gt;A5,用边相连，这里比赛5次</p><p>第6次，每组的第一名进行比赛，可以找出最快的马，这里假设A1&gt;B1&gt;C1&gt;D1&gt;E1</p><p>D1，E1肯定进不了前3，直接排除掉</p><p>第7次，B1 C1 A2 B2 A3比赛，可以找出第二，第三名</p><p>所以最少比赛需要7次</p><p><strong>2、64匹马8条跑道找最快的4匹马，需要跑几次？</strong></p><p>第一步 全部马分为8组，每组8匹，每组各跑一次，然后淘汰掉每组的后四名，如下图（需要比赛8场）</p><figure><img src="'+g+'" alt="image-20220626130716212" tabindex="0" loading="lazy"><figcaption>image-20220626130716212</figcaption></figure><p>第二步 取每组第一名进行一次比赛，然后淘汰最后四名所在组的所有马，如下图（需要比赛1场）</p><figure><img src="'+r+'" alt="image-20220626130732424" tabindex="0" loading="lazy"><figcaption>image-20220626130732424</figcaption></figure><p>这个时候总冠军已经诞生，它就是A1，蓝域（它不需要比赛了）。</p><p>而其他可能跑得最快的三匹马只可能是下图中的黄域了（A2,A3,A4,B1,B2,B3,C1,C2,D1，共9匹马）</p><figure><img src="'+c+'" alt="image-20220626130742122" tabindex="0" loading="lazy"><figcaption>image-20220626130742122</figcaption></figure><p>第三步 只要从上面的9匹马中找出跑得最快的三匹马就可以了，但是现在只要8个跑道，怎么办？</p><p>那就随机选出8匹马进行一次比赛吧（需要比赛一场）</p><p>第四步 上面比赛完，选出了前三名，但是9匹马中还有一匹马没跑呢，它可能是一个潜力股啊，那就和前三名比一比吧，这四匹马比一场，选出前三名。最后加上总冠军，跑得最快的四匹马诞生了！！！（需要一场比赛）</p><p>最后，一共需要比赛的场次：8 + 1 + 1 + 1 = 11 场</p><p><strong>3、25匹马5条跑道找最快的5匹马，需要跑几次？</strong></p><p>(1) 首先将25匹马分成5组，并分别进行5场比赛之后得到的名次排列如下：</p><p>A组： [A1 A2 A3 A4 A5]</p><p>B组： [B1 B2 B3 B4 B5]</p><p>C组： [C1 C2 C3 C4 C5]</p><p>D组： [D1 D2 D3 D4 D5]</p><p>E组： [E1 E2 E3 E4 E5]</p><p>其中，每个小组最快的马为[A1、B1、C1、D1、E1]。</p><p>(2) 将[A1、B1、C1、D1、E1]进行第6场，选出第1名的马，不妨设 A1&gt;B1&gt;C1&gt;D1&gt;E1. 此时第1名的马为A1。</p><p>(3) 将[A2、B1、C1、D1、E1]进行第7场，此时选择出来的必定是第2名的马，不妨假设为B1。因为这5匹马是除去A1之外每个小组当前最快的马。</p><p>(3) 进行第8场，选择[A2、B2、C1、D1、E1]角逐出第3名的马。</p><p>(4) 依次类推，第9，10场可以分别决出第4，5名的吗。</p><p>因此，依照这种竞标赛排序思想，需要10场比赛是一定可以取出前5名的。</p><p><strong>仔细想一下，如果需要减少比赛场次，就一定需要在某一次比赛中同时决出2个名次，而且每一场比赛之后，有一些不可能进入前5名的马可以提前出局。</strong></p><p>当然要做到这一点，就必须小心选择每一场比赛的马匹。我们在上面的方法基础上进一步思考这个问题，希望能够得到解决。</p><p>(1) 首先利用5场比赛角逐出每个小组的排名次序是绝对必要的。</p><p>(2) 第6场比赛选出第1名的马也是必不可少的。假如仍然是A1马(A1&gt;B1&gt;C1&gt;D1&gt;E1)。那么此时我们可以得到一个重要的结论：有一些马在前6场比赛之后就决定出局的命运了(下面粉色字体标志出局)。</p><p>A组： [A1 A2 A3 A4 A5]</p><p>B组： [B1 B2 B3 B4 B5 ]</p><p>C组： [C1 C2 C3 C4 C5 ]</p><p>D组： [D1 D2 D3 D4 D5 ]</p><p>E组： [E1 E2 E3 E4 E5 ]</p><p>(3) 第7场比赛是关键，能否同时决出第2，3名的马呢？我们首先做下分析：</p><p>在上面的方法中，第7场比赛[A2、B1、C1、D1、E1]是为了决定第2名的马。但是在第6场比赛中我们已经得到(B1&gt;C1&gt;D1&gt;E1)，试问？有B1在的比赛，C1、D1、E1还有可能争夺第2名吗？ 当然不可能，也就是说第2名只能在A2、B1中出现。实际上只需要2条跑道就可以决出第2名，剩下C1、D1、E1的3条跑道都只能用来凑热闹的吗？</p><p>能够优化的关键出来了，我们是否能够通过剩下的3个跑道来决出第3名呢？当然可以，我们来进一步分析第3名的情况？</p><p>● 如果A2&gt;B1(即第2名为A2)，那么根据第6场比赛中的(B1&gt;C1&gt;D1&gt;E1)。 可以断定第3名只能在A3和B1中产生。</p><p>● 如果B1&gt;A2(即第2名为B1)，那么可以断定的第3名只能在A2, B2,C1 中产生。</p><p>好了，结论也出来了，只要我们把[A2、B1、A3、B2、C1]作为第7场比赛的马，那么这场比赛的第2，3名一定是整个25匹马中的第2，3名。</p><p>我们在这里列举出第7场的2，3名次的所有可能情况：</p><p>① 第2名=A2，第3名=A3</p><p>② 第2名=A2，第3名=B1</p><p>③ 第2名=B1，第3名=A2</p><p>④ 第2名=B1，第3名=B2</p><p>⑤ 第2名=B1，第3名=C1</p><p>(4) 第8场比赛很复杂，我们要根据第7场的所有可能的比赛情况进行分析。</p><p>① 第2名=A2，第3名=A3。那么此种情况下第4名只能在A4和B1中产生。</p><p>● 如果第4名=A4，那么第5名只能在A5、B1中产生。</p><p>● 如果第4名=B1，那么第5名只能在A4、B2、C1中产生。</p><p>不管结果如何，此种情况下，第4、5名都可以在第8场比赛中决出。其中比赛马匹为[A4、A5、B1、B2、C1]</p><p>② 第2名=A2，第3名=B1。那么此种情况下第4名只能在A3、B2、C1中产生。</p><p>● 如果第4名=A3，那么第5名只能在A4、B2、C1中产生。</p><p>● 如果第4名=B2，那么第5名只能在A3、B3、C1中产生。</p><p>● 如果第4名=C1，那么第5名只能在A3、B2、C2、D1中产生。</p><p>那么，第4、5名需要在马匹[A3、B2、B3、C1、A4、C2、D1]七匹马中产生，则必须比赛两场才行，也就是到第9场角逐出全部的前5名。</p><p>③ 第2名=B1，第3名=A2。那么此种情况下第4名只能在A3、B2、C1中产生。</p><p>情况和②一样，必须角逐第9场</p><p>④ 第2名=B1，第3名=B2。 那么此种情况下第4名只能在A2、B3、C1中产生。</p><p>● 如果第4名=A2，那么第5名只能在A3、B3、C1中产生。</p><p>● 如果第4名=B3，那么第5名只能在A2、B4、C1中产生。</p><p>● 如果第4名=C1，那么第5名只能在A2、B3、C2、D1中产生。</p><p>那么，第4、5名需要在马匹[A2、B3、B4、C1、A3、C2、D1]七匹马中产 生，则必须比赛两场才行，也就是到第9场角逐出全部的前5名。</p><p>⑤ 第2名=B1，第3名=C1。那么此种情况下第4名只能在A2、B2、C2、D1中产生。</p><p>● 如果第4名=A2，那么第5名只能在A3、B2、C2、D1中产生。</p><p>● 如果第4名=B2，那么第5名只能在A2、B3、C2、D1中产生。</p><p>● 如果第4名=C2，那么第5名只能在A2、B2、C3、D1中产生。</p><p>● 如果第4名=D1，那么第5名只能在A2、B2、C2、D2、E2中产生。</p><p>那么，第4、5名需要在马匹[A2、B2、C2、D1、A3、B3、C3、D2、E1]九匹马中 产 生，因此也必须比赛两场，也就是到第9长决出胜负。</p><p>总结：最好情况可以在第8场角逐出前5名，最差也可以在第9场搞定。</p>',78);function h(b,x){const t=A("ExternalLinkIcon");return a(),n("div",null,[l,D,_,d,m,f,p("p",null,[e("建议画图表来看，将问题简单化一点，将大问题化成小问题即可，同时B站有个讲解视频还不错："),p("a",E,[e("https://www.bilibili.com/video/BV1KJ411g78y"),o(t)])]),u])}const N=i(C,[["render",h],["__file","intelligenceQuestion.html.vue"]]);export{N as default};
