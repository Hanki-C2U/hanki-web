import { useState, useRef, useEffect } from 'react';
import { Clock, Search, Check } from 'lucide-react';
import { timezones } from '../../utils/timezones';
import type { Timezone } from '../../utils/timezones';

interface TimezoneDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TimezoneDropdown({ value, onChange }: TimezoneDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTimezones, setFilteredTimezones] = useState(timezones);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle outside clicks to close the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter timezones based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredTimezones(timezones);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = timezones.filter(
        (tz) =>
          tz.label.toLowerCase().includes(query) ||
          tz.offset.toLowerCase().includes(query) ||
          tz.value.toLowerCase().includes(query)
      );
      setFilteredTimezones(filtered);
    }
  }, [searchQuery]);

  // Find the currently selected timezone
  const selectedTimezone = timezones.find(tz => tz.value === value) || timezones[0];

  // Handle timezone selection
  const handleSelect = (timezone: Timezone) => {
    onChange(timezone.value);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-left"
      >
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span>{selectedTimezone.label} </span>
          <span className="text-gray-500 text-sm">({selectedTimezone.offset})</span>
        </div>
        <svg
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-80 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <div className="sticky top-0 bg-white p-2 border-b">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                placeholder="Search timezones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-1">
            {filteredTimezones.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-500">
                No timezones found.
              </div>
            ) : (
              filteredTimezones.map((timezone) => (
                <button
                  key={timezone.value}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center justify-between ${timezone.value === value ? 'bg-gray-50 text-emerald-600' : ''}`}
                  onClick={() => handleSelect(timezone)}
                >
                  <div>
                    <span>{timezone.label} </span>
                    <span className="text-gray-500">({timezone.offset})</span>
                  </div>
                  {timezone.value === value && <Check className="h-4 w-4 text-emerald-600" />}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
