import { useState } from 'react';
import { X } from 'lucide-react';

const AddClassModal = ({ isOpen, onClose, onAdd }) => {
  const [className, setClassName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name: className, students: [], progress: 0 });
    setClassName('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <h3 className="text-xl font-semibold mb-4">Nouvelle Classe</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nom de la classe</label>
            <input
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full p-2 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Créer la classe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClassModal;
