export enum Market_Warning {
  NONE = "NONE",
  CAUTION = "CAUTION",
}

export enum WS_Request {
  TICKER = "ticker",
  TRADE = "trade",
  ORDERBOOK = "orderbook",
}

export enum MarketUnit_Type {
  BTC = "BTC",
  KRW = "KRW",
}

export enum Change_Type {
  EVEN = "EVEN", // 보합
  RISE = "RISE", // 상승
  FALL = "FALL", // 하락
}

export interface CoinListType {
  market: string;
  korean_name: string;
  english_name: string;
  market_warning: Market_Warning; // caution투자유의
}

export interface WS_ResType {
  acc_ask_volume: number;
  acc_bid_volume: number;
  acc_trade_price: number;
  acc_trade_price_24h: number;
  acc_trade_volume: number;
  acc_trade_volume_24h: number;
  ask_bid: string;
  change: string;
  change_price: number;
  change_rate: number;
  code: string;
  delisting_date: any;
  high_price: number;
  highest_52_week_date: string;
  highest_52_week_price: number;
  is_trading_suspended: boolean;
  low_price: number;
  lowest_52_week_date: string;
  lowest_52_week_price: number;
  market_state: string;
  market_warning: string;
  opening_price: number;
  prev_closing_price: number;
  signed_change_price: number;
  signed_change_rate: number;
  stream_type: string;
  timestamp: number;
  trade_date: string;
  trade_price: number;
  trade_time: string;
  trade_timestamp: number;
  trade_volume: number;
  type: WS_Request;
}

export interface API_TickerResType {
  acc_trade_price: number;
  acc_trade_price_24h: number;
  acc_trade_volume: number;
  acc_trade_volume_24h: number;
  change: Change_Type;
  change_price: number;
  change_rate: number;
  high_price: number;
  highest_52_week_date: string;
  highest_52_week_price: number;
  low_price: number;
  lowest_52_week_date: string;
  lowest_52_week_price: number;
  market: string;
  opening_price: number;
  prev_closing_price: number;
  signed_change_price: number;
  signed_change_rate: number;
  timestamp: number;
  trade_date: string;
  trade_date_kst: string;
  trade_price: number;
  trade_time: string;
  trade_time_kst: string;
  trade_timestamp: number;
  trade_volume: number;
}

export interface RacingDataType {
  market: string; // 'KRW-BTC'
  marketUnit: MarketUnit_Type; // 'KRW'
  symbol: string; // 'BTC'
  trade_price: number; // 현재가
  signed_change_rate: number; // 현재 변화율
  // market_warning: Market_Warning;
}
