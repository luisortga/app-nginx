import asyncio

async def fetch_data():
    await asyncio.sleep(2)
    print('Fetchd data', flush=False)
    return 'successful'

async def process_data():
    await asyncio.sleep(1)
    print('Process data')
    return 'result'

async def main():
    data, result = await asyncio.gather(fetch_data(), process_data())
    print(f'data: {data}, result: {result}')
    

asyncio.run(main())