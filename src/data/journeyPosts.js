// Build Journey posts - ordered chronologically (most recent first)

const localizedJourneyPosts = [
  {
    id: 11,
    date: 'Feb 2026',
    category: 'Product',
    title: {
      en: 'Between Building and Using',
      zh: '在构建与使用之间',
      ja: '作ることと使うことのあいだ',
    },
    summary: {
      en: 'Engineers polish workflows, users care about outcomes. Real design keeps complexity inside the system and gives expression back to people.',
      zh: '工程师在打磨流程，用户只在意结果。真正的设计，是把复杂留给系统，把表达还给人。',
      ja: 'エンジニアはフローを磨き、ユーザーは結果を見る。良い設計は複雑さをシステムに閉じ込め、表現を人に返す。',
    },
    content: {
      en: `This week I felt a familiar tension again: engineers thought we had finally made the system "complete," while users only asked one thing: "Can I use it more smoothly now?"

No one is wrong here. These are just naturally different perspectives.

### Engineer and User Are Watching Different Movies

Users look at experience and outcomes: can I get into flow faster, and can I reliably get what I want?

Engineers look at construction: is the architecture elegant, is the activation flow complete, are edge cases covered, and is the new feature extensible?

When we build something highly technical, that gap gets magnified. Engineers may see precision machinery; users may only feel, "Why is this step so cumbersome?"

### The Creative Barrier Is Often in the First 20 Minutes

In many daily workflows, the issue is not that people can't create. It's that entry is too slow.

Take journaling. Ideally, it's "I feel something -> I write it down immediately." In reality, it often becomes: open folders, think of a title, tweak formatting, check the weather, find where I left off. Twenty minutes pass, and half the emotion is gone.

I'm increasingly convinced good software should first catch the moment you want to express something, then handle repetitive work in the background: organize content, build a knowledge graph, connect historical context. Users should create first; process optimization should happen quietly afterward.

### The Engineer's Job: Turning Flow into Executable Logic

From an implementation view, the problem turns into a different language:

1. Where should step one of the activation flow live so it's accurate without being intrusive?
2. How should a thought process unfold so it doesn't break halfway?
3. How should skill and process stage be sequenced to reduce misfires and rollback?

This feels like designing a processing pipeline. Each step is easy by itself; the hard part is sequencing. Once the order is wrong, the experience fragments.

### Interaction Is Moving from "Channels" to "Delivery"

Traditional interaction is like a remote control: users press 1, 2, 3, switch channels, then search for content themselves.

A better form is more like an Information Feed: the system understands you first, then proactively brings what matters, instead of forcing you to learn every entry point.

The core is not a "smarter UI." It's more accurate intent judgment.

### After Intent Comes Abstraction Design

Intent recognition is only the first gate. Next comes abstracting diverse needs into reusable steps.

User differences are very real:

- Bilingual users need language refinement but don't want their tone flattened
- Creative users don't want to spend energy on wording; they care more about high-fidelity content
- Many people want the system to remember old jokes and expressions so they don't repeat themselves every time

So "enable user to build" is not about adding more buttons. It's about building a better abstraction layer so each person can bring in their own way of working.

### The Hard Part Starts After It Works

I tuned these components repeatedly and eventually got it working. The flow is complex, with a lot of internal detail.

But as soon as it worked, a new problem appeared: users probably don't want to see those details.

Then we enter a new debate: how do we explain capability while preserving agency? How do we give direction without locking people into a fixed script?

I now prefer this metaphor: it should feel like Lego, not a menu.

1. Users can embed their own ideas instead of passively choosing preset answers
2. Software should understand you, while staying convenient and safe enough to work with you long term

That's the part I've been most obsessed with recently. Design is not a one-time answer; it's an evolving relationship.`,
      zh: `这周我又经历了一次熟悉的拉扯：工程师觉得自己终于把系统做“完整”了，用户却只问一句，“所以我现在可以更顺手地用了吗？”

这不是谁对谁错，而是两个视角天然不同。

### Engineer 和 User，看见的是两部电影

用户看的是体验和结果：能不能快一点进入状态，能不能稳定得到我想要的东西。

工程师看的是构建过程：架构是否优雅，activation flow 是否完整，极端场景是否兜住，新功能是否可扩展。

当我们在做一些“很工程”的创新时，这种差异会被放大。同一个功能，工程师看到的是精密机械，用户看到的可能只是“这一步为什么这么麻烦？”

### 创作门槛，常常卡在启动前 20 分钟

很多日常 workflow 的问题，不是用户不会创作，而是切入太慢。

比如写一篇日记，本来应该是“有感受 -> 立刻写下”。现实却常常变成：打开文件夹、想标题、调排版、查天气、找上次写到哪里。二十分钟过去，情绪已经冷掉一半。

我越来越相信，理想的软件应该先接住“想表达的那一刻”，再在后台处理重复劳动：organize 内容、建立知识图谱、连接历史上下文。用户应该先创作，流程优化应该在后面默默发生。

### 工程师的工作：把流程变成可运行的逻辑

从实现角度看，问题会变成另一套语言：

1. activation flow 的第一步放在哪里，才能既准确又不打扰
2. 一个 thought process 应该如何起承转合，才不会中途断掉
3. 不同 skill 和 process stage 的顺序怎么排，才能减少误判和回退

这部分很像在设计 processing pipeline。每个步骤本身都不难，难的是 sequencing：先后顺序一旦错了，体验就会碎。

### 交互正在从“频道”走向“推送”

传统交互像遥控器：用户按 1、2、3，切到不同频道，再自己找内容。

但更好的形态应该像 Information Feed：系统先理解你，再把真正相关的东西主动送到你面前，而不是要求你先学会所有入口。

这背后的核心不是“更聪明的 UI”，而是更准确的 intent 判断。

### Intent 之后，是抽象层设计

意图识别只是第一关。下一关是把多样化需求抽象成可复用的步骤。

不同用户的差异非常真实：

- 双语使用者需要语言 refinement，但不希望语气被磨平
- 创意用户不想把力气花在措辞上，他们更在意内容 high fidelity
- 很多人希望系统能记住过去的笑话和表达，不必每次从头重复自己

所以“enable user to build”这件事，本质上不是给更多按钮，而是给更好的抽象层，让每个人都能把自己的方式带进来。

### 做出来之后，新的难题才开始

我把这些组件反复调试，最后确实做成了。流程很复杂，内部细节也很多。

但做完后我马上遇到另一个问题：用户大概率并不想看这些细节。

于是就会进入新的 debate：怎么把功能讲清楚，同时保留参与感？怎么让系统有方向，但不把人锁死在固定剧本里？

我现在更喜欢一个比喻：它应该像乐高，而不是菜单。

1. 用户可以把自己的想法嵌进去，而不是被动选择预设答案
2. 软件要足够懂你，也足够方便和安全，能长期陪你工作

这就是我最近最着迷的部分。设计不是一次性答案，而是一种持续演化的关系。`,
      ja: `今週、また見慣れた綱引きを体験しました。エンジニアは「やっとシステムを“完成”させた」と感じるのに、ユーザーの質問は一つだけ。「それで、今はもっとスムーズに使えるの？」

どちらが正しいかの話ではありません。見ている角度が根本的に違うだけです。

### Engineer と User は別の映画を見ている

ユーザーが見るのは体験と結果です。もっと早く集中に入れるか、欲しいものを安定して得られるか。

エンジニアが見るのは構築です。アーキテクチャは美しいか、activation flow は完結しているか、エッジケースは守れているか、新機能は拡張可能か。

「エンジニアリング色の強い」新機能を作るほど、この差は大きくなります。同じ機能でも、エンジニアには精密機械に見え、ユーザーには「この手順、なんでこんなに面倒なの？」に見えることがあります。

### 創作のハードルは最初の 20 分で決まる

日々の workflow の問題は、作れないことではなく、入り口が遅いことです。

例えば日記。本来は「感じる -> すぐ書く」のはずなのに、現実はフォルダを開き、タイトルを考え、体裁を整え、天気を確認し、前回の続き探しで終わる。20 分経つ頃には、熱量の半分が冷めています。

最近ますます思うのは、良いソフトはまず「表現したい瞬間」を受け止めるべきだということ。その後ろで organize、ナレッジグラフの構築、過去文脈の接続を静かに処理すればいい。先に創作、最適化は後ろで。

### エンジニアの仕事はフローを実行可能なロジックにすること

実装側から見ると、問題は別の言語になります。

1. activation flow の最初の一手をどこに置けば、正確で邪魔にならないか
2. thought process をどう組めば途中で切れないか
3. skill と process stage の順序をどう並べれば誤判定と巻き戻しを減らせるか

これは processing pipeline 設計に近いです。各ステップ自体は難しくない。難しいのは sequencing。順番を間違えると体験はすぐ崩れます。

### インタラクションは「チャンネル」から「配信」へ

従来の操作はリモコンのようなもの。1、2、3 を押してチャンネルを切り替え、そこから自分で探す。

でも理想形は Information Feed に近い。先にシステムがあなたを理解し、本当に関連する情報を前に届ける。入口を全部覚えることをユーザーに要求しない。

核心は「賢い UI」ではなく、精度の高い intent 判定です。

### Intent の次は抽象レイヤー設計

意図認識は第一関門にすぎません。次は多様な要求を再利用可能な手順へ抽象化することです。

ユーザー差はとても現実的です。

- バイリンガル利用者は language refinement が必要でも、語感は潰したくない
- クリエイティブな利用者は言い回しよりも content high fidelity を重視する
- 多くの人は過去の言い回しや冗談を覚えていてほしく、毎回一から説明したくない

だから「enable user to build」の本質はボタン追加ではありません。より良い抽象レイヤーを作り、それぞれのやり方を持ち込めるようにすることです。

### 作ってからが本当の難所

これらのコンポーネントを何度も調整して、最終的に動くところまで持っていきました。内部はかなり複雑です。

でも完成直後に別の問題が出ます。ユーザーはその内部詳細を見たいわけではない。

すると次の debate が始まる。機能をどう伝えれば参加感を失わないか。方向性を示しつつ、固定シナリオに閉じ込めないにはどうするか。

最近しっくりくる比喩は、メニューではなくレゴです。

1. ユーザーは用意された答えを選ぶのではなく、自分の発想を差し込める
2. ソフトは十分にあなたを理解し、同時に長期利用できる安全性と手軽さを持つ

ここが今いちばん夢中な部分です。設計は一度きりの正解ではなく、進化し続ける関係です。`,
    },
  },
  {
    id: 10,
    date: 'Feb 2026',
    category: 'Product',
    title: {
      en: "Onboarding That Doesn't Get in the Way",
      zh: '不添堵的 Onboarding',
      ja: '邪魔しないオンボーディング',
    },
    summary: {
      en: 'Designing a first-launch experience that feels like meeting a friend—not filling out a government form.',
      zh: '第一次打开应用时，体验应该像认识一个朋友，而不是在填一张冗长的行政表格。',
      ja: '初回起動は「役所の書類」ではなく、「友だちに会う」感覚であるべきだと考えて設計した。',
    },
    content: {
      en: `You know that feeling when you download a new app and immediately get hit with three permission popups in a row? It's... weird. You haven't even used the app yet. You don't know what these permissions are for. And the pressure of "Allow / Don't Allow" decisions firing at you—it makes you want to just close everything.

I've done this myself. Denied all permissions out of reflex. Then later, when I actually wanted to use a feature, the app was stuck. "Please enable microphone access in Settings." And I felt that little pang of regret mixed with annoyance—now I have to dig through System Preferences to fix something I didn't understand in the first place.

**The problem isn't that users don't want to give access. It's that:**
1. They don't know *why* you need it
2. Three popups in rapid succession creates pressure, not trust

### Building for Friends

When I first built the Reso prototype, I didn't think much about onboarding. I knew what everything did. But when I started sharing it with friends, something clicked.

When you're building something for people you care about, you want it to feel *mild*. Not intrusive. Not demanding.

It's like meeting a friend for the first time. You don't walk up and immediately ask: "What's your phone number? Where do you live? What do you do for work?" Nobody likes that.

### Our Design Principles

We landed on two guiding ideas:

1. **Minimize discomfort**: Slow down. Don't bombard. Let users breathe.
2. **Don't let them miss out**: While reducing friction, make sure critical information doesn't get lost.

This balance came partly from improv classes I've been taking—the idea of reading the room, matching energy, not forcing a scene.

### What We Actually Built

Reso needs microphone access and ~2GB of ML models to work properly. That's a lot to ask upfront.

So we don't ask upfront.

- **One permission, when it matters**: We only request microphone access when you actually try to record. By then, the context is obvious.
- **Background everything else**: Models download quietly while you explore. No progress bars blocking your way. Just a subtle indicator if you want to check.
- **Graceful degradation**: If models aren't ready, the app still works—just slower. You see exactly what's happening ("0.3x speed - optimizing...") and can keep going.

### The Polish That Matters

Getting here took iteration. Friends would download debug builds, get confused about which version to keep, run into edge cases. We spent more time on onboarding than I expected—testing what felt right, what felt pushy, what felt broken.

The goal was always: **open the box, and it just works**. Elegant. Minimal. Like a work partner who's there when you need them and invisible when you don't.

The best onboarding doesn't feel like onboarding at all. It feels like the app already knows you.`,
      zh: `你有没有这种体验：下载一个新 App，刚打开就连续弹出三个权限窗口？感觉很奇怪。你甚至还没真正用过它，不知道这些权限到底做什么，却被迫连续做“允许 / 不允许”的决定，最后只想把窗口全关掉。

我自己也干过这种事。出于本能把权限全拒了。结果后来真想用某个功能时，应用卡住了：“请在设置中开启麦克风权限。”那种“后悔 + 烦躁”的感觉很真实，因为你得去系统设置里补救一个一开始并没理解的问题。

**问题不在于用户不愿授权，而在于：**
1. 他们不知道你*为什么*要这个权限
2. 连续弹窗制造的是压力，不是信任

### 为朋友而设计

我最初做 Reso 原型时，其实没太在意 onboarding。毕竟每个功能我都知道是干嘛的。但当我开始把它分享给朋友时，我突然想明白了一件事。

当你在为在乎的人做产品时，你会希望它是*温和*的。不打扰，不强迫。

这就像第一次认识朋友。你不会一上来就问：“你手机号多少？住哪？做什么工作？”没人喜欢这种开场。

### 我们的设计原则

最后我们定了两个原则：

1. **尽量降低不适感**：慢一点，不轰炸，让用户有呼吸空间。
2. **又不能让他们错过关键能力**：降低摩擦的同时，关键信息不能丢。

这种平衡也受到我上即兴课的影响：观察现场气氛、对齐能量，而不是硬推剧情。

### 我们实际做了什么

Reso 要正常工作，确实需要麦克风权限和大约 2GB 的 ML 模型。这个前置要求不小。

所以我们不在一开始就要。

- **权限在关键时刻再申请**：只有当你真的开始录音时才请求麦克风权限，那时上下文很明确。
- **其他事情都后台进行**：你探索应用时模型静默下载，不用进度条挡路；想看再看。
- **优雅降级**：模型还没准备好也能用，只是速度慢一些。界面会明确告诉你发生了什么（"0.3x speed - optimizing..."），你可以继续。

### 真正重要的打磨

这一路靠的是反复迭代。朋友们下载 debug 版、搞混该留哪个版本、踩到边界情况。我们花在 onboarding 上的时间比我预期长很多，一直在测试什么体验是自然的，什么会让人有压力，什么会让人觉得坏掉了。

我们的目标始终是：**打开盒子，它就能工作**。优雅、克制，像一个在你需要时就出现、不需要时就安静待命的工作伙伴。

最好的 onboarding，最终不该让人觉得“我正在 onboarding”。而是觉得这个应用已经懂你了。`,
      ja: `新しいアプリを入れて、起動直後に権限ポップアップが3連発で出るときの感覚、ありますよね。まだ使ってもいないのに、何のための権限か分からないまま「許可 / 許可しない」を連続で迫られる。正直、全部閉じたくなります。

私も何度もやりました。反射で全部拒否。でも後で機能を使いたくなると詰む。「設定でマイクを許可してください」。最初に理解していなかった問題を、今度はシステム設定の奥で修正することになる。あの小さな後悔と苛立ちは地味につらいです。

**問題は、ユーザーが権限を出したくないことではありません。問題は次の2つです。**
1. なぜ必要なのかが分からない
2. 連続ポップアップは信頼ではなく圧力を生む

### 友だちのために作る

Reso の最初のプロトタイプを作ったとき、オンボーディングはあまり気にしていませんでした。自分は全部分かっていたからです。けれど友だちに配り始めたとき、感覚が変わりました。

大切な人のために作るなら、体験は*やわらかく*あるべきだと思ったんです。押しつけない。要求しすぎない。

初対面でいきなり「電話番号は？ どこに住んでる？ 仕事は？」と聞かないのと同じです。そんな始まり方は誰も好きじゃない。

### 設計原則

最終的に、指針は2つに絞りました。

1. **不快感を最小化する**: 急がせない。畳みかけない。呼吸できる余白を残す。
2. **大事な機能は取りこぼさない**: 摩擦は減らしつつ、重要情報は確実に伝える。

このバランスには、私が通っている即興クラスの影響もあります。場の空気を読む、エネルギーを合わせる、無理に場面を押し切らない。

### 実装したこと

Reso は正常に動くために、マイク権限と約2GBの ML モデルが必要です。最初に求めるには重い。

だから、最初には求めません。

- **必要な瞬間に1つだけ**: マイク権限は、実際に録音しようとしたタイミングでだけ要求。文脈が明確です。
- **それ以外はバックグラウンド**: 触っている間にモデルを静かにダウンロード。進捗バーで操作を止めない。確認したい人向けに控えめな表示だけ。
- **Graceful degradation**: モデル準備前でもアプリは動く。少し遅いだけ。今何が起きているか（"0.3x speed - optimizing..."）を表示し、作業は続けられます。

### 仕上げで効く部分

ここまで来るには反復が必要でした。友だちが debug ビルドを入れ、残すバージョンで迷い、エッジケースに当たる。オンボーディングに想像以上の時間を使い、「心地よい」「押しつけがましい」「壊れて見える」の境界を検証し続けました。

目標はずっと同じです。**箱を開けたら、もう動いている**。エレガントでミニマル。必要なときは居て、不要なときは見えない仕事相手のように。

最高のオンボーディングは、オンボーディングに見えません。アプリが最初からあなたを分かっているように感じられることです。`,
    },
  },
  {
    id: 9,
    date: 'Jan 2026',
    category: 'Design',
    title: {
      en: 'The UI You Never Think About',
      zh: '你不会注意到的 UI',
      ja: '意識されない UI',
    },
    summary: {
      en: 'Why I cut most of my UI, and what it taught me about the difference between building and using.',
      zh: '我为什么砍掉了大部分 UI，以及这件事如何让我重新理解“构建”和“使用”的差别。',
      ja: 'UI の大半を削った理由と、「作ること」と「使うこと」の差から得た学び。',
    },
    content: {
      en: `Honestly, my early beta looked like a DJ console. Knobs everywhere. Toggles for every route, every model variation, every debug parameter. It made sense—I needed to test hundreds of permutations to find what worked.

But then I asked myself: *Who is this actually for?*

### The Real Goal

Everything I was doing—all those model routes, delay settings, polish options—had one purpose: to give you **the version you like best**. You shouldn't have to tune anything. You shouldn't even know those permutations exist.

When you see the output and think, "Yes, that's exactly what I meant"—that's the goal. That's the only goal.

Once I realized that, my design principle became simple: **If I can hide it, hide it. If I can encapsulate it, don't bother the user.**

### The Engineer vs. User Gap

There's a cognitive gap between engineers and users that I kept bumping into:

**The engineer's instinct**: Give users a full remote control. Every option, every setting. Maximum flexibility.

**The user's reality**: The cooler experience is when content just *appears* in your feed. You don't want to press "Sports," then "Baseball," then scroll to find the one player you care about. You just want it there.

This made me rethink a lot. The version you see now? I've cut *so much*. Features I was proud of at one point—gone.

### The Test That Matters

I started asking myself two questions, but not right away. I'd wait a few days. Let the excitement fade. Then:

1. **Does it make sense?**
2. **Will you ever actually use it?**

When the answers changed—and they often did—I cut without hesitation.

Here's the thing: when you're deep in building, everything feels reasonable. But building something and using something are completely different perspectives. And it's hard to be both people at once. You can't debug code one moment and then genuinely pretend you're a user who doesn't care about implementation details.

So I gave myself buffer time. That's partly why our development cycle was longer than expected. The prototype existed early. Friends were testing it. But we kept polishing, kept asking: *Is this actually useful? Would I use this myself?*

### Eating Your Own Cooking

During development, I used Reso as scaffolding for my own work. And if something felt awkward to me—even as the person who built it—that was a red flag.

Why would I give someone else something I don't want to use myself? It's like giving advice you don't believe in. If someone asks, "Do you actually believe this?" and you say no—everything after that is just noise.

When you finish building something, you have to ask: **Do I believe in it?**

If you do, you'll communicate it with conviction. If deep down something feels off—you know. You just know.

### UI as Expression

This struggle—between what's technically possible and what's actually human—showed up constantly when we built features like Skills and Tones. We kept asking: Are we just impressing ourselves, or does the user actually need this?

But here's the beautiful part: UI is a form of expression. I'm grateful for great art in the world, and I think UI is a window for developers to express what they believe beauty looks like.

There's no "correct" UI. Only what fits. What feels right. What gives users comfort.

And that standard will keep evolving. I'm looking forward to more inspiration, more feedback, more iteration. Because the UI you never think about? That's the one that took the most thought.`,
      zh: `说实话，我早期的 beta 看起来像 DJ 控台。到处都是旋钮。每条 route、每种模型变体、每个 debug 参数都有开关。那时候这很合理，因为我需要测试几百种组合才能找到可行方案。

但后来我问了自己一句：*这到底是给谁用的？*

### 真正的目标

我做的所有事——model route、延迟设置、打磨选项——只有一个目的：给你 **你最喜欢的那个版本**。你不该手动调参，甚至不需要知道这些排列组合存在。

当你看到输出时心里想“对，就是我要的那个意思”，这才是目标，也是唯一目标。

意识到这点后，我的设计原则变得很简单：**能藏就藏，能封装就别打扰用户。**

### Engineer 和 User 的认知落差

我不断撞上的，是工程师和用户之间的认知差。

**工程师本能**：给用户一个完整遥控器。所有选项、所有设置，灵活性拉满。

**用户现实**：更爽的体验是内容直接*出现在*你的 feed 里。你不想先点“体育”，再点“棒球”，再翻很久找那个你关心的球员。你只想它已经在那里。

这让我重想了很多东西。你现在看到的版本？我删了*非常多*。很多我曾经很骄傲的功能，后来都砍掉了。

### 真正有效的测试

我开始问自己两个问题，但不会立刻问。我会先等几天，让兴奋感过去，然后再看：

1. **它讲得通吗？**
2. **你真的会用吗？**

当答案变化时——而且经常变化——我会毫不犹豫地删除。

关键在于：你沉浸在构建状态时，几乎一切都看起来合理。但“做一个东西”和“用一个东西”是完全不同的视角，很难同时扮演两种人。你不可能上一秒还在 debug，下一秒就真诚地当一个不关心实现细节的用户。

所以我给自己留了缓冲时间。这也是为什么我们的开发周期比预期长。原型很早就有了，朋友也在测试，但我们一直在打磨、一直在问：*它真的有用吗？我自己会长期用吗？*

### 吃自己做的菜

开发期间，我把 Reso 当作自己工作的脚手架来用。只要连我这个作者都觉得哪里别扭，那就是红旗。

我为什么要把我自己都不想用的东西给别人？这就像给出你自己都不相信的建议。别人问你“你真的信这个吗？”，你说不信，那后面说再多都只是噪音。

你做完一个产品后，必须问一句：**我真的相信它吗？**

如果你相信，你会带着笃定去表达它；如果心里其实别扭，你自己知道。

### UI 也是表达

这种在“技术上可行”和“人性上自然”之间的拉扯，在我们做 Skills、Tones 这类功能时反复出现。我们一直在问：我们是在取悦自己，还是用户真的需要它？

但好的一面是，UI 本身就是一种表达。我非常感激这个世界上的好作品，我也觉得 UI 是开发者表达“自己认为什么是美”的窗口。

UI 没有唯一“正确答案”。只有适不适合、顺不顺手、能不能给用户安全感。

而这个标准会持续变化。我期待更多灵感、反馈和迭代。因为那个你几乎注意不到的 UI，往往才是被反复思考最多的 UI。`,
      ja: `正直に言うと、初期ベータの UI は DJ コンソールみたいでした。ノブだらけ。route ごと、モデル差分ごと、debug パラメータごとにトグルがある。あの段階では合理的でした。何百通りも試して、動く組み合わせを見つける必要があったからです。

でも途中で自分に問い直しました。*これは誰のための UI なんだ？*

### 本当のゴール

私がやっていたこと全部、つまり model route、遅延調整、仕上げオプションは、目的が一つでした。**あなたが一番好きな版を届けること**。ユーザーに調整させるべきではないし、そもそもその組み合わせの存在を意識させる必要もない。

出力を見て「そう、それが言いたかった」と思える。それだけがゴールです。

そこに気づいてから設計原則はシンプルになりました。**隠せるなら隠す。包めるなら包む。ユーザーを煩わせない。**

### Engineer と User のギャップ

何度もぶつかったのは、エンジニアとユーザーの認知ギャップでした。

**エンジニアの本能**: すべての設定を渡す。完全なリモコンを渡す。柔軟性を最大化する。

**ユーザーの現実**: 体験として気持ちいいのは、必要なものが feed に自然に*現れる*こと。「スポーツ」→「野球」→スクロール、みたいな探索はしたくない。最初からそこにあってほしい。

この差に気づいて、たくさん削りました。今の版は、本当に多くを捨てています。かつて誇っていた機能も消えました。

### 効くテスト

自分に2つの問いを投げるようにしました。ただし直後ではなく、数日置いて熱が冷めてからです。

1. **筋が通っているか？**
2. **実際に使うか？**

答えが変わったら、迷わず削る。

作っている最中は何でも正しく見えます。でも「作る視点」と「使う視点」はまったく別物で、同時に両立するのは難しい。さっきまで debug していた人間が、次の瞬間に実装を気にしない素のユーザーになるのは無理があります。

だから意図的にバッファ時間を取りました。開発サイクルが想定より長くなった理由の一つです。プロトタイプ自体は早くできていたし、友人テストも進んでいた。でも磨き続けて、問い続けた。*本当に役立つか？ 自分で使い続けたいか？*

### 自分で食べる

開発中、Reso は自分の仕事の足場として使っていました。作者の自分ですら使いにくいと感じる箇所は、全部赤信号でした。

自分が使いたくないものを、なぜ他人に渡すのか。信じていない助言をするのと同じです。「本当に信じてる？」に「いいえ」と答えるなら、その先はノイズになります。

何かを作り終えたとき、最後に聞くべきはこれです。**自分はそれを信じているか？**

信じていれば言葉に熱が宿る。違和感があれば、必ず分かる。

### UI は表現でもある

技術的に可能なことと、人間にとって自然なことの間のせめぎ合いは、Skills や Tones の機能開発でも常に出てきました。これは自己満足か、それとも本当に必要か。

でも美しい点もあります。UI は表現の一形態です。世界の優れたアートに学びつつ、UI は開発者が「自分にとっての美」を表明できる窓だと思っています。

「正しい UI」はありません。あるのは、合っているか、しっくりくるか、安心できるか。

その基準はこれからも変わり続ける。だからこそ、もっとインスピレーションとフィードバックと反復が楽しみです。あなたが意識しない UI ほど、実は最も考え抜かれているのです。`,
    },
  },
  {
    id: 8,
    date: 'Dec 2025',
    category: 'Engineering',
    title: {
      en: 'Making Ideas Visible: The Knowledge Graph',
      zh: '让想法可见：Knowledge Graph',
      ja: 'アイデアを可視化する: Knowledge Graph',
    },
    summary: {
      en: "Why I built a discovery feature that acts as another pair of eyes—helping you see patterns in your own thinking you couldn't see alone.",
      zh: '我为什么做了一个像“第二双眼睛”的发现功能，帮你看见自己独自看不见的思维模式。',
      ja: '自分では見えにくい思考パターンを見つけるために、もう一組の目として働く discovery 機能を作った理由。',
    },
    content: {
      en: `I come from a science background. In industry, I spent years processing massive datasets—machine learning, clustering algorithms, high-dimensional visualization. These tools were always there, ready to reveal hidden patterns.

But I kept thinking: **Why aren't these tools helping regular people in their daily lives?**

The techniques exist. The compute power exists (your Mac's chips are incredibly capable). What's missing is the bridge—an interface that takes something technical and cold, and makes it warm, human, useful.

That's what I wanted to build.

### Another Pair of Eyes

Here's something I believe deeply: **You can't lift yourself up by pulling your own hair.**

The reason you are who you are today is partly because you don't see your own patterns. Your habits, your blind spots, your recurring themes—they're invisible to you precisely because you're living inside them.

But when data shows you those patterns? When you can *see* that you've mentioned guitar every few weeks for the past year? Suddenly you realize: *Oh, I actually do care about music. Maybe I should do something about that.*

Once you see through your own patterns—even your limitations—you naturally stop repeating them. That's growth. That's why you need another pair of eyes.

### The Intelligent Steward

At its simplest, this is just a secretary. It organizes your meeting notes. But now the cost of that is nearly zero.

At its best, it's like having someone who remembers everything you've said—last week, last year. It connects the dots. It finds the threads running through your life that you didn't notice.

You don't need to manually sort things into "work notes" vs "personal reflections" vs "health journal." You just speak, and the system organizes. The best experience is when collection happens automatically.

### The Art of Surfacing Without Exposing

There's a balance here that matters: **How do you surface insights from data without trading off privacy?**

This is an art. What tech stack achieves the goal without overkill? How do you make the machine work for you without making you vulnerable?

In my previous work with large-scale data, we used intuitive visualizations—parallel plots, radvis plots, clustering in high-dimensional space. These techniques are genuinely interesting. And now, with modern embedding technology and powerful local chips, we can run these algorithms *natively on your Mac*, optimized specifically for discovery.

No cloud required. Your thoughts stay yours.

### What We're Really Building

Think about how humans interact. When you talk with a close friend, you reference things you mentioned days ago. They build on it. That *continuity*—that *reference*—is what makes conversation feel like flow.

With machines, that continuity is usually missing. And that friction is exactly why talking to software feels exhausting.

We're trying to translate human-to-human flow into human-to-software flow. The Discovery feature is one piece of that:

1. **Pattern Discovery**: Like a bystander watching your conversations, finding commonalities, surfacing insights you wouldn't have found alone.

2. **Auto-organize**: You don't categorize. The system collects and structures based on what you've defined matters to you.

3. **Clustering**: Finding the hidden links between ideas. Helping you discover:
   - The unspoken clues
   - The unspoken words

### The Goal

I don't know how much you'll love this. But I hope we can build something valuable for you—or build it together.

That moment when you look at the graph and think, "Huh, I didn't realize I'd been thinking about that so much"—that's the goal.

Not just organizing your notes. Helping you see yourself.`,
      zh: `我本来是科学背景出身。进入行业后，我花了很多年处理大规模数据：machine learning、clustering algorithm、高维可视化。这些工具一直都在，随时可以揭示隐藏模式。

但我一直在想：**为什么这些工具没有真正帮助到普通人的日常生活？**

技术有了，算力也有了（你 Mac 上的芯片非常强）。真正缺的是桥梁：把冷冰冰的技术转成温暖、有人味、可用的界面。

这就是我想做的事。

### 另一双眼睛

有句话我很相信：**你不可能拽着自己的头发把自己提起来。**

你之所以成为今天的你，一部分原因是你看不见自己的模式。习惯、盲点、反复出现的主题，正因为你身处其中，所以最难察觉。

但当数据把这些模式摆在你面前呢？当你*看见*自己过去一年里每隔几周就会提到吉他，你会突然意识到：*原来我真的在意音乐，也许我该认真做点什么。*

当你看见自己的模式，甚至看见自己的限制，你就会自然减少重复。这就是成长，也就是为什么你需要“另一双眼睛”。

### 智能管家

最基础时，它像秘书：整理会议记录。而现在，这件事的成本几乎为零。

最好时，它像一个记得你说过一切的人——上周、去年、很久之前。它帮你连点成线，找到你没注意到的长期线索。

你不需要手动分“工作笔记”“个人反思”“健康日记”。你只要说，系统就会组织。最理想的体验是：采集自动发生。

### 在不暴露的前提下浮现洞察

这里有一个关键平衡：**如何从数据里提炼洞察，同时不牺牲隐私？**

这其实是一门艺术。什么技术栈够用但不过度？如何让机器为你服务，而不是让你暴露在风险里？

我之前做大规模数据时，会用很多直观可视化：parallel plots、radvis plots、高维聚类。这些方法非常有趣。现在借助现代 embedding 技术和本地强芯片，我们已经可以把这些算法*原生跑在你的 Mac 上*，并且专门针对 discovery 做优化。

不需要云端。你的想法属于你自己。

### 我们真正在做什么

想想人和人怎么交流。你和亲近的人聊天时，会接着几天前的话继续说。那种*连续性*、那种*相互引用*，才让对话有“流动感”。

而机器往往缺少这种连续性，所以和软件对话才会让人疲惫。

我们想把人和人的 flow，翻译成人和软件的 flow。Discovery 功能是其中一块：

1. **Pattern Discovery**：像一个在旁观察你对话的人，找共性、给洞察，帮你看到自己独自看不到的东西。

2. **Auto-organize**：你不需要手工分类。系统会按你定义的重要性去收集并结构化。

3. **Clustering**：找到想法之间的隐藏连接，帮助你发现：
   - 没说出口的线索
   - 没说出口的词

### 目标

我不知道你会有多喜欢它。但我希望我们能为你做出有价值的东西，或者一起把它做出来。

当你看着图谱说出“咦，我原来一直在想这个”，那一刻就是目标。

不只是整理笔记，而是帮你看见自己。`,
      ja: `私はもともとサイエンスの出身です。業界では長年、大規模データを扱ってきました。machine learning、clustering algorithm、高次元可視化。隠れたパターンを見つける道具は、ずっと目の前にありました。

でもずっと考えていました。**なぜこの道具は、普通の人の日常を助ける形になっていないのか？**

技術はある。計算資源もある（Mac のチップは驚くほど強い）。足りないのは橋です。技術的で冷たいものを、人間的であたたかく、使える体験に変える橋。

それを作りたかった。

### もう一組の目

私が強く信じていることがあります。**自分の髪を引っ張って自分を持ち上げることはできない。**

今の自分が今の自分である理由の一つは、自分のパターンを自分で見えないことです。習慣、盲点、繰り返すテーマは、その中で生きているからこそ見えにくい。

でもデータがそれを見せてくれたら？ 1年間、数週間ごとにギターに触れていると*見える*ようになったら？ 突然こう思える。「あ、自分は本当に音楽を大事にしている。何か始めるべきかもしれない。」

自分のパターン、さらには限界まで見えると、自然に反復をやめられる。それが成長で、だからこそもう一組の目が必要です。

### インテリジェントな steward

最小構成なら秘書のようなものです。会議メモを整理する。ただ今は、そのコストがほぼゼロになりました。

最良の形では、あなたが話したことを全部覚えている相手のように働きます。先週も去年も。点と点をつなぎ、気づかなかった糸を見つける。

「仕事メモ」「個人の内省」「健康日誌」を手で分ける必要はありません。話せばシステムが整理する。収集が自動で起きる状態が、最も良い体験です。

### 露出せずに浮かび上がらせる技術

ここで重要なのはバランスです。**プライバシーを損なわずに、どうやって洞察を浮かび上がらせるか。**

これはアートです。やりすぎず目的を達成できる tech stack は何か。マシンを味方にしつつ、ユーザーを脆弱にしないにはどうするか。

以前の大規模データの仕事では、parallel plots、radvis plots、高次元空間でのクラスタリングなど、直感的な可視化を使っていました。これらは本当に面白い。今は embedding 技術とローカルチップの進化で、これらを *Mac 上でネイティブ実行* し、discovery 向けに最適化できます。

クラウドは不要。思考はあなたのもののままです。

### 私たちが本当に作っているもの

人と人の会話を思い出してください。親しい相手とは、数日前の話を参照しながら会話が続く。あの*連続性*、あの*参照*が、会話に flow を生みます。

機械との対話には、その連続性が欠けがちです。だからソフトと話すのは疲れる。

私たちは人間同士の flow を、人間とソフトの flow に翻訳しようとしています。Discovery はその一部です。

1. **Pattern Discovery**: 会話を横で見ている観察者のように共通点を見つけ、一人では辿り着けない洞察を出す。

2. **Auto-organize**: あなたが分類しない。重要だと定義した軸に沿って、システムが収集・構造化する。

3. **Clustering**: アイデア間の隠れたつながりを見つけ、次を発見しやすくする。
   - まだ言語化されていない手がかり
   - まだ言葉になっていない語

### ゴール

これをどこまで気に入ってもらえるかは分かりません。でも、あなたに価値のあるものを作りたい。できれば一緒に作りたい。

グラフを見て「え、こんなにずっとこれを考えていたのか」と気づく、その瞬間がゴールです。

メモ整理だけではなく、自分を見えるようにすること。`,
    },
  },
  {
    id: 7,
    date: 'Nov 2025',
    category: 'Engineering',
    title: {
      en: 'Teaching an App to Find Patterns',
      zh: '教应用学会发现模式',
      ja: 'アプリにパターン発見を教える',
    },
    summary: {
      en: 'How semantic clustering turns scattered voice notes into discoverable themes—and why I had to resist the urge to over-engineer it.',
      zh: '语义聚类如何把分散语音笔记变成可发现主题，以及我为什么必须克制过度工程化的冲动。',
      ja: 'semantic clustering で散らばった音声メモをテーマ化する方法と、過剰設計を抑える必要があった理由。',
    },
    content: {
      en: `One of Reso's early users told me: "I have 200 voice notes and I can't remember what half of them are about."

This is the problem with capture-focused tools. They make it *easy* to record thoughts, but then what? You're drowning in data.

I wanted Reso to help you **discover patterns** in your thinking over time—without requiring manual tagging or folder organization.

### The Core Idea

Every transcription gets converted into a semantic representation (an embedding). Notes with similar embeddings are related.

If enough related notes accumulate, they surface as a "theme" with an auto-generated name.

**Example**: You record five different thoughts about "API design" over two weeks. Reso groups them automatically and labels the theme "API Design Patterns."

### The Clustering Challenge

The algorithm itself is straightforward. But tuning it felt impossible:

- **Too aggressive**: Everything becomes one giant theme ("Work Stuff")
- **Too conservative**: Every note is its own theme (useless)

I spent days tweaking similarity thresholds before realizing: **There's no perfect threshold**.

What worked: **Adaptive clustering**.

Instead of a fixed threshold, we look at the distribution of similarity scores. If there's a natural gap (e.g., scores are either >0.75 or <0.3), we use that gap as the cutoff.

This means the "right" threshold emerges from your data, not from my arbitrary tuning.

### Naming Themes

This was surprisingly hard. How do you generate a theme name from note contents?

I tried:
1. **LLM summaries**: Accurate but slow and expensive
2. **Keyword extraction**: Fast but generic ("Project Update #47")
3. **First note title**: Simple but often misleading

What I settled on: **Hybrid approach**.

We extract frequent keywords, then use a lightweight LLM call to combine them into a coherent phrase. Cost: ~$0.001 per theme. Fast enough to run on-demand.

### What I Learned

The best AI features don't feel like AI. They feel like the app is just... paying attention.

When a theme surfaces, users don't think "wow, cool clustering algorithm." They think "huh, I *have* been thinking about that a lot."

That's the magic—making the invisible visible.`,
      zh: `Reso 的一位早期用户跟我说过一句话：“我有 200 条语音笔记，但一半都想不起在讲什么。”

这就是 capture 型工具的典型问题：记录很*容易*，然后呢？你会被数据淹没。

我希望 Reso 能帮你在时间线上**发现思维模式**，而不要求你手动打标签或整理文件夹。

### 核心思路

每条转写文本都会转成语义表示（embedding）。embedding 相近的笔记，语义上就相关。

当相关笔记积累到一定数量，它们会自动浮现为一个“主题”，并附带自动生成的名字。

**例子**：两周内你录了五条关于“API design”的想法。Reso 会自动把它们归为一组，并标注成 “API Design Patterns”。

### 聚类难点

算法本身并不复杂，难的是调参：

- **太激进**：所有东西都被并成一个大主题（“工作杂项”）
- **太保守**：每条笔记都是单独主题（几乎没用）

我花了好几天调相似度阈值，后来才意识到：**不存在完美阈值**。

真正有效的是：**Adaptive clustering**。

不用固定阈值，而是看相似度分布本身。如果数据里存在自然断层（比如分数要么 >0.75，要么 <0.3），就拿这个断层当切分点。

这样“正确阈值”来自你的数据，而不是来自我的主观拍脑袋。

### 主题命名

这部分意外地难。如何从多条笔记内容里生成一个靠谱主题名？

我试过：
1. **LLM summaries**：准，但慢且贵
2. **关键词提取**：快，但很泛（“Project Update #47”）
3. **第一条笔记标题**：简单，但常常误导

最后我用了：**Hybrid approach**。

先提取高频关键词，再用轻量 LLM 调用把它们合成为可读短语。成本大约每个主题 ~$0.001，足够快，可以按需触发。

### 我学到的

最好的 AI 功能，不会让你觉得“这很 AI”。它更像应用在静静地留意你。

当主题浮现时，用户不会想“哇，聚类算法真酷”。他们会想：“原来我最近真的一直在想这个。”

这就是魔法：把看不见的东西变得可见。`,
      ja: `Reso の初期ユーザーの一人がこう言いました。「音声メモが 200 件あるのに、半分は何の話か思い出せない。」

これは capture 重視ツールの典型的な課題です。記録は*簡単*になる。でもその後は？ データに埋もれてしまう。

私は Reso に、手動タグ付けやフォルダ整理なしで、時間を通じて**思考のパターン**を見つける役割を持たせたかった。

### コアアイデア

各転写は semantic representation（embedding）に変換されます。embedding が近いノート同士は関連が高い。

関連ノートが十分にたまると、自動生成名つきの「テーマ」として浮かび上がります。

**例**: 2週間で「API design」について5つ録音したとします。Reso は自動でまとめて「API Design Patterns」というテーマ名を付けます。

### クラスタリングの難しさ

アルゴリズム自体は単純です。ただチューニングが厄介でした。

- **攻めすぎ**: 何でも1つの巨大テーマになる（「仕事全般」）
- **守りすぎ**: 1メモ1テーマになる（実用性がない）

類似度しきい値を何日も調整して、やっと分かりました。**完璧なしきい値は存在しない**。

効いたのは **Adaptive clustering** です。

固定値ではなく、類似度スコアの分布を見る。自然なギャップ（例: >0.75 と <0.3 に分かれる）があれば、その境界をカットオフに使う。

つまり「正しい」しきい値は、私の主観ではなく、あなたのデータから現れます。

### テーマ名の生成

ここは意外に難題でした。複数ノートからどうテーマ名を作るか。

試したのは以下です。
1. **LLM summaries**: 精度は高いが遅くて高い
2. **Keyword extraction**: 速いが汎用的すぎる（"Project Update #47"）
3. **First note title**: 単純だが誤誘導しやすい

最終的に選んだのは **Hybrid approach**。

頻出キーワードを抽出し、軽量な LLM 呼び出しで自然なフレーズにまとめる。コストはテーマあたり約 ~$0.001。オンデマンド実行に十分な速さです。

### 学んだこと

良い AI 機能は、AI っぽく見えません。アプリがただ…注意深く見ていてくれる感覚になります。

テーマが出たとき、ユーザーは「すごいクラスタリングだ」とは思わない。「あ、確かに最近こればかり考えてた」と思う。

見えなかったものを見えるようにする。それが魔法です。`,
    },
  },
  {
    id: 6,
    date: 'Oct 2025',
    category: 'Infrastructure',
    title: {
      en: "When One API Isn't Enough",
      zh: '当一个 API 不够用时',
      ja: '1つの API では足りないとき',
    },
    summary: {
      en: 'Why I built multi-provider routing—not just for reliability, but because I wanted a playground to try new models whenever I felt like it.',
      zh: '我为什么做了多提供商路由：不只是为了稳定性，更是为了随时试新模型的自由。',
      ja: '信頼性のためだけでなく、気分で新モデルを試せる playground が欲しくて multi-provider routing を作った。',
    },
    content: {
      en: `I'm the kind of person who tries every new model the moment it drops.

New Claude version? I want to feel the difference. GPT update? Let me compare. A new player enters the scene? Sign me up. It's not just about benchmarks—I genuinely enjoy experiencing how different models *think*.

So when I built Reso's LLM integration, I knew one API slot wouldn't be enough. Not for me, anyway.

### The Practical Side

Sure, there's a reliability argument. Rate limits happen. Outages happen. Having multiple providers configured means if one hits a wall, another picks up seamlessly.

But honestly? That's not why I built it.

I built it because I wanted **flexibility**:

- Sometimes I want to use my company's API key for work stuff
- Sometimes I want to use my personal key for private thoughts
- Sometimes I just want to rotate between providers because one hit its limit
- Sometimes I want to compare how different models handle the same input

The point is: **switching should be effortless**. No reconfiguring. No digging through settings. Just... works.

### Making It Fun

I wanted routing to feel intuitive—almost like a playground.

You can set up multiple API keys from different providers. Reso handles the rest. If you want to manually pick one for a specific task, you can. If you want it to auto-rotate, it will. If one provider is rate-limited, it quietly moves to the next.

The experience should feel like you have options, not obligations.

### Why This Matters

Most apps lock you into one provider. One API key. One way of doing things.

But the AI landscape moves fast. What's best today might not be best tomorrow. And sometimes you just *want* to try something different—not because it's better, but because you're curious.

I think tools should support that curiosity. They should make experimentation easy, not punishing.

### The Boring Infrastructure

Behind the scenes, there's a lot of state management:
- Tracking which providers are healthy
- Handling rate limits vs. actual errors
- Avoiding retry storms
- Graceful degradation when everything's down

The core routing logic is maybe 50 lines. The error handling is 200+. That's just how infrastructure works—the boring stuff takes the most code.

But when it works, you don't notice it. You just feel like the app is responsive, flexible, and... fun.

That's the goal. Not just reliability. A playground.`,
      zh: `我属于那种新模型一发布就会立刻去试的人。

Claude 出新版本？我想亲自感受差异。GPT 更新？我要对比一下。新玩家进场？立刻报名。对我来说不只是 benchmark，我是真的喜欢体验不同模型*思考*方式的差别。

所以做 Reso 的 LLM 集成时，我很早就知道：一个 API 槽位肯定不够，至少对我不够。

### 现实层面的理由

当然，多提供商有稳定性价值。会有 rate limit，会有 outage。配置多个 provider，就能在某个挂掉时由另一个无缝接上。

但说实话，这不是我做它的主要动机。

我做它是为了 **flexibility**：

- 有时工作内容想用公司的 API key
- 有时私人想法想用个人 key
- 有时某家到 limit 了，我就想切去别家
- 有时我想比较不同模型对同一输入的处理方式

重点是：**切换应该零负担**。不该重新配置，不该翻设置。应该直接可用。

### 让它有趣

我希望 routing 的体验很直觉，像一个 playground。

你可以配置多个 provider 的 API key。剩下交给 Reso。想手动指定某次任务，用手动；想自动轮转，它就自动轮转；某个 provider 被限流，它会悄悄切到下一个。

体验应该是“你有选择”，而不是“你有义务”。

### 为什么这件事重要

大多数应用会把你锁在一个 provider、一个 API key、一种使用方式里。

但 AI 生态变化非常快。今天最优，不代表明天还最优。很多时候你只是*好奇*，想试试不同东西，不一定因为它更好。

我认为工具应该支持这种好奇心，让实验变得轻松，而不是惩罚性地复杂。

### 那些无聊但关键的基础设施

在后台，状态管理其实很多：
- 跟踪哪些 provider 当前健康
- 区分 rate limit 和真实错误
- 避免重试风暴
- 当所有 provider 都不可用时优雅降级

核心 routing 逻辑可能也就 50 行，错误处理却有 200+。基础设施就是这样，最无聊的部分往往代码最多。

但它一旦工作良好，你几乎感受不到。你只会觉得这个应用反应快、很灵活，而且……挺好玩。

这才是目标。不只是稳定性，而是一个 playground。`,
      ja: `私は新しいモデルが出た瞬間に試したくなるタイプです。

Claude の新版本？差を体感したい。GPT の更新？比較したい。新規プレイヤー参入？すぐ触りたい。ベンチマークだけじゃなく、モデルごとの*思考の癖*を味わうのが好きなんです。

だから Reso の LLM 連携を作るとき、API スロット1つでは足りないと最初から分かっていました。少なくとも私には。

### 実務的な理由

もちろん信頼性の話はあります。rate limit も outage も起きる。複数 provider を設定しておけば、1つが詰まっても別が引き継げる。

でも正直、それが主目的ではありませんでした。

作った理由は **flexibility** です。

- 仕事用途では会社の API key を使いたいときがある
- 個人的な内容では個人 key を使いたいときがある
- ある provider が上限に達したら別に回したいときがある
- 同じ入力をモデルごとに比較したいときがある

要点は、**切り替えは effortless であるべき** ということ。再設定不要。設定画面を掘らない。普通に動く。

### 体験を楽しくする

routing は直感的で、ほぼ playground のようにしたかった。

複数 provider の API key を登録すれば、あとは Reso が処理します。特定タスクだけ手動指定もできる。auto-rotate もできる。どこかが rate-limited なら、静かに次へ移る。

「選択肢がある」体験であって、「義務が増える」体験にはしたくありませんでした。

### なぜ重要か

多くのアプリは、1 provider、1 API key、1つの流儀に固定します。

でも AI の地形は速く変わる。今日の最適が明日も最適とは限らない。時には、優劣以前にただ*試したい*だけのこともある。

私はツールがその好奇心を支えるべきだと思っています。実験を簡単にし、罰ゲーム化しないこと。

### 地味なインフラ

裏側では状態管理が大量にあります。
- provider の健全性を追跡する
- rate limit と実エラーを切り分ける
- retry storm を避ける
- 全滅時に graceful degradation する

routing 本体は 50 行程度でも、エラーハンドリングは 200 行超え。インフラはだいたいそうで、地味なところが一番コード量を食います。

でもうまく動けば気づかれません。ユーザーには「反応が速い」「柔軟」「ちょっと楽しい」とだけ伝わる。

目標はそこです。信頼性だけじゃない。playground です。`,
    },
  },
  {
    id: 5,
    date: 'Sep 2025',
    category: 'Security',
    title: {
      en: 'Privacy by Design: The PII Shield',
      zh: '隐私内建：PII Shield',
      ja: '設計で守るプライバシー: PII Shield',
    },
    summary: {
      en: "The journey from \"I'm worried about my voice data\" to building an architecture where your voice fingerprint never leaves your Mac.",
      zh: '从“我担心语音数据泄露”到搭建一套“声纹永不离开 Mac”的架构，这是一段很个人的演进。',
      ja: '「自分の音声データが不安」から、「声紋が Mac の外へ出ない」設計に至るまでの道のり。',
    },
    content: {
      en: `This feature came from a deeply personal need.

When I first started exploring voice tools, I was genuinely worried. Where does my audio go? Who's listening? I didn't even know how to configure my computer to feel safe. That uncertainty kept me from using voice input for anything important.

So when I built Reso, I wanted to solve that problem—not just for myself, but properly.

### The Struggle: Local Everything?

My first instinct was to run *everything* locally. No cloud. No APIs. Total privacy.

I spent nearly two months trying to make this work. We experimented with different local LLMs, quantized versions, GPU optimizations, even leveraging the Apple Neural Engine for acceleration.

The hardware could technically handle it—30+ GB of VRAM is a lot. But here's the reality:
- You don't want to "burn" that much compute just by opening an app
- Local models still lag behind top-tier APIs in reasoning and abstraction
- The language processing quality wasn't where it needed to be

If the model can't deliver the experience users deserve, forcing it to run locally is just... cutting the foot to fit the shoe.

### Redefining the Question

So we stepped back and asked: **What is privacy, really?**

When you break it down, there are two things that matter most:
1. **PII (Personally Identifiable Information)** — names, numbers, sensitive terms
2. **Your voice fingerprint** — the unique acoustic signature of *you*

Once we framed it this way, the architecture became clear.

### What We Built

**1. Voice fingerprint stays local. Period.**

Your raw audio never leaves your Mac. Transcription happens entirely on-device using optimized Whisper models running on Apple Silicon. This is non-negotiable.

**2. Text gets sanitized before it goes anywhere.**

After transcription, we scan for sensitive patterns—names, phone numbers, emails, custom terms you define. These get encoded into random tokens:

\`\`\`
Original: "Call John at 555-1234 about Project Phoenix"
Masked:   "Call [PERSON_1] at [PHONE_1] about [SENSITIVE_1]"
\`\`\`

Only the sanitized version touches the cloud.

**3. We work with reputable providers.**

The masked text goes to OpenAI or Anthropic—established vendors with clear data policies. We can't control everything they do, but we've built the system we *wish* existed: one where even if something leaks, it's meaningless without context.

**4. Everything else runs locally.**

Our discovery algorithms, clustering, chip-level optimizations—all of that stays on your machine. We leverage your Mac's silicon for everything we can.

### Rethinking Privacy

This was a fun trip, honestly. It forced us to think carefully: What does privacy actually mean? Who's responsible for protecting it?

I don't have all the answers. But I know this: I built the architecture I wanted to exist. One where I'd feel comfortable using it for my own sensitive thoughts.

If you're going to trust a tool with your voice, you deserve to know exactly what's protected and how.

That clarity is the real feature.`,
      zh: `这个功能来自一个很私人的需求。

我刚开始接触语音工具时，是真的担心：音频会被传到哪里？谁在听？我甚至不知道该怎么配置电脑才算安全。那种不确定感让我不敢把语音输入用于重要内容。

所以在做 Reso 时，我想把这个问题真正解决，不只是给自己凑合用，而是从架构上解决。

### 最初的挣扎：全部本地化？

我第一反应是把*所有*环节都放在本地。不要云，不要 API，彻底隐私。

我差不多花了两个月去试这条路：不同本地 LLM、量化版本、GPU 优化，甚至尝试利用 Apple Neural Engine 加速。

硬件层面并非做不到，30+ GB VRAM 看起来很充裕。但现实是：
- 你不会想仅仅打开一个应用就“烧掉”这么多算力
- 本地模型在推理和抽象能力上仍落后于头部 API
- 语言处理质量离我想要的标准还有差距

如果模型体验达不到用户应得的水平，强行全本地就是削足适履。

### 重新定义问题

于是我们退一步问：**隐私到底是什么？**

拆开看，最关键其实是两件事：
1. **PII（Personally Identifiable Information）** —— 姓名、号码、敏感术语
2. **你的声纹** —— 代表“你是谁”的独特声学特征

用这个框架看，架构路径就清楚了。

### 我们最后的方案

**1. 声纹永远留在本地。**

原始音频绝不离开你的 Mac。转写完全在设备端完成，使用运行在 Apple Silicon 上的优化版 Whisper。这一点不可妥协。

**2. 文本外发前先脱敏。**

转写后我们会扫描敏感模式：姓名、电话、邮箱、你自定义的敏感词。然后替换成随机 token：

\`\`\`
Original: "Call John at 555-1234 about Project Phoenix"
Masked:   "Call [PERSON_1] at [PHONE_1] about [SENSITIVE_1]"
\`\`\`

只有脱敏后的文本才会接触云端。

**3. 云端只接入信誉供应商。**

脱敏文本会发送到 OpenAI 或 Anthropic 这类数据政策更清晰的服务商。我们无法控制一切，但我们至少把系统构造成“就算发生泄漏，没有上下文也没有意义”。

**4. 其余能力尽可能本地运行。**

discovery 算法、clustering、芯片级优化都在你的机器上执行。我们尽可能榨干 Mac 本地算力。

### 对隐私的再理解

这段旅程其实挺有意思。它逼着我们认真想：隐私到底意味着什么？谁应该为它负责？

我没有全部答案。但我确定一点：我做出了自己愿意放心使用的架构，愿意拿它处理真正敏感的想法。

如果你要把自己的声音交给一个工具，你有权知道它到底保护了什么、怎么保护。

这种清晰度，本身就是功能。`,
      ja: `この機能は、とても個人的な不安から生まれました。

音声ツールを触り始めた頃、私は本気で心配していました。音声はどこへ行くのか。誰が聞くのか。安全だと思える設定にする方法すら分からなかった。その不確実さのせいで、重要な内容に音声入力を使えませんでした。

だから Reso を作るとき、この問題をちゃんと解決したかった。自分向けの妥協ではなく、設計として。

### 最初の葛藤: 全部ローカルにする？

最初の直感は、*すべて*をローカル実行することでした。クラウドなし。API なし。完全プライバシー。

この方向に約2か月使いました。ローカル LLM の比較、量子化版、GPU 最適化、Apple Neural Engine の活用まで試しました。

ハード的には可能です。30+ GB の VRAM は大きい。でも現実はこうでした。
- アプリを開くだけでその計算資源を「燃やす」運用は現実的でない
- 推論や抽象化ではローカルモデルがトップ API にまだ届かない
- 言語処理品質が必要ラインに達しない

ユーザーが得るべき体験を満たせないなら、ローカル強制は本末転倒です。

### 問いの再定義

そこで一歩引いて問い直しました。**そもそもプライバシーとは何か？**

分解すると重要なのは2点です。
1. **PII (Personally Identifiable Information)**: 名前、番号、機微語
2. **あなたの声紋**: あなた固有の音響的シグネチャ

この定義にした瞬間、アーキテクチャは明確になりました。

### 実装したこと

**1. 声紋はローカル固定。**

生音声は Mac の外に出しません。転写は Apple Silicon 上の最適化 Whisper で完全オンデバイス実行。ここは妥協しません。

**2. テキストは送信前にサニタイズ。**

転写後に、名前・電話番号・メール・ユーザー定義語などの敏感パターンを検出し、ランダム token に置換します。

\`\`\`
Original: "Call John at 555-1234 about Project Phoenix"
Masked:   "Call [PERSON_1] at [PHONE_1] about [SENSITIVE_1]"
\`\`\`

クラウドへ行くのはサニタイズ済みテキストだけです。

**3. 送信先は信頼できる provider。**

マスク済みテキストは OpenAI や Anthropic に送ります。すべてを制御することはできませんが、漏えいしても文脈なしでは意味を成さない形にしています。

**4. それ以外はローカルで処理。**

discovery アルゴリズム、clustering、チップ最適化などは端末内で実行。Mac のシリコン能力を最大限使います。

### プライバシーを考え直す

正直、この旅は面白かったです。プライバシーの意味、そして守る責任の所在を真面目に考え直す機会になった。

私は全答えを持っていません。でも一つ確かなのは、自分が本当に安心して使える設計を作ったということです。敏感な思考にも使えると感じられる設計を。

音声をツールに預けるなら、何がどう守られているかを知る権利があります。

その透明性こそが、本当の機能です。`,
    },
  },
  {
    id: 4,
    date: 'Aug 2025',
    category: 'Product',
    title: {
      en: 'From Vision to Code: Building Architect Mode',
      zh: '从视觉到代码：打造 Architect Mode',
      ja: 'ビジョンをコードへ: Architect Mode を作る',
    },
    summary: {
      en: 'How I built a feature that eliminates the friction between seeing exactly what needs to change and communicating it to AI coding assistants.',
      zh: '我如何做出一个功能，消除“看见该改什么”和“把它准确告诉 AI 编码助手”之间的摩擦。',
      ja: '何を直すべきかを「見えている状態」から、AI coding assistant に正確に伝えるまでの摩擦を消す機能を作った話。',
    },
    content: {
      en: `As developers, we often know *exactly* what we want to build. The bottleneck isn't understanding—it's communication.

When I'm polishing UI details in Cursor or Windsurf, I can see precisely what needs adjustment: this shadow needs 2px more blur, that spacing is 4px too tight, this hover state needs a subtle lift animation. I know the exact CSS properties. I know the design rationale.

But typing all of that out? Describing which element I'm referring to, its location, the surrounding context? That's where time gets wasted.

**Architect mode exists to eliminate that friction.**

### The Problem: Context Is Expensive to Type

Consider a typical refinement task: adjusting a button's visual weight.

Without Architect mode, I'd write something like:

> "In the hero section, there's a primary CTA button with the text 'Get Started'. It currently has a subtle shadow. I want to increase the shadow to make it more prominent—something like 0 4px 12px rgba(0,0,0,0.15). Also add a hover state that lifts it slightly, maybe translateY(-1px) with a transition..."

That's 60+ words just to describe what I could *point at* in 2 seconds.

### The Solution: Point, Speak, Execute

Architect mode combines screen capture with voice input:

1. **Double-tap Option** → Overlay appears
2. **Draw a box** around the exact element (no ambiguity about "which button")
3. **Speak your intent**: "Stronger shadow, subtle lift on hover, 200ms ease-out"
4. **Double-tap Option** → Structured spec generated

The output is precise and actionable:

> "Update the primary CTA button in the hero section:
> - box-shadow: 0 4px 12px rgba(0,0,0,0.15)
> - hover: translateY(-1px), box-shadow: 0 6px 16px rgba(0,0,0,0.18)
> - transition: all 200ms ease-out
> - Verify WCAG AA contrast ratio maintained"

This drops directly into Cursor. No reformatting. No clarification needed.

### Engineering Challenges

Building this required solving several hard problems:

**1. Latency budget**: Multimodal LLMs (GPT-4V, Claude 3.5 Sonnet) are slow. I implemented aggressive image compression and streaming responses to keep the interaction feeling snappy.

**2. Prompt precision**: Early iterations produced generic suggestions. The final system prompt (~300 words) enforces specific output: exact CSS values, component identification, and accessibility considerations.

**3. Context preservation**: The LLM needs to understand not just what you're pointing at, but the surrounding design system context. I extract color palettes and spacing patterns from the visible UI.

### Why This Matters

This isn't about replacing technical knowledge—it's about **removing the translation layer** between vision and execution.

When you're deep in a polishing session, iterating on micro-interactions and visual details, the last thing you want is to context-switch into "prompt writing mode." Architect mode keeps you in flow.

The best tools don't change how you think. They just remove the friction between thinking and doing.`,
      zh: `作为开发者，我们通常都*非常清楚*自己想改什么。真正的瓶颈往往不是理解，而是沟通。

当我在 Cursor 或 Windsurf 里打磨 UI 时，我能精确看到问题：这个阴影要再糊 2px，那个间距紧了 4px，这个 hover 需要一个轻微上浮动画。CSS 属性我知道，设计理由我也知道。

问题是，把这些完整打出来很费时：要描述是哪个元素、在页面哪里、上下文是什么。时间就耗在这里。

**Architect mode 就是为了解决这层摩擦。**

### 问题：上下文靠打字太贵

拿一个常见任务来说：调整按钮视觉权重。

没有 Architect mode 时，我可能要这样写：

> “在 hero 区域有个主 CTA，文案是 ‘Get Started’。它现在有个比较轻的阴影。我想把阴影加强一点，比如 0 4px 12px rgba(0,0,0,0.15)。另外加个 hover 上浮效果，类似 translateY(-1px)，配个过渡……”

只是描述一个我 2 秒就能*指给你看*的对象，却要写 60+ 个词。

### 方案：指一下，说一句，直接执行

Architect mode 把屏幕选区和语音输入结合起来：

1. **双击 Option** -> 出现覆盖层
2. **框选元素**（不再有“到底哪个按钮”的歧义）
3. **说出意图**：“阴影更明显，hover 微上浮，200ms ease-out”
4. **再双击 Option** -> 自动生成结构化规格

输出会很具体、可执行：

> “Update the primary CTA button in the hero section:
> - box-shadow: 0 4px 12px rgba(0,0,0,0.15)
> - hover: translateY(-1px), box-shadow: 0 6px 16px rgba(0,0,0,0.18)
> - transition: all 200ms ease-out
> - Verify WCAG AA contrast ratio maintained”

这段可以直接贴进 Cursor，不用重排，也不用补充解释。

### 工程实现难点

要做成这件事，得解决几个硬问题：

**1. Latency budget**：多模态 LLM（GPT-4V、Claude 3.5 Sonnet）本身偏慢。我做了激进图像压缩和流式返回，让交互保持“跟手”。

**2. Prompt precision**：早期版本容易给泛泛建议。最终系统 prompt（约 300 词）强约束输出格式：精确 CSS 数值、组件识别、可访问性要求。

**3. Context preservation**：LLM 不能只看你框了什么，还要看设计系统上下文。我会从可见 UI 中提取配色和间距模式，补齐语境。

### 为什么重要

这不是在替代技术能力，而是在**移除视觉到执行之间的翻译层**。

当你正在打磨微交互和视觉细节时，最不想做的就是切换到“写 prompt 模式”。Architect mode 让你保持 flow。

好的工具不会改变你思考方式，它只是把“想法 -> 行动”的摩擦降到最低。`,
      ja: `開発者はたいてい、何を作るかを*正確に*分かっています。詰まるのは理解ではなく、伝達です。

Cursor や Windsurf で UI を磨いているとき、直したい点は明確です。このシャドウは 2px ぼかしを足す、この余白は 4px 詰める、この hover は少し持ち上げる。必要な CSS も、設計意図も分かっている。

でもそれを全部タイプで説明するのが重い。どの要素か、どこにあるか、周辺文脈は何か。時間はそこに消えます。

**Architect mode はその摩擦を消すために作りました。**

### 問題: 文脈は打鍵コストが高い

典型例として、ボタンの見た目の重みを調整するケースを考えます。

Architect mode がないと、次のように書くことになります。

> "hero セクションに 'Get Started' と書かれた primary CTA ボタンがあります。今は薄いシャドウです。もう少し強くしたいので、0 4px 12px rgba(0,0,0,0.15) くらいに。hover では translateY(-1px) で軽く持ち上がる遷移も..."

2秒で*指せる*内容のために、60語以上使ってしまう。

### 解決: 指す、話す、実行する

Architect mode はスクリーンキャプチャと音声入力を組み合わせます。

1. **Option をダブルタップ** -> オーバーレイ表示
2. **対象を囲む**（「どのボタン？」の曖昧さが消える）
3. **意図を話す**: "シャドウ強め、hover で軽く浮上、200ms ease-out"
4. **Option を再度ダブルタップ** -> 構造化 spec を生成

出力はそのまま実装可能です。

> "Update the primary CTA button in the hero section:
> - box-shadow: 0 4px 12px rgba(0,0,0,0.15)
> - hover: translateY(-1px), box-shadow: 0 6px 16px rgba(0,0,0,0.18)
> - transition: all 200ms ease-out
> - Verify WCAG AA contrast ratio maintained"

Cursor にそのまま貼れる。整形不要、補足説明不要です。

### エンジニアリング上の難所

実装にはいくつか難題がありました。

**1. Latency budget**: マルチモーダル LLM（GPT-4V、Claude 3.5 Sonnet）は遅い。強めの画像圧縮と streaming response を入れて、操作感を保ちました。

**2. Prompt precision**: 初期は抽象的な提案が出やすかった。最終 system prompt（約300語）で、正確な CSS 値、コンポーネント特定、アクセシビリティ配慮を強制しました。

**3. Context preservation**: LLM は指した対象だけでなく、周辺デザインシステムも理解する必要があります。可視 UI から色パレットと余白パターンを抽出して文脈を補っています。

### なぜ重要か

これは技術知識の代替ではありません。**ビジョンと実装の間にある翻訳レイヤーを取り除く**ためのものです。

マイクロインタラクションや見た目調整に没頭しているとき、最後にやりたいのは「prompt を書くモード」への切り替えです。Architect mode は flow を維持します。

優れたツールは思考法を変えません。思考と実行の摩擦を減らすだけです。`,
    },
  },
  {
    id: 3,
    date: 'Jul 2025',
    category: 'Engineering',
    title: {
      en: 'The Recording That Never Dies',
      zh: '不会消失的录音',
      ja: '消えない録音',
    },
    summary: {
      en: "Why I built Shadow Recording—a crash-resilient audio system that writes incrementally, so even kernel panics can't kill your ideas.",
      zh: '我为什么做了 Shadow Recording：一种增量写盘、抗崩溃的录音系统，让 kernel panic 也带不走你的想法。',
      ja: 'kernel panic でもアイデアを失わないように、増分書き込み型でクラッシュ耐性を持つ Shadow Recording を作った理由。',
    },
    content: {
      en: `I've lost voice recordings before. App crashes, battery dies, system freezes—poof, gone.

That sinking feeling of "I just spent 10 minutes articulating something important and now it's lost" is devastating.

When I started building Reso, I made a promise: **This will never happen.**

### The Traditional Approach (And Why It Fails)

Most recording apps work like this:
1. Start recording → audio buffered in memory
2. Stop recording → write audio file to disk
3. Return the file path

**Problem**: If the app crashes between steps 1 and 2, the audio is gone forever.

macOS apps crash. Power cables get yanked. Kernel panics happen (rarely, but they do).

### The Solution: Incremental Writes

What if we wrote audio *while recording*, not after?

Here's how Shadow Recording works:
1. Recording starts → create a timestamped M4A file immediately
2. As audio chunks arrive, append them to the file *on disk*
3. If the app crashes, the file is already there

**Result**: Even if Reso explodes mid-sentence, your recording survives.

### The Implementation Details

This sounds simple, but M4A is a complex format. You can't just naively append raw audio bytes—the file would be corrupted.

I had to:
1. Use a streaming audio encoder that supports incremental writes
2. Ensure the M4A container is "valid" even if writing stops abruptly
3. Handle file cleanup (old shadow recordings can't pile up forever)

We keep shadow recordings for 7 days. After that, they're auto-deleted. This prevents unbounded storage growth while giving you a safety net.

### What I Learned

**The best features are the ones users never notice.**

Shadow Recording has saved dozens of recordings from crashes. But users don't think "wow, shadow recording is great!" They just think "Reso is reliable."

That's exactly what I wanted.

Reliability isn't sexy. It doesn't make for good demos. But it's the foundation of trust.

When you know your ideas are safe, you use the tool differently—you're willing to capture half-formed thoughts, experiments, mistakes.

That's when a tool stops being a utility and becomes part of your thinking process.`,
      zh: `我以前丢过录音。应用崩溃、电池没电、系统卡死——啪，没了。

那种“我刚花 10 分钟讲清一件重要的事，结果全没了”的下坠感，非常难受。

所以在开始做 Reso 时，我给自己立了一个约束：**这件事绝不能再发生。**

### 传统做法（以及它为什么会失败）

大多数录音应用的流程是：
1. 开始录音 -> 音频先缓存在内存
2. 停止录音 -> 再写文件到磁盘
3. 返回文件路径

**问题**：如果在步骤 1 和 2 之间崩溃，录音会永久丢失。

macOS 应用会崩。电源线会被拔。Kernel panic 也会发生（虽然不常见）。

### 解决方案：增量写盘

如果我们在录音过程中就持续写盘，而不是结束后一次性写呢？

Shadow Recording 的做法是：
1. 录音开始 -> 立刻创建带时间戳的 M4A 文件
2. 每当音频 chunk 到达，就追加到*磁盘文件*
3. 即使应用崩溃，文件也已经存在

**结果**：哪怕 Reso 在你说到一半时炸掉，录音仍能保住。

### 实现细节

听起来简单，但 M4A 格式并不简单。不能把原始音频字节直接拼接，否则文件会损坏。

我需要：
1. 使用支持增量写入的流式编码器
2. 确保即使中断写入，M4A 容器也保持“可读有效”
3. 处理文件清理（旧 shadow 录音不能无限堆积）

我们把 shadow 录音保留 7 天，之后自动删除。既提供安全兜底，也避免存储无限增长。

### 我学到的

**最好的功能，往往是用户注意不到的功能。**

Shadow Recording 已经从崩溃里救回了很多录音。但用户不会说“这个 shadow recording 真棒”，他们只会说“Reso 很可靠”。

这正是我想要的结果。

可靠性不花哨，演示时也不抢眼，但它是信任的地基。

当你知道自己的想法是安全的，你会更敢去记录半成品想法、实验和错误。

那时工具就不再只是工具，而会成为你思考过程的一部分。`,
      ja: `私は過去に録音を失ったことがあります。アプリクラッシュ、バッテリー切れ、システムフリーズ。全部一瞬で消える。

「大事なことを10分かけて話したのに失った」というあの落下感は本当にきつい。

Reso を作り始めたとき、私は一つ約束しました。**これは二度と起こさない。**

### 従来方式（となぜ失敗するか）

多くの録音アプリはこう動きます。
1. 録音開始 -> 音声はメモリにバッファ
2. 録音停止 -> その後ディスクへ書き出し
3. ファイルパスを返す

**問題**: 1 と 2 の間で落ちたら、音声は永遠に失われます。

macOS アプリは落ちます。電源ケーブルは抜けます。kernel panic も稀に起きます。

### 解決策: 増分書き込み

録音後ではなく、録音中に*書けば*いいのでは？

Shadow Recording は次の流れです。
1. 録音開始と同時に、タイムスタンプ付き M4A を即作成
2. 音声 chunk が来るたび、*ディスク上のファイル*へ追記
3. 途中で落ちても、ファイル自体は残っている

**結果**: Reso が話の途中で落ちても録音は生き残る。

### 実装の詳細

単純そうですが、M4A は複雑です。生バイトを雑に追記すると壊れます。

必要だったのは以下です。
1. 増分書き込み対応の streaming encoder を使う
2. 途中停止でも M4A コンテナを有効状態に保つ
3. 古い shadow 録音の掃除を行う（無限に積まない）

shadow 録音は 7 日保持し、その後自動削除します。安全網を持ちつつ、ストレージ肥大化を防ぎます。

### 学んだこと

**最高の機能は、ユーザーが気づかない機能です。**

Shadow Recording はクラッシュから多数の録音を救いました。でもユーザーは「shadow recording すごい」とは言わない。「Reso は信頼できる」と言う。

それが狙いでした。

信頼性は派手じゃない。デモ映えもしない。でも信頼の土台です。

アイデアが守られると分かっていると、使い方が変わります。未完成の考え、実験、失敗まで記録できるようになる。

そのときツールは単なる utility を超えて、思考プロセスの一部になります。`,
    },
  },
  {
    id: 2,
    date: 'Jun 2025',
    category: 'Performance',
    title: {
      en: 'Obsessing Over 10x',
      zh: '为 10x 执着',
      ja: '10x への執念',
    },
    summary: {
      en: 'How I spent two weeks hunting down compiler flags and CoreML optimizations to make transcription 10x faster than standard builds.',
      zh: '我如何花两周追编译参数和 CoreML 优化，把转写速度做到标准构建的 10 倍。',
      ja: 'compiler flag と CoreML 最適化を2週間追い込み、標準ビルド比 10x の転写速度にした話。',
    },
    content: {
      en: `I'll admit it: I'm obsessed with performance.

Not in a "premature optimization" way—I know the rule. But Reso's entire value proposition is **real-time transcription**. If it lags, it's useless.

When I first got Whisper.cpp running on Apple Silicon, I was excited. It worked! But then I checked the metrics:

**0.12x real-time speed.**

Translation: An 8-second audio clip took 66 seconds to transcribe.

That's... not real-time.

### The First Breakthrough: CoreML

Whisper has two parts: an encoder (heavy) and a decoder (lighter).

The encoder is what crushes CPUs. But Apple Silicon has a dedicated Neural Engine for exactly this kind of work.

I found a CoreML-compiled version of the Whisper encoder. Adding it was straightforward:
- CPU encoder: 0.12x speed
- **CoreML encoder: 3.2x speed**

Better! But still not enough. I wanted **10x**.

### The Second Breakthrough: Compiler Optimization

Here's where it got weird.

Whisper.cpp is written in C++. When you build a Swift app in Xcode, it optimizes *Swift code* aggressively—but treats C++ dependencies like third-party libraries and barely touches them.

I discovered you can pass custom compiler flags to the C++ build:
\`\`\`bash
-Xcc -O3           # Max optimization level
-Xcc -flto=thin    # Link-time optimization
\`\`\`

**LTO (Link-Time Optimization)** is the secret sauce. It analyzes the entire compiled program and inlines functions across file boundaries, eliminating overhead.

After adding these flags:
- Xcode build: 3.2x speed
- **Optimized build: 10.6x speed**

I nearly fell out of my chair.

### The Cost of Knowledge

Here's the frustrating part: This isn't documented anywhere obvious.

I found it by:
1. Reading Whisper.cpp GitHub issues
2. Experimenting with compiler flags
3. Profiling dozens of builds with Instruments

It took two weeks of trial and error.

But the result: Reso transcribes audio **faster than you can speak it**. On an M2 Pro, an 8-second clip processes in 0.75 seconds.

### Why This Matters

Speed isn't just a feature—it changes *how* you use a tool.

When transcription is instant, you stop thinking about it. You just record, and the text appears.

That's the difference between a tool you *use* and a tool you *forget is even running*.

The best tools disappear.`,
      zh: `我得承认：我对性能有点执着。

不是那种“过早优化”式执着，我知道那条规则。但 Reso 的核心价值就是**实时转写**。一旦卡顿，它就失去意义。

我第一次把 Whisper.cpp 跑在 Apple Silicon 上时很兴奋。它能跑了！但我一看指标：

**0.12x 实时速度。**

翻译一下：8 秒音频要 66 秒才能转写完。

这显然不算实时。

### 第一个突破：CoreML

Whisper 由两部分组成：encoder（重）和 decoder（相对轻）。

真正压垮 CPU 的是 encoder。而 Apple Silicon 正好有 Neural Engine 来干这类事。

我找到了一个 CoreML 编译版的 Whisper encoder，接入并不复杂：
- CPU encoder：0.12x
- **CoreML encoder：3.2x**

好很多，但还不够。我想要 **10x**。

### 第二个突破：编译优化

真正离谱的地方在这里。

Whisper.cpp 是 C++ 写的。你在 Xcode 里构建 Swift 应用时，Swift 代码会被激进优化，但 C++ 依赖常常被当作第三方库，优化很有限。

后来我发现可以给 C++ 构建传自定义 compiler flags：
\`\`\`bash
-Xcc -O3           # Max optimization level
-Xcc -flto=thin    # Link-time optimization
\`\`\`

**LTO（Link-Time Optimization）** 是关键。它会跨文件分析整个编译结果并内联函数，减少很多额外开销。

加上这些参数后：
- Xcode 默认构建：3.2x
- **优化后构建：10.6x**

我当时差点从椅子上站起来。

### 知识成本

最让人抓狂的是：这些信息没有明显文档告诉你。

我是靠下面这些方式挖出来的：
1. 翻 Whisper.cpp 的 GitHub issues
2. 一个个试 compiler flags
3. 用 Instruments 做几十次 profile

前后折腾了两周。

但结果值得：Reso 的转写已经**比你开口说话还快**。在 M2 Pro 上，8 秒音频大约 0.75 秒处理完。

### 为什么重要

速度不只是一个 feature，它会改变你*如何使用*工具。

当转写几乎即时，你就不再思考“它快不快”。你只负责说，文本自动出现。

这就是“你在使用一个工具”和“你几乎忘记它存在”之间的差别。

最好的工具会消失在体验里。`,
      ja: `認めます。私は性能に取り憑かれています。

とはいえ「premature optimization」的な話ではありません。ルールは分かっている。でも Reso の価値は **real-time transcription** にあります。遅ければ意味がない。

Whisper.cpp を Apple Silicon で初めて動かしたときは興奮しました。動いた！ でも指標を見たらこうでした。

**実時間の 0.12x。**

つまり 8 秒の音声に 66 秒かかる。

それは…リアルタイムではない。

### 1つ目の突破: CoreML

Whisper は encoder（重い）と decoder（軽め）で構成されます。

CPU を潰すのは encoder。Apple Silicon にはこの種の処理向けに Neural Engine があります。

CoreML コンパイル済み encoder を見つけて組み込むと、結果はこうなりました。
- CPU encoder: 0.12x
- **CoreML encoder: 3.2x**

改善はした。でも足りない。欲しいのは **10x**。

### 2つ目の突破: compiler 最適化

ここからが妙でした。

Whisper.cpp は C++。Swift アプリを Xcode でビルドすると、Swift は強く最適化される一方、C++ 依存は第三者ライブラリ扱いで最適化が弱いことがある。

そこで C++ 側に custom compiler flags を渡せると分かりました。
\`\`\`bash
-Xcc -O3           # Max optimization level
-Xcc -flto=thin    # Link-time optimization
\`\`\`

**LTO (Link-Time Optimization)** が効きます。プログラム全体を解析し、ファイル境界を越えて関数をインライン化し、オーバーヘッドを削る。

この flags 追加後の結果：
- Xcode build: 3.2x
- **Optimized build: 10.6x**

椅子から落ちそうになりました。

### 知識のコスト

いちばん厄介なのは、これが分かりやすく文書化されていないことです。

私は次の手順で辿り着きました。
1. Whisper.cpp の GitHub issues を読む
2. compiler flags を実験する
3. Instruments で何十ビルドもプロファイルする

試行錯誤に2週間。

でも結果は大きい。Reso は **話す速度より速く** 文字起こしできます。M2 Pro なら 8 秒クリップを 0.75 秒で処理。

### なぜ重要か

速度は単なる機能ではなく、ツールの使い方そのものを変えます。

転写が即時なら、速度を意識しなくなる。録音すれば文字が出るだけ。

それは「使っているツール」と「動いていることを忘れるツール」の違いです。

最高のツールは存在感を消します。`,
    },
  },
  {
    id: 1,
    date: 'May 2025',
    category: 'Vision',
    title: {
      en: 'Why I Built This',
      zh: '我为什么做这个',
      ja: 'これを作った理由',
    },
    summary: {
      en: 'Reso exists to handle the wording and structuring, so you can spend more time contemplating, creating, and building.',
      zh: 'Reso 的意义是接管措辞和结构化，让你把时间留给思考、创造与构建。',
      ja: 'Reso は言語化と構造化を引き受け、あなたが思考・創造・構築に時間を使えるようにするためにある。',
    },
    content: {
      en: `There's an inherent tension in how we express ideas: speaking is fragmented, scattered, full of pauses and restarts. But writing—typing—is one of the most fluent forms of human expression.

The gap between the two is where ideas get lost.

### The Real Problem

I wanted to free up more time for building. Not transcription—*building*. The kind of deep work where you're creating, thinking, designing.

Typing takes time. Editing takes more. And when your thoughts come out messy (as spoken thoughts always do), you end up spending hours polishing what should have taken minutes.

**What if someone else handled the wording and structuring?** What if you could just *think*, and the clean output appeared?

That's what Reso does. We take care of the typing so you can focus on contemplating.

### More Than a Voice Recorder

There are plenty of recording tools and transcription APIs out there. But going from a raw thought to a usable artifact—and eventually to a *thought partner*—that journey matters.

Reso helps you:
- **Discover ideas** you didn't know you had
- **Reflect** on how you think, not just what you think
- **Track** how your time flows and what you're building

When I look back at my voice notes from months ago, I'm not just reading words. I'm seeing where my time went. What I got right. How my thinking evolved. It's a record of building—and a tool for self-discovery.

### Why Voice Is Different

Voice carries emotion in ways typing never can. That's exactly why it should stay private.

You don't want your raw recordings floating around the internet. But sharing polished text? That's depersonalized. Desensitized. Safe.

So Reso is built around three principles:
1. **Lighten the output burden** — speak freely, get clean results
2. **Privacy-first architecture** — your voice stays on your device
3. **Smart enough to understand** — learns your workflows and adapts

### The Long Game

Sometimes you'll record a scattered thought while holding your cat, hands-free, not thinking much of it. A year later, you'll look back and realize: *that was the seed of something important*.

Fragmented voice notes become fascinating over time. Where did my time go? What did I build? What patterns emerge?

I've always needed something like this. Drawing from my background in scientific research, I know that the best insights often come from revisiting raw observations with fresh eyes.

### Not Just a Recorder—A Thought Partner

This is why we named it Reso—short for *Resonate*.

We're not building a voice memo app. We're building a workflow that understands you. One that helps you succeed by getting out of your way and letting you think.

The goal isn't to capture your voice. It's to **resonate with how you work**.`,
      zh: `在表达想法这件事上，有一个天然张力：说话是碎片化的、跳跃的，充满停顿和重启；但写作（尤其是打字）又是人类最流畅的表达形式之一。

想法最容易丢失，就发生在这两者之间的缝隙里。

### 真正的问题

我想释放更多时间去做 build。不是做转写本身，而是*构建*——那种需要深度思考、创造和设计的工作。

打字要时间，编辑更耗时。尤其当你的思路像口语一样天然凌乱时，你会花几个小时打磨本应几分钟完成的内容。

**如果措辞和结构化可以交给别的东西处理呢？** 如果你只需要*思考*，干净结果就能出现呢？

这正是 Reso 在做的事。我们接管输入劳动，让你把注意力放回思考本身。

### 不只是录音工具

市场上并不缺录音工具和转写 API。但从“原始想法”走到“可用产物”，再走到“思维伙伴”，这段路径本身才关键。

Reso 帮你：
- **发现想法**：看见你原本没意识到的线索
- **反思思维**：不仅看你在想什么，也看你是怎么想的
- **追踪时间**：理解你的时间流向和你真正在构建什么

当我回看几个月前的语音笔记，我不只是看文字。我看到的是时间去了哪里、哪些判断做对了、思路怎么演化了。它既是构建记录，也是自我发现工具。

### 为什么语音不一样

语音携带的情绪信息，是打字很难承载的。也正因为如此，它应该被更严格地保护。

你不会希望原始录音在互联网上漂流。但经过整理的文本可以被去个性化、去敏感化，变得更安全。

所以 Reso 以三个原则为核心：
1. **减轻输出负担** —— 自由说，得到干净结果
2. **隐私优先架构** —— 你的声音留在你的设备
3. **足够聪明地理解你** —— 学习你的 workflow 并持续适配

### 长期视角

有时你会在抱着猫、双手腾不开的状态下随口记录一个零散想法。当下你未必在意。一年后回看，才发现：*那是某件重要事情的种子*。

碎片化语音笔记会随着时间变得越来越有意思：我的时间去了哪里？我到底做成了什么？有什么模式在反复出现？

我一直需要这样的工具。受科学研究训练影响，我很清楚：最好的洞察，常常来自对原始观察数据的反复回看。

### 不只是 Recorder，而是 Thought Partner

这也是我们把它命名为 Reso（Resonate 的缩写）的原因。

我们不是在做语音备忘录 App，而是在做一个真正理解你的 workflow。它通过“少打扰你”来帮助你成功，让你把精力放回思考。

目标不是收集你的声音，而是**与你的工作方式共振**。`,
      ja: `アイデア表現には、もともと緊張関係があります。話すことは断片的で、飛びがあって、言い直しや間が多い。一方で書くこと、つまりタイピングは人間の最も流暢な表現の一つです。

この2つの間のギャップで、アイデアは失われます。

### 本当の問題

私が増やしたかったのは、転写の時間ではなく build の時間です。作る、考える、設計する深い作業の時間。

タイピングには時間がかかる。編集にはもっとかかる。話し言葉由来の散らかった思考を整えるために、本来数分で済むはずのことへ何時間も使ってしまう。

**もし言語化と構造化を別レイヤーが引き受けたら？** もしあなたはただ*考える*だけで、整った出力が現れたら？

それをやるのが Reso です。入力の負担を引き受け、あなたを思考に戻す。

### ただの録音ツールではない

録音ツールや転写 API は世の中に十分あります。けれど「生の思考」から「使える成果物」、そして最終的に「thought partner」へ進む道筋こそ重要です。

Reso が助けるのは次の3点です。
- **発見する**: 自分でも気づかなかったアイデアを見つける
- **内省する**: 何を考えたかだけでなく、どう考えたかを見る
- **追跡する**: 時間の流れと、自分が何を作ってきたかを把握する

数か月前の音声メモを見返すとき、私は単に文字を読むわけではありません。時間の使い方、正しかった判断、思考の変化が見える。build の記録であり、自己発見の道具でもあります。

### なぜ音声は特別か

音声はタイピングでは運べない感情を持っています。だからこそ、より強く守られるべきです。

生録音がネット上を漂うのは望ましくない。でも整えたテキストなら、個人性や感度を下げて共有しやすくできます。

そのため Reso は3つの原則で設計しています。
1. **出力負担を軽くする** — 自由に話し、整った結果を得る
2. **Privacy-first architecture** — 声は端末内に留める
3. **理解して適応する** — workflow を学習し、変化に合わせる

### 長期戦の視点

猫を抱いたまま、手を使わずに散らかった考えを録音することがある。その瞬間は大したことがない。でも1年後に見返して気づく。*あれが重要な種だった*。

断片的な音声メモは、時間が経つほど面白くなります。自分の時間はどこへ行ったのか。何を作ったのか。どんなパターンが現れるのか。

私はずっとこういう道具を必要としていました。科学研究の背景があるので、生データを後から見直すことが洞察を生むと知っているからです。

### Recorder ではなく Thought Partner

だから名前は Reso、*Resonate* の短縮です。

私たちが作っているのは音声メモアプリではありません。あなたを理解する workflow です。邪魔を減らし、考える余白を増やし、成功を支えるもの。

目標は声を集めることではない。**あなたの働き方に共鳴すること**です。`,
    },
  },
];

const SUPPORTED_JOURNEY_LANGUAGES = ['en', 'zh', 'ja'];

const mapPostsForLanguage = (language) =>
  localizedJourneyPosts.map(({ title, summary, content, ...rest }) => ({
    ...rest,
    title: title[language],
    summary: summary[language],
    content: content[language],
  }));

export const journeyPostsByLanguage = SUPPORTED_JOURNEY_LANGUAGES.reduce(
  (acc, language) => {
    acc[language] = mapPostsForLanguage(language);
    return acc;
  },
  {}
);

const normalizeLanguage = (language = 'en') =>
  (typeof language === 'string' ? language : 'en').toLowerCase().split('-')[0];

export const getJourneyPosts = (language = 'en') => {
  const normalizedLanguage = normalizeLanguage(language);
  return journeyPostsByLanguage[normalizedLanguage] || journeyPostsByLanguage.en;
};

export const journeyPosts = journeyPostsByLanguage.en;
