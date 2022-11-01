# this is a fucking scam, how the fuck can you import discord form absolutely fucking nowhere, stupid ass fuck, 
# last attemted: 28/10/22-13:52
# import discord
# client = discord.client()

# @client.event
# async def on_connect():
#  for user in client.user.friends:
#     try:
#         await user.send('this is a prank, please do not panic, the spsr system has taken control of this users system, we will let go shortly,')
#         print(f"working with:{user.name}")
#     except:
#         print(f"error")
# client.run("948805981704429569/949146721961803827", bot=false)
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
client.run("952624445133029487" , bot=False)