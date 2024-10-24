import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * Composant affichant le filtre
 * @param {array} categories liste des categories avec leur id et leur nom
 * @param {func} onChange méthode à executer à chaque changement
 * @returns JSX.element
 */
function Filter({ categories, onChange }) {
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);
    const newCategories = [{ id: 0, name: 'Tous' }, ...categories];

    const handleClick = (categoryId) => {
        // Modifie la catégorie active pour appliquer les bonnes classes CSS
        setSelectedCategoryId(categoryId);
        // Informe le parent du changement
        onChange(categoryId);
    };
    return (
        <div className="filter">
            {newCategories.map((category) => (
                <button
                    key={`category-${category.id}`}
                    className={`filter__button ${
                        category.id === selectedCategoryId
                            ? 'filter__button--active'
                            : ''
                    }`}
                    onClick={() => handleClick(category.id)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}

Filter.propTypes = {
    categories: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;