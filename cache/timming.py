# 
import asyncio
import time

l1 = 'fastest'
l2 = 'fast'
l3 = ['core 1', 'core 2', 'core 3', 'core 4']

def reescalado():
    time.sleep(4)
    print(l3)

async def running():
    await reescalado()

asyncio.run(main())