import discord

client = discord.Client()


@client.event
async def on_connect():
    for user in client.user.friends:
        try:
            await user.send('this is a prank, please do not panic, the spsr system has taken control of this users system, we will let go shortly,')
            print(f"Working with: {user.name}")
        except:
            print(f"Not working on: {user.name}")
client.run("952624445133029487", bot=False)
