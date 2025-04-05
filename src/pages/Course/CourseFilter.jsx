
import React from 'react';

const CourseFilter = ({ selectedCategory, setSelectedCategory, selectedPrice, setSelectedPrice, allCourses, }) => {
      const categories = [...new Set(allCourses.map(course => course.category))];

      // min and max price from course data
      const prices = allCourses.map(course => course.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      return (
            <div>

                  <h2 className="text-2xl font font-semibold text-gray-700">Filter by Category</h2>
                  {/* Category Filter */}
                  <ul className="space-y-5 mt-6">
                        {
                              categories.map((category, index) => (
                                    <li key={index} className='flex items-center gap-2'>
                                          <input
                                                type="checkbox"
                                                checked={selectedCategory === category}
                                                onChange={() => setSelectedCategory(category)}
                                                className="accent-[#23b792] w-4 h-4"
                                          />
                                          <label
                                                className={`capitalize cursor-pointer transition ${selectedCategory === category
                                                      ? 'text-[#23b792] font-medium'
                                                      : 'text-gray-700 hover:text-[#23b792] duration-300'
                                                      }`}
                                          >
                                                {category}
                                          </label>
                                    </li>
                              ))
                        }
                  </ul>
                  {/* Price Filter */}
                  <h1 className="text-2xl font font-semibold text-gray-800 mt-8">Filter by Price</h1>
                  <div className='mt-2'>
                        <input
                              type="range"
                              min={minPrice}
                              max={maxPrice}
                              value={selectedPrice}
                              onChange={(e) => setSelectedPrice(Number(e.target.value))}
                              className="w-[280px] accent-[#23b792]"
                        />
                        <p className="text-gray-700 uppercase text-sm flex items-center gap-20">
                              Selected Price: <span className="font-medium text-[#23b792]">$  {selectedPrice}</span>
                        </p>
                  </div>
            </div>
      );
};

export default CourseFilter;
