<div align="center">
  <br/>
  <p>
    <h1>SteenBot</h1>
    <p>A Discord Music bot with pincount implementation.</p>
  </p>
  <br/>
</div>

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Features & Commands](#features--commands)

## About

> This is a Discord music bot that allows you to play music from different sources such as: Youtube, SoundCloud and Spotify. It uses ffmpeg
> to play songs locally in order to get the best quality available. It also offers a pincount command which can be used in order to check how many pins are in a Discord text channel, if that exceeds the maximum amount (which is 50) it will lock that certain channel down, however if you want to unlock that channel again there is also an unlock command.

## Installation/Instructions

### Make sure to have developer mode enabled in Discord to get the IDs u need which u can enable by going into Settings > Advanced > Developer Mode

**Node.js 14.0.0 or newer is required.**

```bash
npm install --save
```

**Make an `.ENV` file in the root directory with the following variables:**

```bash
TOKEN=(your discord bot token)
CLIENTID=(your discord bot client id)
GUILID=(your discord server id)
CHANNELROLE=(your discord text channel role)
```

**Load the bot and its commands.**

```bash
node index.js load

node index.js
```

## Features & Commands

> Note: This bot uses slash commands.

`/info`

- Displays info about the currently playing song

`/play song (url)`

- Plays song based on given url

`/play search (seachterms)`

- Plays song based on search terms

`/play playlist (url)`

- Plays a playlist of songs from given url

`/loop (mode)`

- Loops the current song or queue by giving a mode argument

`/pause`

- Pauses the music

`/resume`

- Resumes the music

`/queue (page)`

- Displays the current song queue, can also give a page argument to check the given page

`/shuffle`

- Shuffles the current song queue

`/skip`

- Skips the current song

`/skipto`

- Skips to a certain track #

`/quit`

- Stops the bot and clears the queue

`/pincount`

- Checks the pincount in the current channel

`/unlock`

- Unlocks a discord channel which has a pin limit
