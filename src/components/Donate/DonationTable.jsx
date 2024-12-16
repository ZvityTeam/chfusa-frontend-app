import { useState } from 'react';
import { ChevronDown, ChevronUp, Info, Trash2 } from 'lucide-react';
import AmountInput from './AmountInput';
import FilterSearch from './FilterSearch';
import { donationData } from './donationData';

export default function DonationTable() {
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [expandedSubcategories, setExpandedSubcategories] = useState([]);
  const [amounts, setAmounts] = useState({});
  const [remarks, setRemarks] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleSubcategory = (subcategoryId) => {
    setExpandedSubcategories(prev => 
      prev.includes(subcategoryId)
        ? prev.filter(id => id !== subcategoryId)
        : [...prev, subcategoryId]
    );
  };

  const updateAmount = (itemId, value) => {
    setAmounts(prev => ({ ...prev, [itemId]: value }));
  };

  const updateRemarks = (itemId, value) => {
    setRemarks(prev => ({ ...prev, [itemId]: value }));
  };

  const renderDonationItems = (items, categoryName) => (
    <tbody>
      {items.map(item => (
        <tr key={item.id} className="border-t border-gray-200">
          <td className=" py-6 flex items-center gap-2 max-w-[70%]">
            {item.name}
            {item.description && (
              <Info className="h-4 w-4 text-gray-400 cursor-help"/>
            )}
          </td>
          <td>
            <AmountInput
              value={amounts[item.id] || item.amount}
              onChange={(value) => updateAmount(item.id, value)}
            />
          </td>
          {categoryName === 'EDUCATION' && (
            <td className="text-center">
              {item.hasQuantity && (
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  className="w-16 text-center border border-gray-200 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              )}
            </td>
          )}
          <td className="pl-4">
            <input
              type="text"
              placeholder="Write your remarks here"
              value={remarks[item.id] || ''}
              onChange={(e) => updateRemarks(item.id, e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </td>
          <td>
            <button className="p-1 text-gray-400 hover:text-red-500">
              <Trash2 className="h-4 w-4" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="bg-cream rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-display text-dark mb-6">Donate</h2>
        <FilterSearch />
      </div>

      <div className="space-y-4  font-body">
        {donationData.map(category => (
          <div key={category.id} className="border-b border-gray-200">
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="font-semibold text-lg ">{category.name}</span>
              {expandedCategories.includes(category.id) ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>

            {expandedCategories.includes(category.id) && (
              <div className="pb-4">
                <table className="w-full">
                  <thead>
                    <tr className="text-sm text-gray-500">
                      <th className="text-left py-2 w-1/3">Donation Category</th>
                      <th className="text-left w-32">Amount</th>
                      {category.name === 'EDUCATION' && <th className="text-center w-24">Quantity</th>}
                      <th className="text-left pl-4 w-1/3">Remarks</th>
                      <th className="w-10"></th>
                    </tr>
                  </thead>
                  {category.items && renderDonationItems(category.items, category.name)}
                  {category.subcategories?.map(subcategory => (
                    <tbody key={subcategory.id} className="border-t border-gray-200">
                      <tr>
                        <td colSpan={5}>
                          <button
                            onClick={() => toggleSubcategory(subcategory.id)}
                            className="w-full flex items-center justify-between py-4 text-left pl-4"
                          >
                            <span className="font-medium">{subcategory.name}</span>
                            {expandedSubcategories.includes(subcategory.id) ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </button>
                        </td>
                      </tr>
                      {expandedSubcategories.includes(subcategory.id) && 
                        renderDonationItems(subcategory.items, category.name)}
                    </tbody>
                  ))}
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}