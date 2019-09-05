export class Trade {
  id: number;
  date?: Date;
  asset_name?: string;
  asset_symbol?: string;
  signal?: string;
  direction?: string;
  position_size?: number;
  current_price?: number;
  open_price?: number;
  stop_target?: number;
  stop_loss?: number;
  soft_profit_target?: number;
  close_price?: number;
  take_profit?: number;
  exposure?: number;
  risk?: number;
  gain?: number;
  profit?: number;
  status?: string;
  trading?: string;
  analysis?: string;
  currency?: string;
}