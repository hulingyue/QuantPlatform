import threading
from queue import Queue
import websockets
import asyncio

from market import Market

queue = Queue()

class MyMarket(Market):
    def on_market_bbo(self, bbo):
        message = f"{bbo.exchange} {bbo.symbol} {bbo.time} {bbo.price}"
        queue.put(message)
        pass


async def show_market(websocket):
    while True:
        if queue.empty():
            continue

        message = queue.get()
        await websocket.send(message)
        # await asyncio.sleep(3)

async def main():
    async with websockets.serve(show_market, "localhost", 5678):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    threading.Thread(target=MyMarket().run).start()
    asyncio.run(main())