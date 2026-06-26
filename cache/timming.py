# 
import asyncio
import time

l1 = 'fastest'
l2 = 'fast'
l3 = ['core 1', 'core 2', 'core 3', 'core 4']

# cache hit
# cache miss

def hit(core: str):
    time.sleep(12)
    print(f'El nuevo nucleo es: {core}')

async def cache(core: str, delay: float):
    print('way to multicore')
    await asyncio.sleep(delay)
    print('return to multicore')
    return f'cores: {l3}'

async def main():
    task_1 = asyncio.create_task(cache('performance', 4))
    result = await asyncio.gather(task_1)
    print(result)

asyncio.run(main())