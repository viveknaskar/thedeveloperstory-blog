---
title: "The Technology Behind The Spotify Wrapped Feature"
description: "Music listening has been an integral part of our lives, and over the last few decades, music, and the music we listen to it, has come a long way. Gone are the days when you had to buy vinyl records, cassettes, and CDs (I used to collect a lot); some of you even bought digital [&hellip;]"
pubDate: 2020-07-27
heroImage: "/blog-images/wp-spotify-concert-scaled.jpg"
categories: ["Google Cloud Platform","Stories"]
tags: ["cloud-dataflow","Devops","Spotify","Spotify Wrapped","thedeveloperstory"]
---

Music listening has been an integral part of our lives, and over the last few decades, music, and the music we listen to it, has come a long way. Gone are the days when you had to buy vinyl records, cassettes, and CDs (I used to collect a lot); some of you even bought digital downloads (Eminem, Green Day, etc. were all the rage at the time); now all you have to do is download an app that you can play at any time of the day, keeping the device in your pocket.

These apps are now music streaming services that give you access to millions of songs, where you are charged a subscription fee, billed monthly or annually.  There was a time when you had to purchase individual songs or albums, well not any more.

[Spotify](https://www.spotify.com/uk/) is probably the best music streaming service available out there (at least for most people). Well, there are other big players like [Apple Music](https://www.apple.com/music/), [Amazon Music Unlimited](https://www.amazon.com/music/unlimited) and [YouTube Music](https://www.youtube.com/musicpremium) but Spotify fares better than its competitors, at least according to this [article](https://www.cnet.com/how-to/best-music-streaming-service-for-2020-spotify-apple-music-amazon-tidal-and-youtube/).

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/cezar-sampaio-IJthre6PHHQ-unsplash-1024x683.jpg)

Photo by [Cezar Sampaio](https://unsplash.com/@cezarsmpio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/spotify?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

It is no secret that Spotify has been one of the biggest customers of [Google Cloud Platform](https://cloud.google.com/) since February 2016, and in 2018, Spotify disclosed that it would spend at least $450 million on its Google Cloud infrastructure in the following three years. This was a massive investment coming from a music streaming service at that time.

Spotify’s Journey from on-premise to the Cloud

In December 2019, Spotify dropped the [Wrapped](http://spotify.com/wrapped) feature as an early Christmas gift to its users. This feature gave its users a look back at their listening habits. There is also a new [A Decade Wrapped](https://newsroom.spotify.com/2019-12-03/the-top-songs-artists-playlists-and-podcasts-of-2019-and-the-last-decade/) feature that showcases the songs, albums, artists, and podcasts people tuned in to over the past 10 years.

> From 2010 to 2019, you’ve likely discovered new tunes and podcasts, fallen back in love with old favorites, and maybe even grown to enjoy a new genre or two. That’s why this year, we’re not only bringing back your annual personalized “**Spotify Wrapped**,” but we’re also showcasing our users’ listening throughout the last decade.
> 
> Spotify

It is in 2019 when Spotify had run the largest ever [Google Cloud Dataflow](https://thedeveloperstory.com/2020/07/24/cloud-dataflow-a-unified-model-for-batch-and-streaming-data-processing/) pipeline job. This allowed them to scale immensely with less operational overhead. Google released [Cloud Dataflow](http://www.vldb.org/pvldb/vol8/p1792-Akidau.pdf) in early 2015, as a cloud product based on two of the internal systems of Google for batch and streaming data processing. Dataflow introduced a unified model to batch and streaming that consolidates ideas from these previous systems, and Google later donated the model and [SDK code](https://beam.apache.org/documentation/sdks/) to the Apache Software Foundation as [Apache Beam](https://beam.apache.org/).

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/spotify-google-cloud.png)

Spotify in Google Cloud

Spotify has built and open-sourced a big data processing Scala API for Apache Beam and Google Cloud Dataflow called [Scio](https://github.com/spotify/scio). Spotify Wrapped 2019 included lists from the year and the decade. The company states that they worked closely with Google Cloud’s engineering teams and specialists and learned from their previous mistakes, which helped them to run one of the most complex jobs they have ever written.

Apart from Dataflow, Spotify has used a technique where [Bigtable](https://cloud.google.com/bigtable/docs/overview) is used, which is ideal for storing very large amounts of single-keyed data with very low latency. This resulted in saving a lot of the expenses and the team has developed several tools which they are still using to date. These tools help them to process a huge bulk of data in parallel, which results in saving them money.

## More References

### Google’s Internal Applications replaced by Dataflow

**FlumeJava**: [https://research.google/pubs/pub35650/](https://research.google/pubs/pub35650/)

**MillWheel**: [https://research.google/pubs/pub41378/](https://research.google/pubs/pub41378/)

### Spotify’s Big Data processing Journey

> [Big Data Processing at Spotify: The Road to Scio (Part 1)](https://engineering.atspotify.com/2017/10/big-data-processing-at-spotify-the-road-to-scio-part-1/)

### Spotify’s The Top Songs, Artists, Playlists, and Podcasts of 2019—and the Last Decade

> [The Top Songs, Artists, Playlists, and Podcasts of 2019—and the Last Decade](https://newsroom.spotify.com/2019-12-03/the-top-songs-artists-playlists-and-podcasts-of-2019-and-the-last-decade/)

* * *

_If this article provided you with value, please_ [_support my work_](https://buymeacoffee.com/viveknaskar) _— only if you can afford it. You can also_ [_connect with me on X_](https://x.com/vivek_naskar)_. Thank you!_