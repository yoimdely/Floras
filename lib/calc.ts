export type District = "Центр" | "Адлер" | "Сириус" | "Красная Поляна" | "Дагомыс";
export type RentalMode = "Посуточно" | "Долгосрок" | "Сезон";

const baseRates: Record<District, number> = {
  Центр: 8900,
  Адлер: 7200,
  Сириус: 7800,
  "Красная Поляна": 9400,
  Дагомыс: 6500
};

const occupancyByMode: Record<RentalMode, number> = {
  Посуточно: 0.62,
  Долгосрок: 0.95,
  Сезон: 0.75
};

export interface CalculatorInputs {
  district: District;
  rentalMode: RentalMode;
  area: number;
  beds: number;
}

export interface CalculatorResult {
  adr: number;
  occupancy: number;
  gross: number;
  fee: number;
  ops: number;
  net: number;
}

export function calculateRevenue({
  district,
  rentalMode,
  area,
  beds
}: CalculatorInputs): CalculatorResult {
  const baseRate = baseRates[district];
  const occupancy = occupancyByMode[rentalMode];

  const adr = baseRate * (1 + (beds - 2) * 0.07) * (0.9 + area / 100);
  const gross = adr * 30 * occupancy;
  const fee = gross * 0.3;
  const ops = Math.max(2500, gross * 0.08);
  const net = gross - fee - ops;

  return {
    adr,
    occupancy,
    gross,
    fee,
    ops,
    net
  };
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0
  }).format(Math.round(value));
}

export function formatPercentage(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "percent",
    maximumFractionDigits: 0
  }).format(value);
}
