import { useState, useMemo, useEffect } from 'react';
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react';
import AmountInput from './AmountInput';
import FilterSearch from './FilterSearch';
import { donationData } from './donationData';

export default function DonationTable() {
  const [expandedCategories, setExpandedCategories] = useState([
    donationData.length > 0 ? donationData[0].id : ''
  ]);
  const [expandedSubcategories, setExpandedSubcategories] = useState([]);
  const [amounts, setAmounts] = useState({});
  const [quantities, setQuantities] = useState({});
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

  const updateQuantity = (itemId, value) => {
    setQuantities(prev => ({ ...prev, [itemId]: value }));
  };

  const updateRemarks = (itemId, value) => {
    setRemarks(prev => ({ ...prev, [itemId]: value }));
  };

  const removeItem = (itemId) => {
    // Reset amount, quantity, and remarks for the specific item
    setAmounts(prev => {
      const newAmounts = { ...prev };
      delete newAmounts[itemId];
      return newAmounts;
    });
    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[itemId];
      return newQuantities;
    });
    setRemarks(prev => {
      const newRemarks = { ...prev };
      delete newRemarks[itemId];
      return newRemarks;
    });
  };

  // Calculate total amounts across all categories
  const totalAmount = useMemo(() => {
    // Iterate through donation data to include all items
    return donationData.reduce((categoryTotal, category) => {
      // Add items from main category
      const categoryItemsTotal = category.items ? category.items.reduce((itemTotal, item) => {
        const itemAmount = amounts[item.id] ?? item.amount;
        const itemQuantity = quantities[item.id] ?? 1;
        
        // Only add to total if quantity is > 0 or not a quantity-based item
        if (itemQuantity > 0 || !item.hasQuantity) {
          return itemTotal + (itemAmount * itemQuantity);
        }
        return itemTotal;
      }, 0) : 0;

      // Add items from subcategories
      const subcategoriesTotal = category.subcategories ? category.subcategories.reduce((subcategoryTotal, subcategory) => {
        const subcategoryItemsTotal = subcategory.items.reduce((itemTotal, item) => {
          const itemAmount = amounts[item.id] ?? item.amount;
          const itemQuantity = quantities[item.id] ?? 1;
          // Only add to total if quantity is > 0 or not a quantity-based item
          if (itemQuantity > 0 || !item.hasQuantity) {
            return itemTotal + (itemAmount * itemQuantity);
          }
          return itemTotal;
        }, 0);
        return subcategoryTotal + subcategoryItemsTotal;
      }, 0) : 0;
      const totalAmount= categoryTotal + categoryItemsTotal + subcategoriesTotal
      sessionStorage.setItem("totalDonationAmount",totalAmount.toString())
      return categoryTotal + categoryItemsTotal + subcategoriesTotal;
    }, 0);
  }, [amounts, quantities, donationData]);

  const renderDonationItems = (items, categoryName) => (
    <tbody className=''>
      {items.map(item => {
        // Use default amount if no custom amount is set
        const itemAmount = amounts[item.id] ?? item.amount;
        // Use 1 as default quantity if no quantity is set
        const itemQuantity = quantities[item.id] ?? (categoryName === 'EDUCATION' && item.hasQuantity ? 0 : 1);
        // Calculate total item amount
        const totalItemAmount = itemAmount * itemQuantity;

        return (
          <tr key={item.id} className="border-t border-gray-300">
            <td className="py-2 px-2 max-w-[50%] mx-8" style={{wordWrap:"break-word"}}>{item.name}</td>
            <td className="py-2 px-2">
              <AmountInput
                value={itemAmount}
                onChange={(value) => updateAmount(item.id, value)}
              />
            </td>
            <td className="py-2 px-2 text-center flex mx-8">
              {categoryName === 'EDUCATION' && item.hasQuantity ? (
                <input
                  type="number"
                  min="0"
                  value={itemQuantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  placeholder="0"
                  className="w-full text-center border border-gray-200 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              ) : (
                <td className="py-2 px-2 text-center w-full text-[#9e9e9e]">
                  -
                </td>
              )}
            </td>
            <td className="py-2 px-2 text-center">
              <AmountInput
                value={Number(totalItemAmount.toFixed(2))}
                readOnly={true}
              />
            </td>
            <td className="py-2 px-2 flex flex-row items-center justify-center gap-2">
              <input
                type="text"
                placeholder="Write your remarks here"
                value={remarks[item.id] || ''}
                onChange={(e) => updateRemarks(item.id, e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 italic font-light focus:outline-none focus:ring-2 focus:ring-primary/20"
                style={{fontWeight:"lighter"}}
              />
              <button 
                onClick={() => removeItem(item.id)} 
                className={`p-1 ${totalItemAmount === 0 ? "text-gray-400" : "text-black hover:text-red-500"}`}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );

  return (
    <div className="bg-cream rounded-lg p-6 px-16 mx-auto py-16">
      <div className="mb-6 flex flex-row items-center justify-between">
        <h2 className="text-3xl font-display text-dark mb-6">Donate</h2>
        <FilterSearch />
      </div>

      <div className="space-y-4">
        {donationData.map(category => (
          <div key={category.id} className="border-b border-gray-300">
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
                <table className="w-full table-fixed border-collapse">
                  <thead>
                    <tr className="text-sm text-gray-500 border-b border-gray-300">
                      <th className="text-left py-2 px-2 w-1/2 font-normal">Donation Category</th>
                      <th className="text-left py-2 px-2 w-1/5 font-normal text-center">Amount</th>
                      <th className="text-center py-2 px-2 w-[175px] font-normal text-center">Quantity</th>
                      <th className="text-left py-2 px-2 w-1/5 font-normal text-center">Total</th>
                      <th className="text-left py-2 px-2 w-1/3 font-normal">Remarks</th>
                    </tr>
                  </thead>
                  {category.items && renderDonationItems(category.items, category.name)}
                  {category.subcategories?.map(subcategory => (
                    <tbody key={subcategory.id} className="border-t border-gray-800">
                      <tr>
                        <td colSpan={6}>
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

      {/* Total Amount Section */}
      <div className="p-4 float-right w-1/2">
        <div className="flex flex-row items-center justify-end w-full">
          <p className="text-left py-2 px-2 font-normal">Total Donation Amount</p>
          <div className="flex items-center gap-2">
            <AmountInput
              value={Number(totalAmount.toFixed(2))}
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}