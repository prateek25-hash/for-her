"use client";

import { useState } from "react";
import Link from "next/link";
import { LetterCard } from "@/components/letter-card";
import { LetterModal } from "@/components/letter-modal";

const letters = [
  {
    id: 1,
    title: "Open when you want to know why I love you (Part 1)",
    icon: "💖",
    content: `Ohhh, I really love this part — putting my feelings into words, and this might sound like I’m exaggerating, but this is honestly how I feel about youuu, because there are so many reasons why I love u. I loveeeee uuuuuuuu for who you are, not just for how you look — though in my eyes you are the epitome of beauty — but beyond that, it’s the way you carry yourself, the way you show up in the world, the way you let others see you that makes me fall for you more. For me, you are the cutestttt, my kuchupuchuuuu, the sweetesttttt, my kaju katli, so adorable that if you were with me right now I would just look at you endlessly without blinking even for a second, running my fingers through your hair and over your cheeks, just trying to feel how real beauty actually feels. Ohhh your hair… ufffffff, another jewel to your beauty — everyone talks about it, how it adds to your elegance, how it makes you stand out, they are simply the bestttt, nazar na lage aapko, and then your eyes… hmmm, hypnotizing me into loving you more and more, like a black hole pulling me closer every time I look at them, and your long neck — obviously not longer than our distance, but still the most sexiestttt neck I could ever admire. I know you might think I’m exaggerating all this, that I’ve never seen you closely or touched you and still I’m writing like this, that maybe it’s all made up, but listen to me cutuuu, every word here is real, and I know that the day I finally see you and feel you, all of this will turn into pure facts (I’m writing this on 19th October — maybe we’ll meet after this, and I’ll surely add even more). so now we already met, i can say whatever i imagined about my love was beyond my expectations, words will always be less to define ur beauty in my eyes, because I love uuuu, cutuuuuuu. `,
  },
  {
    id: 2,
    title: "Open when you want to know why I love you (Part 2)",
    icon: "💚",
    content: `Since Letter 1 was all about the setup and physical beauty, about what I see through my eyes, this one is something much more special and much closer to my heart, because loving you, admiring you, and being with you is the best thing that could ever happen to me, and I feel so so so lucky to have you, my cutuuuuu, in my life. You are the most special person — the girl who loves me back with the same intensity or even more (lucky lucky me), the girl who puts the same amount of effort into the relationship, who understands the importance of trust and love, who reassures me at every stage of life, who makes me understand things and also understands the other person. You were always with me — when I was happy, you cheered for me the loudest, when I was sad, you stayed with me, helped me see things from a different point of view, when it was bakchodi time you matched my energy and took it to the next level with me, you were with me during love talks and even during gandi gandi baate, and that’s when I truly understood that love grows when efforts are equal from both sides, and with you, my darling, I actually experienced this. From 14th June till today, I’ve been the happiest and luckiest person, and all of this is because you were there with me. Before coming into a relationship with you, I was someone who overthought a lot and carried insecurity inside me, but after meeting you, that slowly changed — thanks to youuu cutuuu — because of you I learned how to truly love a girl, how to express my feelings, how to compliment a girl (obviously you), what to say and what not to say, and how to love in a way that feels real and safe. So all in all, I loveee youuuu veryyyy muchhhhhh, and I will continue to loveee youuuuuuuu forever.`,
  },
  {
    id: 3,
    title: "Open when you want to remember our beginning",
    icon: "💕",
    content: `Obviously, we knew each other for the last three years, but the auspicious day of 14th June holds a very special place in my heart — and I know in yours too — because that was the day that marked the real beginning of us, a day and a date I can never ever forget, truly special. And for this, the credit goes to both of us, but a little extra to youuu, because I still remember that afternoon so clearly — I had just woken up, and for a few days I had been noticing your likes on those Laughter Chef reels and kept thinking about sending you a snap, and that day I finally gathered all my courage and sent it, and the moment I did, I put my phone on charging pretending like I didn’t care, but deep down my heartbeat was racing like crazy, I was doing jhadu and constantly checking my phone, and then suddenly I saw that notification — “Prerna Pamnani sent you a chat” — uffffff, that moment, I swear I still feel it, and after finishing my jhadu I opened it and replied, and yeeeaaahhhhhhh… look at us now, look at where that one small moment has brought us, into something so beautiful, so real, so us.`,
  },
  {
    id: 4,
    title: "Open when you want to feel appreciated",
    icon: "💌",
    content: `If you’ve reached till here, I guess you’re smiling, blushing, or maybe even having tears in your eyes, and before moving forward just hold on for a second and take a deep breath, because this one is special. If you’re reading this, it means you’re having one of those moments where you need a small reminder of how incredible you truly are, how deeply you’re appreciated, and how much I adore you. This is honestly the most difficult part for me — writing about what you mean to me — because words can never ever justify your importance in my life, but still I’ll try, because you deserve that effort. You have been that person who genuinely made me happy, and every single moment with you was and still is so so so memorable. I know I’m not very expressive in general, but when it comes to you, I just want to pour my heart out, say everything I feel and everything you deserve to hear, and all I really want to say is thank you — thank you for choosing me, thank you for loving me (ahhhh my hands are actually shaking while writing this), thank you for being there for me, for waiting patiently when I’m not available, for reassuring me again and again with your love. You are that kind of person with whom ordinary days start feeling special, the kind of person I want to spend days and days with, and I never ever take that for granted. Forget materialistic love or lustful love — you remind me of what real love actually looks like, and in this toxic world, you are my peace. The excitement you show during our conversations, the way you lead the talks, the check-ins, the laughter, the bakchodi of course — all of this is exactly what I need, and I’m grateful that I get it from youuuuu. You inspire me every single day, you make me want to be a better person, not because you expect it, but because you believe in me, and for that I’ll always be thankful. I’m endlessly grateful for your presence in my life — for your kindness, your strength, and your beautiful heart — you are my safe place, my sunshine, and my favorite person to share this world with, so whenever you start doubting yourself, remember this: you are deeply appreciated, deeply adored, more than words could ever express, and you truly make a difference in my life and in the lives of everyone lucky enough to know you.`,
  },
  {
    id: 5,
    title: "Open when you want to dream about the future",
    icon: "🌟",
    content: `Okayyyyy, so since you made it till here — congratulations cutuuuuu, because this one is all about what we love to do most… being in our own little delusional world together. Just imagine this with me — it’s a bright, soft morning, the waves are kissing the shore, their rhythm filling the air, and sweet sunlight peeks through the curtains as we wake up, maybe cuddling… maybe?? Of course we’ll be cuddling, and the moment you wake up you run straight to the beach wearing one of my shirts, arms wide open, taking a deep breath of that salty air, while I’m in the kitchen watching you from the window, smiling like an idiot as the waves chase your feet, pretending to make breakfast but actually just standing there admiring my love, my peace, my calm in this noisy world. We’ll travel too — hand in hand, collecting memories instead of things, maybe chasing sunsets on distant beaches or maybe just sitting at our favorite stretch of sand, talking about everything and nothing, because every version of the future I can imagine has you in it — your laughter, your warmth, your heart right next to mine. Marriage, home, adventures — all of it will be beautiful, but what excites me the most are the ordinary days with you, the nights we fall asleep to the sound of waves and the mornings when we wake up and realize that even years later, we still choose each other, because you are my peace, my home, my forever dream, and no matter where the future takes us, as long as it’s with you, I’ll always be exactly where I belong.`,
  },
  {
    id: 6,
    title: "Open when you miss me",
    icon: "💭",
    content: `If you’re reading this, it probably means you’re missing me — and I want you to know that I’m missing you too, more than you can imagine, because missing each other has been an essential part of our relationship right from day one, from being just friends to slowly becoming such an important and integral part of each other’s lives, spending whole days together even if it was virtual, still making it special, and somehow that physical distance only strengthened our bond. So before you read further, close your eyes for a second and take a deep breath — that little scent you feel, yeah, that’s me, my cologne, my warmth, my reminder that I’m still wrapped around you even from miles away. I don’t want to compete with you, but jitna tu mujhe miss karti hai na, usse kahi times zyada main teko miss karta hoon, I miss uuu veryyy much cutuuuu, and even though what we’re doing is sweet and also difficult at the same time, I want you to know that we built this bond together and we know how to take it forward — that’s our speciality. I know words can never replace physical presence, but still imagine this — my arms around you, pulling you closer, your head tucked under my chin (because of your short height), you clearly hearing my heartbeat and slowly syncing it with yours, fitting so perfectly there like that place was always meant just for you, my fingers running through your hair, giving you a soft head kiss, making you feel calm and comfortable, whispering in your ear that you’re safe, that I’m right here, that you’re my home. Remember those nights we stayed up talking about everything and nothing, laughing until time disappeared — that’s my favorite version of us, and no matter where we are, that connection never fades. So whenever you miss me, just close your eyes and feel me there, hear my voice teasing you, calling you cutuuuu, reminding you how much I love you, because you are my calm, my comfort, my home, and even when I’m not with you physically, my heart is always right there with you, telling you again and again how much this idiot loves her cutuuuu`,
  },
  {
    id: 7,
    title: "Open when you can’t sleep",
    icon: "🌙",
    content: `It’s sleeping time and I know your mind isn’t letting you rest, the usual irritating overthinking playing on loop in your head, and that’s not what I want for you at all, I wish I could be there right now, pulling you closer, hugging you tightly, cuddling you, and telling you softly to stop overthinking for a while, because if I were with you, we’d probably be talking about random shit, laughing like crazy, gossiping about random people, judging them to the core, and then at the end just saying thik hai yrrr, apne ko kya, apn to cuddle kroooo, and slowly, without even realizing it, you’d start feeling lighter. But since that’s not the reality right now, just plug in your earphones, put on your favorite music — maybe Atif, obviously it’ll be Atif — stare at the fan, let your thoughts slow down, let your breathing become calm, and try to sleep, and even if after all this you still can’t, that’s completely okay, just imagine me right beside you, my arms wrapped around you, cuddling you close, my fingers gently running through your hair, caressing you until your body relaxes and your mind finally rests, because you always fit so perfectly there, like that’s where you belong. Close your eyes now, love, take a deep breath, let go of everything that feels heavy tonight, and think about us — laughing, walking somewhere hand in hand, completely at peace, no rush, no worries, just us — and remember that I’m with you, darling, always and always, holding you even from afar, loving you endlesslyyy.`,
  },
  {
    id: 8,
    title: "Open when you feel stressed",
    icon: "💆‍♀️",
    content: `I know you’re feeling stressed right now, and everything might feel a little too much at once, like your mind isn’t getting even one second to rest, and I just want you to pause for a moment and breathe, because you don’t have to figure everything out right now. I wish I could be there beside you, holding your hand, telling you softly that it’s okay to slow down, that you’re doing better than you think and you don’t need to be so hard on yourself. You are stronger than you realize, you’ve handled so much already, and this is just another moment that you’ll get through, one step at a time. Whatever is making you anxious, remember that it doesn’t define you and it won’t stay forever, and even if it feels messy right now, I believe in you completely. So take a deep breath, relax your shoulders, unclench your jaw, and remind yourself that you’re not alone in this — I’m right here with you, always, cheering for you, loving you, and holding you steady even from afar.`,
  },
  {
    id: 9,
    title: "Open when you feel insecure",
    icon: "💎",
    content: `I honestly think you shouldn’t have opened this one, because you’re feeling insecure, and that’s not something I ever want my girl to feel about herself, how dare you question yourself, your worth, your beauty, but never mind, I’m here now, and I’ll make everything very clear for you. You, my bachhhaa, are enough, actually more than enough, exactly the way you are, you complete me, you are that missing piece of my life for which I’ll be forever grateful. I love the way you smile, and I love how your eyes gently close when you smile, it’s so damn cute, and your eyes… your eyes are one of the very first things I fell for, because they carry a whole universe inside them, so much purity, emotion, and love, sometimes I feel like they understand me even before I speak. I love your heart, the way you care so deeply and purely, the way you try for people you love, the way you feel things intensely and still choose kindness every single time. You are strong even on the days you feel soft, beautiful even on the days you don’t see it yourself, and incredibly lovable in ways you probably don’t even realize. You don’t need to compare yourself to anyone, you don’t need to be perfect, and you don’t need to change a single thing for me to love you more, because I already love you completely, your bakchodi, your sensitivity, your warmth, your smile, your soul, all of it. So whenever insecurity creeps in and tells you otherwise, remember this letter, remember my words, and remember that in my eyes, you are rare, precious, and deeply loved, always.`,
  },
  {
    id: 10,
    title: "When You’re Angry at Me",
    icon: "🔥",
    content: `I know, I know, ab tu soch rhi hogi, ab aayenge iske cover ups, ki baby me toh esa, me toh wesa, but no cover ups… okay ek-do aa bhi sakte hai, but listen cutuuu, you are my love and I loveee youuuu a lottttt, and I know I’m not perfect, sometimes I say or do things without realizing how they might affect you, and for that I’m genuinely sorry. I care about you more than myself, I don’t want to lose youuu, you matter to me more than anything, and you have every right to be mad at me, say whatever you feel, let it all out, I’ll wait for you, I’ll listen, and I’ll try to correct my mistake because I want to grow with you, not against you. And haa, abhi teko lag raha hoga ki iss pagal ko toh kuch samajh hi nahi aata, sab batao isko, kya galti hai iski, main gussa kyu hoon isse, aur jab sab bata bhi do toh ye banda galti maan-ne ki jagah cover up leke aa jaata hai saalaaaa,  which is fair, but just know this, even in your anger, you’re still my favorite person, and I’m still right here, choosing you. We’ll talk, we’ll sort it out, and we’ll come back stronger like we always do, and when this passes, I promise I’ll make it up to you with extra love, extra patience, and maybe some unnecessary cuddles (non-negotiable), because I love you, even when you’re mad at me… especially then.`,
  },
  {
    id: 11,
    title: "Open when you need a laugh",
    icon: "😂",
    content: `Wese to meko ni lgta ki teko yeh letter ki zarurat bhi hai, tujhe hasne ke liye khud ki bakchodi hi kaafi haii, kisi bhi faltu si cheez pr tu gebdo jesi hass skti hai. but kyuki iske pehle ke letters thode emotional ho gye honge to iski zarurat haii.
      I find myself the most happiest when im with uu, teri idhr udhr ki baate, bina mtlb ki kaand, choti choti baato pr muh faad ke hasna, mujhe bahut psnd hai. Lalllluuuuu, tu bahut mast hai yrrrrr. Mera tujhse gandi baate krna besharmo ki tarh and tera usme pura pura saath deke orr ganda bolna, frr ek dusre ko bolna ki kitne gande ho gye hai dono. Wo mera meowwwww, ghop ghop ghop krna or tera muskurana, oyeeee hoyeeeee. I like all of it. Tera bolte bolte bolte haklana, faltu kii cheeze bolna or uspr frr faade maar maar ke hasna. I’m missingggg uuuu yrrrrrr.
      Abhi bhi yeh sab padh ke tere face prr smile ni aayi na, to meko mere jokes level krne pdnge. Smile my lallluuu, because your laugh is my favorite sound`,
  },
  {
    id: 12,
    title: "Open when you want to smile",
    icon: "😊",
    content: `If you opened this, I know you just want a small, quiet smile — nothing loud, nothing heavy — so here it is. Remember when our conversations randomly shifted from deep talks to absolute nonsense in seconds and we didn’t even question it? We were like apn kuch imp baat krre the naa, or frrr pagalo jese haass rhe hai. Remember how you make the weirdest faces without realizing and then laugh even harder when I point it out? Remember the way you say the most normal thing but somehow make it sound cute I love that. I love the way your smile shows up unexpectedly, the way it reaches your eyes, the way it makes me feel like everything is okay for that moment. I love how you can turn an ordinary day into something special just by being you, just by talking, just by laughing. So if today feels dull or heavy, hold onto these little moments, because they’re real, they’re ours, and they always make me smile — just like you do, every single time.`,
  },
  {
    id: 13,
    title: "Open when you want something cheesy",
    icon: "🧀",
    content: `Yrr aapko toh pta hi hai me kitna chesssyyy hu, or hu bhi toh sirf aapke liye, because if loving you was ever a competition, I’d be winning it very easily — mujhse zyada pyaar toh aapko koi nahi kar sakta, obviously mumma papa ko side rakh ke . You’re that type of girl who makes songs make sense, because honestly whenever I listen to romantic songs, all I do is think of you, imagine you, feel you in every line. You are the best thing that could ever happen to me, and also, I’m pretty sure I’m the best thing that could ever happen to you too (hehehehe). Watching rom-coms with you and imagining ourselves in them was never on my wishlist, but it happened because you made it possible, and you loved me so effortlessly that sometimes I just feel blessed to have you in my life. I would always choose you, in every universe, every timeline, every mood, even when you’re sleepy or just effortlessly beautiful, and yes, this might sound cringe, chessyy, but this is the ultimate truth, and you also know, cringe until its our turn. I love you more than words, more than I could ever fully express to you.`,
  },
  {
    id: 14,
    title: "Open when you want to travel with me",
    icon: "✈️",
    content: `Travelling with you is honestly my top to-do, always, and today’s date is 7 Feb 2026, and aaj hi tune mujhe bola tha ki tera aur Harshi Mahi ka Somnath jaane ka plan ban raha hai, aur jab tune mujhse pucha, maine wo fuck kar diya — not because I don’t want to travel with you or don’t want to spend time with you, but because at that moment it just wasn’t possible and main tujhe false hopes nahi dena chahta tha, pehle hi kaafi de chuka hoon, isliye maine mana kara. But agar tu mujhse puche ki main tere saath sach mein kya karna chahta hoon, toh mera answer hamesha ek hi hoga — travelling together, around the world, all places, bas tere saath. You truly complete me, cutuuu, and I can’t wait for that day jab hum saath mein ghoomenge, chatar-patar thusenge, long walks pe jaayenge, bina kisi rush ke bas baatein karte hue. Main tere saath ek ya do jagah nahi, puri duniya ghoomna chahta hoon (obviously paise dono kama lenge), but sabse zyada jo mujhe pasand hai, wo ye hai ki main tere saath time spend karun, tujhe sunun, tere paas baithun, aur tujhe apne side pakad ke rakhun — I just love doing that, because tere saath har jagah destination ban jaati hai.`,
  },
  {
    id: 15,
    title: "Open when you're feeling nostalgic",
    icon: "📸",
    content: `Our every moment feels nostalgic to me, the way we started slowly, without knowing where we’d end up, just talking, sharing gossips, laughing endlessly, being there for each other day in and day out. I still remember those long chats, endless video calls, Google Meets, watching movies together, and how missing each other became normal but never easy. I often think about those moments and smile, realizing what a beautiful journey it has been with you, the excitement of seeing your name pop up in my notifications, the late-night chats, the way we confessed our emotions and our love, and the comfort we found in each other even from miles away, which still feels unreal to me. Every moment and every memory with you feels soft and warm, like something I can’t afford to lose, and even today, after everything, that feeling remains exactly the same. What we have was never accidental, it was built slowly, honestly, and with a lot of love, and I’m grateful for every version of us that brought us here.`,
  },
  {
    id: 16,
    title: "Open when you want to know my favorite memory",
    icon: "📖",
    content: `Choosing a favorite memory with you feels impossible, because every moment, every second with you feels like my favorite, but if I still had to choose, it wouldn’t be a place or a day, it would be the feeling of us, of we, of Bubu-Dudu. That is my favorite memory, the way we grew together, the way we slowly became such an important part of each other’s lives, intentionally or unintentionally, and somehow that makes it even sweeter. Those times when nothing extraordinary was happening, yet life felt complete because we had each other, just talking for hours, laughing at random things, sharing silence without it ever feeling awkward, feeling close even when we were miles apart. I still remember how peaceful it felt to just have you there, listening to you, being listened to, knowing that someone truly understands me and chooses me every single day. That feeling of comfort, safety, and quiet happiness, that’s my favorite memory with you, because it isn’t tied to one moment or one place, it’s tied to you, and every time I think about it, I realize how lucky I am to have found something so real, so warm, and so rare with you.`,
  },
  {
    id: 17,
    title: "Open when you want to feel safe",
    icon: "🛡️",
    content:
      "Abhi agr me tere pass hota toh, I would pull you closer, hug you tightly, and tell you how much I love you — how incredible, amazing, cute, smart, and beautiful you are, and how lucky I am to have you. I would tell you how every effort I make is totally worth it. But for now, just imagine me right there beside you, letting you rest your head where it feels the safest. With me, you don’t have to pretend (I guess you never did), and you don’t have to hide anything from me. I am always here to hold you, listen to you, and remind you that you are never alone. I’m right here, choosing you, standing with you, protecting your heart, and reminding you again and again that you are safe, you are loved, and you always will be.",
  },
  {
    id: 18,
    title: "When You Doubt Us",
    icon: "🤔",
    content:
      "Distance always tested us in the most cruel way, being it misunderstanding or the feeling of emptiness. There were time where one of us doesn’t feel good or when both of us has very low energy and despite of love, we tend to doubt each other. But mind my words cutuu, what we have was never built on temporary emotions or convenience, it was built slowly, with intention, effort, patience and a lot of love from both sides. We didn’t rush into this, we chose it, we chose each other, and we keep choosing it every day, through missed moments, long waits, difficult conversations and quiet understanding. Having a partner like u feels like a blessing, who makes efforts for things to work out, who asks what happened even if a deny it hundred of times. I won’t give u false hopes that everything will be easy, but i promise that i won’t stop choosing you, listening you and growing old with u. We are not perfect, but we are real to each other, and for me that’s what make a true relationship work. I’m here, I’m committed and no matter what happens I’ll always choose u.",
  },
  {
    id: 19,
    title: "Open when you want to know what I notice about you",
    icon: "👀",
    content: `The one thing I know I will never get bored of is noticing you. You probably don’t realize this, but I notice so many small things about you — like when you laugh (fade maarke) and your eyes gently close, the way you pause sometimes before saying something important, the excitement on your face when you want to share some tea, the joy I see in your eyes when you’re truly happy from inside, and the way you pretend to be strong even when you’re feeling soft. I notice everything. I notice how you care for the people who matter to you the most, how you randomly check on them, how you’re always there when needed, and how you remember the smallest details from conversations. I notice your random bakchodis, your sudden bursts of laughter, the way you get shy and blush (uffffff). I notice how your mood shifts when you’re tired, how you need reassurance but don’t always ask for it, and how you still put in effort even when you yourself are feeling low. I notice how you understand me, the patience you show, the way you help me understand things without reacting aggressively. And maybe you think these are small things, but to me, they are everything — and they make me fall for you more and more every single day.`,
  },
  {
    id: 20,
    title: "Open when you want poetry",
    icon: "🤍",
    content:
      `I see life in you,

I see my wife in you.

Morning begins with you,

And night softly fades with you.

I see my home in you,

Every dream feels true with you.

I see my forever in your eyes,

A thousand tomorrows by your side.

My chaos quiets with you,

I find my peace in you.

I see fire in you,

I see desire in you.

Every heartbeat whispers low —

It belongs to you.

Miles may stand between us,

But my soul sits with you.

Distance slowly disappears

Whenever I think of you.

And if love has a meaning,

If it has a face, a name, a truth —

For me, it has always been

And will always be

You. 🤍`,
  },
  {
    id: 21,
    title: "Open when you want to know my dreams for us",
    icon: "✨",
    content:
      `Dreaming about us, or about our future is my favourite thing to do. I often dream about a life where distance is no longer part of our story and where I don't have to imagine holding u, because I actually can. A life full of security, love, respect, laughter, bakchodi is what I dream with u. I dream about travelling together, exploring new places, taking infinite pictures, eating all sort of chatar patar. I dream of a simple life with u, where I wake up with u and first thing I do is see u sleeping peacefully on me, then cooking together in kitchen, gossiping about the world, and sitting together without the needing to say much. I want to grow with u, and choosing each other at the end of the day. I don’t know exactly how life will unfold, and I won’t pretend that everything will always be perfect, but I know this — I want you in my future, not just as a memory or a chapter, but as the person I build my life with. That’s my dream — simple, steady, and with you right beside me.`,
  },
  {
    id: 22,
    title: "Open when you want to hear from future me",
    icon: "⏳",
    content:
      `Hiii cutuuu, this is me, ur bablu, a little older, little more smarter, calmer, more possessive, obsessive and completely in love with u. I don’t know exactly how many years have passed since you first read these letters, but I can tell you one thing with certainty — choosing you was still the best decision I ever made. Life probably tested us in ways we couldn’t predict, there must have been days that felt heavy and moments that felt uncertain, but we made it through, not because everything was perfect, but because we kept choosing each other even when it was hard. I still remember the distance, the late-night calls, the missing, the small fights that once felt big and now make us laugh. We grew up together, we learned together, and we built something steady and real. If you’re reading this years later, I hope you’re smiling, because that younger version of me was right — you were always the one I wanted beside me. And even now, after time has changed many things, one thing hasn’t changed at all: I’m still grateful for you, still proud of us, and still deeply in love with the girl who once opened these letters and smiled.`,
  },
  {
    id: 23,
    title: "Open on your 23rd Birthday",
    icon: "🎂",
    content: `What else do I say now, I wrote all my heart out in all these letters. These all might get overwhelming for u, but mind my words u deserve more than all this. The way u loved me, listened me, understood me, cared for me, I'm truly very very very grateful to u. I never ever felt this loved in my entire life, but u made this true. Thank youuuuu for coming in my life and making it beautiful. Before loving u I used to be a very insecure person even in friendship, but u taught me what a secured friendship as well as a secured love life looks like. U made every day, every hour, every second so beautiful, nothing doing something extraordinary, just prerna being prerna, bt talking endlessly, by laughing at the silliest joke, by conversing what bothered us, u made my life cheerful. 

Earlier i definitely used to like uu, the innocence on ur face, the smile, the beauty, the simplicity, the elegance, the softness, the eyes always attracted me towards u, but never had courage to even start a conversation. But from the day of 14th June, everything changed, I got a purpose to live my life, I started to smile and live a happy life, I wanted to know more about u, what u like, what u love, what not, what type of personality or boy u would love to have by ur side, wanted to change myself so that we can be together. Started watching rom-coms because that's how I can spend time or talk more with u. All day all night u were in my thoughts, I wanted to things work between us, but at the same time I don't want to force uu or rush uu into taking some decision which u regret later. I love how things between us gradually developed, the trust, the comfort, the noise in silence, the understanding, not rushing into each other, giving personal space but being available for each other all the time. When things were not in our favour, maybe it was because of being busy, or time issues, we maturely handled our emotions, listened to other person, conveyed our thoughts, and understood each other povs and eventually came to a point where the kalesh seems very immature and a waste of time and laughed it off. And that's where I fell more for u, u always try to solve any dispute between us, keeping ur anger or ego aside, that's rare in today's world, but I'm truly very luckyyyy to have a partner like u, who understands the importance of person, of relation, of emotions. Thank youuuu cutuu. 

Till now, I don't know what, when and how we end up together, sometimes i still go through our chats and try to find for that msg where I confessed my love and u confessed urs, but ni Mila meko, because it just happened, it was meant to be, and it did. No drama, no proper proposal, no emotional breakdowns, nothing, on a random day we confessed our true love to each other, out of this world feeling, isn't it!!! I feel blessed that i chose u as my partner, where I can proudly say SHE'S THE ONE I LOVE. SHE COMPLETES ME. 

I literally can't think of imagine a day without u. From the very first day to till now, all these days for me were the best days. And i want a beautiful future with u. A future where we both are together, far away from distance, from misunderstanding, from missing each other, from feeling that void in our life. I want to feel u closer everyday, admire u very closely, tuck in ur hairs behind ur ears, hold ur cheeks and whisper how much I Love you, how much I need u. I want to build a small world with u. Just u, me and our minis, living happily, laughing and positive vibe is all around us. I know things will not be easy for us, very prone to misunderstanding, fights, disputes but I know we will make through it. 

On this auspicious day, ur birthday, I want to make this very memorable for u, a birthday wish u never imagined, a surprise u can keep with u forever, a small gift which feels like home, a place where u can come often and feel me closer to u. All i want to see u smiling, happy, and satisfied with ur life, not doubting ur choices. For u, I want to be the best banda, whom u can be proud of, and always blush whenever u hear my name or talk about to someone else. Ur birthday is like an occasion for me, a special one. 

And i tried all my brain, all my heart so that u like it. Hope it's good. 

I LOVEEEEE UUUUUUUU CUTUUUUUUU 💗💗💗💗💗`,
  },
];

export default function LettersPage() {
  const [selectedLetter, setSelectedLetter] = useState<
    (typeof letters)[0] | null
  >(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            For Her, With Love
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/gallery"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/playlist"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Playlist
            </Link>
            <Link
              href="/memories"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Memories
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              About
            </Link>
          </div>
        </nav>
      </header>

      {/* Page Title */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">
            23 Letters for Every Moment
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hover over each envelope and click to open. Choose the letter that
            speaks to your heart. (I LOVEEEEEE UUUUUU CUTUUUUUUU)
          </p>
        </div>
      </section>

      {/* Letters Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {letters.map((letter) => (
            <LetterCard
              key={letter.id}
              letter={letter}
              onClick={() => setSelectedLetter(letter)}
            />
          ))}
        </div>
      </section>

      {/* Letter Modal */}
      {selectedLetter && (
        <LetterModal
          letter={selectedLetter}
          onClose={() => setSelectedLetter(null)}
        />
      )}
    </div>
  );
}
