'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Stories'
    return queryInterface.bulkInsert(options, [
      {
        title: '11 Absolutely Useful macOS Utility Apps You Never Knew Existed',
        article: `AnyMirror
AnyMirror is a great utility app for your Mac that lets you use your iPhone or Android phone as a webcam or a mic for your Mac.
The use cases are plenty with AnyMirror. You can use it to join meetings with an ultra-high-resolution video, live stream videos to YouTube or Twitch, and even watch the videos and photos on your phone on a bigger screen.
Apart from this, AnyMirror also supports multiple sources of screen sharing, screencasting locally saved files, screen recording, and even live annotating.
Cryptonose
I have been looking for a native Mac app that would help me track and monitor crypto prices in real-time, and my search finally ended when I found Cryptonose. If you are a day trader or even someone who does occasional trading, you should definitely add Cryptonose to your arsenal.
The app maintains a real-time connection with popular exchanges like Binance and Kucoin and will instantly notify you about any significant price changes or movements in the crypto market.
You can search for your favorite coins to track prices, receive notifications when there is a significant change in the market, and automatically open an exchange in a browser to quickly perform any desired action.
Deskreen
Deskreen is a lightweight utility app that lets you basically use any device with a web browser installed in it as a secondary monitor for your main device. It does this by live streaming your main screen to the device you want using a secure connection with end-to-end encryption.
The use cases for the Deskreen app are basically endless, as you can use your iPad or your iPhone as a second screen for your Mac and use it to control your music, watch videos while you work, or edit documents while you are in a meeting and so on.
Kryptor
Kryptor is a completely free and open-source native application for your Mac that can be used to encrypt any type of file on your Mac and digitally sign any software.
The Kryptor app is very user-friendly, and it makes use of simple commands and highly complex and secure cryptographic algorithms to encrypt the files on your Mac.
Kryptor also supports simultaneous encryption of multiple files and folders on your Mac or even external storage devices to ensure that your files and cloud backups remain secure.
The website for Kryptor is well documented, with detailed instructions and commands on how to use the different features and options of the app.
MeetingBar
MeetingBar is a nifty little utility app that lives in the menu bar of your Mac and displays your upcoming meeting details in the menu bar, which you can click to join the meeting in the corresponding app quickly.
The app integrates with the calendar on your Mac, and you can click on the MeetingBar icon in the menu bar to glance at your upcoming meetings, join meetings in any app, create meetings and events, etc.
RustDesk
RustDesk is a useful tool if you regularly access a remote desktop from your Mac. It is written using the Rust programming language, making the app secure and memory efficient.
The app is also designed with security in mind. No additional configuration is required to use the app, as the simple, user-friendly interface allows you to start using it right away after downloading.
Stats
Stats is basically a system monitor app that lives in an icon on the menu bar of your Mac, and it displays essential information about your Mac, such as Battery level, CPU, and memory usage, network and sensor information, and so on.
The information displayed by the Stats app is pretty detailed, and you can access any of the info you want by simply clicking on the app icon on the menu bar from anywhere on your Mac.
Tenacity
If you are someone who works on a lot of audio files, a podcaster, for example, then you should definitely try out Tenacity.
Tenacity is a beginner-friendly and completely free audio editing app for your Mac that supports features like multi-track editing, cross-platform support, high-quality exports to many different audio formats, etc.
Thorium Reader
Thorium Reader is an app designed to give the best reading experience for the people who read many ebooks on their Mac. The best part about the Thorium Reader app is that it is totally free to use and doesn’t come with any hidden ads.
The app also has great accessibility features to provide a smooth learning experience for people with dyslexia and visual impairment. The user interface of Thorium Reader is simple and elegant and matches the design language of macOS very well.
WeekToDo
While there are a lot of great to-do list apps out there for your Mac, WeekToDo differs in a few ways that make it stand out from the crowd.
The app has an intuitive design that lets you create and manage your tasks for the entire week and the default weekly view of your tasks is great to quickly glance at all the upcoming things for the week and be prepared.
`,
        tagId: 1,
        userId: 1,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Elon Musk: People Don’t Realize What’s Coming",
        article: `Let’s talk about the future.
I like the idea of decentralization amongst nations and want all countries to be as autonomous as possible; however, let’s say that we enter interstellar space and we discover there are hundreds of alien civilizations.
Well, I don’t know about you but *someone* on Earth needs to be in charge and it sure as hell isn’t going to be a planet full-on individualism!
In order to present a respectable image in the galactic playing field, we would need to represent our planet and our species, not our particular island.
And this is where Tesla CEO Elon Musk sees humanity’s biggest problem. Musk believes that by the time we realize we should pool our resources and unite, it’ll be all too late.
We’re most likely to make first contact with an alien species before we realize the requirement for a united planet.
Ultimately this will be an existential crisis. Here’s why.
The Existential Horror of Space
The scariest thing I ever heard about the cosmos was in a Joe Rogan podcast with Neil Degrasse Tyson. Tyson explained that there are these things called “rogue planets,” which are planets that are trapped between gravitational fields of multiple suns.
Because two or more suns are pulling on a planet they eventually throw it out into the cosmos and these planets then become rogue, freezing-cold rocks traveling amongst the stars.
The universe is a fucking nightmare.
The Earth is a speck on a speck on a speck. And yet thousands of stories, religions, experiences, and every human being (poor, famous, brave, or cowardly) has existed on this speck.
Elon Musk, then, see’s two possibilities for humanity:
We stay on Earth until an eventual internal or external doomsday event wipes us all out. Maybe that’s a billion years from now. Maybe that’s tomorrow. Who’s to say?
We become a multi-planetary species so that we have a smaller chance of going extinct. Moreover, if Earth ever were hit by a meteor or suffered a nuclear attack then a civilization on Mars could help build it back.
Some researchers claim we are overdue for a large asteroid impact — although the chances of an asteroid the size of the one that wiped out the dinosaurs are relatively low.
However, NASA has openly admitted that asteroids are extraordinarily difficult to spot. In fact, in 2019 an asteroid the size of a football field, called ‘2019 OK’, was spotted just one day before flying between Earth and the Moon. It caught researchers completely off guard.
According to internal NASA documents obtained by Buzzfeed News, a NASA scientist said: “this one did sneak up on us.”
Why Elon Musk is Dead Wrong About Aliens
Aliens exist because we exist. At least that’s the basic argument.
In an infinite universe, we have to assume that no matter how small the chance for life is the fact that we’re here means there must be others — somewhere.
This argument is dead wrong.
…Or at least it's open to many contradictions.
First of all the universe may not be infinite. We can predict possible edges.
Additionally, the chances of humans themselves existing are so infinitesimally small that it's a miracle we’re even here! If we take the number of ways that life could have evolved divided by every other combination of molecules that could have happened, the chances of life are very slim.
This is all to say: aliens aren’t real.
There’s no evidence for them, just schizo stories from Bob Lazar without any genuine sources.
Did you know that you’re more likely to believe in aliens if you aren’t religious?
Interesting connection!
I hope aliens are real and I see them before I die, but it's just as much a “belief” as there is in hoping Jesus Christ returns (maybe less so since Jesus was a historical figure). Either way, whether Elon, Neil Degrasse Tyson, and Steven Hawking are right or wrong about aliens, it doesn’t matter — Musk’s claim for a multi-planetary species is still pertinent and necessary.
Finding Ways off This Earth
Let’s imagine colonizing Mars since it's Elon’s wet dream to do so.
Terraforming Mars is essentially a big landscaping job and the first tangible step is reestablishing Mar’s magnetic field.
When Mars was only 500 million years old, its magnetic field withered away. Before that, it was predicted that Mars had an atmosphere tantamount to Earth with ubiquitous liquid water. Without this magnetic shield, the sun strips away a planet’s atmosphere, killing any life that may have emerged.
You can’t terraform Mars without bringing back the magnetic field, or else all the atmosphere would just get blown away again.
(Unless they have some plan to produce an atmosphere at a rate faster than it can be knocked away).
The only way to reawaken Mars’s magnetic field is to jump-start its inner dynamo, in other words, heat Mars the hell up! Dynamo is the process in which a planet heats itself, almost like an oven. It involves kinetic energy (provided by the planetary rotation) and conductive fluid (i.e. molten iron).
Final thought
When interviewed about the moon landing in 1969, Black residents living in Harlem echoed the sentiment: “It’s a brilliant achievement, but why isn’t any of that money spent to fight hunger in America or get people out of poverty?”
With all the problems on Earth, I realize that space travel and problems that sound directly out of a Star Trek episode might frustrate people.
But these problems will be front-page issues, eventually.
Especially with terms like “WW3” and “nuclear war” floating around in the mainstream media lately, building up a ‘back-up’ plan is a salient idea.
Becoming a multi-planetary species might seem like a waste now, but it will pay off.
`,
        tagId: 3,
        userId: 6,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How we reached 1,000 email subscribers',
        article: `Hey Indie Hackers.

Today I’m going to share my way from 0 to 1,000 subscribers.

I dived into things that helped me and hopefully will help you if you decide to start a newsletter one day.

I captured all the essential things in this story, but reply to me if you want to learn more.

Don’t hesitate and share your thoughts on the content.

🔭 Before word
I didn’t know much about marketing and growing startups when I started Microns. I started building a lot of features by following competitors in the field. After creating the product, I didn’t know how to acquire users and what to do.

But what I realized after six months of developing my startup is that nobody cares about a lot of features if you don’t tell people about them and build with them.

This way, I accidentally found a book written by Pieter Levels called Makebook. I learned that you should be fast and explicit. Users should be first, and your app should make one feature but does it great.

After looking at the available options to start: blog, YouTube, podcast, newsletter, social media, I chose the newsletter.

Why?

Because I had previous experience writing, I love writing, and I like reading other newsletters.

👶 From 0 to 50 subscribers
To be fast, I found the all-in solution for running a newsletter called Revue and set up everything to send the first issue.

To find the first 50 subscribers, I did only two things.

I engaged on Twitter and Indie Hackers by helping people and sharing valuable things.

This also positively impacted my Twitter following and IH connections.

👀 Going to 350 subscribers
In a few weeks of being active, I found a growth partner, and we started thinking about the next steps.

Eventually, to go further, we needed a brand new custom website. We built the first version of Microns in under two weeks.

After this, we’ve made three essential things.

https://twitter.com/leticiamoas/status/1447167319713538049
We made our product completely free for the next six months.

We posted a newsletter in many startup and newsletter directories to get some SEO juice.

We launched on 10words and Product Hunt. We were on the first page on 10words and then got 3rd place on Product Hunt.

And people loved the product.

🚗 On the way to 700 subscribers
After launching on Product Hunt, we’ve got a few ways of popularity on Twitter. Many people talked about Microns.

They were excited about it. Look what they said.

https://twitter.com/villainjosh/status/1456430434653548544
https://twitter.com/robertodigital_/status/1455282855995592705
In a week, somebody from the Hustle editor team noticed us and mentioned Microns in their newsletter issue. It gave us around 300 new subscribers.

The same did a lot of small newsletter creators. They mentioned Microns and made an organic free ad for us.

https://twitter.com/Jaime_Mesa/status/1455142661304819717
📈 Reaching 1,000 subscribers
I consistently wrote newsletter issues every week and engaged on Twitter and IH. By making them a stable stream of traffic.

But besides this, we started testing paid growth channels.

After six months, we monetized Microns and introduced the Premium plan.

We spent all money from Premium subscriptions on advertising in other newsletters, sponsoring creators, and communities.

https://twitter.com/rjgilbert/status/1479906891883061250
It gave us brand awareness, new listings, and improved SEO.

⌚️ Nowadays
We are at 2,800 subscribers and keep growing.

The way was long and hard. Every activity helped us spread the word about the Microns.

We’ve made many mistakes, but we learned from them too.

Soon I’d be happy to introduce you next project built by the Microns team, which will help startup founders promote their side projects.`,
        tagId: 19,
        userId: 2,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '116K Reddit views, 0 subscribers. Lol',
        article: `I write short stories. I post these stories with the hope people will sign up to my short stories newsletter.

I don't know how I'm going to monetise it. I'm focused on improving as a writer.

My NFT story did well on reddit. I post the entire story as a text post and then link the sign up option at the end of the post.

But no one signed up.

What can I do to increase subscribers? I'm using email subscribers as the metric to determine whether I should keep going or not.`,
        tagId: 19,
        userId: 3,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What are the worst crypto mistakes to avoid in 2022? ',
        article: `“The Market Report” with Cointelegraph is live right now. On this week’s show, Cointelegraph’s resident experts discuss the worst mistakes you should avoid making in crypto.

But first, market expert Marcel Pechman carefully examines the Bitcoin (BTC) and Ether (ETH) markets. Are the current market conditions bullish or bearish? What is the outlook for the next few months? Pechman is here to break it down.

Next up: the main event. Join Cointelegraph analysts Benton Yaun, Jordan Finneseth and Sam Bourgi as they talk about the worst crypto mistakes to avoid making in 2022. First up we have Bourgi, who thinks you should avoid 'analysis paralysis', in other words, don't over analyze. Make decisions based on strong conviction. Do not just look at the price of a coin or token you're interested in, look into it's market cap, tokenomics, community size etc. Lastly he suggests don't trade too much, HODL always beats trading.

Yuan is next with his 3 mistakes to avoid, firstly he thinks instead of waiting for your positions to go higher, take the profits you've already made and avoid 'moon boy fever'. Secondly, understand the market cycles and lastly, he explains how to spot and avoid decentralized finance (DeFi) rug-pulls.

In the third spot, we’ve got Finneseth who explains his three mistakes you should avoid making, starting with the first one, HODL culture turning into token attachment. Take your profits before you miss the chance and have to wait, sometimes multiple years, before you get another opportunity. In other words, don't get too attached to a particular coin or token, nothing keeps going up forever. Next, he suggests you should set your sell targets before you buy a coin so you're already prepared and have your profit goals in mind. His last suggestion is to be mindful of the latest major trends and learn to play them to your advantage. But be careful, fast moving trends tend to flame out just as quickly as they rise

After the showdown, we’ve got insights from Cointelegraph Markets Pro, a platform for crypto traders who want to stay one step ahead of the market. The analysts use Cointelegraph Markets Pro to identify two altcoins that stood out this week: Zilliqa (ZIL) and PARSIQ (PRQ).

Do you have a question about a coin or topic not covered here? Don’t worry. Join the YouTube chat room, and write your questions there. The person with the most interesting comment or question will be given a free month of Cointelegraph Markets Pro, worth $100.

The Market Report streams live every Tuesday at 12:00 pm ET (4:00 pm UTC), so be sure to head on over to Cointelegraph’s YouTube page and smash those like and subscribe buttons for all our future videos and updates.`,
        tagId: 18,
        userId: 5,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the Bitcoin blockchain? A guide to the technology behind BTC',
        article: `The Bitcoin blockchain is an amalgamation of Bitcoin (BTC) and blockchain. A person or a group of people known as Satoshi Nakamoto created the Bitcoin protocol in 2008 to decentralize control of money when centralized entities had failed the world. A publication called the Bitcoin white paper outlined a set of computational rules that determined a new type of distributed database: the blockchain. The network was launched in January 2009.

The most well-known cryptocurrency, Bitcoin, is the one for which blockchain technology was created. Like the United States dollar, a cryptocurrency is a digital means of exchange that uses encryption techniques to oversee the establishment of monetary units and verify financial transfers.

The Bitcoin blockchain refers to the data stored in “blocks” of information that are then linked together in a permanent “chain.” A block is a collection of Bitcoin transactions from a specific period. Stacks of blocks are stockpiled on top of each other, with each new block relying on the previous ones. As a result, a chain of blocks is formed, giving rise to the word “blockchain.”

Every time a new block is added, it makes the previous blocks unmodifiable. This ensures that each block is more secure over time, and it is an example of how Bitcoin technology is changing how banking and financial transactions are being made. 

Bitcoin blockchain, however, is much more than cryptocurrency: It is the technology that most cryptocurrencies are built on, including Bitcoin. The Bitcoin blockchain is unique because it ensures that all transactions are accurate. Every action in the blockchain is recorded and there is nothing that is left out of the network. Once an action is recorded and stored in one of the information blocks, it is time-stamped and secured, and the entire record is available to anyone in the system.

The Bitcoin blockchain is also decentralized, meaning it is not stored in one master computer or controlled by one company. It is distributed on many computers that are in the network.

In the Bitcoin blockchain, there are codes called a hash. A hash is unique to each block in the blockchain. Hashing allows every network user to identify each block and directs them to move in the chain since every block has its own hash and a previous block's hash.

With the latter in mind, the critical parts of the blockchain include records, block, hash and chain. Block records and transactional records are the two types of records in the blockchain. A block contains the most recent Bitcoin transactions that have not yet been recorded in any previous block. Transaction records include the asset, price and ownership data that are recorded, approved and settled across all nodes in seconds. 

In essence, a hash is a fixed-length string generated after transforming any length of input data in the blockchain network, a block is similar to a page in a ledger or record book and a chain refers to blocks linked together in a network.

Short story of Bitcoin blockchain
The idea of blockchain technology was introduced in 1991 by Stuart Haber and W. Scott Stornetta in their paper “How to Time-Stamp a Digital Document.” In this paper, they explained the use of a continuous chain of timestamps to record information securely.

Bitcoin was created largely to facilitate the exchange of Bitcoin cryptocurrency. However, early adopters and inventors rapidly discovered that it had far greater potential. With this in mind, they designed Bitcoin's blockchain to store more than just data on the token's movement.

Bitcoin technology uses peer-to-peer (P2P) transactions, making it possible to function without any bank or third party to manage each financial movement. It allows online payments to be sent directly from one party to another without going through any financial institution.

Related: The history of Bitcoin: When did Bitcoin start?

The term peer-to-peer means that the computers that are part of the network are equal to each other, that there are no “special” nodes and that all nodes share the burden of providing network services. It is made up of thousands of Bitcoin nodes that run the protocol. The protocol is responsible for establishing and safeguarding the blockchain.

The formation of a peer-to-peer network is possible because users' data is related to the person or entity they are interacting with, and they are in charge of keeping the distributed network up and running. The information regarding the individual or entity is then passed from their Bitcoin wallet to their location and IP address, which represents peer-to-peer Bitcoin interaction.

What is needed to make the Bitcoin blockchain work?
Bitcoin represents a digital, trustless form of money, alongside a movement to decentralize financial services. Before Bitcoin, there was a need for a trusted third party to keep a ledger — the record-keeping system of a company's or person's financial data — to record who owned how much. Everyone has a copy of this ledger with the Bitcoin network, so there is no need for third parties.

Every Bitcoin transaction happens in the Bitcoin blockchain network, which is the digital space where Bitcoin mining and hash power generation occur. Hashing power is the processing power used by your computer or hardware to perform and solve various hashing algorithms. These algorithms are used to create new cryptocurrencies and allow them to trade with one another. This process is called mining.

Usually, Bitcoin owners purchase their cryptocurrency supply through a cryptocurrency exchange, a platform that facilitates transactions of Bitcoin and other cryptocurrencies. The decentralized ledger is what makes the blockchain network. The latter shows that Bitcoin is a piece of software, a set of processes in which participants perform different tasks.

A blockchain is a digital ledger of duplicated transactions distributed across the blockchain's network of computer systems. Each block on the chain contains several transactions, and whenever a new transaction occurs on the blockchain, a record of that transaction is added to the ledger of each participant.

This distributed database is managed by multiple participants using a technology called distributed ledger technology (DLT). Blockchain is a type of DLT in which transactions are recorded using an immutable cryptographic signature known as a hash. The transactions are then organized into blocks. Each new block includes a hash of the preceding one, effectively chaining them together, which is why distributed ledgers are commonly referred to as blockchains.

The blockchain works as a ledger, tracking every Bitcoin transaction, and is self-verifying, meaning that the entire network of nodes — different computers participating in the network — will constantly check and secure every movement. Here is where the “miners” come into the game: Their computers do the heavy lifting of maintaining the chain and thus, receive Bitcoin as a reward. These rules, collectively, are the Bitcoin protocol.

Bitcoin miners refer to the high-powered computers solving complex math problems to mint a coin. Miners are network-dedicated machines that verify all transactions and block any malicious actors. Bitcoin miners compile as many transactions as possible into a block, then verify the block and add it to the chain of previous blocks using a mathematical method. For providing their computing power to the network, miners are paid in newly minted Bitcoin.

How does the Bitcoin blockchain work?
A blockchain is a type of database which is a collection of information stored on a computer system electronically. What is kept in databases, information or data is usually structured in a table format that makes it easier to search and filter information. Databases are designed to store large amounts of information that can be accessed, filtered and edited easily and quickly by many users at any time. 

To do this, extensive databases house data on servers that are made of potent computers. Those servers can be built using hundreds and hundreds of computers. Why? To have the computational storage and power needed for many users to access the database simultaneously. This is the difference from a database too, let's say, a storage cloud-like drive. 

Here’s how a blockchain differs from a database. The first difference is how data is structured. A database structures data into tables, while a blockchain collects information into groups, known as blocks, that hold data sets. Each block has a specific storage capacity that is chained onto the previous filled block when it gets filled, forming a chain of data. That's why it's called the blockchain: Millions of blocks filled with data are chained together.

This system means that every blockchain is a database that is more complex since it creates an irreversible chainline of data when implemented in a decentralized system. When one block is filled, it is unchangeable and becomes part of a timeline, and so, each block on the chain has an exact timestamp when added to the chain.

Thus, the goal of the blockchain is to allow digital information to be recorded and distributed, but not edited. That's why it is not a database per se; no one can change it once it is filled and chained. With the appearance of Bitcoin technology, blockchain had its first actual application.

Reducing risks
Using a blockchain network comes with a lot of advantages. First, the accuracy of the chain. Transactions that are part of the blockchain have to be approved by thousands of thousands of computers. This removes all human involvement in the verification, which means there are fewer human errors, as well as a more accurate record of information.

But, what if one of the computers in the network makes a computational mistake? The error would only be in one copy of the blockchain. For it to spread, at least 51% of the network would need to have the same mistake, which is very unlikely.

Another advantage is that blockchain eliminates the need for third-party verifiers. Any member of the Bitcoin network can check and verify the blockchain at any time.

Blockchain data is decentralized, which means that it is not stored in a central location but instead copied and spread across a vast network of computers. This makes it very hard for anyone to tamper with the data since a kicker, for example, would need access to all of the networks to compromise it fully.

Finally, an instrumental part of the blockchain is that, although anyone with an internet connection can see the list of the network's transaction history and access details about transactions, no one can access identifying information about the users that are making those transactions. Also, every time a transaction is recorded, it is verified by the network, meaning that the thousands of computers that compose it confirm if the details of the purchase are correct. 

Blockchain vs. banks
Blockchain works very differently from a traditional bank since it is 100% decentralized and it relies on thousands of computers to verify its transactions. This means it runs 24/7, every day of the year. The most significant advantage of all of the Bitcoin blockchain is its transparency because the blockchain acts as a public ledger for every transaction made in the Bitcoin network.

Other differences are that the speed of the transactions is as little as 15 minutes or as much as over an hour, depending on the network's congestion. While card payments and check deposits can take from 24 to 72 hours.

The Bitcoin blockchain has variable fees, usually ranging from $0 to $50. While the fee is unrelated to the amount being transferred, it is determined by network circumstances at the moment and the transaction's data size. Because a block on the Bitcoin blockchain may only hold one megabyte (MB) of data, the number of transactions included in a single block is limited. 

Another difference is in the way of making transactions. While the blockchain allows anyone with an internet connection to make a transfer, banks need you to have an account, a mobile phone, or a computer.

All of these differences make blockchain technology a great disruptor of traditional finances and the banking industry. They are tamper-proof and decentralized, set-in-stone chains that not only reduce costs but create a transparent network in which users can feel empowered and safe.

The limitations of the blockchain 
Although the blockchain comes with many benefits, like everything, it has its downsides. The first is that the blockchain can slow down when there are too many users on the network. It is also harder to scale due to its consensus method of work.

Another limitation is that data within the blockchain is immutable, you cannot go back and alter the previous block once it is written. Some may view it as an imitation that requires self-maintenance, which means that users have to maintain their own wallets or else they can lose access. 

A big limitation is that blockchain technology is still not mature. Also, it doesn´t offer interoperability with other blockchains and other financial systems, and is hard to integrate into legacy systems.

Technical advances
Lightning Network
The Lightning Network (LN) permits participants to transfer BTC between each other without any fees using their digital wallets. A second layer is added to the Bitcoin network to enable transactions between parties off of the blockchain, which is called off-chain transactions. A second layer boosts throughput without compromising any of the original blockchain's decentralization or security features.

Lightning Network creates payment channels between two users in a distributed database so they can transact with each other, without all the other users receiving their information, defining off-chain transactions.

It is considered a game-changer in the cryptocurrency world since it has been designed to speed up transaction processing and decrease associated costs of the Bitcoin blockchain. It was conceived in 2015 and is being further developed and activated. 

However, researchers have cautioned that as the Lightning Network grows, it will become a more appealing target for attackers. Bitcoin on the developing payment network might be stolen if users aren't careful and it may be hard to ensure the safety of assets in the future.

According to experts from the Hebrew University of Jerusalem, Bitcoin that is currently locked in the Lightning Network payments channel, which is currently roughly $9 million in Bitcoin, might be looted by attackers. While the flaw has the potential to be serious, the researchers are optimistic that it is fixable in the long run.

SegWit
Segregated Witness, or SegWit, refers to a process change in how Bitcoin maintains transaction data in the blockchain. Segregate means to separate and witnesses are the transaction signatures. It was created to renew the way in which data is stored on Bitcoin's blockchain. This allows the network to hold more transactions in a single block, enhancing transaction throughput. SegWit went active on Bitcoin in August 2017 after the code for the update was released in 2015.

SegWit increases the block size limit of a blockchain by removing signature data from Bitcoin transactions. When parts of a transaction are removed, space gets freed and so does capacity to add more transactions to the chain.

SegWit not only improved Bitcoin's transaction processing speed but also solved a weakness in the protocol that allowed nodes to tamper with transaction malleability problems (TXIDs) on the network. By removing what is known as “signature data” or “the witness data” from the input field of a block, Segwit increased the number of transactions that could fit into a block and fixed the transaction malleability flaw.

On the Bitcoin network, the SegWit update was introduced as a soft fork in August 2017. A soft fork is a backward-compatible update that allows upgraded nodes to communicate with non-upgraded nodes. A soft fork usually includes a new rule that does not conflict with the existing ones. However, due to the high cost of running a node (especially in developing countries), the upgrade was put on hold on November 8, 2017.

Taproot
Bitcoin Core developer Greg Maxwell proposed the Taproot improvement in January 2018. The 90% criterion of blocks mined with a support signal from miners was met three years later on June 12, 2021. It means that 1,815 of the 2,016 blocks mined throughout the two-week time frame had some encoded data left by miners to demonstrate their support for the upgrade. 

Taproot is a soft fork that improves Bitcoin's scripts to enhance privacy and increase anonymity on the network. When a user does not use Taproot, anyone can detect transactions. When using Taproot, they can “cloak” their transactions. Taproot even makes it possible to hide that a Bitcoin script ran at all. As of October 2020, Taproot is merged with the Bitcoin Core library. 

One of the most significant changes to the network is the substitution of Schnorr signatures for Bitcoin's current elliptic curve digital signature technique (ECDSA). The ECDSA technique generates public keys from randomly generated private keys, which makes it impossible to determine a private key from a Bitcoin address or public key. Moreover, the Schnorr signature will free up space and bandwidth on the Bitcoin network by making transactions faster and smaller. 

By permitting discrete log contracts (DLCs), the Schnorr signature can help simplify complex smart contracts on the Bitcoin blockchain. The DLCs are a proposal to add a smart contract implementation to Bitcoin, allowing the establishment of simple, safe and easy-to-use blockchain oracles.

It may also aid in the scaling of layer-two payment channels such as the Lightning Network, which allows for immediate transactions on the Bitcoin network.`,
        tagId: 18,
        userId: 1,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Markets Are Ignoring 8.5% Inflation Spike And Watching This Number Instead',
        article: `TOPLINE The stock market moved higher on Tuesday, even after consumer prices spiked 8.5% in the 12 months ending in March, as some investors hope that inflation is showing signs of moderating, with core inflation—excluding volatile food and energy prices—coming in lower than expected.
       Stocks ticked higher early on Tuesday: The Dow Jones Industrial Average rose 0.8%, nearly 300 points, while the S&P 500 gained 1.1% and the tech-heavy Nasdaq Composite 1.6%.

Consumer prices for March increased 1.2% from last month and 8.5% annually, according to data released Tuesday by the Labor Department, rising at the fastest pace in four decades.
While the overall inflation number was red-hot, markets got a boost from core inflation, which excludes volatile food and gas costs, rising just 0.3% in March—a smaller increase than last month and lower than what economists were expecting.

Some investors are betting that the lower core consumer price reading could mean inflation is showing signs of peaking, especially after prices also fell in several other recently spiking categories, such as used cars.

Gas and food prices were among the largest drivers of higher prices in March, with gas prices spiking over 18%—driven by Russia’s invasion of Ukraine—and accounting for over half of the monthly increase.

Government bond yields, which surged higher a day earlier, retreated slightly on Tuesday, helping boost stocks—though the benchmark ten-year Treasury note remains above 2.7%, its highest level since January 2019.
CRUCIAL QUOTE:
The “silver lining” from today’s report is certainly the lower-than-expected core inflation number, says Chris Zaccarelli, chief investment officer for Independent Advisor Alliance. “Despite the fact that energy, food and other essential items hit consumers hard, they are all stripped out of the Core calculation that the Federal Reserve follows more closely,” he explains. “Given that the Fed is more likely to pay attention to the Core number, today’s report could be short-term good news for the stock and bond markets.”

WHAT TO WATCH FOR:
“​​Inflation will soon likely peak, but the cooldown period could be painfully slow,” predicts Jeffrey Roach, chief economist for LPL Financial. “Food prices and vehicle prices will likely lead the way in releasing inflationary pressures.”
`,
        tagId: 17,
        userId: 2,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The 15 Best Franchise Opportunities of 2022',
        article: `If you’re looking for a new business venture, but don’t want to take on the difficult work of developing your own brand image and identity, a franchise opportunity might be the best fit for you. Since there’s already a strong corporate and management framework in place as well as guidelines around everything including marketing, merchandising and production, owning a franchise can be a great choice for some.

Still, just knowing you’re interested in a franchise is only the beginning; in reality, finding the best franchise opportunities can be a challenge. There are more franchises out there than one can reasonably count and consider, making it tough to figure out which one is right for you.

That’s why we’ve reviewed many of the different options for franchise businesses, and picked out some of the best franchise opportunities of 2022 across several different sectors. Their fees and requirements vary, but you should hopefully be able to find a franchise opportunity that piques your interest and aligns with what you’re hoping to build.

As we go through these businesses, remember that all costs and fees listed here are averages or approximates, and will change based on when you inquire, so make sure you contact each company for the most up-to-date numbers.

15 franchise opportunities
1. McDonald’s
Initial investment: $1,263,000 to $2,235,000

Liquid cash requirement: $500,000

Ongoing royalty fee: 4%

Ad royalty fee: 4%+

We’re pretty positive this is a name you know. McDonald’s is one of the more expensive franchises around, but has perhaps the best brand recognition in the world. If you’re able to open a McDonald’s franchise in a well-trafficked area without much competition, you may be able to quickly recoup the initial investment.

2. Sonic
Initial investment: $1,236,800 to $3,536,300

Net-worth requirement: $1 million to $2 million

Liquid cash requirement: $500,000 to $1 million

Initial franchise fee: $45,000

Ongoing royalty fee: 2.45% to 5%

Ad royalty fee: 3.25% to 5%

Sonic is an American fast-food staple with unmissable branding, mostly fueled by their drive-in style of service and unique soft drinks. With franchises in 46 states, Sonic offers a strong franchise opportunity that comes with a cult following for their unmistakable menu items (cherry limeade, anyone?) as well as core staples that customers expect and love.

3. Dunkin’
Initial investment: $395,500 to $1,597,200

Net worth requirement: $250,000 to $500,000

Liquid cash requirement: $125,000 to $250,000

Initial franchise fee: $40,000 to $90,000

Ongoing royalty fee: 5.9%

Ad royalty fee: 5%

Formerly Dunkin’ Donuts, Dunkin’ certainly costs less than a McDonald’s and has strong name recognition to boot. In fact, when Dunkin’s first franchises returned to southern California, customers lined up at 5 a.m. in some locations, just to be among the first to get their fix.

Read more in our guide to opening a Dunkin' franchise.

4. Anytime Fitness
Initial investment: $107,500 to $722,800

Net-worth requirement: $300,000

Liquid cash requirement: $100,000

Initial franchise fee: $35,000

Ongoing royalty fee: $549 per month

Advertising fee: $300 per month

Few fitness franchises are as hot right now as Anytime Fitness. This gym franchise focuses on offering group workouts as well as solo workout equipment. Best of all, the franchise provides members with a keycard to access the gym during off-hours, allowing people to work out on their schedule. Operating costs are low, and name recognition is high — so high, in fact, that there are currently 4,000 locations worldwide.

5. Planet Fitness
Initial investment: $1,084,600 to $4,178,000

Net-worth requirement: $3 million

Liquid cash requirement: $1.5 million

Initial franchise fee: $20,000

Ongoing royalty fee: 7%

Ad royalty fee: 9%

Planet Fitness differentiates themselves with their iconic purple and yellow branding, low membership fees and mission to create a welcoming atmosphere for first-time gym members and avid fitness fans alike. Gyms tend to be challenging to open, but Planet Fitness's main market is fitness first-timers, which means that these gyms can benefit from high retention rates through low prices and high sign-ups.

6. Orangetheory Fitness
Initial investment: $575,422 to $1,497,372

Net-worth requirement: $500,000

Liquid cash requirement: $150,000

Initial franchise fee: $59,950

Ongoing royalty fee: 8%

Group workout studios are a booming business for the fitness franchise market. The desire for high-intensity interval training programs makes the desire for new programs a compelling draw for people looking to get in shape or take their training to the next level. Orangetheory’s combination of running, rowing and cross-training with a focus on heart rate is a unique way for customers to get in shape and — most importantly — keep coming back for more.

7. Primrose Schools
Initial investment: $637,900 to $6,375,500

Net-worth requirement: $750,000 to $1.2 million

Liquid cash requirement: $350,000 to $1.2 million

Initial franchise fee: $80,000

Ongoing royalty fee: 7%

Ad royalty fee: 2%

Early childhood education is a prime market for franchise opportunities as parents look to give children every opportunity to learn — even within their early years of education. Primrose Schools are a solid franchise because they offer educational programs all year round, are licensed facilities for educational child care and give their teachers continuing education access to keep their skills sharp.

8. Kiddie Academy
Initial investment: $402,000 to $5,967,000

Net-worth requirement: $750,000

Liquid cash requirement: $250,000

Initial franchise fee: $120,000 (until September 30, 2021)

Ongoing royalty fee: 7%

Ad royalty fee: 2%

Kiddie Academy also offers a compelling opportunity in the early childhood education market, serving up a hybrid of child care and educational development that helps keep children entertained and learning at the same time. There are franchise opportunities throughout 49 states (sorry, Montana) and plenty of room to grow.

9. Kumon Math and Reading Centers
Initial investment: $73,373 to $154,825

Net-worth requirement: $150,000

Liquid cash requirement: $70,000

Initial franchise fee: $1,000

Ongoing royalty fee: $34 to $38 per student, per month

The Kumon Method for improving math and reading comprehension was first created in 1958, based on a curriculum developed by Toru Kumon in Osaka, Japan. Today, Kumon Math and Reading Centers help students learn critical math and reading skills that prepare them for more complex concepts later on in their education. With a low cost to entry and high demand, Kumon can be a great opportunity to help students get a leg up on their education, while also creating a great business opportunity for prospective franchisees.

10. Ace Hardware
Initial investment: $286,000 to $2,110,230

Net-worth requirement: $400,000

Liquid cash requirement: $250,000

Initial franchise fee: $5,000

Ace Hardware is an excellent franchise prospect for providing an antidote to the big-box home improvement store experience, which is typically marked by unhelpful staff and overwhelming product choices. Instead, Ace Hardware locations pride themselves on hiring staff that put customer service at a premium and keeping product choices to a reasonable selection. Their franchises make it easier for local hardware stores to remain competitive against mega-stores by way of their cooperative structure and store-brand products.

11. Snap-On Tools
Initial investment: $172,207 to $375,265

Net-worth requirement: $37,999 to $55,377

Liquid cash requirement: $37,999 to $55,377

Initial franchise fee: $8,000 to $16,000

Ongoing royalty fee: $125 per month

Any gearhead, DIY aficionado, mechanic, or professional contractor will tell you that few tool brands have as high a reputation for quality — and even a cult following — as Snap-On does. This high brand affinity makes Snap-On a great franchise to consider if there’s a strong opportunity in your determined area. The low investment threshold and net worth requirement also make Snap-On a promising option for would-be owners that aren’t flush with the kind of cash needed to sign on with other franchise businesses.

12. Pillar to Post Home Inspectors
Initial investment: $37,100 to $45,900

Liquid cash requirement: $10,000

Initial franchise fee: $21,900

Ongoing royalty fee: 7%

Ad royalty fee: 4%

Home inspection services are always in demand, particularly in parts of the country where home sales are hot and the real estate market is hopping. Pillar to Post makes the process of starting a home inspection business easy, providing franchisees with everything they need to drum up new business, train staff as necessary and their proprietary software makes home inspections easy for staffers to complete.

13. Keller Williams
Initial investment: $183,947 to $336,995

Liquid cash requirement: $150,000

Initial franchise fee: $35,000

Ongoing royalty fee: 6%

Ad royalty fee: $1,000 per year

Keller Williams has a reputation for providing real estate agents with opportunities to grow professionally while helping their clients find their dream homes. The company began in 1987 and has been attracting agents through profit-sharing agreements and other perks, which can make it easier for franchise owners to recruit and retain top talent.

14. FastSigns
Initial investment: $197,172 to $313,136

Net-worth requirement: $300,000

Liquid cash requirement: $80,000

Initial franchise fee: $49,750

Ongoing royalty fee: 6%

Ad royalty fee: 2% per year

If you’re going to own a store, then you’ll quickly realize how important signage is. FastSigns has been franchising their signage shops since 1986. With more than 600 locations, the Texas-based company offers opportunities for entrepreneurs to get involved with this high-visibility “visual problem-solving” company both in the U.S. and abroad, too.

15. Merry Maids
Initial investment: $89,619 to $125,023

Net-worth requirement: $90,000

Liquid cash requirement: $35,000

Initial franchise fee: $37,500 to $51,500

Ongoing royalty fee: 5% to 7%

Ad royalty fee: 1.3% per year

The home cleaning sector can be overwhelming for many consumers as options abound. This means that operating a business that has a household name provides a competitive advantage that can turn into tangible business opportunities for franchise owners. Merry Maids has this in spades: As one of the largest house cleaning companies in the United States, this franchise is easy to set up and doesn’t require a ton of startup capital to get things rolling.

Financing your franchise
As you’re looking into the best franchise opportunities for 2022, one thing to keep in mind is how you’re going to pay your franchise fees.

All franchises come with some kind of investment, which usually comprises corporate fees, startup costs, real estate, staff, equipment and other expenses, too. Your investment will be contingent on several things, but the two most important are the mandatory expenses set by the parent company to get up and running as well as the regional expenses that dictate costs (in other words, some markets are more expensive than others).

Make sure you take into consideration where the capital to finance your franchise will be coming from. Many entrepreneurs choose to take advantage of a business loan, including SBA loans, business lines of credit, term loans and equipment financing. To begin, check out the best franchise financing options.
`,
        tagId: 17,
        userId: 8,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'NYPD Briefs on Brooklyn Subway Shooting',
        article: `At least eight people were shot Tuesday on a Brooklyn subway by a man in an orange construction vest, possibly wearing a gas mask, who may have tossed a smoke canister on the platform to distract the rush hour crowd, according to FDNY and senior law enforcement officials. They stress the investigation is preliminary.

The shooter was not in custody an hour and a half after he opened fire on the train at the 36th Street and Fourth Avenue station in Sunset Park around 8:30 a.m. All eight victims were believed to have been in the same car. The train was still moving.

It stopped at the next station, at 25th Street. Greenish smoke was seen spewing from the subway doors when the Manhattan-bound N train stopped at the platform. People were seen running, and bleeding.

One straphanger who limped off the train fell and had to be helped away by fellow riders. Other photos showed people bleeding on the platform. Some of the wounded jumped on another train to flee to the next station, law enforcement sources said.

Police were combing through subway tunnels, based on some witness reports he may have jumped to the tracks, but the gunman remained on the loose hours later.

Two of the eight shooting victims were said to have been seriously wounded. The extent of the other victims' injuries wasn't clear. As for the other people who were hurt, officials said their injuries likely stemmed from the crowd response to the chaos.

One law enforcement source said the victims ranged in age from teenagers to middle-aged people. NYU Langone said it had received eight victims, five of them with either gunshot or shrapnel wounds and three with smoke inhalation.

All were expected to survive, the hospital said.

Police described the suspected shooter as a man about 5 feet 7 inches tall and 170 pounds. Cops believe he acted alone. A number of sources say a dispute may have unfolded on the train just before the gunfire broke out. A motive is under investigation, though right now the all-out manhunt for the gunman is investigators' top priority.

A search was conducted in the vicinity for possible explosive devices, but none have been found at this time and none have been detonated, law enforcement sources said.
Experts say at this early stage that the shooting appears to have been an orchestrated attack, though they caution that much could change rapidly as details develop.

The 36th Street station where the shooting happened has about 6,000 people pass through that stop on an average weekday as of 2020, according to the MTA, though that number has likely plunged as overall subway ridership fell during the pandemic.

The NYPD warned New Yorkers to avoid the area and to expect emergency vehicles and delays. Power was shut off on the N/R Line from 59 Street to Atlantic Avenue and major delays were reported on the B, D, F, N, Q and R lines. W service is suspended.

No trains were stuck in between stations, officials said.
Local schools were placed under a shelter in place order, a Department of Education spokesperson said. It's not clear how many were affected. No other information was immediately available.

New York City Mayor Eric Adams has been briefed on the situation, a spokesperson said -- and pleaded with New Yorkers to avoid the area to assist in the investigation.
`,
        tagId: 8,
        userId: 5,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'NJ Mayor Under Fire for Racist, Sexist Comments Apologizes',
        article: `A New Jersey mayor who has faced calls to resign after allegedly making racist, sexist and hate-filled comments heard on tape issued his first apology for the remarks that shocked residents.

"I've made mistakes. And I'd like to apologize for the pain I caused to the residents of Clark, my family, my friends, and all those that were offended by my comments," said Clark Mayor Sal Bonaccorso in an apology video. "They had a right to expect more from me. My words should not reflect on any of them."

Bonaccorso apologized after the recordings, first revealed in legal papers, allegedly captured him using racial slurs to describe Jewish people and Black people.

"They was looking for some ------ walking around or something," he can allegedly be heard saying in other recordings, as well as "f-----g hang the (racial slur) up there."

Bonaccorso on Tuesday called his language "hurtful and insensitive...it was wrong. I'm embarrassed and ashamed to have spoken that way about a race of people. I have learned, and I have changed and it will not happen again," he said in a video posted to YouTube. "However, a true measure of a man is whether he can admit an error and then learn from it."

The embattled mayor then referenced when Black Lives Matter protests took place in the town, and explained that he "understood...after interacting with people of all generations and races" why people wanted to participate in them.

"I started to see a much bigger picture of how discrimination played into a complex history. These experiences challenge my assumptions. I have never discriminated against anyone based on race, gender, and or any other groupings. I always treat people respectfully and fairly," Bonaccorso said in the nearly five minute video.

He added that the protests started "a journey of awareness" for him, and that they "revealed his blind spots."

"I went to those marches in 2020 thinking I was going to hear people out. Instead I heard much more inside my own head," Bonaccorso said. "I now realize that not sharing my insights and lessons from those rallies with this community was a missed opportunity."

Also heard in the recordings were comments about female officers, in which he can be heard saying "As far as female cops go, I hope there's never any, but they're all f-----g disasters that I've seen."

The mayor addressed those remarks as well, saying they were "hurtful and I'm sorry. They were also part of a larger, difficult conversation we were having about performances of several officers employed by Clark."

What the apology did not address were the alleged payments made to Lieutenant Antonio Manata, a police lieutenant-turned-whistleblower who privately recorded the mayor. Past legal papers obtained by NBC New York show the town paid Mananta $400,000 dollars on condition he turn over the offensive recordings. 

Manata, who declined to comment through his attorney, has told others he has faced retaliation.

The recordings obtained by NBC New York allegedly involve Bonaccorso and a former police chief, and have led to the question of whether taxpayer money was used to keep the controversy under wraps.

When confronted by town residents Monday night, Bonaccorso addressing the lawsuit and settlement.

“The suit that involved myself and three other people, we wanted to vigorously fight it. Insurance company wanted to settle it on a business decision, we disagreed," Bonaccorso said. “Out of the $400,000, $70,000 was paid by Clark. The rest was by the insurance company.”

The recordings also include conversations of Bonaccorso talking to the one-time Clark Police chief and a sergeant. One conversation centers on the Republican mayor having to apologize to the nearby city of Plainfield for a 2017 incident where girls basketball players complained about a puppet found hanging in a locker room.

The then-chief was recorded saying, "I want to prove that them f-----g (racial slur) did it." The sergeant at a different time was also heard making offensive statements, saying "he ain't a big dude. He's just got a big f-----g monkey head on him."

Three Clark police officers who are allegedly involved remain on administrative leave.

"The truth is I do not have a memory of every conversation I've had, and these are over four years old. I can say that I am a very different person in 2022 than I was in 2020...Because the world is a teacher and I've gotten through good fortune to learn from it, a person's age doesn't determine growth." Bonaccorso said. "I look forward forward to working to change the perception of myself and of Clark."

The tapes were turned over to the town two years ago, but remained in the shadows until now. A source familiar with the recordings provided NBC New York with a copy of the recordings, and a second source confirmed their authenticity.

News 4 obtained the recordings after nj.com first broke the story. The mayor first responded to their story, not denying the tapes' authenticity, but instead said "I have many, many Black friends in my life...I mean I've been here 22 years, never had a problem, and all of a sudden this is coming up?  I find it offensive. I do."

Mayor Adrian Mapp of nearby Plainfield says Clark residents should demand Bonaccorso resign, adding that the racist remarks in Clark Township are just one symptom.

"To use those kinds of racist remarks is something that cannot be overlooked, it can't be explained away, and clearly it was his voice on the tape," Mapp said. "Black folks have been afraid at times to go through Clark because of the kind of profiling that we have experienced over the years as a people."

Back in 2020, the Union County Prosecutor took over the running of the Clark Police Department amid misconduct allegations, with the state attorney general promising a public report on the problems there. No word on when the attorney general's report will be released. 
`,
        tagId: 8,
        userId: 6,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Best Relationship Advice, According to Experts',
        article: `Relationship advice is a tricky thing. When it’s unsolicited, it can be annoying and sometimes even insulting (hey, we all have that friend). But when you actually seek it out, it can be hard to find what you're really looking for—like a definitive answer on whether or not yours is healthy, and what's truly important.

Sure, there’s your go-to advice like “don’t go to bed angry,” and “respect is important,” but we’ve all heard those before. That’s why we consulted expert therapists for the best tips they most regularly share with their patients.

Schedule dates to talk about your relationship.
“Commit to investing an hour—on an ongoing basis—to work on strengthening your relationship, troubleshooting, and making it more satisfying,” says Manhattan-based licensed clinical psychologist Joseph Cilona, Psy.D. Set up a weekly or monthly dinner where you only talk about relationship issues or goals.

Sure, it might sound drab, but getting your "homework," or couple's maintenance out of the way during a designated conversation is better than having it sabotage a perfectly romantic meal. Make sure to cover the things that you're grateful for as well as use the time to figure out how to solve problems and minimize them in the future, Cilona says.

Be candid about your feelings—the good and the bad.
Regularly opening up can help bring you closer, says psychotherapist Beth Sonnenberg, L.C.S.W. “Once you think that your feelings don’t matter, won’t be heard, or are not worth sharing, you open the door to harbor negativity and resentment.” That includes positive feelings, too, she points out—especially when they’re connected with your partner. “People need to feel appreciated in any relationship,” she adds.

Figure out the recurring issues in your relationship. Then, do something about them.
Every couple has these. Maybe you repeatedly fight about your intense work schedule, or your partner’s spending habits. Whatever it is, not addressing the root of the problem means you’re going to continue to fight. That’s why Cilona recommends that you and your partner identify recurring conflicts, and decide on the solutions. It’s helpful to focus on “specific and discrete behaviors” when you do this instead of labels and interpretations, he says.

For example, instead of saying that your partner is inconsiderate when they buy a mini fridge without consulting you, it’s better to say that when they make big purchases without talking to you first, you feel like they’re trying to hide things from you. “Focusing on the issue rather than blame can allow for more effective problem solving and a team-based approach,” Cilona says.

Don’t expect your partner to be your BFF.
“We expect so much from our relationships these days. We want our partner to be a best friend, confidant, co-parent, and companion. Yet, this sets us up to be disappointed when our partner cannot fulfill our needs," says licensed family therapist David Klow, owner of Skylight Counseling Center in Chicago and author of You Are Not Crazy: Letters from Your Therapist.

Obviously, you should expect your partner to meet some of those needs, but the best friend one is complicated. If you feel like your partner just isn’t best friend material for you, Klow recommends finding “healthy, alternative ways” to have that need met through others. “This can free up your relationship to be a source of joy rather than something that lets you down," he says.

Before commenting, repeat their words out loud.
It's called "mirroring." Here’s how it works: When you’re having an important discussion with your partner, repeat back exactly what you heard them say before you comment on it. For example, something like "So what you’re saying is, you think we need more time for just us without friends or kids around?" is more effective.

“You will be endlessly surprised at how the simplest statements are heard differently by various people,” Cilona says. “This not only dramatically improves the accuracy and quality of communication by allowing for correction of misinterpretations, but also creates of strong sense of being heard and understood in each partner.”

Remember, don't just say how you feel...show it.
Sure, it’s a good idea to say, “I love you” often, but “the act of showing matters, because we don’t say those three little words as often as we should,” says psychotherapist Barton Goldsmith, Ph.D., author of The Happy Couple.

He recommends expressing yourself by doing little things like making coffee for them in the morning, warming up their car, or stocking the freezer with their favorite flavor of Halo Top. “A random act of kindness doesn’t take much, but it can make a big difference,” he says.

Don't be afraid to talk about money.
It’s so easy to fight about finances but talking about money—the right way—can actually help make your relationship stronger, Cilona says. “A couple that communicates their financial goals, and is willing to work together to achieve them, will likely have a deeper bond," he adds.

So, if you know you like doing your research before a big purchase but your partner is more impulsive, have that conversation before the car lease is up. Or, if you're more interested in investing in travel than saving up for a vacation home, be up front about your preferences so you can find a common ground.

Choose to love your partner every day.
“My favorite piece of advice is the idea that every day we wake up and decide to feel affection towards our partner,” says psychotherapist Jennifer L. Silvershein, L.C.S.W. The idea behind this is simple, she says: Love is an active daily choice, and you have control over how you’re feeling. “When we wake up and the first thing we notice is a flaw in our partner, it will be hard to feel connected and in love for the rest of that day,” she says. “If we wake up and identify something we love or admire, that sets the tone.”

Fight in a productive way.
Every couple fights, but fighting in a way that moves the conversation forward and clearly explains why you're feeling a certain way can make a difference. Silvershein recommends being specific about how your partner’s actions impact you. For example, “When you forget to text when you'll be late, it makes me feel like you don't care.” “When we begin shifting our language to share how our partner's behavior makes us feel rather than just telling them what to do, I find that couples become more fluid and more aligned in their daily functioning,” she says.

`,
        tagId: 9,
        userId: 3,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The 3 Healthiest Leafy Green Vegetables',
        article: `Leafy green vegetables are an important part of a healthy diet. They’re packed with vitamins, minerals and fiber but low in calories.

Eating a diet rich in leafy greens can offer numerous health benefits including reduced risk of obesity, heart disease, high blood pressure and mental decline (1Trusted Source).

Here are 13 of the healthiest leafy green vegetables to include in your diet.

1. Kale

Kale is considered one of the most nutrient-dense vegetables on the planet due to its many vitamins, minerals and antioxidants.

For example, one cup (67 grams) of raw kale packs 684% of the Daily Value (DV) for vitamin K, 206% of the DV for vitamin A and 134% of the DV for vitamin C (2).

It also contains antioxidants such as lutein and beta-carotene, which reduce the risk of diseases caused by oxidative stress (3Trusted Source).

To benefit most from all that kale has to offer, it’s best consumed raw since cooking can reduce its nutrient profile (4Trusted Source).

2. Microgreens
Microgreens are immature greens produced from the seeds of vegetables and herbs. They typically measure 1–3 inches (2.5–7.5 cm).

Since the 1980s, they have often been used as a garnish or decoration, but they have many more uses.

Despite their small size, they’re full of color, flavor and nutrients. In fact, one study found that microgreens contain up to 40 times more nutrients compared to their mature counterparts. Some of these nutrients include vitamins C, E and K (5Trusted Source).

Microgreens can be grown in the comfort of your own home all year round, making them easily available.

3. Collard Greens
Collard greens are loose leaf greens, related to kale and spring greens. They have thick leaves that taste slightly bitter.

They’re similar in texture to kale and cabbage. In fact, their name comes from the word “colewort.”

Collard greens are a good source of calcium and the vitamins A, B9 (folate) and C. They’re also one of the best sources of vitamin K when it comes to leafy greens. In fact, one cup (190 grams) of cooked collard greens packs 1,045% of the DV for vitamin K (6).

Vitamin K is known for its role in blood clotting. In addition, more research is being done regarding its ability to improve bone health (7Trusted Source).

One study in 72,327 women aged 38–63 found that those with vitamin K intakes below 109 mcg per day had a significantly increased risk of hip fractures, suggesting a link between this vitamin and bone health (8Trusted Source).`,
        tagId: 13,
        userId: 2,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How we reached 1,000 email subscribers',
        article: `Classical French cuisine has been extraordinarily influential in the culinary world.

Even if you don’t fancy yourself a chef, you’ve probably incorporated elements of classical French cooking into your home kitchen on more than one occasion.

French cuisine is renowned for its liberal use of flavorful sauces. After all, a well-crafted sauce adds moisture, richness, complexity, and color to almost any dish.

There are countless varieties of French sauces, the majority of which are derived from one of five mother sauces.

Created in the 1800s by chef Auguste Escoffier, mother sauces are basic concoctions that serve as a foundation for any number of secondary sauce variations. Each mother sauce is primarily categorized according to its unique base and thickener.

Escoffier originally designated 4 primary mother sauces, along with mayonnaise as a cold mother sauce and Hollandaise as a “daughter” sauce. When his book was translated to English, mayonnaise was left out and Hollandaise was listed as a mother sauce.

This article highlights the 5 French mother sauces, explaining how they’re made, their basic nutrient information, and some secondary sauces you can make from them.

1. Béchamel
Béchamel, or white sauce, is a simple milk-based sauce made from butter, flour, and whole milk.

A 2-ounce (60-mL) serving provides approximately (1Trusted Source, 2Trusted Source, 3Trusted Source):

Calories: 130
Fat: 7 grams
Carbs: 13 grams
Protein: 3 grams
To make béchamel, start by cooking butter and flour in a saucepan until it forms a thick, paste-like substance called a roux. The roux is responsible for thickening the sauce.

There are many styles of roux, but the one used for béchamel is called white roux. It’s only cooked for about 2–3 minutes — long enough to remove the starchy texture of the flour but not so long that the butter begins to brown.

When the roux is ready, slowly whisk in warm milk and simmer it until it forms a smooth, creamy sauce.

With the addition of a few extra seasonings like salt, pepper, and cloves, béchamel is complete — though it may be used as a base for many other sauces.

Popular sauces made from béchamel include:

Mornay: béchamel with onion, cloves, Gruyère cheese, and Parmesan
Cream sauce: béchamel with heavy cream
Soubise: béchamel with butter and caramelized onions
Nantua: béchamel with shrimp, butter, and heavy cream
Cheddar sauce: béchamel with whole milk and cheddar cheese
Béchamel and its derivative sauces can be used in countless dishes, including casseroles, creamy soups, and pastas.

2. Velouté
A velouté is a simple sauce made from butter, flour, and stock.

Stock is a savory, flavorful cooking liquid created by simmering bones, herbs, and aromatic vegetables for several hours.

Velouté is similar to béchamel because it’s a white sauce thickened with roux, but it features stock for the base instead of milk. Chicken stock is the most common choice, but you can also use other white stocks, such as those made from veal or fish.

A 2-ounce (60-mL) serving of chicken velouté contains approximately (1Trusted Source, 2Trusted Source, 4Trusted Source):

Calories: 50
Fat: 3 grams
Carbs: 3 grams
Protein: 1 gram
To make velouté, start by making a white roux with butter and flour. Next, slowly stir in warm stock and let it simmer until a creamy, light sauce forms.

A basic velouté can be used by itself on meats and vegetables, or fashioned into numerous secondary sauces.

Some popular sauces derived from velouté include:

Supreme: chicken velouté with heavy cream and mushrooms
Hungarian: chicken or veal velouté with onion, paprika, and white wine
Normande: fish velouté with cream, butter, and egg yolks
Venetian: chicken or fish velouté with tarragon, shallots, and parsley
Allemande: chicken or veal velouté with lemon juice, egg yolk, and cream
Although it’s not traditional, you can also make vegetarian velouté using vegetable stock.

3. Espagnole (brown sauce)
Espagnole, otherwise known as brown sauce, is a rich, dark sauce made from roux-thickened stock, puréed tomatoes, and mirepoix — a mix of sautéed carrots, onions, and celery that’s used as a base.

Like velouté, espagnole uses roux and stock as the main ingredients. However, instead of white roux and stock, it calls for brown stock and brown roux.

Brown stock is made from beef or veal bones that have been roasted and simmered, while brown roux is flour and butter that’s cooked just long enough to brown the butter. These ingredients give espagnole an especially rich, complex flavor.

A 2-ounce (60-mL) serving of espagnole offers (1Trusted Source, 2Trusted Source, 5Trusted Source, 6Trusted Source, 7Trusted Source):

Calories: 50
Fat: 3 grams
Carbs: 4 grams
Protein: 1 gram
Espagnole also serves as a base for the following sauces:

Demi-glace: espagnole with additional beef or veal stock, herbs, and spices that’s reduced to a thick, gravy-like consistency
Robert: espagnole with lemon juice, dry mustard, white wine, and onions
Charcutière: espagnole with dry mustard, white wine, onion, and pickles
Mushroom: espagnole with mushrooms, shallots, sherry, and lemon juice
Burgundy: espagnole with red wine and shallots
Because espagnole and its derivative sauces tend to be heavy and thick, they’re usually served alongside dark meats like beef or duck.

4. Hollandaise
Hollandaise is a tangy, creamy sauce made from butter, lemon juice, and raw egg yolks.

It’s probably best known for its role in the classic breakfast dish Eggs Benedict.

Hollandaise stands out from the other French mother sauces because it relies on the emulsification — or mixing — of egg yolks and butter in place of roux.

It has a reputation for being somewhat challenging to prepare because of the tendency for butter and egg yolks to resist combining — much like water and oil.

The key to making a proper hollandaise is slightly warm egg yolks, room temperature butter, and steady, constant whisking. It’s essential to add the butter to the yolks slowly and incrementally so that the ingredients remain stable and don’t separate.

A 2-ounce serving of hollandaise provides (8Trusted Source):

Calories: 163
Fat: 17 grams
Carbs: 0.5 grams
Protein: 1.5 grams
Hollandaise is delicious on its own but also kickstarts other sauces, such as:

Bearnaise: hollandaise with white wine, tarragon, and peppercorn
Choron: hollandaise with tarragon and tomato
Maltaise: hollandaise with blood orange juice
Mousseline: hollandaise with whipped heavy cream
Hollandaise and its derivative sauces are often served over eggs, vegetables, or lighter meats like poultry and fish.

It’s worth mentioning that hollandaise is derived from mayonnaise and hasn’t always been classified as a mother sauce.

5. Tomato
Tomato sauce is arguably the most popular of the French mother sauces.

Classical French tomato sauce is thickened with roux and seasoned with pork, herbs, and aromatic vegetables. However, most modern tomato sauces primarily consist of puréed tomatoes seasoned with herbs and reduced into a rich, flavorful sauce.

A 2-ounce (60-mL) serving of tomato sauce contains (9Trusted Source):

Calories: 15
Fat: 0 grams
Carbs: 3 grams
Protein: 1 gram
Its derivative sauces include:

Creole: tomato sauce with white wine, garlic, onion, cayenne pepper, and red bell peppers
Algerian: tomato sauce with green and red bell peppers
Portugaise: tomato sauce with garlic, onions, sugar, salt, parsley, and peeled tomatoes
Provençal: tomato sauce with olive oil, parsley, garlic, salt, pepper, and sugar
Marinara: tomato sauce with garlic, onions, and herbs
Tomato sauces are remarkably versatile and can be served with stewed or roasted meats, fish, vegetables, eggs, and pasta dishes.

Any chef will tell you the best tomato sauces are made with fresh, vine ripened tomatoes. Try making a big batch of sauce with fresh tomatoes while they’re in season, then can or freeze the leftovers so you can enjoy homemade tomato sauce year round.

`,
        tagId: 13,
        userId: 6,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'TypeScript / How the compiler compiles',
        article: `This article is inspired by the talk How the TypeScript compiler compiles◹, you should really check it out for a more in-depth understanding about the TypeScript’s compiling process.

At a high level, the TypeScript compiler is a tool to help us analyze and compile the TypeScript code into JavaScript (*.js), as well as some type definition files (*.d.ts) or source maps (*.js.map).

If the source file contains some problems, the TypeScript compiler is also able to provide the diagnostics, so we know what went wrong and how to fix it.

The compilation process
Internally, it’s a complex process that involves many different parts, here’s the summary of the process:

The compilation process starts when you invoke the tsc command. To run, the TypeScript compiler needs a tsconfig.json file, this file essentially defines two parts: the Compiler Options and the Input Files.

The compilation context will be created as a Program object, defined in the src/compiler/program.ts file. When created, it loads all the input files and their imports. And call the Parser (defined in src/compiler/parser.ts) to parse each file into an AST (Abstract Syntax Tree).

Under the hood, the Parser creates a Scanner instance (defined in src/compiler/scanner.ts), which will scan the source code and generate a stream of SyntaxKind tokens.

The parsing process did not stop here, after this, the AST will be fed to the Binder (defined in src/compiler/binder.ts), to create a map between the AST Nodes and the Symbols.

A Symbol is additional metadata to store the type information of each Node. The Binder creates a Symbols Table, which will be used in later phases like type checking.

After this, with the Program.emit call, the Emit Worker will be created to transform the AST into a string of JavaScript source code and other stuff. There are 2 types of Emitter:

The JavaScript Emitter: defined in src/compiler/emitter.ts, emitting JavaScript source code and Source Maps.
Type Definition Emitter: defined in src/compiler/definitionEmitter.ts, emitting type definition files.
When the Emitter running, it will call the getDiagnostics() function to create a Type Checker, this object is defined in the src/compiler/checker.ts file. Then the Emitter will walk the AST to process each Node.

On each Node, it will perform code analysis, using the type data from the Symbols Table, and if everything goes well, the final JavaScript sources will be generated.

Error reporting
There are different types of errors that could be returned during the compilation process, depending on what phase the compiler found the error.

For example, if there is an error in tsconfig.json file, the ConfigFileErrors will be returned.

If an error is found by the Scanner, it is the SyntaxErrors. Sometimes, the code is written in the correct syntax, but semantically incorrect, most of the time they are TypeErrors, which can be caught by the Parser or the Type Checker. For example:

let a: number = "hello";
This code is written in the correct syntax, but semantically incorrect because you cannot assign a string value to a number variable.

Conclusion
In this article, I only illustrate the overview and the relation between each part of the compilation process, with this, you are able to explore the TypeScript source code to see how things are actually implemented.

It is recommended to read the TypeScript Compiler Internals◹ document for a more in-depth version of this article (which also dives into which part of the code, and how things are called each other).
`,
        tagId: 12,
        userId: 4,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Algorithms / Sliding Window With Two Pointers',
        article: `For the problems that require us to do something a stream of values, or a subsequence of an array, the typical approach is to use a sliding window.



A naive way to implement a sliding window is to have a nested loop, the first loop to iterate the start position of the window, and the second loop to collect the values inside a window:

for(start = 0..array.length):
    for (end = start..start + window_length):
        // value array[start..end]
This algorithm would run in O(N * K) time, with N being the number of elements, and K is the window size.

A better approach to implementing sliding windows is to keep track of just the start and the end of the window. Since most of the items in between are overlapped when sliding, we can eliminate the inner loop, depending on what operation we need to perform on the array.



For example, if a problem requires us to perform some work on the sum of each window, we can reuse the sum by adding the value of the new element and subtracting the value of the value at the beginning of the previous window.

start = 0
sum = 0
for (end = 0..array.length):
    sum += array[end]
    sum -= array[start]
    start += 1
This approach only takes O(N) time.

Sometimes, you will need to check for all subarrays without the fixed window size, the windows could be shrinking or expanding depending on some conditions.



In this case, the start and end pointers can be moved using this pattern:

start = 0
for (end = 0..array.length):
    // do something
    ...
    // shrink the window
    while (need_to_shrink):
        start += 1
The above approaches work well when you do not need to keep track of the overlapped items between the windows. In some problems, when working on a stream of data, you might need to have the information of all the items in between. In this case, using a circular buffer (or ring buffer) as a fixed queue would be a better solution.



A ring buffer can be easily implemented using an array for storing data, and two pointers for writing and reading.



Here’s an implementation of a circular buffer using JavaScript:

const CircularBuffer = function(size) {
    this.data = Array(size).fill(0).map(_ => 0);
    this.writePtr = 0;
    this.readPtr = 0;
    
    return {
        put: (value) => {
            this.data[this.writePtr++] = value;
            this.writePtr %= size;
        },
        get: () => {
            let item = this.data[this.readPtr++];
            this.readPtr %= size;
            return item;
        }
    }
};`,
        tagId: 12,
        userId: 7,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Emmanuel Macron Could Lose Frances Presidential Election',
        article: `Five years ago, Emmanuel Macron won a sweeping victory to become the youngest president in France’s history. Running at the head of The Republic On The Move,1 a centrist and pro-European Union party he had founded in 2016, Macron defeated his far-right opponent, Marine Le Pen, by more than 30 percentage points and broke the hold of the traditional center-right and center-left parties over French politics.

But as France prepares for the first round of presidential voting on Sunday, Macron is fighting to maintain his centrist coalition in the face of more radical alternatives. Not totally unlike the United States and other parts of Europe, France has experienced deep political cleavages between its urban and rural, affluent and working class and native and immigrant populations. And a burgeoning political right has stoked anti-immigrant and nationalist sentiment in the ethnically and culturally diverse country. Add in concerns about the cost of living, and it’s no wonder Macron faces a tough reelection battle. Once again, it’s Le Pen who looks most likely to stand in his way, too.

Based on survey data collected by French journalist Alexandre Léchenet, Macron and Le Pen hold strong leads over the rest of the field in Sunday’s first-round vote, with Macron leading the field at a bit north of 25 percent, on average, and Le Pen in second in the low 20s. Only one other candidate, far-left contender Jean-Luc Mélenchon, is polling above 10 percent.

However, as no candidate is polling anywhere near 50 percent, a runoff election between the top two vote-getters on April 24 is a near certainty at this point, as a candidate must secure a majority of the vote in order to win on Sunday. Those two candidates are very likely to be Macron and Le Pen. The Economist’s forecast currently gives Macron and Le Pen a 98 percent and 93 percent chance of advancing to the runoff, respectively. 

Recent Stories from FiveThirtyEight
What Americans Can Expect If Abortion Pills Become Their Only Safe Option
What’s troubling for Macron, though, is that Le Pen’s gains suggest she could pose a real threat in the runoff, as she has consolidated support on the political right while her two main rivals, Valérie Pécresse and Éric Zemmour, have lost ground. 

Le Pen and her party, the National Rally2 (formerly the National Front), have traditionally run on an anti-immigrant and Euroskeptic platform, dating back to her father Jean-Marie Le Pen’s party leadership. But in this election, Le Pen has placed a greater emphasis on kitchen table issues, including calls to cut taxes on energy and raise base pensions, which may broaden her appeal considering that many in France are worried about inflation. To be sure, her party maintains a strong anti-immigrant platform that aims to weaken immigrants’ access to government benefits and shut out many asylum seekers, but Le Pen has welcomed Ukrainian refugees as she tries to distance herself from her past praise of Russian President Vladimir Putin. 

Le Pen’s hard-right edge may have also been softened in voters’ eyes given Zemmour’s far-right campaign. A political commentator who has espoused racist, anti-immigrant and anti-Islamic views and been convicted twice of inciting hatred, Zemmour seemed to initially take a bite out of Le Pen’s support last fall, but his campaign never quite took off, and he has since slipped in the polls. Meanwhile, Le Pen may also be winning over some conservative voters who abandoned Pécresse and her center-right party, The Republicans.3
Meanwhile, the French left, which has been in a state of disarray in recent years, hasn’t yet consolidated around Macron. Instead, Mélenchon of the France Unbowed party4 has been gaining ground in the polls. Mélenchon may be gaining traction for his campaign promises to reintroduce a wealth tax that ended during Macron’s administration and lower the retirement age from 62 to 60. Then again, Mélenchon is still polling considerably behind both Le Pen and Macron, so his campaign might be most significant for whether Macron can win over many of Mélenchon’s voters in a runoff.

Until a few weeks ago, though, Macron didn’t look like he was in trouble. In fact, his handling of the war in Ukraine had significantly boosted his standing at home. Following Russia’s invasion of Ukraine on Feb. 24, Macron’s first-round polling numbers jumped from the mid-20s to around 30 percent, as he earned plaudits for his diplomatic efforts to halt the Russian invasion, and when that failed, praise for his tough stance toward Russia both militarily and economically. Tellingly, his numbers hit 60 percent in some head-to-head surveys against Le Pen ahead of a possible runoff. However, as the war in Ukraine has dragged on, Macron’s bump has dissipated — in fact, he’s slipped below where he was prior to Russia’s invasion of Ukraine, as the chart below shows.



It’s not really clear why Macron’s numbers have dropped so dramatically, as he still enjoys relatively high support for his handling of foreign policy. Part of it could have to do with low marks for his attempts to liberalize France’s economy, including making it easier for companies to lay off workers and lowering business taxes, which haven’t been popular. Some critics have called him “the candidate of the rich,” and moves like getting rid of the wealth tax and reducing social spending assistance have played into that. And Macron’s policies have resulted in populist outcry before, as a proposed gas tax hike in 2018 led to nationwide protests in what became known as the Yellow Vest Movement. Now his campaign is pushing the unpopular position of raising the retirement age, which may also explain why the race between him and Le Pen has narrowed.

In fact, polling between Macron and Le Pen has gotten close enough that Le Pen is just a normal polling error away from winning: The average error between the poll margin two weeks before the election and the runoff result has been about 4.6 points in French presidential elections from 1969 to 2017, and polling averages produced by Politico and Reuters each put Macron’s runoff lead at 6 points. In other words, a slightly larger-than-normal error could make Le Pen France’s next president. And there’s still time for the race to tighten further, as the likely runoff will take place two weeks after the first round.

That said, we should be careful about interpreting just how close the margin is because French polling doesn’t include undecided voters, who may or may not vote. For instance, Ipsos’s latest tracking poll of the likely Macron-Le Pen runoff found that about 1 in 5 first-round voters wouldn’t cast a vote. This was an issue in 2017, too, as turnout fell in the second round, and it could continue to be one in the 2022 runoff because some voters, particularly those on the left, may not be particularly enthused about either candidate. To be sure, what happened in 2017 wasn’t the norm; voter participation has usually risen at least a little bit in presidential runoffs. But many voters may not cast a ballot at all this year, which could endanger Macron if the political right is more energized to vote than the center.

Bottom line: The French presidential election looks to be much closer now than it did a couple of weeks ago. The Economist’s model had put Macron’s reelection chances north of 90 percent in late March; now his odds of winning are slightly better than 3 in 4. Macron is still the clear favorite, but tightening polls have raised the prospect that he will lose the runoff if things go Le Pen’s way.

Other polling bites
The share of Americans who say they are worried a great deal about the environment has remained elevated for the last seven years, according to a March 1-18 poll from Gallup. Forty-four percent of respondents said they worried about the quality of the environment a great deal, down only slightly from highs of 47 percent in 2017 and 2019. When asked about specific environmental problems, the greatest share of respondents said they were worried about pollution of drinking water (57 percent), while the smallest share of respondents listed global warming or climate change (43 percent) as their top concern.
Most Americans agree with the sentiment that Russian President Vladimir Putin cannot remain in power — but that doesn’t mean they approve of President Biden having said it in a March 26 speech in Warsaw, according to a March 31-April 4 poll from Yahoo News/YouGov. When the quote about Putin — “This man cannot remain in power” — was unattributed, 63 percent agreed with it. But when the pollster asked whether Biden was right or wrong to have said it,” just 48 percent of Americans said he was right. Both Democrats and Republicans were less likely to agree with this statement when it was attributed to Biden: 57 percent of Republicans agreed with the unattributed statement, whereas only 37 percent said the same when told Biden said it; meanwhile, 83 percent of Democrats agreed with the unattributed statement, while 70 percent said the same when told Biden said it.
Trust in autonomous vehicles (also known as self-driving cars) remains low. In fact, the share of Americans who say that they trust autonomous vehicles to be safer than traditional cars has gone down since 2018. According to a March 3-6 poll from Morning Consult, the share of respondents who said they thought that self-driving vehicles were safer declined from 27 percent in 2018 to 19 percent now.
Americans are divided on what kinds of content social media companies should be allowed to remove, according to an April 4-5 poll from Ipsos. Overall, 78 percent agreed that social media companies have the right to remove any person considered to violate the platform’s terms of service and 72 percent agreed that social media companies had the right to block any post they considered inappropriate. Large majorities also said they supported social media companies removing posts that probably have false information (75 percent), promote violence against particular individuals or groups (80 percent) or pose a risk to the public (79 percent). But at the same time, 69 percent of respondents agreed that companies have a clear political agenda in who and what they block. Just 48 percent of respondents said they support removing posts that promote political action and 54 percent said the same of posts that have heated political language.
The Weather Channel is the most trusted media organization in the U.S., with a net rating of +41 points among American adults; the least trusted outlet is Breitbart, with a net rating of -15 points, according to a March 26-29 poll from The Economist/YouGov that asked about 22 different media organizations. Opinions of CNN were the most politically polarized: 66 percent of Democrats said it was very or somewhat trustworthy, versus just 11 percent of Republicans. On the whole, though, Democrats were much more likely than Republicans to trust media outlets. There were only two outlets (Fox News at 53 percent and The Weather Channel at 50 percent) that the majority of Republicans trusted, versus 145 that the majority of Democrats trusted.
Biden approval

According to FiveThirtyEight’s presidential approval tracker,6 41.7 percent of Americans approve of the job Biden is doing as president, while 52.6 percent disapprove (a net approval rating of -11.0 points). At this time last week, 41.2 percent approved and 53.1 percent disapproved (a net approval rating of -11.9 points). One month ago, Biden had an approval rating of 42.1 percent and a disapproval rating of 51.9 percent, for a net approval rating of -9.8 points.
`,
        tagId: 14,
        userId: 1,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Does Alaskas Special Election Create An Opening For Sarah Palins Comeback?',
        article: `On Friday, Sarah Palin returned from the political wilderness by announcing a bid for the U.S. House of Representatives, nearly 14 years since the then-governor of Alaska entered the national spotlight as the Republican vice presidential nominee. 

It’s a curious reappearance, as Palin largely exited politics after her failed 2008 run with the late Sen. John McCain. She surprised many by then opting to not complete her term as governor, resigning in 2009 to then kickstart a media career. And although she never completely abandoned national politics — she backed former President Donald Trump ahead of the 2016 presidential primary, had her own political action committee and teased campaigns for president and Senate — up until now, she hadn’t taken the leap to run for another office.

But now Palin has reentered the fray by running in the Aug. 16 special election for Alaska’s lone House seat, which sits vacant following the death of longtime Republican Rep. Don Young. 

The question now is: Can she win? The short answer is, quite possibly — but of course, we’re a long way from knowing. The push and pull of different factors, including Palin’s star power, controversial status and Alaska’s new electoral system, will make or break her comeback bid.

Unquestionably, one of the biggest positives Palin has working in her favor is her high name recognition, both in Alaska and nationally. She is also relatively popular in GOP circles: A late January/early February poll from The Economist/YouGov found that 62 percent of Republicans across the country had a favorable view of Palin, compared with 23 percent who had an unfavorable view, for a net favorability of +39. That’s not nearly as rosy as the +80 net favorability she enjoyed among Republicans around the time of her vice presidential bid, but it’s still objectively good news for Palin.

Recent Stories from FiveThirtyEight
What Americans Can Expect If Abortion Pills Become Their Only Safe Option
The fact that Palin is both well-known and popular among Republicans is a huge boon because it will make it easier for her to advance in Alaska’s June 11 primary, in which she will face nearly 50 other candidates. That’s especially important in this election, too, as Alaska will use its new electoral system for the first time: All candidates, regardless of party, will run together in the primary in which each voter will cast one vote, and the top-four vote-getters will advance to the Aug. 16 general election, where voters will pick Alaska’s next representative using ranked-choice voting. 

It’s hard to know how the primary vote will be split among a candidate field this large, but given her name recognition in the state, Palin has a very good shot of at least finishing in the top-four. Moreover, it’s not just her notoriety working in her favor. Palin could also lock up conservative Republican support, given Trump has endorsed her in a state he carried by 10 percentage points in 2020.

RECOMMENDED

MEDICATION_ABORTION-4×3
POLITICS

What Americans Can Expect If Abortion Pills Become Their Only Safe Option

Read Now

But there’s a lot working against her, too. For starters, Palin might be well-known, but she’s not a beloved figure in Alaska. Consider an October 2021 poll from Alaska Survey Research that found that only 31 percent of registered voters in Alaska had a favorable view of her. Even more troubling for Palin is that this was identical to ASR’s finding in an October 2018 survey of likely midterm voters. It’s possible, in other words, that Palin might be the first choice for many conservative Republicans in the state, but she may struggle to win many second-choice votes beyond this part of the GOP. It also doesn’t point to her ability to easily build a winning ranked-choice coalition in the general election.

There is also the possibility that despite her conservative bona fides, Palin will not necessarily corner that faction of the Republican base — or even the general election, as more than one Republican could advance from the primary. Already three other high-profile GOP contenders have emerged: state Sen. Joshua Revak, a former aide to Young; Tara Sweeney, an Iñupiat who served in Trump’s administration; and Nick Begich III, a member of the high-profile (but mostly Democratic) Alaska political family. Begich was already running against Young before the congressman died, so he may have a bit of a head start in attracting support across the state. Additionally, former state Sen. John Coghill is running, too, although the former state Senate majority leader narrowly lost renomination in his 2020 primary.

At first glance, it seems likely that a Republican wins the special election, given the red lean of the state and the Republican-leaning political environment. However, Alaska is also a weird state politically, with something of an independent streak. After all, 58 percent of Alaska registered voters do not identify with a political party, among the highest in the country. So we shouldn’t necessarily discount the Democrats and independents running, especially since it’s the state’s first use of a top-four primary and ranked-choice voting in a general election.


For its part, the Alaska Democratic Party is lining up behind Anchorage Assembly member Chris Constant, although other notable Democrats are running, including state Rep. Adam Wool; former state Rep. Mary Sattler Peltola, a Yup’ik Eskimo; and indigenous activist Emil Notti, an 89-year old Koyukon Athabascan who lost to Young in the 1973 special election for this seat. Meanwhile, a handful of independent (“nonpartisan” or “undeclared” in Alaska parlance) candidates are also running: Al Gross, an independent who lost the 2020 U.S. Senate race as the Democratic nominee; former Republican state Rep. Andrew Halcro; former Alaska assistant attorney general and garden columnist Jeff Lowenfels; and even a North Pole city councilor who changed his name to Santa Claus. Did we mention there are a lot of candidates?

There’s been no public polling of the special primary yet, but we do have one data point on the special general election that includes Palin: A Change Research poll funded by 314 Action Fund, which spent heavily to boost Gross’s campaign in 2020, found Palin and Gross running neck and neck at around 35 percent after respondents’ choices were reallocated via ranked-choice voting. To be sure, the poll only included four candidates: Palin, Gross, Revak and one other Republican who ultimately chose not to run, but even so, the poll does illustrate how Palin could win in a ranked-choice general election. At the same time, though, it underscores how ranked-choice voting could make for an incredibly close contest, possibly because of Palin’s poor standing among Alaska voters writ large.

One last wrinkle in the Alaska race is that the special general election will coincide with the regular primary for the November general election, which means we will find out who won the special election at the same time as we discover which four candidates advanced to the regular general election. Most of the high-profile contenders, including Palin, have filed or say they intend to file for the regular contest (they have until June 1 to do so). In other words, most of the major candidates will essentially be campaigning for two elections at once in the coming months. Still, at least a few notable names — Coghill, Halcro and Notti, for instance — only plan to run in the special, so it’s not out of the question that the special election winner will not be among the candidates who advance to the regular general election.

As the first woman on a GOP presidential ticket, Palin has already made history. Palin was the second woman to ever run for vice president on one of the two major parties’ national tickets, after Democrat Geraldine Ferraro in 1984, and it’s possible that’s not all Palin will end up having in common with Ferraro. Ferraro also lost her vice presidential campaign and then years later sought to make a political comeback, running for New York’s U.S. Senate seat in 1992. But Ferraro came up short in that race, losing by less than 1 point in an ugly Democratic primary; she also mounted another unsuccessful Senate bid in 1998 where she lost the primary by a much larger margin. How Palin’s comeback plays out remains to be seen — it’s definitely possible that Palin is victorious, but it’s also not without risks, as Ferraro knew all too well.
`,
        tagId: 14,
        userId: 4,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'TIFU by talking my wife into getting 23&me',
        article: `TIFU Current wife and I were both married previously and both had 3 children each. We went to hs together in a small town. Both of our families are well known in the area with deep roots (both families been here a long time). Last year I got my wife a ancestry DNA kit as a gift because she wanted to know more about her European roots then her sister decided to do the same. When their results were posted it started making family connections which included my mother, my oldest son, my uncle etc. Wife's mom comes in the room so they ask her how we could be related. Her mom starts crying and says that when she was very young she overheard someone say "Tom"" isn't your father, "Jimmy" is. Her mom being from older generation says she just put it out of her mind and convinced herself it's just rumor.

I call my mom asked if she's ever heard a rumor that her father could be my wife's mother's father as well. She gets quite for a moment and says yes I have and it was believed to be true by her mom as well and that her dad (my grandfather) was a well known cheater/womanizer.

We look further into the information on 23&me and it literally says that my wife and my oldest son share a great grandparent. More of us are now getting test on the same platform but it appears a WW2 Era secret has come to light.

TL;DR wife gets DNA test, discover decades old secret, turns out I married my 1st cousin

Edit: 1:to clear all kids are from both of 1st marriage

2:my mom and wife's mom are apparently half sister's

3: wife's mother is quite upset

4: WW2 was hard on everyone (Trying to not make a joke here)

EDIT 2: At first wife was laughing about this but I'm afraid that the reality of it is caught up to her. Personally I think she's reading to far into it.

I wasn't aware of how prevalent this particular taboo fetish is, some of yall are freaks. Maybe once this is settled I can have some fun with it.

As I stated all kids are from previous marriages, we're in our mid 40s and will not be having anymore.

We're definitely not in Alabama but we may have to move there now.

Yes we're very much in love and will be staying that way. Although we probably won't be sharing this information with too many other people...guess we'll keep in the family.
`,
        tagId: 6,
        userId: 7,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'I invited the wrong woman to a Green Day concert and trip to Ireland',
        article: `So I've been single for a couple years now, out of a ten year relationship. A complete Tinder noob. That shit wasn't a thing back when I was on the dating circuit. Suffice to say I hate it. Being a guy, it feels like handing out CV's (hundreds of likes vs 1 match) I had a few dozen matches but was a bit too depressed in the last 2 years to meet anyone. Keep in mind, I live alone in a foreign country and rarely get unsolicited calls or texts.

I pull myself out of this 2 year bummer and say to myself, 'Jim, it's time to catch yourself on and get over this shit, the world has changed, Tinder is just how dating is now, it's depressing but fucking get on with it man.

I finally reach out to one of my matches from months ago (Let's call her Lisa) and we start talking. Over the course of a couple weeks, I ask if she'd like to meet for drinks/dinner in her city. She obliges and it's happy days. Back in the game lad, see that wasn't so hard was it?

We meet and have a great time. No awkward silences, just banter over a few beers and Tinder suddenly feels like a real live conduit. Lisa is really cute, very pleasant and just feels like a really nice girl. So we end the date, she walks me to the train station and we part ways. Lisa, the waitress left an impression. Fuck, I like her etc

Now, I'm pushing close to 40 and feel like I've already wasted so much time but I'm cautious not to seem needy or desperate. I take my train home, stop in at my local pub for a night cap or 2 and just check in with her to make sure she made it home ok. All good. Won't text for a couple days....let things settle.



I get a message the next day. Nothing romantic, just a simple greeting and we spark up a convo that lasts the whole length of the day. We talk about life, travel, music, share youtube songs etc. I find out she likes Green Day and has always wanted to visit Ireland.

Now I already have a ticket to see Green day in Dublin this June. (keep in mind this a 2hr flight from where I live) I say to myself, you know what, fuck it, life is short, I have cash, YOLO. So after our lengthy chat the next day, I posit to her. Hey, You like Green day, you've always wanted to visit Ireland.... Well I'm headed home there for a concert in June, I'll buy you a ticket and I can show you my home country, tour a bit, if you want and can get the time off work. I acknowledge it might sound a bit sudden and crazy but emphasise there's no pressure, i just really enjoyed meeting her and YOLO etc I bought the ticket and even sent her a screenshot of the receipt.

No pressure... I can sell it easy, but it's there if you like...



The next day I get a response....

'Hey Jim, I check with work and yes I can make the holidays :)

Regards Renata....



RENATA????



Renata is some random Polish woman I met at my local after the date and barely spoke to for an hour. I was pretty drunk by the time we met and she asked for my number. I completely forgot I even gave her my number and the nameless text I got the next day (IT COULD ONLY HAVE BEEN LISA in my mind) was actually Renata.

Renata is nice btw but fuck my life, I hadn't planned on going to Green day and touring Ireland with her. This is my life right now and I have no idea how to handle this situation. But I do think its funny as fuck.





TLDR: Went on a tinder date, catfished myself and invited the wrong woman on an expense free trip to Ireland + Green Day concert
`,
        tagId: 6,
        userId: 2,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How would you rank major tech companies research labs for prestige ?',
        article: `This is just for fun, not to be taken too seriously. But I'm curious what are the reputations among the community for various research divisions (specifically AIML) of major companies, ie: Google, Facebook/Meta, Microsoft, Amazon, NVIDIA, IBM, etc.

My perceived (albeit naive) view is Google > Facebook > MSR are top tier. Don't know much about the others. But I've read that some people consider MSR most prestigious due to their academic environment. But I've seen that Google and FB dominate in terms of major publications, ie: vision transformers are associated with Google.
`,
        tagId: 15,
        userId: 4,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Squirrel: A new OS library for fast & flexible large-scale data loading',
        article: `Hi all,

Today we open-sourced Squirrel, a data infrastructure library that my colleagues and I have been working on over the past 1.5 years: https://github.com/merantix-momentum/squirrel-core

We’re a team of ~30 ML engineers developing machine learning solutions for industry and research. Across all our projects, we need to load large-scale data in a fast and cost-efficient way, while keeping the flexibility to work with any possible dataset, loaded from local storage, remote data buckets or via APIs such as HuggingFace. Not finding what we were looking for, we decided to build it ourselves.

Squirrel has already proven its value in our deep learning projects at Merantix Momentum and shows competitive benchmark results (check them out here).

We’re super excited to share it with the OSS community and hope that you can benefit from it as well!

Looking forward to hearing your feedback and questions :)`,
        tagId: 15,
        userId: 5,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How do I get myself to start working before the sun rises?',
        article: `I'm a student and I have to wake up at 5am every morning on my homework days. The issue is that I'm very slow to wake up and I end up "waking up" for 2 hours and wasting all that time.

Why do I take so long?

I think it boils down to two main reasons:

I'm groggy waking up, but this only lasts for ~1hr

I'm intimidated by my work. It's probably a procrastination thing. I'm trying to do the super easy stuff first though, so that I can overcome this.

`,
        tagId: 10,
        userId: 9,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Drag and Drop Hiearchical List to Calendar System?',
        article: `Hi Everyone,I've tried a million "productivity" sites and am pretty frustrated that what seems like would be the most natural flow for my brain is missing from all of them.I've been hoping to find something that lets me have a hiearchichal list (think nested outliner or sub-sub-sub tasks) to quickly add tasks, and then in the same window the ability to drag and drop those directly onto an hourly calender.

I like the feel of Planyway, but because it's tied to Trello it also has Trello's limitations of only one level deep subtasks.

Favro is close, but is sadly missing an hourly calendar, and has some weird choices that make quickly adding nested tasks a bit of a chore.

I like Clickup mostly, but again wish I could more intuitively drag directly from my main task list onto the calendar without.

Amazing Marvin is close, but I hate how they differentiate between tasks and projects, it really breaks up my flow as I have to decide what something will be, and they behave differently when dropped in different areas.

Moodo / Legend is also close, but every version has felt super buggy.`,
        tagId: 10,
        userId: 7,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '7 Sports of Ancient Greece',
        article: `The ancient Greeks, who staged the first formal Olympic Games in 776 B.C., gave the world the idea of organized big-time sports events as entertainment for arenas full of spectators. More than that, they were the first culture in which people idolized their favorite athletic superstars, to a level that even today’s most fanatical sports fans might find extreme.

“The Greeks believed that athletes had special powers,” explains David Lunt, an associate professor of history at Southern Utah University who is an expert on ancient Greek athletics and author of The Crown Games of Ancient Greece: Archaeology, Athletes and Heroes. “They commissioned poems to be sung about them, and they told stories about statues of athletes that could heal people." 

Lunt cites the example of Theagenes of Thasos, a champion boxer, runner and competitor in Pankration, the ancient equivalent of mixed martial arts, who was so idolized for his athletic prowess that archaeologists in the 1930s found an altar at which he was venerated, centuries after his death. As Lunt says, “They were pretty crazy for these athletes.”

The ancient Greeks may have loved sports because males grew up participating in them. As Lunt notes, every Greek city had its own gymnasium, where local males took off their clothes and competed in the nude at various sports, such as wrestling and foot races.


“The Greeks valued physical and athletic prowess, and the toned male body was sought after as aesthetically pleasing,” says Zina Giannopoulou, an associate professor of classics at the University of California, Irvine who has compared the ancient and modern Olympics. “Physical strength and prowess were also signs of moral strength, denoting self-discipline, hard work, and dedication to winning.” Athletes were seen as the epitome of arete, a Greek word that means virtue or excellence.

The Greeks also simply loved to watch competitions. In addition to the Olympics every four years, they held games at other religious festivals—the Pythian Games for Apollo at Delphi, the Isthmian Games for Poseidon and the Nemean Games, which honored Zeus. The Crown Games, as these competitions collectively were known, featured a range of events, from chariot races to track and field events and combat sports.

The athletes who competed in these events most likely were well-to-do Greeks who could afford to train instead of having to work for a living. “If you wanted to compete in the Olympics, you had to show up at least a month early to train under the watch of the officials, who presumably would weed out anybody who wasn’t up to the level of competition,” Lunt says.

The Greeks didn’t have team sports, only individual competitions, and they didn’t allow women to compete in events—or even, in the case of married women, to attend the games. There was one legendary exception—Kallipateira of Rhodes, who disguised herself as a male trainer so she could watch her son’s boxing match. “When caught, she defended herself by saying that she of all women should be allowed to attend having had a father, three brothers, a son, and a nephew who had among themselves won eight times,” says Giannopoulou. “Her life was spared, but in the aftermath the trainers were required to attend the Games in the nude.”


Here are some of the sports in which ancient Greek athletes competed.

1. Chariot Races
Amphiaraus in a chariot race. Greek hero and king of Argos. Relief from Oropo, Attica. 4th century B.C. Pergamon Museum. Berlin. Germany.
Greek hero and king of Argos n Amphiaraus depicted competing in a chariot race in a relief dating to the 4th century B.C.

PHAS/Universal Images Group/Getty Images

Chariot races were one of the oldest Greek sports—artistic evidence on ancient pottery suggests that the event dates back to the Mycenean Period from 1600 to 1100 B.C., and the poet Homer describes a chariot race held at the funeral of Patroclus in the Iliad, Giannopoulou notes. First included in the Olympics in 680 B.C., drivers raced in both four and two-horse chariot races.

According to Miller, the race consisted of 12 laps around a hippodrome, or horse track, and then 12 times in the opposite direction. The actual length varied depending upon where the event was held. Chariot racing was an expensive sport to compete in, and the owners of the horses and chariots—who watched as drivers competed in their name—used the event to flaunt their wealth. Hippodromes didn’t have a divider in the center of the oval, head-on crashes between chariots and horse teams sometimes occurred, which made chariot racing an extremely dangerous sport.

2. Horse Races

Kele, or riders competing in horseback, was added to the Olympics in 648 B.C., according to Miller’s book. The race was about 1.2 kilometers (approximately three quarters of a mile) in length. The jockeys—who were young boys and probably slaves—rode bareback, without stirrups, though they did have reins and a whip to guide the horses.

3. Running
Art on an ancient Greek cup features athletes running.
Art on an ancient Greek cup features athletes running.

DEA/G. Dagli Orti/De Agostini/Getty Images

The Greeks loved footraces, particularly the stadion, which was named after an ancient unit of measurement and corresponded to the 200-meter sprint in modern track, according to Stephen Gaylord Miller’s Ancient Greek Athletics. From 776 to 726 B.C., it was the only event at the Olympic Games. The Greeks later added the diaulos, the equivalent of today’s 400 meters event, as well as a distance event, the dolichos, which was between 7.5 and 9 kilometers—roughly similar to the 10K event that countless recreational runners now participate in each weekend. But the Greeks had one event that has no modern counterpart—the hoplitodromos, in which competitors emulated Greek infantry, and ran wearing helmets and bronze shin guards and carried shields.

4. Wrestling
A relief depicting a wrestling competition between athletes, from Kerameikos necropolis, Athens, Greece, circa 510 B.C.
A relief depicting a wrestling competition between athletes, from Kerameikos necropolis, Athens, Greece, circa 510 B.C.

DEA/G. Nimatallah/De Agostini/Getty Images


In ancient Greek-style wrestling, grapplers fought in a standing position, with the object of throwing the opponent to the ground, according to Miller. The concept of pinning an adversary’s shoulders to the ground didn’t yet exist. Instead, wrestlers won a match by throwing an opponent three times. Another unique feature of the ancient event was that there were no weight classes, according to Lunt. The most fearsome wrestler of ancient times was Milos of Kroton, who in legend developed his great strength by lifting and carrying a newborn calf until it grew into a full-sized ox.

5. Pentathlon
A ancient Greek athlete competing in the discus.
A ancient Greek athlete competing in the discus.

DEA Picture Library/De Agostini/Getty Images

The discus and javelin, to modern field events, date back to the ancient Greeks, but back then, they weren’t separate events. Instead, they were part of the pentathlon, a five-event combination that also included the long jump, running and wrestling. The Greeks had lead or stone weights, called halteres, that some believe jumpers used in an effort to propel themselves further during the competition, though Lunt believes that the weights were only used in training.

6. Boxing
Ancient Greek boxing.
Ancient Greek boxing, as portrayed on a ceramic vessel. 

Leemage/Universal Images Group/Getty Images

Unlike modern boxing, the Greeks’ version had no rounds and no time limit. Instead, boxers simply fought until one man was either unable to continue or admitted that he was beaten. Like wrestling, the Greek boxers competed in a single open division, and they wore thin leather thongs called himantes around their knuckles and wrists, but no padded gloves.

7. Pankration
The Pankration was an athletic contest that combined boxing, wrestling and kicking.
The Pankration was an athletic contest that combined boxing, wrestling and kicking.

Sepia Times/Universal Images Group/Getty Images

This sport, whose name means “complete victory” in ancient Greek, was a sort of no-holds barred version of modern mixed martial arts. According to Thomas A. Green’s Martial Arts of the World: An Encyclopedia, Vol.1, contestants used some of the same techniques as modern MMA, including boxing punches, elbows, knee strikes, low kicks aimed at an opponent’s legs, submission holds and ground grappling. They also were allowed to hit or kick opponents in the groin, something that’s not allowed in MMA, and unlike modern UFC fighters, they didn’t wear gloves, which allowed them to use karate-style knife hand strikes. Only biting and gouging were outlawed.

According to Michael B. Poliakoff’s Combat Sports in the Ancient World: Competition, Violence, and Culture, Sostratos of Sikyon won numerous crowns in competitions by bending opponents’ fingers back painfully until they were in danger of breaking (another technique outlawed in MMA).


Instead of the octagon, with its padded surface, competitors fought in a sand pit. The result was a bloody, brutal contest that not only tested an athlete’s fighting skills, but his ability to endure pain. As the 2nd Century A.D. writer Lucian described, fighters would pummel each other until their mouths were full of blood and sand, as a referee “urges them on and praises the one who struck the blow.”

Ancient Greek athletes didn’t earn anything comparable to the astronomical salaries that NBA and NFL players receive today, though they did have an opportunity to win prizes. At the Panathenaea, the games held to honor Athens and Athena, the winner of a foot race got 200 large, ornate jars filled with olive oil.

“I guess he could sell it, or else it would be a lifetime supply,” Lunt says. But for many ancient competitors, the adulation of the crowd, and the chance to achieve immortality because of their ability, may have been enough of a payoff.`,
        tagId: 4,
        userId: 9,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'This Day in History: Civil War begins',
        article: `The bloodiest four years in American history begin when Confederate shore batteries under General P.G.T. Beauregard open fire on Union-held Fort Sumter in South Carolina’s Charleston Harbor on April 12, 1861. During the next 34 hours, 50 Confederate guns and mortars launched more than 4,000 rounds at the poorly supplied fort. On April 13, U.S. Major Robert Anderson surrendered the fort. Two days later, U.S. President Abraham Lincoln issued a proclamation calling for 75,000 volunteer soldiers to quell the Southern “insurrection.”

As early as 1858, the ongoing conflict between North and South over the issue of slavery had led Southern leadership to discuss a unified separation from the United States. By 1860, the majority of the slave states were publicly threatening secession if the Republicans, the anti-slavery party, won the presidency. Following Republican Abraham Lincoln’s victory over the divided Democratic Party in November 1860, South Carolina immediately initiated secession proceedings. On December 20, the South Carolina legislature passed the “Ordinance of Secession,” which declared that “the Union now subsisting between South Carolina and other states, under the name of the United States of America, is hereby dissolved.” After the declaration, South Carolina set about seizing forts, arsenals, and other strategic locations within the state. Within six weeks, five more Southern states–Mississippi, Florida, Alabama, Georgia and Louisiana–had followed South Carolina’s lead.


In February 1861, delegates from those states convened to establish a unified government. Jefferson Davis of Mississippi was subsequently elected the first president of the Confederate States of America. When Abraham Lincoln was inaugurated on March 4, 1861, a total of seven states (Texas had joined the pack) had seceded from the Union, and federal troops held only Fort Sumter in South Carolina, Fort Pickens off the Florida coast, and a handful of minor outposts in the South. Four years after the Confederate attack on Fort Sumter, the Confederacy was defeated at the total cost of 620,000 Union and Confederate soldiers dead.

`,
        tagId: 4,
        userId: 10,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Getting Started With TikTok Ads',
        article: `Looking to diversify your social advertising? Wondering if TikTok might do the trick but you’re not sure how to get started?

In this article, you’ll discover everything you need to know including the key elements of TikTok ads and a simple process for crafting ad creative that works.

Getting Started With TikTok Ads featuring insights from Maxwell Finn on the Social Media Marketing Podcast.
This article was co-created by Maxwell Finn and Michael Stelzner. For more about Max, scroll to Other Notes From This Episode at the end of this article.
Why Businesses Should Consider TikTok Ads
Let’s start with the most obvious question: Why should marketers consider TikTok ads when there are already so many powerful platforms proven to deliver results?

Well, for one thing, you would be minimizing your risk by diversifying your presence.

If you’re building your business and using a social media platform as the basis of that business, then you’re essentially building your business on someone else’s platform. Social media channels have been generous for a very long time in designing tools that allow so many marketers and businesses to build and grow on their platforms. But they’re not shy about shutting down an account at times.

And the really tough thing about this is sometimes your account can get shut down on a particular platform and you won’t even fully understand why. Getting onto multiple platforms is the best way to protect your business so if one platform decides to shut down your account, you can pivot quickly and focus on another platform without losing much time.

On top of that, TikTok is the channel with the most growth right now. Part of the draw of TikTok is its organic algorithm that allows a creator of any size and following the chance to go viral and be seen by potentially millions of people. Almost everyone has heard a story or knows a friend that this has happened to, and it’s something that simply doesn’t happen on other platforms.


Additionally, TikTok has outgrown the image of being just a kids’ app a long time ago. Its user base now includes large numbers of people from every generation, including many that businesses would be targeting on Facebook or other social media platforms.

In fact, TikTok has been one of the most downloaded applications for the past 2 years and the TikTok website is generating more traffic than even Google. So if your audience is online and using social media, then they’re likely on TikTok for at least part of their day.

How TikTok Delivers Ads
One of the biggest differences between TikTok and other platforms is the algorithm. TikTok is built on a content graph, whereas Facebook and pretty much every legacy Web 2.0 platform uses a social graph, which is built on connections. The reason TikTok has grown so fast is that it’s built on a kind of democratic content platform. Anybody, whether they have one follower or 5 million followers, has a chance to go viral.

One of the first things to understand about how TikTok works on the organic side is that the algorithm releases content to batches of people at a time. In other words, once a video is produced and published, TikTok will show that video to a small number of its users. These users don’t necessarily need to be following the creator; they could be anybody that TikTok believes would be interested in the content.

While released to the small batch of people, TikTok is gathering data about how those users react and engage with the content. Once that video reaches a certain threshold for engagement, TikTok’s algorithm will re-release it onto the For You page, which is the home page for the TikTok platform.


This time, the video will be released to a larger audience, but again they don’t necessarily need to be following the creator. They can be anyone on the platform that TikTok thinks would enjoy the content.

Remember, TikTok’s algorithm is designed to keep people on their platform and watching content as much as possible. And again, as long as that content reaches a particular threshold with the larger audience, the process repeats itself: release to an even larger batch of users, reaches a particular threshold, re-released again to an even larger batch of users, and again.

Eventually, if that content continues to perform with each new release to the For You page, a person will then review the content and determine its virality. That point is when that video could reach tens of millions of viewers.

Now, with ads, there are some obvious differences. For one thing, creators are paying for their ad to be seen by more people. However, the relatability and engagement that the ad receives will ultimately determine the ad’s overall effectiveness.


Ads with very low engagement that don’t compel users to finish watching them—or worse, cause them to close the app and leave the platform—aren’t going to perform as well. As a result, their cost per lead or cost per click is going to be very high, resulting in fewer conversions and leads than normal.

Of course, there are other things besides creative performance that will help determine how your ad performs overall such as the historical creative performance of your account. In other words, how well have your videos performed in the past? How well are your current videos doing inside your existing ad groups that you might be running right now?

Other factors include auction competition, user characteristics, and audience targeting.

Another thing to keep in mind is that the TikTok algorithm is still in its infancy. It hasn’t been around and collecting data for years the way algorithms on other social platforms have been. And because of this, there may be a little longer learning phase necessary to ensure that your ad is being shown to the right people.

This means that for most marketers and brands, they’re not going to be able to launch an ad and on the very first day have that ad crush it straight out of the gate. You’re going to need to go through the learning phase to ensure that your ad targeting is where it needs to be.

The TikTok ads learning phase is similar to the learning phase in Facebook ads: 50 conversion events within a 7-day window. After that, you can start scaling, optimizing, and tweaking your ads and offers to improve performance.

How TikTok’s Ad Account Structure Compares to Facebook’s
The overall mechanics of the TikTok ad account are very similar to Facebook’s ad accounts. The types of ads you can run on TikTok are also similar. You’ll find nearly identical campaign objectives to Facebook—reach, video views, community engagement, conversions, and so on.


The big difference comes when you’re looking at the overall account structure. With Facebook, you do a lot more with ad sets and focus more on the technical side. With TikTok, simple is better.

When you launch a new prospecting campaign, you might have two or three ad groups in that campaign. One ad group might be broad—wide open, no targeting—and another a combination of different interests, layering interests to make one large audience of maybe 25-75 million people.

With TikTok ads, there are three primary targeting options:

Broad, which has no specific targeting and therefore leaves it essentially to TikTok’s algorithms to find the audience
Layered interests, for which you can choose things like interest categories, engagement-based videos or views, fans of certain types of creators, and even hashtags
Source data, such as a list you might upload from an email provider or your SMS subscriber list, which you can upload to a custom audience and build a lookalike audience on top of that.

Additionally, one of the key differences between TikTok ads and Facebook ads is that to run Facebook ads, you need to have your business page set up and linked to your ad account. With TikTok, you don’t need to have an actual business profile to run ads. You can set up your ad at the ad level and type in your brand name, upload your logo, and you’re ready to go.

When someone sees your ad on TikTok, wherever they tap on the ad—whether it’s the image or your username—will take them straight to your website or landing page instead of your TikTok profile. So typically, TikTok ads have higher click-through rates because any click goes to your website or where you want it to go.

TikTok Spark Ads
With TikTok spark ads, the best analogy is existing post IDs. If you’re a Facebook advertiser, you’re familiar with this. Basically, once you publish an ad or a post on your page, you can then use that ID so every version of that ad and every ad set is linking back to a single post. All of the social proof gets maximized.

If you’re working with an influencer, they can give you permission to use their video for a certain period of time. They grant authorization, set the timeline, and then TikTok will give them a code that your business uses to amplify the video with a spark ad. As far as the rest of the platform is concerned, it will look as though that video is coming from the influencer but it will also show that it’s a sponsored video from your business.


Understanding the Different Elements of a TikTok Ad
First and foremost, on TikTok, your ad will cover the entire screen, which is something that no other platform gives you. With the full screen, once you grab the audience’s attention, there are no distractions to pull their attention away from you.

You’ll want to take advantage of the on-screen real estate: adding text over the video, GIFs, stickers, anything that can make the video engaging can be added.

The next important piece of your ad is your description, for which you’re limited to about 80 characters. You’ll want to keep your description as concise and effective as possible to maximize efficacy of this description.

Finally, you’ll also have a call to action (CTA) button. One thing that sets TikTok ads apart is their dynamic CTA. It’s a list of different CTAs that TikTok will dynamically show people based on what the algorithm thinks will resonate best with them.


The TikTok platform will learn from your ad and pull information or data from your ad to put together these CTAs. For example, if you’re running a promotion that includes a 25% discount, the dynamic CTA might say, “Get 25% off today.” And that’s automatic so you don’t have to set up a separate split test or ad set to test the different CTAs or program them in.

How to Design an Effective TikTok Ad
When it comes to TikTok ad creative, don’t overthink it. TikTok works best with authentic creative that’s not overly produced and edited. What’s more, the organic side of TikTok has all the tools you’ll need to see what’s working and what your audience is responding to.

To make on-brand, on-trend, native creative for TikTok ads, follow this three-step process.

Research What’s Working in Your Niche
To get some fresh ideas, it’s best to create a new TikTok profile for your research. Then head over to the Discovery page inside TikTok and run a search for a keyword in your niche or industry. Tap the filter icon in the top-right of the page to filter out the videos to show the most popular in the last week. This will tell you the types of videos that you’re ideal audience is responding to.


Go through the top videos and start following the creators, watching their videos, and engaging with their content. And by doing this, you’ll actually train the TikTok algorithm to show you more of this content. After about a week or so, every time you log into TikTok, your For You page will show you content around your chosen niche that’s already performing and keeping people on the platform.

And then, of course, you can grab inspiration from there. Don’t copy any of those creators; rather, dissect their videos to see what’s working and think about how you can do something similar with your brand personality. Pay close attention to the hooks they’re using, how they start the video, what sounds or music they’re using, and which effects they’re applying to their video. Also note how long the videos are.

Additionally, look at the techniques they use to keep the video engaging, how many cuts they’re doing in the video, and whether they’re using any props or stickers. Jot down all of the information you learn from your research—ideas that you know are working inside TikTok at that time. And then you can start to take that list of ideas and see how you can apply it to your own products or services and start to get your ads together.

Create Your Videos
Once you’ve done all of your research, you’re ready to start creating the actual videos for your ads.

For TikTok, you don’t need any fancy software to create your videos. You can use something like Adobe After Effects or even a free iPhone app like InShot. You can even help your ad look more native by using one of TikTok’s default fonts, Proxima Nova Semibold.

TikTok’s Ads Manager has a pretty good video editor in it, too. It allows you to clip, trim, and add effects. You can also add text overlays inside Ads Manager.


Test Your Videos in a Campaign
Once you’ve created your videos, test them inside a prospecting campaign with two to three ad groups. Launch four to six ads in your new campaign and let them run for 7 days to make sure you exit the learning phase. It’s tempting but don’t touch it or try to tweak things during that learning phase.

Because the learning phase is 50 conversions over a 7-day window, start your budget by multiplying your cost per conversion by 50 and then dividing the total by 7 to give you your daily budget amount.

Once you exit learning and you’re within a good CPA range, you can start making some optimization tweaks. You can also start increasing the budget if you want. A good rule of thumb is a 20%-30% budget increase every 48 hours.

`,
        tagId: 7,
        userId: 11,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How to Moderate a Discord Server for Business',
        article: `Do you run a Discord server for your company or product? Want to keep the community positive and engaged?

In this article, you’ll discover how and why to use built-in moderation settings, tools, and bots to efficiently manage your Discord community.

How to Moderate a Discord Server for Business by Corinna Keefe on Social Media Examiner.
Why Your Business’ Discord Server Needs Moderation
Discord is one of the fastest-growing new social networks. It’s an ecosystem of chat forums built around every interest you can think of—from gaming to fashion, education, business, and private friendship groups. There’s huge potential for businesses to build communities and connect with their target markets.


Discord has an open, democratic structure. And like a lot of things on the internet, that’s both a blessing and a curse. Anyone can participate. But also… anyone can participate. This means that for all of the positive discussion and open exchange of information, there’s an accompanying risk of trolling, “not safe for work” (NSFW) content, and spam.

So if you want to run a community on Discord, you have to take responsibility for moderating it. Fortunately, there are plenty of tools at your disposal including Developer Mode, server rules, moderation settings, and automated bots.

#1: Turn on Discord Developer Mode
Your first step as a Discord moderator is to turn on Developer Mode. At the bottom of the screen, click the gear icon to the right of your username to access your user settings.

Scroll down to Advanced in the left navigation and then toggle Developer Mode on.


Developer Mode is designed mainly for people who want to create bots for the platform. But it’s also useful for moderators because it gives you access to more information.

You can find out the ID of an individual user, channel, server, or message. You’ll need these details if you ever have to report bad content. Here’s how to access this information in Developer Mode:

User ID: In Developer Mode, right-click on the name of an individual user and choose Copy ID from the context menu.
Channel ID: Right-click on a message in the channel. Hold down Shift and click Copy ID. You’ll get both the channel and message ID.
Server ID: Right-click on the server name and click Copy ID.
Message ID: Right-click on the message and choose Copy ID from the menu.

For the rest of this guide, I’ll be assuming that you have administrator permissions for your server, you’re using Developer Mode, and your server is set up as a community. (For more about setting up a community server, check out this guide to getting started on Discord.)

#2: Set Membership and Behavior Rules for Your Discord Server
You’ll inevitably have to spend some time on moderation. But ideally, you want to be as hands-off as possible.

How do you achieve that? By setting reasonable rules and standards from the beginning. There are two ways to let Discord users know what you expect from them:

Membership screening, where users have to answer questions or agree to rules before joining your server.
A #rules channel in your server, which reminds members of the rules over time.
To set up membership screening, click the down arrow next to your server name at the top of the screen and select Server Settings.


Then scroll down to Membership Screening on the left. On the right, click the Set Up Membership Screening button.

On the next screen, you can add a description of your server for new users, ask questions, and write rules.


Discord has a few helpful suggestions but you can also just write your own rules. Once these are set, users will have to agree to the rules before they can join the server.


If you run a community server, then Discord has likely already encouraged you to set up a channel for rules and updates. Use this to create a pinned post that reminds users of your expectations.


As well as the rules, you can tell people about the consequences for misbehaving. Do you ban people instantly? Just mute them for a while? How can someone appeal a moderation ruling? Set your policies out to avoid doubts later.

#3: Use Discord Moderation Settings
You can also use Discord’s built-in settings to save some time. Go back to your Server Settings and scroll down to Moderation.


There are lots of useful moderation options here:

Verification Level: Choose whether users have to be fully verified to join your server. I recommend choosing the High or Highest level of verification to keep the quality of your membership high.
Explicit Media Content Level: Discord can automatically scan new posts for NSFW content. This is set to the highest security level by default.
2FA Requirement for Moderation: This setting means that all moderators must use two-factor authentication to keep their accounts secure. You must enable this setting if you want moderators to have certain powers such as being able to ban members.
#4: Set Your Discord Server Role Permissions
So far, all of the settings we’ve reviewed have been for your server overall. But Discord also gives you the power to create settings for different users based on their roles.

There are two main roles available on Discord:

Administrators are all-powerful. If you set up a server for your business, you’re likely already an administrator. Think long and hard before giving this power to other users.
Moderators enforce rules and model good behavior on a server. This isn’t a default role on Discord (you’ll have to create it in the Roles section of your server settings) but it’s widely recognized.
You can also create other roles in your Discord server. For example, you could label users from different regions, mark expert users, or highlight verified customers and subscribers.

Discord lets you set highlight colors for each different role so they stand out. For example, you could make moderators green so their usernames are always clearly visible in the chat.


But most importantly, different roles have different permissions. Permissions include things like:

Which channels a user can view
Whether they can create and manage channels
Whether they can create and manage other roles
Whether they can manage emojis and stickers
Whether they can invite new users
Whether they can kick or ban other users
You can also use permissions to control what members post; for example, whether they can speak in voice channels or share video streams.

Finally, you can set up your server so certain channels are only visible to certain roles. To do this, select Create Category from the server menu.


Make sure you select Private Category so you can limit a category to specific roles.


For example, you could set up a category full of channels for moderators, create a members-only category of channels for paying subscribers, or set up categories for different regions if you have a global audience.


#5: Change the Settings for Your Individual Discord Server Channels
Time to get even more fine-grained. We’ve covered your server settings, individual roles, and categories—now it’s time for individual channel rules.

Let’s start with the channel overview. This is the first screen you’ll see when you visit your channel settings.


Here you can set up age verification if you expect to have NSFW content in the channel.

You can also use the Slowmode setting to control how often users can send messages. You probably won’t need to use this most of the time but it’s important to know about. If a channel ever descends into a major argument or you’re having trouble keeping up with moderation, you can slow down the pace of the conversation.


Each channel also has its own Permissions section in the settings. You can set specific rules for users including:

Whether they can send messages
Whether they can create new threads
Whether they can share links or file attachments
Who can use the @everyone and @here tags to send channel-wide notifications

These settings can be extremely useful. For example, you might want to set up your #rules channel so no one else can post there. You don’t want to hand over that authority.

#6: Actively Moderate Conversations on Your Discord Server
So you’ve set rules, chosen your permissions, and assigned roles but some bad content might still get through.

What are your options?

Discord has a handy workflow for dealing with moderation incidents. They suggest that you should:

Identify the situation and decide whether moderation is needed.
Think about the context and motives of users involved.
De-escalate through communication, wherever possible.
Respond proportionately (we’ll get to those options in a second).
Inform other moderators and, if necessary, reassure other users that action has been taken.
So what exactly does “responding proportionately” look like? Discord has actually been pretty creative here. You have a range of options to get the discussion back on track:

Moderate: Put a user in time out. They won’t be able to message, speak, react, or reply to other messages.
Kick: Remove a user from the server. They can request to rejoin or be invited back later.
Ban: Remove a user from the server permanently.
Mute: Prevent a user from speaking in a voice channel.
Deafen: Stronger than mute—prevent a user from speaking or hearing anyone else in a voice channel.
Move: Move a user into a different voice channel, taking them out of the current conversation.
#7: Delete and Report Unacceptable Discord Server Content
Sometimes there may be bad content that’s above your pay grade as a moderator. Discord has a long list of types of unacceptable content that should always be reported to the platform:

Harassment
Hate speech
Threats
Users who dodge blocks or bans (for example, by repeatedly creating new accounts)
Sending viruses or malware or enabling others to do so
Explicit content that is non-consensual or posted without an NSFW tag
Any content that sexualizes minors
Suicide or self-harm
Animal cruelty
Any form of violent extremism
Selling prohibited or dangerous goods
Buying or selling Discord accounts
Spamming Discord itself
And, just to cover all of their bases, anything illegal
If you don’t report these types of content whenever you see them, then Discord can take moderation action against your server as a whole.

There are two main ways to report content on Discord. Before taking any action, it’s also a good idea to use Developer Mode to save the ID of specific messages and users so that Discord can track them down, even if individual messages are deleted.

Delete and report (DAR). The offensive message will be deleted but Discord will still be able to see all of the details. Make sure you choose this option instead of just Delete.
Fill out an online form. You can report content by sharing message links in this form. Screenshots won’t be enough—you have to link to the original message. And it’s still a good idea to record the message and user ID in case you need to follow up.

You might also have the option to report messages in-app if you use Discord on iOS. However, Discord still seems to be experimenting with this option and it’s more complicated than using DAR or the online form on desktop. For now, the online form is the simplest and most commonly used option.

#8: Add Moderation Bots to Your Discord Server
A lot of Discord servers use bots as auto-moderators. These can save time by taking automatic actions and handling simple admin for you such as welcoming new members to the server.


Most moderation bots work by filtering spam, checking for sensitive words or phrases, screening users, or preventing raids (when lots of users suddenly join a server to cause problems).

However, it’s important to remember that bots aren’t made by Discord. They’re created by external developers and work as extensions to the platform. So a bot is only as reliable and secure as its development team. Before you give a bot permission to act in your server, you should check out its reputation and reviews.

Discord has a short list of popular moderation bots, with a helpful chart overview of their capabilities.

#9: Follow the #moderator-only Discord Channel
We’ll finish with one recent innovation from Discord. If you run a community server, you may have spotted a new channel in the last few weeks: #moderator-only.

This channel is run by Discord. They’re planning to use it for platform updates including new moderation features. As the platform continues to grow, I’d expect more tools for community management and monetization to appear so keep an eye on this channel.


Conclusion
Discord provides many opportunities for businesses to build their communities and connect with their target audiences. Through a combination of settings, moderator tools, and bots, you can keep your Discord server a positive, engaged community.
`,
        tagId: 7,
        userId: 12,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The ultimate guide on how to create customizable Angular components',
        article: `Angular is inspired by the core concepts of web components. Therefore it uses components and the core ideas of Shadow DOM.
For historical reasons, by default, Angular provides its own implementation of Shadow DOM. However, we can still use the encapsulation property on the components class decorator to switch to native Shadow DOM or even disable encapsulation completely.
Whenever we implement or use a component with native Shadow DOM or emulated Shadow DOM, we should always consider the style of our components as private.
Think of styles in the same way as code. Would you try to overwrite a components TypeScript code? Probably not!
But, wait! We often need to apply different styles to components based on use cases. How can we do that without overwriting the styles?
Practical use case
Imagine we have a simple chips component that allows us to select and deselect a chip.

Bad practice — What you should avoid!
Well, we can go ahead and try to update the .chips-container background by adding the following code to our global styles (styles.scss).

The equivalent of updating the global styles would be to update our app components style or, well, basically any components styles with a selector that uses ::ng-deep.

The title already mentions that those approaches are considered bad practices. Here’s why.
Low CSS specificity
Let’s again explore the selector. It’s pretty specific. Right? Instead of writing my-chips div.chips-container we could also have written .chips-container which would be less specific. But we have chosen a very specific selector on purpose because we want it to win over the default styles.
So let’s run our app and check out our new blue chips background.

Even though our CSS selectors match the div inside the my-chips component, the styles are not applied. The reason for that is that our styles get converted by Angulars emulated Shadow DOM from .chips-container to .chips-container[_ngcontent-yxu-c11]. Therefore the selector from our component is now more specific.
So that’s the first downside. To make our selector more specific, we have to add !important. And I probably don’t have to tell you why important is considered an anti-pattern!
We have to know component internals
We want to target the div with the chips-container class on it. We have to know the internals of the component we are using. Imagine you are using a third-party library like Material, for example.
In such cases, you would need to know the implementation details. You would need to know about the existence of a .chips-container.
Fragile
This approach is very fragile. Our styles can break with every new release. We need to update our styles whenever the used component gets internally refactored.
Imagine we overwrite the styles for a third-party library, and they choose to change the structure or simply rename the chips-container class to container.
Deprecated
::ng-deep and /deep/ are both deprecated Angular APIs.
We discovered the bad practices and explored their downsides. Let’s now focus on solutions?
Do you want to take your Angular, RxJS, TypeScript, and JavaScript skills to the next level? Don’t miss the chance to check out my Youtube channel.

Mixins — Reusable and customizable styles
As component authors, we can provide a mixin that allows consumers to customize our component. A mixin for our my-chips component could look like this.

A developer that uses our component can then use the mixin in the following way inside the global stylesheet (styles.scss).

Remember the disadvantages we discovered in the bad practice section. Having a mixin solves some of them.
A mixin is maintained by the component author. Therefore a consumer doesn’t need to know a component's internal structure. Furthermore, whenever we change something internally, we can update our mixin to keep it in sync with the internal structure. With that, consumer's styles don’t break on minor or major releases.
But, if you paid close attention, you probably noticed that it doesn’t solve the major problem! Our styles are not applied!
Why is that? Well, the selector that targets the chips-container is still more specific since it contains .chips-container and the [_ngcontent-yxu-c11] attribute selector.
How do we solve this? 🤔
One way to solve it is to change the styles in our my-chips component. Instead of targeting the .chips-container we could target a div.

Once we adjusted the component, we can make the CSS selector in our mixin more specific by adding an extra div to the selector.

`,
        tagId: 12,
        userId: 7,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'My productive morning routine',
        article: `I was a total mess and studied whenever I felt like and did things in a very sloppy manner and as a result, I was having trouble focusing on my studies and productivity was at its worst until I came up with a routine that worked wonders for me. Well, my motto was whatever routine I follow I needed to get the majority of my things done early. My routine may not be resonating with you. Everyone is unique and everyone works according to what suits them.
My morning routine is from 4:30 AM to 10 AM.
Yeah, I am a morning person so let's begin.
1.Wake up at 4:30 Am.
My day starts exactly at 4:30 AM when my alarm goes off. You might be thinking why I wake up so early. Well, the answer is I am an early bird 🐦. I have been reading biographies of successful people and some self-help books and they seem to tell the same thing that is to wake up early.
I prefer walking up early also because I love the silence and calmness at that time. It's absolutely quiet and gives me an absolute aura to work and be productive before the hustle and bustle sets in.
2.Make myself Ready( till 4:45 AM)
After I wake up there is a whole set of activities I do to get freshen up and all this helps me have a calm mind which helps me study better.
I) Freshen up: After gazing at the walls of my room for a minute with my half-opened eyes I go to the bathroom brush my teeth, wash my face and take deep breaths.
Pro tip: Washing your face with cold water helps you feel awakened.
II) Drinking water: Then I finally reach out to my water bottle on my bedside. You should drink a glass of water after you wake up 😴⏰ it feels good and also keeps you hydrated because your body didn't get water for hours when you were sleeping. Moreover, it helps you freshen up and helps you get over your dizziness.
III) Making my bed 🛏. Well, this is a habit that I have recently started and it's worth it. I was to keep my bed as it is and didn't even care to make it until my brother told me how important it is to make your bed. It makes you feel independent and also doing this small work gives you a small positive vibe.
IV) Meditation and Planning
The next thing that I do is meditation 🧘‍♀️. Meditation helps me calm my mind and also it's early morning so it's absolute calm and quiet. Meditation is relaxing the mind and helps you connect with yourself. In that 15 minutes of meditation, I sit quietly and just focus on my breaths and nothing!
Then it's time for planning my day. I don't use any apps but maintain a diary and write down everything I have to do on that particular day. Meditating just before planning helps me to think and plan with a clear mind.
At the end of the day, I see the list again and see how much I have been able to be productive and get the most out of the day.
It's almost 5 AM by now.
3. Exercise time till 6 AM.
Now that I am done with meditation and planning my day. I then get my running shoes and track pants and move on for having a good morning walk. The best part about morning walks is that you realise that half of the city is still sleeping and the roads are empty. Fewer vehicles, fewer commotions less pollution and everything feels so calm and quiet.
I feel good after having a walk and health is what I have prioritised for a long time.
4. Getting my table done.
After returning from the walk and getting freshened up it's time to clear my table. The mess I have created last day. Making my study space clear and getting ready to study.
5. Coffee time.
After having my table cleared and books ready for studying I make a coffee for myself. And then get down with my studies with a coffee mug in my hand.
6.Study time
Getting on to the most serious activity of my day and my life ie studying.
In the morning I usually read topics that I think is difficult to comprehend. These include anatomy, pathology and pharmacology.
Right from 6:30 to 10 AM I study with 30 minutes break in between.
So this was my morning routine. I know it may not be perfect according to many but routine for me must be productive and not perfect. As long as it is serving the purpose it's good. Make a timetable you are comfortable with and makes you happy and gets more work done.
THANK YOU❤️`,
        tagId: 10,
        userId: 10,
        state: 'published',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Stories';
    return queryInterface.bulkDelete(options);
  }
};
