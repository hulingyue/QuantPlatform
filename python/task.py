import threading
from queue import Queue
import websockets
import asyncio
import json

from market import Market

queue = Queue()

class MyMarket(Market):
    def on_market_bbo(self, bbo):
        message = json.dumps({
              "exchange": bbo.exchange
            , "symbol": bbo.symbol
            , "time": bbo.time
            , "price": bbo.price
        })
        queue.put(message)
        pass

    def on_market_kline(self, kline):
        message = json.dumps({
              "exchange": kline.exchange
            , "symbol": kline.symbol
            , "time": kline.time
            , "confirm": kline.confirm
            , "interval": kline.interval
            , "start": kline.start
            , "end": kline.end
            , "high": kline.high
            , "low": kline.low
            , "open": kline.open
            , "close": kline.close
        })
        queue.put(message)
        pass


clients = set()

async def register(websocket):
    clients.add(websocket)
    print(clients)
    try:
        await show_market()
        await websocket.wait_closed()
    finally:
        clients.remove(websocket)
        

async def show_market():
    while True:
        if queue.empty():
            continue

        message = queue.get()
        print(message)
        websockets.broadcast(clients, message)
        await asyncio.sleep(0.1)

async def main():
    async with websockets.serve(register, "localhost", 5678):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    threading.Thread(target=MyMarket().run).start()
    asyncio.run(main())