import React from 'react';
import { FoundationEstimateItem } from '../../types/estimate';

interface FoundationEstimateTableProps {
  items: FoundationEstimateItem[];
  totalMaterialsCost: number;
  foundationWorkCost: number;
  totalCost: number;
  onUpdateItem: (index: number, field: keyof FoundationEstimateItem, value: number) => void;
  onUpdateWorkCost: (value: number) => void;
  isEditing: boolean;
}

export const FoundationEstimateTable: React.FC<FoundationEstimateTableProps> = ({
  items,
  totalMaterialsCost,
  foundationWorkCost,
  totalCost,
  onUpdateItem,
  isEditing
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Наименование</th>
            <th className="px-4 py-2 text-center">Ед.изм</th>
            <th className="px-4 py-2 text-center">Кол-во</th>
            <th className="px-4 py-2 text-center">Цена ₸</th>
            <th className="px-4 py-2 text-center">Сумма ₸</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2 text-center">{item.unit}</td>
              <td className="px-4 py-2 text-center">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => onUpdateItem(index, 'quantity', Number(e.target.value))}
                  className="w-24 px-2 py-1 text-right border rounded"
                  disabled={!isEditing}
                  step="0.1"
                />
              </td>
              <td className="px-4 py-2 text-center">
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => onUpdateItem(index, 'price', Number(e.target.value))}
                  className="w-24 px-2 py-1 text-right border rounded"
                  disabled={!isEditing}
                />
              </td>
              <td className="px-4 py-2 text-right">{item.total.toLocaleString()} ₸</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-100 font-bold">
            <td colSpan={4} className="px-4 py-2 text-right">Итого, стоимость материалов</td>
            <td className="px-4 py-2 text-right">{totalMaterialsCost.toLocaleString()} ₸</td>
          </tr>
          <tr>
            <td colSpan={4} className="px-4 py-2 text-right">Доставка + аренда опалубки + Амортизация</td>
            <td className="px-4 py-2 text-right">{foundationWorkCost.toLocaleString()} ₸</td>
          </tr>
          <tr className="bg-gray-200 font-bold">
            <td colSpan={4} className="px-4 py-2 text-right">Итого, стоим. материалов + стоим. работ по фунд. + дост.</td>
            <td className="px-4 py-2 text-right">{totalCost.toLocaleString()} ₸</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};