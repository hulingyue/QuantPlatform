from pystrategy import *


class Market(Strategy):
    def __init__(self):
        Strategy.__init__(self)

        super().project_name("Bybit")
        super().message_type(MessageType.ShareMemory)

        super().set_task(lambda: self.task())
        super().set_on_market_bbo(lambda bbo: self.on_market_bbo(bbo))
        super().set_on_market_kline(lambda kline: self.on_market_kline(kline))
        super().set_on_market_depth(lambda depth: self.on_market_depth(depth))
    
    def task(self):
        obj = SymbolObj()
        obj.command_type = CommandType.UNKNOW
        obj.push_back("tickers.BTCUSDT")
        obj.push_back("tickers.ETHUSDT")

        self.subscribe(obj)
        while True:
            pass

    def on_market_bbo(self, bbo):
        pass

    def on_market_kline(self, kline):
        pass

    def on_market_depth(self, depth):
        pass