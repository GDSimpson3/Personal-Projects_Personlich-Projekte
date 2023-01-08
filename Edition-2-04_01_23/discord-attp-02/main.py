# #https://www.youtube.com/watch?v=DArlLAq56Mo
# get the data from the network tab and send mesg and see messages req

import requests
payload = {
    'content': 'the message'
}
header = {

    'authorization': 'your token'
}
count = 0
while count < 10:  # this will print your message 10 times
    r = requests.post('your link',
                      data=payload, headers=header)

    count += 1
